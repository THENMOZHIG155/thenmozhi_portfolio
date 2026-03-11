console.log("Welcome to Thenmozhi Portfolio");

document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",function(){
alert("Navigating to section");
});
});