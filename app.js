
// ==========================================
// YOUTUBE CLONE - LIVE YOUTUBE SEARCH
// ==========================================

// Paste your Google API key here:
const API_KEY = "AIzaSyCKR6qZ22gUZTnNoJM9JBcx3Tpcpr_B1Oc";

let currentCategory = "all";
let searchQuery = "";
let currentVideoId = null;
let nextPageToken = null;
let videoLibrary = {};

let likedVideos = JSON.parse(localStorage.getItem("liked") || "[]");
let watchLater = JSON.parse(localStorage.getItem("watchLater") || "[]");
let history = JSON.parse(localStorage.getItem("history") || "[]");

const videoGrid = document.getElementById("video-grid");
const noResults = document.getElementById("no-results");
const playerOverlay = document.getElementById("player-overlay");
const ytIframe = document.getElementById("yt-iframe");

const playerTitle = document.getElementById("player-title");
const playerChannel = document.getElementById("player-channel");
const playerViews = document.getElementById("player-views");
const playerDesc = document.getElementById("player-description");

const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");
const saveBtn = document.getElementById("save-btn");
const shareBtn = document.getElementById("share-btn");

const closePlayerBtn = document.getElementById("close-player");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");
const toast = document.getElementById("toast");

const chips = document.querySelectorAll(".chip");
const navItems = document.querySelectorAll(".nav-item[data-filter]");

// ------------------------------------------
// HELPERS
// ------------------------------------------

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => toast.classList.remove("show"), 2500);
}

function saveState() {
    localStorage.setItem("liked", JSON.stringify(likedVideos));
    localStorage.setItem("watchLater", JSON.stringify(watchLater));
    localStorage.setItem("history", JSON.stringify(history));
}

function formatViews(number) {
    if (!number) return "Views unavailable";

    return Number(number).toLocaleString() + " views";
}

