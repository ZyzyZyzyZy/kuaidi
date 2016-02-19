window.onload=
    function(){
            var a=document.getElementById("anzhuo");
            var p=document.getElementById("pingguo");
            var neirong=localStorage.getItem("neirong");

            var dongxi=document.getElementById("dongxi");
            var louhao=document.getElementById("louhao")

            if(dongxi=="河西"){
                    var fora1="sms:18149763032?body="+neirong;
                    var forp1="sms:18149763032&body="+neirong;
                    a.setAttribute("href",fora1);
                    p.setAttribute("href",forp1);
            }
            if(dongxi=="河东"){
                    if(parseInt(louhao)>21){
                            var fora2="sms:18217400015?body="+neirong;
                            var forp2="sms:18217400015&body="+neirong;
                            a.setAttribute("href",fora2);
                            p.setAttribute("href",forp2);
                    }else{
                            var fora3="sms:13046625806?body="+neirong;
                            var forp3="sms:13046625806&body="+neirong;
                            a.setAttribute("href",fora3);
                            p.setAttribute("href",forp3);
                    }
            }


    }
