const items = document.querySelectorAll("i"),
    spans= document.querySelectorAll("span");
const tablebody=document.querySelector(".tbody");
let Clothes=[];
let clickcounter=0;
let ename='', eprice='';
items.forEach(itm => {
    itm.addEventListener("click", (e) => {
        clickcounter++;
        if(clickcounter == 1){
            var parent = e.target.parentNode;
            ename=parent.firstElementChild.innerText;
            eprice=e.target.previousElementSibling.innerText;

            console.log(ename+"/**/"+eprice, clickcounter);
            Clothes.push([ename,eprice]);
        }else if(clickcounter == 2){
            console.log(clickcounter);
            console.log("deteted");
        }
    })
})

spans.forEach(sp =>{
    sp.addEventListener("click",()=>{
        if(sp.className=="collapse")
            console.log("collapse");
    })
})
function display() {
    /*inside table with loop over clothes must create
        1- tr with class tr
        2- inside each tr create 
            1-td with vlu = ename
            2-td with vlu = input num with clss m-1 and vlu = 1
            3-td with vlu = eprice
    */
    console.table(Clothes);
};
display()
/***************** scroll btn ********************** */
document.addEventListener('scroll', (e) => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 100) document.querySelector('.scroll').style.display = "block";
    else document.querySelector('.scroll').style.display = "none"
})
function animateToTop() {

    window.scrollTo(0, 0);

}