function formatDuration(iso) {
    const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);

    if (!match) return "0:00";

    const hours = Number(match[1] || 0);
    const minutes = Number(match[2] || 0);
    const seconds = Number(match[3] || 0);

    if (hours) {
        return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatDate(date) {
    if (!date) return "";

    const days = Math.floor(
        (Date.now() - new Date(date).getTime()) / 86400000
    );

    if (days < 1) return "Today";
    if (days < 30) return `${days} days ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;

    return `${Math.floor(days / 365)} years ago`;
}

// ------------------------------------------
// YOUTUBE SEARCH
// ------------------------------------------

async function searchYouTube(query, pageToken = "") {

    if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE") {
        showToast("Please add your YouTube API key!");
        return;
    }

    if (!query.trim()) {
        showToast("Enter something to search!");
        return;
    }

    searchQuery = query;
    videoGrid.innerHTML = `
        <div style="padding:40px;text-align:center;">
            <i class="fa-solid fa-spinner fa-spin"></i>
            <p>Searching YouTube...</p>
        </div>
    `;

    noResults.style.display = "none";

    const categoryIds = {
        music: "10",
        gaming: "20",
        news: "25",
        sports: "17",
        cooking: "26",
        travel: "19"
    };

    const params = new URLSearchParams({
        part: "snippet",
        q: query,
        type: "video",
        maxResults: "24",
        regionCode: "US",
        safeSearch: "moderate",
        videoEmbeddable: "true",
        key: API_KEY
    });

    if (categoryIds[currentCategory]) {
        params.set("videoCategoryId", categoryIds[currentCategory]);
    }

    if (pageToken) {
        params.set("pageToken", pageToken);
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?${params}`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error?.message || "YouTube search failed."
            );
        }

        nextPageToken = data.nextPageToken || null;

        const ids = data.items
            .map(item => item.id.videoId)
            .filter(Boolean);

        if (!ids.length) {
            videoGrid.innerHTML = "";
            noResults.style.display = "block";
            noResults.querySelector("p").textContent = "No videos found.";
            return;
        }

        // Get real video statistics and durations.
        const detailsParams = new URLSearchParams({
            part: "snippet,statistics,contentDetails",
            id: ids.join(","),
            key: API_KEY
        });

        const detailsResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?${detailsParams}`
        );

        const details = await detailsResponse.json();

        if (!detailsResponse.ok) {
            throw new Error(
                details.error?.message || "Could not load video details."
            );
        }

        const videos = details.items.map(video => ({
            id: video.id,
            title: video.snippet.title,
            channel: video.snippet.channelTitle,
            avatar: "#3498db",
            views: formatViews(video.statistics.viewCount),
            time: formatDate(video.snippet.publishedAt),
            duration: formatDuration(video.contentDetails.duration),
            description: video.snippet.description,
            thumbnail:
                video.snippet.thumbnails.high?.url ||
                video.snippet.thumbnails.medium?.url,
            category: currentCategory
        }));

        videos.forEach(video => {
            videoLibrary[video.id] = video;
        });

        if (pageToken) {
            renderVideos(videos, true);
        } else {
            renderVideos(videos);
        }

    } catch (error) {
        console.error(error);

        videoGrid.innerHTML = "";
        noResults.style.display = "block";
        noResults.querySelector("p").textContent = error.message;

        showToast("YouTube search error");
    }
}

// ------------------------------------------
// DISPLAY RESULTS
// ------------------------------------------

function renderVideos(videos, append = false) {

    if (!append) {
        videoGrid.innerHTML = "";
    }

    noResults.style.display = "none";

    if (!videos.length && !append) {
        noResults.style.display = "block";
        return;
    }

    videos.forEach(video => {

        const card = document.createElement("div");
        card.className = "video-card";

        const thumbnailWrap = document.createElement("div");
        thumbnailWrap.className = "thumbnail-wrap";

        const img = document.createElement("img");
        img.src = video.thumbnail;
        img.alt = video.title;
        img.loading = "lazy";

        const duration = document.createElement("div");
        duration.className = "duration";
        duration.textContent = video.duration;

        const info = document.createElement("div");
        info.className = "card-info";

        const avatar = document.createElement("div");
        avatar.className = "channel-avatar";
        avatar.style.background = video.avatar;
        avatar.textContent = video.channel.charAt(0).toUpperCase();

        const text = document.createElement("div");
        text.className = "card-text";

        const title = document.createElement("div");
        title.className = "card-title";
        title.textContent = video.title;

        const channel = document.createElement("div");
        channel.className = "card-channel";
        channel.textContent = video.channel;

        const meta = document.createElement("div");
        meta.className = "card-meta";
        meta.textContent = `${video.views} • ${video.time}`;

        thumbnailWrap.append(img, duration);
        text.append(title, channel, meta);
        info.append(avatar, text);
        card.append(thumbnailWrap, info);

        card.addEventListener("click", () => openPlayer(video));

        videoGrid.appendChild(card);
    });
}

// ------------------------------------------
// PLAYER
// ------------------------------------------

function openPlayer(video) {

    currentVideoId = video.id;

    ytIframe.src =
    `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`;

    playerTitle.textContent = video.title;
    playerChannel.textContent = video.channel;
    playerViews.textContent = `${video.views} • ${video.time}`;
    playerDesc.textContent = video.description;

    const liked = likedVideos.includes(video.id);

    likeBtn.classList.toggle("active", liked);
    likeCount.textContent = liked ? "1" : "0";

    const saved = watchLater.includes(video.id);

    saveBtn.classList.toggle("active", saved);

    saveBtn.innerHTML =
        `<i class="fa-solid fa-bookmark"></i> ${saved ? "Saved" : "Save"}`;

    history = [
        video.id,
        ...history.filter(id => id !== video.id)
    ].slice(0, 50);

    saveState();

    playerOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closePlayer() {
    ytIframe.src = "";
    playerOverlay.style.display = "none";
    document.body.style.overflow = "";
    currentVideoId = null;
}

closePlayerBtn.addEventListener("click", closePlayer);

playerOverlay.addEventListener("click", e => {
    if (e.target === playerOverlay) closePlayer();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closePlayer();
});

// ------------------------------------------
// LIKES
// ------------------------------------------

likeBtn.addEventListener("click", () => {

    if (!currentVideoId) return;

    if (likedVideos.includes(currentVideoId)) {

        likedVideos = likedVideos.filter(
            id => id !== currentVideoId
        );

        likeBtn.classList.remove("active");
        likeCount.textContent = "0";

        showToast("Removed from liked videos");

    } else {

        likedVideos.push(currentVideoId);

        likeBtn.classList.add("active");
        likeCount.textContent = "1";

        showToast("Added to liked videos");
    }

    saveState();
});

// ------------------------------------------
// WATCH LATER
// ------------------------------------------

saveBtn.addEventListener("click", () => {

    if (!currentVideoId) return;

    if (watchLater.includes(currentVideoId)) {

        watchLater = watchLater.filter(
            id => id !== currentVideoId
        );

        showToast("Removed from Watch Later");

    } else {

        watchLater.push(currentVideoId);

        showToast("Saved to Watch Later");
    }

    saveBtn.classList.toggle(
        "active",
        watchLater.includes(currentVideoId)
    );

    saveBtn.innerHTML =
        `<i class="fa-solid fa-bookmark"></i> ${
            watchLater.includes(currentVideoId) ? "Saved" : "Save"
        }`;

    saveState();
});

// ------------------------------------------
// SHARE
// ------------------------------------------

shareBtn.addEventListener("click", () => {

    if (!currentVideoId) return;

    const url = `https://www.youtube.com/watch?v=${currentVideoId}`;

    if (navigator.clipboard) {
        navigator.clipboard.writeText(url)
            .then(() => showToast("Link copied!"))
            .catch(() => showToast(url));
    } else {
        showToast(url);
    }
});

