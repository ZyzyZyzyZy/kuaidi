/**
 * Created by zhangyue on 16/2/18.
 */
window.onload=
    function (){
        var y1=document.getElementById("h1");
        var y2=document.getElementById("bz");
        var y3=document.getElementById("scdd");
        var y4=document.getElementById("xsdd");
        var y5=document.getElementById("fsdd");
        var y6=document.getElementById("b1");
        var y7=document.getElementById("p1");
        var y8=document.getElementById("gh");
        var y9=document.getElementById("p2");
        y1.style.visibility="hidden";
        y2.style.visibility="hidden";
        y3.style.visibility="hidden";
        y4.style.visibility="hidden";
        y5.style.visibility="hidden";
        y6.style.visibility="hidden";
        y7.style.visibility="hidden";
        y8.style.visibility="hidden";
        y9.style.visibility="hidden";
        localStorage.removeItem("quhuoma");
        localStorage.removeItem("guihao");
        localStorage.removeItem("neirong");
        localStorage.removeItem("beizhu");
    }
function f1(){
       var l1=document.getElementById("quhuoma");
       var qhm=l1.value;
       localStorage.setItem("quhuoma",qhm);
    var y7=document.getElementById("p1");
    var y8=document.getElementById("gh");
    var y9=document.getElementById("p2");
    y7.style.visibility="visible";
    y8.style.visibility="visible";
    y9.style.visibility="visible";

}

function f2(){
       var l2=document.getElementById("gh");
       var gh=l2.value;
       localStorage.setItem("guihao",gh);
    var y1=document.getElementById("h1");
    var y2=document.getElementById("bz");
    var y3=document.getElementById("scdd");
    //var y4=document.getElementById("xsdd");
    var y6=document.getElementById("b1");
    y1.style.visibility="visible";
    y2.style.visibility="visible";
    y3.style.visibility="visible";
    //y4.style.visibility="visible";
    y6.style.visibility="visible";
    //var mydate=new Date();
    //var name=localStorage.getItem("name");
    //var neirong="用户:"+name+"   "+"下单时间:"+mydate.toLocaleString()+"  "+"取货密码"+localStorage.getItem("quhuoma")+"   "
    //+"柜台号:  "+localStorage.getItem("guihao")+"   "+"备注:"+localStorage.getItem("beizhu");
    //y4.innerHTML=neirong;


}

function f3(){
    var l3=document.getElementById("bz");
    var bznr=l3.value;
    localStorage.setItem("beizhu",bznr);
}

function f4(){
    var y4=document.getElementById("xsdd");
    var y5=document.getElementById("fsdd");
    y5.style.visibility="visible";
    y4.style.visibility="visible";

    var mydate=new Date();
    var name=localStorage.getItem("name");
    var neirong="用户:"+name+"   "+"下单时间:"+mydate.toLocaleString()+"  "+"取货密码"+localStorage.getItem("quhuoma")+"   "
        +"柜台号:  "+localStorage.getItem("guihao")+"   "+"备注:"+localStorage.getItem("beizhu")+"       注:订单将以短信方式发送至订单处理中心,实际发送内容与订单文字不同";
    var neirongbaocun=localStorage.getItem("name")+";"+localStorage.getItem("dongxi")+";"+localStorage.getItem("louhao")+";"+
        localStorage.getItem("quhuoma")+";"+localStorage.getItem("guihao")+";"+localStorage.getItem("beizhu");
    y4.innerHTML=neirong;
    localStorage.setItem("neirong",neirongbaocun);
}

function f5(){
   window.location.href="fsdingdan1.html";
}
