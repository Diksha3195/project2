

const slides = document.querySelectorAll(".slide");
let counter = 0;
// console.log(slides)

slides.forEach( 
    (slide,index) =>{
        slide.style.left = `${index*100}%`
        
    }
)
const goPrev = ()  => {
    counter--;
    slideImage();
}
const goNext = ()=> {
    counter++;
    slideImage();
}
const slideImage =()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform =`translateX(-${counter*100}%)`
        }
    )
}
   
const bgimgs = document.querySelectorAll(".bgimg");
let cnt = 0;

bgimgs.forEach(
    (bgimg,index) =>{
        
        bgimg.style.left =`${index*35}%`
    }
)
const goP = ()  => {
    cnt--;
    backgroundImg();
}
const goN = ()=> {
    cnt++;
    backgroundImg();
}
const backgroundImg=()=>{
    bgimgs.forEach(
        (bgimg)=>{
            bgimg.style.transform =`translateX(-${cnt*100}%)`
        }
    )
}


