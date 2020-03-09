if(window.location.hash === '' && (window.location.hash !== '#about' || window.location.hash !== '#contact')){
    $("#nav-home").addClass('active')
    $("#nav-about").removeClass('active')
    $("#nav-contact").removeClass('active')
}else 
if(window.location.hash === '#about'){
    $("#nav-about").addClass('active')
    $("#nav-home").removeClass('active')
    $("#nav-contact").removeClass('active')
}else if(window.location.hash === '#contact'){
    $("#nav-contact").addClass('active')
    $("#nav-home").removeClass('active')
    $("#nav-about").removeClass('active')
}

$(window).on('hashchange',()=>{
    if(window.location.hash === '' && (window.location.hash !== '#about' || window.location.hash !== '#contact')){
        $("#nav-home").addClass('active')
        $("#nav-about").removeClass('active')
        $("#nav-contact").removeClass('active')
    }else 
    if(window.location.hash === '#about'){
        $("#nav-about").addClass('active')
        $("#nav-home").removeClass('active')
        $("#nav-contact").removeClass('active')
    }else if(window.location.hash === '#contact'){
        $("#nav-contact").addClass('active')
        $("#nav-home").removeClass('active')
        $("#nav-about").removeClass('active')
    }
})