const VIDEOS=[
  {id:'dQw4w9WgXcQ',title:'Rick Astley - Never Gonna Give You Up (Official Video)',channel:'Rick Astley',avatar:'#e74c3c',views:'1.4B views',time:'15 years ago',duration:'3:33',category:'music',description:'The official video for "Never Gonna Give You Up" by Rick Astley.',thumbnail:'https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg'},
  {id:'jNQXAC9IVRw',title:'Me at the zoo - First YouTube Video Ever',channel:'jawed',avatar:'#3498db',views:'280M views',time:'19 years ago',duration:'0:19',category:'all',description:'The first video on YouTube, uploaded on April 23, 2005.',thumbnail:'https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg'},
  {id:'kJQP7kiw5Fk',title:'Luis Fonsi - Despacito ft. Daddy Yankee',channel:'Luis Fonsi',avatar:'#f39c12',views:'8.3B views',time:'7 years ago',duration:'4:42',category:'music',description:'Official video of Despacito by Luis Fonsi ft. Daddy Yankee.',thumbnail:'https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg'},
  {id:'9bZkp7q19f0',title:'PSY - GANGNAM STYLE M/V',channel:'officialpsy',avatar:'#9b59b6',views:'5.1B views',time:'12 years ago',duration:'4:13',category:'music',description:'PSY - GANGNAM STYLE M/V',thumbnail:'https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg'},
  {id:'fJ9rUzIMcZQ',title:'Queen - Bohemian Rhapsody (Official Video Remastered)',channel:'Queen Official',avatar:'#e67e22',views:'1.8B views',time:'8 years ago',duration:'5:55',category:'music',description:'The official remastered video for Bohemian Rhapsody by Queen.',thumbnail:'https://img.youtube.com/vi/fJ9rUzIMcZQ/hqdefault.jpg'},
  {id:'RgKAFK5djSk',title:'Wiz Khalifa - See You Again ft. Charlie Puth',channel:'Wiz Khalifa',avatar:'#1abc9c',views:'6.1B views',time:'9 years ago',duration:'3:50',category:'music',description:'Official video for See You Again by Wiz Khalifa ft. Charlie Puth.',thumbnail:'https://img.youtube.com/vi/RgKAFK5djSk/hqdefault.jpg'},
  {id:'JGwWNGJdvx8',title:'Ed Sheeran - Shape of You (Official Music Video)',channel:'Ed Sheeran',avatar:'#e74c3c',views:'6.0B views',time:'7 years ago',duration:'4:24',category:'music',description:'The official music video for Ed Sheeran - Shape of You.',thumbnail:'https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg'},
  {id:'CevxZvSJLk8',title:'Katy Perry - Roar (Official)',channel:'Katy Perry',avatar:'#3498db',views:'3.8B views',time:'11 years ago',duration:'4:33',category:'music',description:'Katy Perry - Roar (Official Music Video).',thumbnail:'https://img.youtube.com/vi/CevxZvSJLk8/hqdefault.jpg'},
  {id:'hT_nvWreIhg',title:'Counting Stars - OneRepublic',channel:'OneRepublic',avatar:'#2ecc71',views:'3.5B views',time:'11 years ago',duration:'4:44',category:'music',description:'OneRepublic - Counting Stars (Official Music Video).',thumbnail:'https://img.youtube.com/vi/hT_nvWreIhg/hqdefault.jpg'},
  {id:'OPf0YbXqDm0',title:'Mark Ronson - Uptown Funk ft. Bruno Mars',channel:'Mark Ronson',avatar:'#e74c3c',views:'4.9B views',time:'9 years ago',duration:'4:31',category:'music',description:'Mark Ronson - Uptown Funk ft. Bruno Mars (Official Video).',thumbnail:'https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg'},
  {id:'YQHsXMglC9A',title:'Adele - Hello (Official Music Video)',channel:'Adele',avatar:'#8e44ad',views:'3.4B views',time:'8 years ago',duration:'6:07',category:'music',description:'The official music video for Adele - Hello.',thumbnail:'https://img.youtube.com/vi/YQHsXMglC9A/hqdefault.jpg'},
  {id:'rfscVS0vtbw',title:'Learn Python - Full Course for Beginners',channel:'freeCodeCamp',avatar:'#27ae60',views:'38M views',time:'5 years ago',duration:'4:26:52',category:'tech',description:'A full introduction into all core Python concepts.',thumbnail:'https://img.youtube.com/vi/rfscVS0vtbw/hqdefault.jpg'},
  {id:'lp-EO5I60KA',title:'JavaScript Full Course for Beginners',channel:'CodeWithMe',avatar:'#3498db',views:'4.2M views',time:'1 year ago',duration:'8:45:00',category:'tech',description:'Complete JavaScript course for beginners. Learn JS from scratch!',thumbnail:'https://img.youtube.com/vi/lp-EO5I60KA/hqdefault.jpg'},
  {id:'ysz5S6PUM-U',title:'Minecraft Survival - Episode 1',channel:'GamerPro',avatar:'#e67e22',views:'12M views',time:'2 years ago',duration:'32:10',category:'gaming',description:'Starting a brand new Minecraft survival world!',thumbnail:'https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg'},
  {id:'pBy1zgt0XPc',title:'World News Today - Breaking Headlines',channel:'NewsChannel',avatar:'#c0392b',views:'890K views',time:'3 hours ago',duration:'18:22',category:'news',description:'Top breaking news stories from around the world.',thumbnail:'https://img.youtube.com/vi/pBy1zgt0XPc/hqdefault.jpg'},
  {id:'ZyhrYis509A',title:'Gordon Ramsay Perfect Scrambled Eggs',channel:'Gordon Ramsay',avatar:'#e74c3c',views:'45M views',time:'10 years ago',duration:'3:11',category:'cooking',description:'Gordon Ramsay shows you how to make perfect scrambled eggs.',thumbnail:'https://img.youtube.com/vi/ZyhrYis509A/hqdefault.jpg'},
  {id:'tntOCGkgt98',title:'Top 10 Places to Visit in Japan',channel:'TravelWorld',avatar:'#16a085',views:'7.3M views',time:'3 years ago',duration:'14:55',category:'travel',description:'Discover the most beautiful must-visit places in Japan.',thumbnail:'https://img.youtube.com/vi/tntOCGkgt98/hqdefault.jpg'},
  {id:'Ks-_Mh1QhMc',title:'Cristiano Ronaldo - Top 100 Goals of All Time',channel:'FootballHub',avatar:'#2980b9',views:'55M views',time:'4 years ago',duration:'22:30',category:'sports',description:'The 100 greatest goals ever scored by Cristiano Ronaldo.',thumbnail:'https://img.youtube.com/vi/Ks-_Mh1QhMc/hqdefault.jpg'}
];

