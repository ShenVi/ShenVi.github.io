var urltext = window.location.pathname;
if(urltext.substring(0,9) == '/uidesign'){
    var headerloadurl = '../../common/header.html'
    var footerloadurl = '../../common/header.html'
}else{
    var headerloadurl = 'common/header.html'
    var footerloadurl = 'common/header.html'
}

console.log(window.location.pathname)
$('.frameui-header').load(headerloadurl,function(){
    if (urltext == '/project.html'){
        console.log('project')
        $("#nav_tab2").addClass("am-active")
        
    }else if(urltext == '/solution.html'){
        console.log('solution')
        $("#nav_tab3").addClass("am-active")
        
    }else if(urltext == '/design.html'){
        console.log('design')
        $("#nav_tab4").addClass("am-active")
        
    }else if(urltext.substring(0,9) == '/uidesign'){
        console.log('uidesign')
        $("#nav_tab4").addClass("am-active")
        
    }else{
        console.log('index')
        $("#nav_tab1").addClass("am-active")
    }
});
$('.frameui-footer').load(footerloadurl);