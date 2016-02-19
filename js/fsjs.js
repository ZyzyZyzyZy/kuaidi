/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function(){
        var a=document.getElementById("anzhuo");
        var p=document.getElementById("pingguo");
        var neirong=localStorage.getItem("neirong");
        var shyphone=localStorage.getItem("shyphone");

        var n1="sms:"+shyphone;

                var fora1=n1+"?body="+neirong;
                var forp1=n1+"&body="+neirong;
            //alert(fora1);

                a.setAttribute("href",fora1);
                p.setAttribute("href",forp1);



    }


