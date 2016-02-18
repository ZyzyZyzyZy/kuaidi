/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function(){
        var a=document.getElementById("anzhuo");
        var p=document.getElementById("pingguo");
        var neirong=localStorage.getItem("neirong");
        var fora="sms:18149763032?body="+"http://i13.tietuku.com/7f00ec74447d9f76.jpg";
        var forp="sms:18149763032&body="+neirong;
        a.setAttribute("href",fora);
        p.setAttribute("href",forp);
    }