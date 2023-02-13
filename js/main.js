const items = document.querySelectorAll("i"),
    spans = document.querySelectorAll("span"),
    form = document.querySelector(".forma");
let tablebody = document.querySelector(".tbody");
let Clothes = [];
let price = [];
let clickcounter = 0;
let ename = '', eprice = '';
items.forEach(itm => {
    itm.addEventListener("click", (e) => {
        var parent = e.target.parentNode;
        ename = parent.firstElementChild.innerText;
        eprice = e.target.previousElementSibling.innerText;
        if (!(e.target.classList.contains("checked"))) {
            e.target.classList.add("checked");
            console.log("not contain this pice");
            Clothes.push(ename);
            price.push(eprice);
            console.log("ename:[ " + Clothes + ']', "eprice:[ " + price + ']');
        } else {
            console.log(" contain this pice");
            e.target.classList.remove("checked");
            Clothes.splice(Clothes.indexOf(ename), 1);
            price.splice(price.indexOf(eprice), 1);
            console.log("ename:[ " + Clothes + ']', "eprice:[ " + price + ']');
            console.log(e.target.classList.contains("checked"));
        }
    })
})
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sessionStorage.setItem("clothes", JSON.stringify(Clothes));
    sessionStorage.setItem("price", JSON.stringify(price));
    window.location.href = "CartPage.html";
})
/***************** scroll btn ********************** */
document.addEventListener('scroll', (e) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 100) document.querySelector('.scroll').style.display = "block";
    else document.querySelector('.scroll').style.display = "none"
})
function animateToTop() {

    window.scrollTo(0, 0);

}