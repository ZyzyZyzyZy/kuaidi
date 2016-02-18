window.onload=
    function(){
     var y1=document.getElementById("scdd");
     var y2=document.getElementById("xsdd");
     var y3=document.getElementById("fsdd");
     var y4=document.getElementById("bz");
     var y5=document.getElementById("h1");
     var y6=document.getElementById("b1");
        y1.style.visibility="hidden";
        y2.style.visibility="hidden";
        y3.style.visibility="hidden";
        y4.style.visibility="hidden";
        y5.style.visibility="hidden";
        y6.style.visibility="hidden";
        localStorage.removeItem("beizhu");
        localStorage.removeItem("quhuohao");
    }

function f1(){
    var l1=document.getElementById("quhuohao");
    var qhh=l1.value;
    localStorage.setItem("quhuohao",qhh);
    var y4=document.getElementById("bz");
    var y5=document.getElementById("h1");
    var y6=document.getElementById("b1");
    var y1=document.getElementById("scdd");
    var y2=document.getElementById("xsdd");
    y1.style.visibility="visible";
    y2.style.visibility="visible";
    y4.style.visibility="visible";
    y5.style.visibility="visible";
    y6.style.visibility="visible";
}

function f2(){
    var l2=document.getElementById("bz");
    var bznr=l2.value;
    localStorage.setItem("beizhu",bznr);
}

function f3(){
    var y3=document.getElementById("fsdd");
    y3.style.visibility="visible";
    var l3=document.getElementById("xsdd");
    var mydate=new Date();
    var neirong="用户名"+localStorage.getItem("name")+"  "+"下单时间"+mydate.toLocaleString()+"   "+"取货号:"
    +localStorage.getItem("quhuohao")+"   "+"备注:"+localStorage.getItem("beizhu")+"   "+"注:订单将以短信方式发送至订单处" +
        "理中心,实际发送内容与订单有所不同"
    l3.innerHTML=neirong;
    var neirongchucun="hj;"+localStorage.getItem("name")+";"+localStorage.getItem("dongxi")+";"+localStorage.getItem("louhao")+";"+
        localStorage.getItem("quhuohao")+";"+localStorage.getItem("linkurl")+";"+localStorage.getItem("beizhu");
    localStorage.setItem("neirong",neirongchucun);
}

function f4(){
    window.location.href="fasongdingdan2.html";
}