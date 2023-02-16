
const unhide=(one) => {
    document.getElementById("mobile_nav").classList.add("unhide")
    document.getElementById("mymenu_bar").style.display="none"
    document.getElementById(one).style.filter='blur(3px)'
}
const hide=(one)=>{
    document.getElementById("mobile_nav").classList.remove("unhide")
    document.getElementById("mymenu_bar").style.display="block"
    document.getElementById(one).style.filter='blur(0px)'
}
const dash=()=>{
    const mydash_btn=document.getElementsByClassName('dash_sec');
const dash_all=Array.from(mydash_btn);
console.log(dash_all)
dash_all.forEach((n)=>{
    n.addEventListener("click",function(){
        if(n.id=="mypost" || n.id=='mobile_post' ){
            document.getElementById("all_dashboard_post").style.display="block";
            document.getElementById("all_dashboard_query").style.display="none";
            document.getElementById("dashboard_new_post").style.display="none";
            
        }
        if(n.id=="myquery" || n.id=='mobile_query'){
            document.getElementById("all_dashboard_query").style.display="block";
            document.getElementById("all_dashboard_post").style.display="none";
            document.getElementById("dashboard_new_post").style.display="none";
            
        }
        if(n.id=="mynew" || n.id=='mobile_new_post'){
            document.getElementById("dashboard_new_post").style.display="block";
            document.getElementById("all_dashboard_post").style.display="none";
            document.getElementById("all_dashboard_query").style.display="none";
            
        }
    })
})
}



