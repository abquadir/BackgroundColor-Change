const colors = ["green", "red", "rgba(133,122,200)",
 "#f15025" ,"salmon","#4834DF","#192A56"];

  
 const btn =document.getElementById("btn")
 const color= document.querySelector(".color")

 btn.addEventListener('click',function(){
    //  console.log("document.body");

    const randonNumber =getRandomNumber() ;
    document.body.style.backgroundColor = colors[randonNumber];
    color.textContent= colors[randonNumber];
    

 })
 
 const getRandomNumber=function(){
     return Math.floor(Math.random() * colors.length) ;
 }