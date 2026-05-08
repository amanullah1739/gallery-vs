const imageArray = [

    "/static/images/IMG_0415.jpg",
    
    
    
    "/static/images/IMG_5098.jpg",
    
    "/static/images/1.jpg",
    "/static/images/2.jpg",
    "/static/images/3.jpg",
    "/static/images/4.jpg",
    "/static/images/5.jpg"
    

    
];

const carousel =
document.querySelector(".carousel");

let current = 0;

function createCards(){

    carousel.innerHTML = "";

    imageArray.forEach((image,index)=>{

        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML =
        `
        <img src="${image}">
        `;

        carousel.appendChild(card);
    });

    updateCarousel();
}

function updateCarousel(){

    const cards =
    document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        let offset =
        (index - current + cards.length)
        % cards.length;

        if(offset > cards.length / 2){
            offset -= cards.length;
        }

        let absOffset =
        Math.abs(offset);

        let x;

        if(window.innerWidth < 900){

           x = offset * 140;

        }else{

        x = offset * 420;
        }

        let scale =
        1 - absOffset * 0.2;

        let rotateY =
        offset * -25;

        let opacity =
        1 - absOffset * 0.25;

        let zIndex =
        100 - absOffset;

        card.style.transform =
        `
        translate(-50%, -50%)
        translateX(${x}px)
        scale(${scale})
        rotateY(${rotateY}deg)
        `;

        card.style.opacity =
        opacity;

        card.style.zIndex =
        zIndex;
    });
}

document
.querySelector(".right-arrow")
.addEventListener("click",()=>{

    current++;

    if(current >= imageArray.length){
        current = 0;
    }

    updateCarousel();
});

document
.querySelector(".left-arrow")
.addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = imageArray.length - 1;
    }

    updateCarousel();
});

createCards();