let currentCategory='all',searchQuery='';
let likedVideos=JSON.parse(localStorage.getItem('liked')||'[]');
let watchLater=JSON.parse(localStorage.getItem('watchLater')||'[]');
let history=JSON.parse(localStorage.getItem('history')||'[]');
let currentVideoId=null;

const videoGrid=document.getElementById('video-grid');
const noResults=document.getElementById('no-results');
const playerOverlay=document.getElementById('player-overlay');
const ytIframe=document.getElementById('yt-iframe');
const playerTitle=document.getElementById('player-title');
const playerChannel=document.getElementById('player-channel');
const playerViews=document.getElementById('player-views');
const playerDesc=document.getElementById('player-description');
const likeBtn=document.getElementById('like-btn');
const likeCount=document.getElementById('like-count');
const saveBtn=document.getElementById('save-btn');
const shareBtn=document.getElementById('share-btn');
const closePlayerBtn=document.getElementById('close-player');
const searchForm=document.getElementById('search-form');
const searchInput=document.getElementById('search-input');
const menuBtn=document.getElementById('menu-btn');
const sidebar=document.getElementById('sidebar');
const mainContent=document.getElementById('main-content');
const toast=document.getElementById('toast');
const chips=document.querySelectorAll('.chip');
const navItems=document.querySelectorAll('.nav-item[data-filter]');

function showToast(msg){
  toast.textContent=msg;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2500);
}

function saveState(){
  localStorage.setItem('liked',JSON.stringify(likedVideos));
  localStorage.setItem('watchLater',JSON.stringify(watchLater));
  localStorage.setItem('history',JSON.stringify(history));
}

function parseDuration(d){
  const p=d.split(':').map(Number);
  return p.length===3?p[0]*3600+p[1]*60+p[2]:p[0]*60+p[1];
}

function getFiltered(){
  let list=VIDEOS;
  if(currentCategory==='liked') return VIDEOS.filter(v=>likedVideos.includes(v.id));
  if(currentCategory==='watchlater') return VIDEOS.filter(v=>watchLater.includes(v.id));
  if(currentCategory==='history') return VIDEOS.filter(v=>history.includes(v.id));
  if(currentCategory==='shorts') list=VIDEOS.filter(v=>parseDuration(v.duration)<=60);
  else if(currentCategory!=='all'&&currentCategory!=='subscriptions') list=VIDEOS.filter(v=>v.category===currentCategory);
  if(searchQuery){const q=searchQuery.toLowerCase();list=list.filter(v=>v.title.toLowerCase().includes(q)||v.channel.toLowerCase().includes(q)||v.category.toLowerCase().includes(q));}
  return list;
}

