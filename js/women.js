const items = document.querySelectorAll("i");
let Clothes=[];
items.forEach(itm => {
    itm.addEventListener("click", (e) => {
        var parent = e.target.parentNode;
        console.log(parent.firstElementChild.innerText+"/**/"+e.target.previousElementSibling.innerText);
        Clothes.push([parent.firstElementChild.innerText,e.target.previousElementSibling.innerText])
    })
})

function display() {

    console.table(Clothes);
};
/*************************************** */
document.addEventListener('scroll', (e) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 100) document.querySelector('.scroll').style.display = "block";
    else document.querySelector('.scroll').style.display = "none"
})
function animateToTop() {

    window.scrollTo(0, 0);

}