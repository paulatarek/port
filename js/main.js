

setInterval(function()  {
    var arr = ["img/pexels-sebastiaan-stam-1482476.jpg","img/pexels-sebastiaan-stam-1482476.jpg","img/pexels-jeremy-bishop-2397414.jpg"]

    var x= Math.floor(Math.random() * 3);
    document.getElementById("home").style.backgroundImage="url("+arr[x]+")"
    
}, 600);

$(document).ready(function(){
    $(window).scroll(function(){
        var scr = $(window).scrollTop()
        console.log(scr)
       if(scr > 750){
document.getElementById("services").style.opacity="1"
document.getElementById("services").style.transition="1s"
       }else{
        document.getElementById("services").style.opacity="0"
       }
       if(scr > 2200 ){
        document.getElementById("porto").style.transform="scale(1)"
        document.getElementById("porto").style.transition="1s"
        

       }else{
        document.getElementById("porto").style.transform="scale(0)"
       }
    })
})
