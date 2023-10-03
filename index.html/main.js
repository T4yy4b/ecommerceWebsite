function telenboxDropDown() {
    let dropdown = document.querySelector(".drop-down-box-telet-box");
    let telentBtn = document.querySelector(".telent-box");
    let telentIcon = document.querySelector(".icon-box-telent-box")
    let on = 0;
    let mainHtml = document.querySelector("main");

    // let headerHtml = document.querySelector("header")

    telentBtn.addEventListener("click", function () {
        if (on == 0) {
            telentBtn.style.backgroundColor = "white"
            telentBtn.style.border = "2px solid  #13544e"
            dropdown.style.display = "block"
            
           


            on = 1


        } else {

            telentBtn.style.border = "none"
            dropdown.style.display = "none"
            on = 0

        }

    })
    mainHtml.addEventListener("click", () => {
        telentBtn.style.border = "none"
        dropdown.style.display = "none"
        on = 0
       


    })

}
telenboxDropDown();



function slider() {
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


}
slider();

function SearchBox() {
    let inputBox = document.querySelector(".input-box");
    inputBox.addEventListener("click", () => {
        inputBox.classList.toggle("active")
    })
}
SearchBox();












