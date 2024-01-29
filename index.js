var i = 0;
var images = [];
var time = 2000;

images[0] = 'https://media.licdn.com/dms/image/D5622AQGsU74bFem5HQ/feedshare-shrink_1280/0/1706491883651?e=1709164800&v=beta&t=kPy9jS_PQ0rLRlTVRdfu-GDcF9jnA-d_8OnSzyaBGLU';
images[1] = 'https://media.licdn.com/dms/image/D5622AQH71M6pzOJ8SQ/feedshare-shrink_800/0/1706491730551?e=1709164800&v=beta&t=9pG45vBOYL6t7dWr4LqEANB2B3H-pHLWe9kv6LuSVpI';
// images[2] = 'image2.jpg';
// images[3] = 'image3.jpg';



function changeImage(){
   document.slideImage.src = images[i];
    if(i < images.length-1){
        i++;
    }
    else{
        i = 0;
    }

    setTimeout("changeImage()",time);
}

window.onload = changeImage;




let Spacious = () => {
    document.slideImage2.src = "https://media.licdn.com/dms/image/D5622AQH71M6pzOJ8SQ/feedshare-shrink_800/0/1706491730551?e=1709164800&v=beta&t=9pG45vBOYL6t7dWr4LqEANB2B3H-pHLWe9kv6LuSVpI";
}
let Comfortable = () => {
    document.slideImage2.src = "https://media.licdn.com/dms/image/D5622AQGsU74bFem5HQ/feedshare-shrink_1280/0/1706491883651?e=1709164800&v=beta&t=kPy9jS_PQ0rLRlTVRdfu-GDcF9jnA-d_8OnSzyaBGLU";
}
let Cozy = () => {
    document.slideImage2.src = "https://media.licdn.com/dms/image/D5622AQH71M6pzOJ8SQ/feedshare-shrink_800/0/1706491730551?e=1709164800&v=beta&t=9pG45vBOYL6t7dWr4LqEANB2B3H-pHLWe9kv6LuSVpI";
}
let Child = () => {
    document.slideImage2.src = "https://www.miracle-recreation.com/content/uploads/2018/08/MREC_2018_IA_AhrensPk_0361.jpg";
}
let Outdoor = () => {
    document.slideImage2.src = "https://www.home-designing.com/wp-content/uploads/2015/08/globular-light-fixtures.jpeg";
}

const showOptions = () => {
   let getUl = document.querySelector('ul');
   getUl.style.display = 'flex';
   console.log("function called...")
}
const hideOptions = () => {
    let getUl = document.querySelector('ul'); 
    getUl.style.display = 'none';
}
//priyanka//

function change2(){
    let fisrt = document.querySelector('.im1');
    fisrt.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROU5pmKQInZ-tbhgD8frm2aOAbSekRfZ4J1ST7rpm4FmI7saTB";

    let second = document.querySelector('.im2');
    second.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYYiyJl1VPUAufDclJkGmkGG6pTmtxiEAJmR3RrDHYvUgJCUty";

    let third = document.querySelector('.im3');
    third.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNT9mkSurmKfWNIu6n5a92j8s2yOa0Zh7tZyY5B95S4jf1ovb";

    let four = document.querySelector(".im4");
    four.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWsOqgi12D5oGcs6TWhLYwturgixfUXfCDZZ-oywbu0DRcxP0e"
}

function change1(){
    let fisrt = document.querySelector('.im1');
    fisrt.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYYiyJl1VPUAufDclJkGmkGG6pTmtxiEAJmR3RrDHYvUgJCUty";
    let second = document.querySelector('.im2');
    second.src = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROU5pmKQInZ-tbhgD8frm2aOAbSekRfZ4J1ST7rpm4FmI7saTB";

    let third = document.querySelector('.im3');
    third.src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRWsOqgi12D5oGcs6TWhLYwturgixfUXfCDZZ-oywbu0DRcxP0e";

    let four = document.querySelector('.im4');
    four.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNT9mkSurmKfWNIu6n5a92j8s2yOa0Zh7tZyY5B95S4jf1ovb"
}



