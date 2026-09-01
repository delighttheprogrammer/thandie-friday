const heartsContainer = document.querySelector(".hearts");


if (heartsContainer) {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";


        heart.style.left =

        Math.random() * 100 + "vw";


        heart.style.fontSize =

        Math.random() * 25 + 15 + "px";


        heart.style.animationDuration =

        Math.random() * 5 + 5 + "s";


        heartsContainer.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        },10000);


    },700);

}



const noButton =

document.getElementById("noButton");


const buttonArea =

document.getElementById("buttonArea");


if(noButton && buttonArea){

    function moveButton(){

        const maxX =

        buttonArea.clientWidth -

        noButton.offsetWidth;


        const maxY =

        buttonArea.clientHeight -

        noButton.offsetHeight;


        const randomX =

        Math.random() * maxX;


        const randomY =

        Math.random() * maxY;


        noButton.style.left =

        randomX + "px";


        noButton.style.top =

        randomY + "px";


        noButton.style.right =

        "auto";

    }


    noButton.addEventListener(

        "mouseenter",

        moveButton

    );


    noButton.addEventListener(

        "click",

        function(e){

            e.preventDefault();

            moveButton();

        }

    );


    noButton.addEventListener(

        "touchstart",

        function(e){

            e.preventDefault();

            moveButton();

        }

    );

}
