var urltext = window.location.pathname;
var headerloadurl = 'common/header.html'
var footerloadurl = 'common/header.html'
if(urltext.substring(0,9) == '/uidesign'){
    var headerloadurl = '../../common/header.html'
    var footerloadurl = '../../common/header.html'
}

console.log(window.location.pathname)
$('.frameui-header').load(headerloadurl,function(){
    if (urltext == '/project.html'){
        console.log(1)
        $("#nav_tab2").addClass("am-active")
        
    }else if(urltext == '/solution.html'){
        console.log(2)
        $("#nav_tab3").addClass("am-active")
        
    }else if(urltext == '/design.html'){
        console.log(3)
        $("#nav_tab4").addClass("am-active")
        
    }else if(urltext.substring(0,9) == '/uidesign'){
        console.log(4)
        $("#nav_tab4").addClass("am-active")
        
    }else{
        console.log(5)
        $("#nav_tab1").addClass("am-active")
    }
});
$('.frameui-footer').load(footerloadurl);