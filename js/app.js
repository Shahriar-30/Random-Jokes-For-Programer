let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let btn_all = document.querySelectorAll(".btns");
// ==== btn all =====
let text = document.querySelector(".text");
// === text ====
let dataSet = datafy.data;
// === data =====
let count = 0;

btn_all[0].style.display = "none";

btn_all[0].addEventListener("click", () => {
    count--;
})

btn_all[1].addEventListener("click", () => {
    count++;
    btn_all[0].style.display = "block";
})

btn_all.forEach(function (btn) {
    // for all btn
    btn.addEventListener("click", () => {
        if (count == (dataSet.length)) {
            count = 0;
        } else if (count == 0) {
            count = dataSet.length;
        }
        text.innerHTML = dataSet[count].content;
        console.log(count);
    })
})



