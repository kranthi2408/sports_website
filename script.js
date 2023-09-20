
list=['CRICKET.jpg','football.jpg','basketball.jpg','kabaddi.jpg','SHUTTLE.jpg','tennis.jpg','volley_ball.jpg'];

var navcontent=document.getElementsByClassName("navcontent")[0];
var home=document.getElementById("home");
var sports=document.getElementById("sports");

var about=document.getElementById("about");
var contact=document.getElementById("contact");

var register=document.getElementById("register");
home.addEventListener("mouseover",function(){
    
    home.style.cssText="background-color:#C9EEFF;border:1px solid black;z-index:2";
    navcontent.style.cssText="background-color:lightgreen"
});
home.addEventListener("mouseout",function(){
    
    home.style.cssText="background-color:transparent;border:none";
    navcontent.style.cssText="background-color:white"
});
sports.addEventListener("mouseover",function(){
    
    sports.style.cssText="background-color:#C9EEFF;border:1px solid black;z-index:2";
    navcontent.style.cssText="background-color:pink"
});
sports.addEventListener("mouseout",function(){
   
    sports.style.cssText="background-color:transparent;border:none;z-index:2";
    navcontent.style.cssText="background-color:white"
});

about.addEventListener("mouseover",function(){
    
    about.style.cssText="background-color:#C9EEFF;border:1px solid black;z-index:2";
    navcontent.style.cssText="background-color:#E8D2A6"
});
about.addEventListener("mouseout",function(){
   
    about.style.cssText="background-color:transparent;border:none";
    navcontent.style.cssText="background-color:white"
});
contact.addEventListener("mouseover",function(){
    
    contact.style.cssText="background-color:#C9EEFF;border:1px solid black;z-index:2";
    navcontent.style.cssText="background-color:#FFCEFE"
});
contact.addEventListener("mouseout",function(){
   
    contact.style.cssText="background-color:transparent;border:none";
    navcontent.style.cssText="background-color:white"
});
register.addEventListener("mouseover",function(){
    
    register.style.cssText="background-color:#C9EEFF;border:1px solid black;z-index:2";
    navcontent.style.cssText="background-color:#62B6B7"
});
register.addEventListener("mouseout",function(){
   
    register.style.cssText="background-color:transparent;border:none";
    navcontent.style.cssText="background-color:white"
});
var i=1;
setInterval(function(){
    document.getElementsByClassName("slideshowimg")[0].setAttribute("src",list[i]);
    document.getElementsByClassName("slideshowimg1")[0].setAttribute("src",list[i]);
    i=i+1;
    if(i==list.length){
        i=0;
    }
    },3000);