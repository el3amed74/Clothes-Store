const items = document.querySelectorAll("i"),
    spans = document.querySelectorAll("span");
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

let tablebody = document.querySelector(".tbody");
function display() {
/*inside table with loop over clothes must create
    1- tr with class tr
    2- inside each tr create 
        1-td with vlu = ename
        2-td with vlu = input num with clss m-1 and vlu = 1
        3-td with vlu = eprice
*/
    for (let i = 0; i < Clothes.length; i++) {
        let tr = document.createElement("tr");
        for (let k = 0; k < 3; k++) {
            let td = document.createElement("td");
            let tdtext = document.createTextNode("Clothes"[i]);
            td.appendChild(tdtext);
            tr.appendChild(td);
        }
        tablebody.appendChild(tr);
    }
    console.log(Clothes.length);
};
display();
/***************** scroll btn ********************** */
document.addEventListener('scroll', (e) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 100) document.querySelector('.scroll').style.display = "block";
    else document.querySelector('.scroll').style.display = "none"
})
function animateToTop() {

    window.scrollTo(0, 0);

}