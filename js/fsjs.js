/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function(){
        var a=document.getElementById("anzhuo");
        var p=document.getElementById("pingguo");
        var neirong=localStorage.getItem("neirong");
        var fora="sms:18149763032?body="+neirong;
        var forp="sms:18149763032&body="+neirong;
        a.setAttribute("href",fora);
        p.setAttribute("href",forp);
    }