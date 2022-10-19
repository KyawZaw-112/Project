const productContainers =[...document.querySelectorAll('.card-container')];
const nextBtn = [document.querySelector('.next-btn')];
const preBtn = [document.querySelector('.pre-btn')];

productContainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// changeText

let changeBtn1 = document.querySelector("#changeText1");
let changeBtn2 = document.querySelector("#changeText2");
let changeBtn3 = document.querySelector("#changeText3");
let output = document.querySelector("#changePara");
let changeBack = document.querySelector("#home");
let phoneNumber = document.querySelector(".get-ph");

changeBtn1.addEventListener('click',()=>{
    changeBtn1.style.backgroundColor = "#0f0";
    changeBtn2.style.backgroundColor = "#000";
    changeBtn3.style.backgroundColor = "#000";
    changeBack.style.backgroundImage = "url(photo/backgroundOne.webp)";
    changeBack.style.backgroundSize = "cover";
    this.reset();
});

changeBtn2.addEventListener('click',()=>{
    changeBtn1.style.backgroundColor = "#000"
    changeBtn2.style.backgroundColor = "#0f0";
    changeBtn3.style.backgroundColor = "#000";
    changeBack.style.backgroundImage = "url(photo/employ2.jpg)";
    changeBack.style.backgroundSize = "100% 100%";
});

changeBtn3.addEventListener('click',()=>{
    changeBtn1.style.backgroundColor = "#000"
    changeBtn2.style.backgroundColor = "#000";
    changeBtn3.style.backgroundColor = "#0f0";
    changeBack.style.backgroundImage = "url(photo/download.png)";
    changeBack.style.backgroundSize = "100% 100%";
});

const tl = gsap.timeline({default: {duration: 0.75,ease: 'power1.out'}});
const button = document.querySelector('#cookieBtn');

tl.fromTo('.cookie-container',{scale: 0},{scale: 1, ease : 'elastic.out(1, 0.4)'});
tl.fromTo('.cookie',{opacity: 0, x : -50, rotation: '-45deg'},{opacity: 1, x : 0,rotation: '0deg'});
tl.fromTo('.text',{x:30, opacity:0},{x:0, opacity:1}, '<');

button.addEventListener('click', () => {
    gsap.to('.cookie-container', {opacity: 0, y: 100,duration:0.75, ease:'power1.out'});
});
