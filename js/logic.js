document.addEventListener("DOMContentLoaded", ()=>{



const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const galleryContainer = document.getElementById('galleryTrack');

//Manage when pre and next button should be disabled or enabled
function manageScrollBtn(){
    if(window.innerWidth <= 768){
        prevBtn.disabled = galleryContainer.scrollLeft <= 0;

        nextBtn.disabled = galleryContainer.scrollLeft + galleryContainer.clientWidth >= galleryContainer.scrollWidth -2;
    } else{
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    }
}

let cardClasses = ['card-1','card-2','card-3','card-4','card-5','card-6','card-7'];

// for(let i=4; i<cardClasses.length; i++){
//     cardClasses.push('card-hidden');
// }

const cards = document.querySelectorAll('.gallery-card');
// function updateGallery(){
//     cards.forEach((card,index)=>{
//         card.className = 'gallery-card ' + cardClasses[index];
//     });
// }

let cardWidth = cards[0].offsetWidth;
let isScrolling = false;
prevBtn.addEventListener('click' , ()=>{
    if((window.innerWidth <= 768) && (!isScrolling)){
        isScrolling = true;
        galleryContainer.scrollBy({
            left : -cardWidth, behavior: 'smooth'
        });
        setTimeout(()=> isScrolling=false,300);
    }
});
nextBtn.addEventListener('click' , () => {
    if(window.innerWidth <= 768){
        galleryContainer.scrollBy({
            left: cardWidth, behavior: 'smooth'
        });
    };
});


galleryContainer.addEventListener('scroll', manageScrollBtn);
            window.addEventListener('resize', manageScrollBtn);

// updateGallery();
manageScrollBtn();


});