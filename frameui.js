var urltext = window.location.pathname;
console.log(urltext)
$('.frameui-header').load('common/header.html',function(){
    if (urltext == '/project.html'){
        $("#nav_tab2").addClass("am-active")
    }else if(urltext == '/solution.html'){
        $("#nav_tab3").addClass("am-active")
    }else if(urltext == '/design.html'){
        $("#nav_tab4").addClass("am-active")
    }else{
        $("#nav_tab1").addClass("am-active")
    }
});
$('.frameui-footer').load('common/footer.html');