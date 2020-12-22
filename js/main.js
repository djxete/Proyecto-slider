//alert("probando");

// ============= VARIABLES ===================
const slides= document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");


//Añadimos la propiedad left a cada slide

slides.forEach((slide,index) => {

    slide.style.left = `${index * 100}%`;
    
})


let counter = 0;


nextBtn.addEventListener("click", ()=>{
    counter++;
    pasarSlide();
});

prevBtn.addEventListener("click", ()=>{
    counter--;
    pasarSlide();

});




function pasarSlide(){

    // trabajando con los botones

    if(counter < slides.length - 1){
        nextBtn.style.display = "block";
    } 

    if(counter === slides.length - 1){
        nextBtn.style.display = "none";
    }

    if(counter > 0){
        prevBtn.style.display = "block";
    }
    else {
        prevBtn.style.display = "none";
    }

    slides.forEach(slide =>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}


prevBtn.style.display = "none";


