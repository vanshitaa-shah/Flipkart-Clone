
const list=document.getElementsByClassName("products-section");


/*-----------------For product-section-1(list[0])----------------*/

const left_control=document.getElementById("carouselLeft");
const right_control=document.getElementById("carouselRight");
let element = window.getComputedStyle(list[0].children[0]);
let margin = parseFloat(element.marginLeft) + parseFloat(element.marginRight);
const itemWidth=list[0].children[0].offsetWidth + margin;

function show_hide_buttons(){
    let scrollWidth=list[0].scrollWidth-list[0].clientWidth;
    left_control.style.display=list[0].scrollLeft=== 0 ? "none" :"block";
    right_control.style.display=list[0].scrollLeft=== scrollWidth ? "none" : "block";
}

show_hide_buttons();

left_control.addEventListener("click",()=>{
    list[0].scrollTo(list[0].scrollLeft-itemWidth*2,0)
    show_hide_buttons();
})


right_control.addEventListener("click",()=>{
    list[0].scrollTo(list[0].scrollLeft+itemWidth*2,0)
    show_hide_buttons();
})

/*-----------------For product-section-2(list[1])----------------*/

const left_control_1=document.getElementById("carouselLeft1");
const right_control_1=document.getElementById("carouselRight1");

const itemWidth1=list[1].children[1].offsetWidth+40;

function show_hide_buttons_1(){
    let scrollWidth1=list[1].scrollWidth-list[1].clientWidth;
    left_control_1.style.display=list[1].scrollLeft=== 0 ? "none" : "block";
    right_control_1.style.display=list[1].scrollLeft=== scrollWidth1 ? "none" : "block";
}
show_hide_buttons_1();

left_control_1.addEventListener("click",()=>{
    list[1].scrollTo(list[1].scrollLeft-itemWidth1*2,0)
    show_hide_buttons_1();
})

right_control_1.addEventListener("click",()=>{
    list[1].scrollTo(list[1].scrollLeft+itemWidth1*2,0)
    show_hide_buttons_1();
})