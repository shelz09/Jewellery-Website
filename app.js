const button = document.addEventListener('click', () => {
    console.log("hii console")
});
const slides = document.querySelectorAll(".slide");
console.log(slides);
let counter = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left=`${index*100}%`
    }
) 
const  SlideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
const GoPrev = () => {
    if(counter!=0) {
        counter--;
        SlideImage();
    }
}
const GoNext = () => {
    if(counter < slides.length - 1) {
        counter++;
        SlideImage();
    }
}
