let songIndex=0;
let audioElement=new Audio("appSong/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let songBar=document.getElementById('songBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Cold Mess", filePath: "appSong/Cold mess.mp3", coverPath: "songCover/br.jpg"},
    {songName: "Sahara", filePath: "appSong/Sah.mp3", coverPath: "songCover/br.jpg"},
    {songName: "Everything Sucks", filePath: "appSong/Everything-Sucks.mp3", coverPath: "songCover/br.jpg"},
    {songName: "Unstoppable", filePath: "appSong/Unstoppable.mp3", coverPath: "songCover/br.jpg"},
    {songName: "Kesariya", filePath: "appSong/Kesariya.mp3", coverPath: "songCover/br.jpg"},
    {songName: "Baarishen", filePath: "appSong/Baarishien-A.mp3", coverPath: "songCover/br.jpg"},
    {songName: "Somebody To You", filePath: "appSong/sm to u.mp3", coverPath: "songCover/br.jpg"},
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});

masterPlay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
gif.style.opacity=1;
}

else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
masterPlay.classList.add('fa-circle-play');
 
    gif.style.opacity=0;
}

})


audioElement.addEventListener('timeupdate', ()=>{

progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
songBar.value=progress;
});

songBar.addEventListener('change', ()=>{

audioElement.currentTime=songBar.value*audioElement.duration/100;

})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click', (e)=>{
    makeAllPlays();
  songIndex = parseInt(e.target.id);
    
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `appSong/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
})
})

document.getElementById('next').addEventListener('click', ()=>{

if(songIndex>=6){
    songIndex=0;
}
else{
    songIndex+=1;
}
audioElement.src = `appSong/${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');


})

document.getElementById('previous').addEventListener('click', ()=>{

    if(songIndex<=0){
        songIndex=6;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `appSong/${songIndex+1}.mp3`;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    
    
    })