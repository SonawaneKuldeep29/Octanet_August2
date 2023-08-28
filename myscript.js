
var links = document.getElementsByClassName('nav-links')[0];
links.addEventListener('mouseover',()=>{document.getElementsByClassName('navbar')[0].style.width='500px'});
links.addEventListener('mouseleave',()=>{document.getElementsByClassName('navbar')[0].style.width='100px'});

var cardsContainers = document.querySelectorAll('.card-container');
var images1 = "";
   for(let i=0; i<8;i++)
   {
      images1 = images1 + `<div class="card">
    <img src="images1/poster ${i+1}.png" class="card-img" alt="">
    </div>`;
   }
   
   cardsContainers[0].innerHTML=images1;

var images = "";

  for(let i=0; i<12;i++)
      {
         images = images + `<div class="card">
       <img src="images/poster ${i+1}.png" class="card-img" alt="">
       <div class="card-body">
       <h2 class="name">movie name</h2>
       <h6 class="des">Movie Description</h6>
       <button class="watchlist-btn">add to watchlist</button>
   </div>
       </div>`;
      }
      
      cardsContainers[3].innerHTML=images;

      

for(let j=1; j<3;j++){
    var images = "";
for(let i=0; i<12;i++)
    {
       images = images + `<div class="card">
     <img src="images${j+1}/poster ${i+1}.png" class="card-img" alt="">
     <div class="card-body">
     <h2 class="name">movie name</h2>
     <h6 class="des">Movie Description</h6>
     <button class="watchlist-btn">add to watchlist</button>
      </div>
     </div>
     `;
    }
    
    cardsContainers[j].innerHTML=images;

}


for(let j=4; j<9;j++){
    var images = "";
for(let i=0; i<12;i++)
    {
       images = images + `<div class="card">
     <img src="images${j}/poster ${i+1}.png" class="card-img" alt="">
     <div class="card-body">
     <h2 class="name">movie name</h2>
     <h6 class="des">Movie Description</h6>
     <button class="watchlist-btn">add to watchlist</button>
 </div>
     </div>
     `;
    }
    
    cardsContainers[j].innerHTML=images;

}



    
var videoback = document.getElementsByClassName('video-background');
var vidover= document.getElementsByClassName('video-name')[0];
let video = videoback[0].querySelector('video');
let vidcont = document.querySelectorAll('.vidcontainer')[0];
video.addEventListener('mouseover', () => {
    video.play();
})
vidover.addEventListener('mouseover', () => {
     video.play();
})
vidcont.addEventListener('mouseover', () => {
    video.pause();
})
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})