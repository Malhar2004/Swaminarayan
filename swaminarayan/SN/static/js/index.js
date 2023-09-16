const left_div = document.querySelector(".left-div");
const cls = document.querySelector(".close");
const arrow = document.querySelector(".arrow");

cls.addEventListener("click", () => {
    left_div.classList.add('hide-left-div');
    arrow.classList.add('display-arrow');
    cls.classList.add('hide-close');
    
    
});

arrow.addEventListener("click", () => {
    arrow.classList.remove('display-arrow');
    cls.classList.remove('hide-close');
    left_div.classList.remove('hide-left-div');


});