// ------------------------------------------
// SEARCH FORM
// ------------------------------------------

searchForm.addEventListener("submit", e => {

    e.preventDefault();

    const query = searchInput.value.trim();

    if (!query) return;

    currentCategory = "all";

    chips.forEach(chip => {
        chip.classList.toggle(
            "active",
            chip.dataset.category === "all"
        );
    });

    navItems.forEach(item => item.classList.remove("active"));

    document.querySelector(
        '.nav-item[data-filter="all"]'
    )?.classList.add("active");

    searchYouTube(query);
});

// ------------------------------------------
// CATEGORY CHIPS
// ------------------------------------------

chips.forEach(chip => {

    chip.addEventListener("click", () => {

        chips.forEach(c => c.classList.remove("active"));

        chip.classList.add("active");

        currentCategory = chip.dataset.category;

        searchInput.value = "";

        const categorySearch = {
            all: "popular videos",
            music: "popular music",
            gaming: "gaming",
            news: "latest news",
            tech: "technology",
            sports: "sports",
            cooking: "cooking",
            travel: "travel"
        };

        searchYouTube(categorySearch[currentCategory]);
    });
});

// ------------------------------------------
// SIDEBAR
// ------------------------------------------

navItems.forEach(item => {

    item.addEventListener("click", e => {

        e.preventDefault();

        navItems.forEach(n => n.classList.remove("active"));

        item.classList.add("active");

        currentCategory = item.dataset.filter;

        searchInput.value = "";

        chips.forEach(c => c.classList.remove("active"));

        if (currentCategory === "history") {
            displaySavedVideos(history);
        } else if (currentCategory === "liked") {
            displaySavedVideos(likedVideos);
        } else if (currentCategory === "watchlater") {
            displaySavedVideos(watchLater);
        } else {
            searchYouTube(
                currentCategory === "shorts"
                    ? "YouTube Shorts"
                    : "popular videos"
            );
        }

        if (window.innerWidth <= 900) {
            sidebar.classList.remove("open");
        }
    });
});

// ------------------------------------------
// SAVED VIDEO LISTS
// ------------------------------------------

function displaySavedVideos(ids) {

    const videos = ids
        .map(id => videoLibrary[id])
        .filter(Boolean);

    renderVideos(videos);
}

// ------------------------------------------
// MENU
// ------------------------------------------

menuBtn.addEventListener("click", () => {

    if (window.innerWidth > 900) {

        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("expanded");

    } else {

        sidebar.classList.toggle("open");
    }
});

// ------------------------------------------
// INITIAL SCREEN
// ------------------------------------------

videoGrid.innerHTML = `
    <div style="text-align:center;padding:60px 20px;">
        <i class="fa-brands fa-youtube"
           style="font-size:55px;color:#ff0000;"></i>
        <h2>Search YouTube</h2>
        <p>Search for any video using the search bar above.</p>
    </div>
`;

noResults.style.display = "none";
