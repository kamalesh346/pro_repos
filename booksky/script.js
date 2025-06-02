// select add-btn,popup-overlay,popup
var popup_btn=document.getElementById("popup-btn")
var overlay=document.querySelector(".popup-overlay")
var popup=document.querySelector(".popup")
function show(){
    overlay.style.display="block"
    popup.style.display="block"
}

// select cancel button
var cancel=document.getElementById("cancel-pop")
function canc(event){
    overlay.style.display="none"
    popup.style.display="none"
    event.preventDefault()
}

// select container,add-book,book-title-inp,book-author-inp,short-desc-inp
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinp=document.getElementById("book-title-inp")
var bookauthorinp=document.getElementById("book-author-inp")
var shortdescinp=document.getElementById("short-desc-inp")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinp.value}</h2>
            <h5>${bookauthorinp.value}</h5>
            <p>${shortdescinp.value}</p>
            <button onclick="del(event)" >Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})

function del(event){
    event.preventDefault()
    event.target.parentElement.remove()
}