function renderVideos(){
  const list=getFiltered();
  videoGrid.innerHTML='';
  noResults.style.display=list.length===0?'block':'none';
  list.forEach(v=>{
    const card=document.createElement('div');
    card.className='video-card';
    card.innerHTML=`<div class="thumbnail-wrap"><img src="${v.thumbnail}" alt="${v.title}" loading="lazy" onerror="this.src='https://placehold.co/480x270/1a1a1a/555?text=Video'"/><div class="duration">${v.duration}</div><div class="hover-play"><i class="fa-solid fa-circle-play"></i></div></div><div class="card-info"><div class="channel-avatar" style="background:${v.avatar}">${v.channel[0]}</div><div class="card-text"><div class="card-title">${v.title}</div><div class="card-channel">${v.channel}</div><div class="card-meta">${v.views} &bull; ${v.time}</div></div></div>`;
    card.addEventListener('click',()=>openPlayer(v));
    videoGrid.appendChild(card);
  });
}

function openPlayer(video){
  currentVideoId=video.id;
  ytIframe.src=`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
  playerTitle.textContent=video.title;
  playerChannel.textContent=video.channel;
  playerViews.textContent=video.views+' • '+video.time;
  playerDesc.textContent=video.description;
  const liked=likedVideos.includes(video.id);
  likeBtn.classList.toggle('active',liked);
  likeCount.textContent=liked?'1':'0';
  const saved=watchLater.includes(video.id);
  saveBtn.classList.toggle('active',saved);
  saveBtn.innerHTML=`<i class="fa-solid fa-bookmark"></i> ${saved?'Saved':'Save'}`;
  history=[video.id,...history.filter(id=>id!==video.id)].slice(0,50);
  saveState();
  playerOverlay.style.display='flex';
  document.body.style.overflow='hidden';
}

function closePlayer(){
  ytIframe.src='';
  playerOverlay.style.display='none';
  document.body.style.overflow='';
  currentVideoId=null;
}

closePlayerBtn.addEventListener('click',closePlayer);
playerOverlay.addEventListener('click',e=>{if(e.target===playerOverlay)closePlayer();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closePlayer();});

likeBtn.addEventListener('click',()=>{
  if(!currentVideoId)return;
  if(likedVideos.includes(currentVideoId)){likedVideos=likedVideos.filter(id=>id!==currentVideoId);likeBtn.classList.remove('active');likeCount.textContent='0';showToast('Removed from liked videos');}
  else{likedVideos.push(currentVideoId);likeBtn.classList.add('active');likeCount.textContent='1';showToast('Added to liked videos');}
  saveState();
});

saveBtn.addEventListener('click',()=>{
  if(!currentVideoId)return;
  if(watchLater.includes(currentVideoId)){watchLater=watchLater.filter(id=>id!==currentVideoId);saveBtn.classList.remove('active');saveBtn.innerHTML='<i class="fa-solid fa-bookmark"></i> Save';showToast('Removed from Watch Later');}
  else{watchLater.push(currentVideoId);saveBtn.classList.add('active');saveBtn.innerHTML='<i class="fa-solid fa-bookmark"></i> Saved';showToast('Saved to Watch Later');}
  saveState();
});

shareBtn.addEventListener('click',()=>{
  if(!currentVideoId)return;
  const url=`https://www.youtube.com/watch?v=${currentVideoId}`;
  if(navigator.clipboard){navigator.clipboard.writeText(url).then(()=>showToast('Link copied to clipboard!'));}
  else showToast('Share: '+url);
});

searchForm.addEventListener('submit',e=>{
  e.preventDefault();
  searchQuery=searchInput.value.trim();
  currentCategory='all';
  chips.forEach(c=>c.classList.toggle('active',c.dataset.category==='all'));
  navItems.forEach(n=>n.classList.remove('active'));
  document.querySelector('.nav-item[data-filter="all"]').classList.add('active');
  renderVideos();
});

searchInput.addEventListener('input',()=>{
  if(!searchInput.value){searchQuery='';renderVideos();}
});

chips.forEach(chip=>{
  chip.addEventListener('click',()=>{
    chips.forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    currentCategory=chip.dataset.category;
    searchQuery='';searchInput.value='';
    renderVideos();
  });
});

navItems.forEach(item=>{
  item.addEventListener('click',e=>{
    e.preventDefault();
    navItems.forEach(n=>n.classList.remove('active'));
    item.classList.add('active');
    currentCategory=item.dataset.filter;
    searchQuery='';searchInput.value='';
    chips.forEach(c=>c.classList.remove('active'));
    renderVideos();
    if(window.innerWidth<=900)sidebar.classList.remove('open');
  });
});

menuBtn.addEventListener('click',()=>{
  if(window.innerWidth>900){sidebar.classList.toggle('collapsed');mainContent.classList.toggle('expanded');}
  else sidebar.classList.toggle('open');
});

renderVideos();
