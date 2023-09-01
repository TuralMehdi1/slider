

const carousel = document.querySelector(".carousel");

let isDragstart=false ,prevPageX, prevScrollLeft;
const dragstart =()=>{
    isDragstart =true;
    prevPageX=e.pageX;
    prevScrollLeft=carousel.scrollLeft;
}

const dragging=(e)=> {
    if(isDragstart) return;
    e.preventDefault();
   carousel.scrollLeft=e.pageX;
}

const dragStop=()=>{
    isDragstart=false;
}

carousel.addEventListener("mousedown",dragstart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseuo",dragStop);