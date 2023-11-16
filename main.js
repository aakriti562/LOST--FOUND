(function($){
if($("#switch-title").length){
    var switchTitle =$("#switch-title").find("a");
    var switchbox =$(".content").find(".slide");
    switchTitle.each(function(){
        var Self = $(this);
        var switchID = Self.attr("href");
        Self.on("click", function(){
            switchTitle.removeClass("active");
            Self.addClass("active");
            switchbox.removeClass("active");
            $( switchID).addClass("active");
            return false;
        })
    })
}

$(".open").magnificPopup({
    type:"inline",
    fixedContentPos:false,
    fixedBgPos:true,
    overflowY:"auto",
    closeButtonInside: true,
    preloader:false,
    midClick:true,
    removalOverlay:300,
    mainClass: "my-mfp-slide-bottom"
});
//login 

$(document).on("click" ,".user , .already-account",function(){
$(".banner-form").addClass("login-active").removeClass("sign-up-active");
})
$(document).on("click" ,".sign-up-btn",function(){
    $(".banner-form").addClass("sign-up-active").removeClass("login-active");
    })
// cancle
$(document).on("click" ,".form-cancel",function(){
    $(".banner-form").removeClass("login-active").removeClass("sign-up-active");
    })
   
})(jQuery)

function menuToggle(){
    var toggleIcon = document.querySelector(".toggleIcon");
    toggleIcon.classList.toggle("active");
    var nav = document.querySelector(".menu-overlay");
    nav.classList.toggle("active");
   
}
$(document).on("click" ,".homes",function(){
    $(".home").addClass("home").removeClass("menu-overlay");
    })

var i=0;
function menus(){
    if(i==0){
        document.getElementById("links").style.transform="scale(1.5)";
        document.getElementById("plus").style.transform="rotate(45deg)";
        i=1;
    }
else{
    document.getElementById("links").style.transform="scale(0)";
        document.getElementById("plus").style.transform="rotate(0deg)";
        i=0;
}
}
