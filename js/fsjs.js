/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function(){
        var a=document.getElementById("a");
        var neirong=localStorage.getItem("neirong");
        a.innerHTML=neirong;
    }