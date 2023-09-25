let dropdown = document.querySelector(".drop-down-box-telet-box");
let telentBtn = document.querySelector(".telent-box");
let telentIcon = document.querySelector(".icon-box-telent-box")
let on = 0;
let mainHtml = document.querySelector("main");

// let headerHtml = document.querySelector("header")

telentBtn.addEventListener("click", function () {
    if (on == 0) {
        telentBtn.style.backgroundColor = "white"
        telentBtn.style.border = "3px solid  #13544e"
        dropdown.style.display = "block"
        telentIcon.style.transform="Rotate(180deg)"
        
        
        on = 1


    } else {
        searchBox.classList.remove("active")
        telentBtn.style.border = "none"
        dropdown.style.display = "none"
        on = 0

    }

})
mainHtml.addEventListener("click", () => {
    telentBtn.style.border = "none"
    dropdown.style.display = "none"
    on = 0
    searchBox.classList.remove("active")


})


let scrollContainer = document.querySelector(".three-boxs-section-nine");
let backBtn = document.querySelector(".left-icon");
let nextBtn = document.querySelector(".right-icon");




backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 1000
    scrollContainer.style.scrollBehavior = "smooth"
    backBtn.style.display = "none"
    nextBtn.style.display = "block"
});
nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 1000
    scrollContainer.style.scrollBehavior = "smooth"
    nextBtn.style.display = "none"
    backBtn.style.display = "block"
});

let searchBox = document.querySelector(".search-box");
searchBox.addEventListener("click" ,()=>{
    searchBox.classList.toggle("active")
})










