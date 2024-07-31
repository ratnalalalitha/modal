var registerBtn = document.getElementById("register_btn")
// console.log(registerBtn)
var RegisterOpen=document.getElementsByClassName("Register_open")[0]
// console.log(RegisterOpen)
var closeBtn1=document.getElementById("close_btn1")


registerBtn.addEventListener("click",()=>{
    RegisterOpen.style.display="block"
}) 
closeBtn1.addEventListener("click",()=>{
    RegisterOpen.style.display="none"
})
var loginBtn = document.getElementById("login_btn")
console.log(loginBtn)
var loginOpen=document.getElementsByClassName("login_open")[0]
console.log(loginOpen)
var closeBtn2=document.getElementById("close_btn2")

 loginBtn.addEventListener("click",()=>{
    loginOpen.style.display="block"
 })
 closeBtn2.addEventListener("click",()=>{
    loginOpen.style.display="none"
 })

 window.onclick=function(e){
    if(e.target==RegisterOpen){
        RegisterOpen.style.display="none"
    }

 }
 window.onclick=function(e){
    if(e.target==loginOpen){
        loginOpen.style.display="none"
    }

 }