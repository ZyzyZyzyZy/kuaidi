/**
 * Created by zhangyue on 16/2/18.
 */

window.onload=
    function (){
        songhuo();
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
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
        var GameScore = Bmob.Object.extend("danhao");
        var query = new Bmob.Query(GameScore);
        query.get("2a80a6d4dc", {
            success: function (object) {
                // The object was retrieved successfully.
                localStorage.setItem("danhao", object.get("dh"));
            },
            error: function (object, error) {
                alert("数据同步错误");
            }
        });


    }

window.setInterval("shuaxin()",1000);
function shuaxin(){
    var GameScore = Bmob.Object.extend("danhao");
    var query = new Bmob.Query(GameScore);
    query.get("2a80a6d4dc", {
        success: function (object) {
            // The object was retrieved successfully.
            localStorage.setItem("danhao", object.get("dh"));
        },
        error: function (object, error) {
            alert("数据同步错误");
        }
    });

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

      setInterval("nr()",1000);



}
function nr(){
    var mydate=new Date();
    var y4=document.getElementById("xsdd");
    var l2=document.getElementById("gh");
    var gh=l2.value;
    localStorage.setItem("guihao",gh);
    var name=localStorage.getItem("name");
    var userphone=localStorage.getItem("userphone");
    //var neirong="单号:"+localStorage.getItem("danhao")+"用户:"+name+"   "+"下单时间:"+mydate.toLocaleString()+"  "+"取货密码"+localStorage.getItem("quhuoma")+"   "
    //    +"柜台号:  "+localStorage.getItem("guihao")+"   "+"备注:"+localStorage.getItem("beizhu")+"       注:订单将以短信方式发送至订单处理中心,实际发送内容与订单文字不同";
    //var neirongbaocun=localStorage.getItem("danhao")+";"+"xg;"+localStorage.getItem("name")+";"+localStorage.getItem("dongxi")+";"+localStorage.getItem("louhao")+";"+
    //    localStorage.getItem("quhuoma")+";"+localStorage.getItem("guihao")+";"+localStorage.getItem("beizhu");
    //y4.innerHTML=neirong;
    //localStorage.setItem("neirong",neirongbaocun);
    var neirong="单号:"+localStorage.getItem("danhao")+"用户:"+name+"   "+"用户联系方式"+userphone+"下单时间:"+mydate.toLocaleString()+"  "+"取货密码"+localStorage.getItem("quhuoma")+"   "
        +"柜台号:  "+localStorage.getItem("guihao")+"   "+"备注:"+localStorage.getItem("beizhu")+"       注:订单将以短信方式发送至订单处理中心,实际发送内容与订单文字不同";
    var neirongbaocun="单号:"+localStorage.getItem("danhao")+";"+"箱柜;"+"用户:"+localStorage.getItem("name")+";"+"用户联系方式"+localStorage.getItem("userphone")+";"+localStorage.getItem("dongxi")+
        localStorage.getItem("louhao")+"号楼;"
       +"取货号:" +localStorage.getItem("quhuoma")+";"+"柜台号"+localStorage.getItem("guihao")+";"+"备注:"+localStorage.getItem("beizhu");
    y4.innerHTML=neirong;
    localStorage.setItem("neirong",neirongbaocun);
}

function f5(){
    if(confirm("你确定要下单了吗?"))

    {
        var dongxi=localStorage.getItem("dongxi");
        var louhao=localStorage.getItem("louhao");
        var name=localStorage.getItem("name");
        var quhuoma=localStorage.getItem("quhuoma");
        var guihao=localStorage.getItem("guihao");
        var beizhu=localStorage.getItem("beizhu");
        var danhao=localStorage.getItem("danhao");
        //
        // 修改单号+1
        var dhxg = Bmob.Object.extend("danhao");
        var query = new Bmob.Query(dhxg);
        var dhn=parseInt(danhao)+1;

        query.get("2a80a6d4dc", {
            success: function(object) {
                // The object was retrieved successfully.
                object.set("dh",dhn);
                object.save(null, {
                    success: function(objectUpdate) {
                        //alert("create object success, object score:"+objectUpdate.get("dh"));
                    },
                    error: function(model, error) {
                        alert("数据同步错误");
                    }
                });
            },
            error: function(object, error) {
                alert("query object fail");
            }
        });

        var shy=localStorage.getItem("shy");
        var shyid=localStorage.getItem("shyid");
        var shyphone=localStorage.getItem("shyphone");
        var userphone=localStorage.getItem("userphone");
        //上传到all
        var sjkall=Bmob.Object.extend("All");
        var sjksall=new sjkall();
        sjksall.set("danhao",danhao);
        sjksall.set("userphone",userphone);
        sjksall.set("username",name);
        sjksall.set("location",dongxi);
        sjksall.set("number",louhao);
        sjksall.set("quhuoma",quhuoma);
        sjksall.set("guitaihao",guihao);
        sjksall.set("beizhu",beizhu);
        sjksall.set("queren","f");
        sjksall.set("songhuoren",shy);
        sjksall.set("songhuoid",shyid);
        sjksall.set("songhuophone",shyphone);
        sjksall.save(null, {
            success: function(object) {
                //alert("create object success, object id:"+object.id);
            },
            error: function(model, error) {
                alert("数据同步错误");
            }
        });



        //上传
        var sjk=Bmob.Object.extend(shyid);
        var sjks=new sjk();
        sjks.set("danhao",danhao);
        sjks.set("username",name);
        sjks.set("userphone",userphone);
        sjks.set("location",dongxi);
        sjks.set("number",louhao);
        sjks.set("quhuoma",quhuoma);
        sjks.set("guitaihao",guihao);
        sjks.set("beizhu",beizhu);
        sjks.set("songhuophone",shyphone);
        sjks.save(null, {
            success: function(object) {
                //alert("create object success, object id:"+object.id);
            },
            error: function(model, error) {
                alert("数据同步错误");
            }
        });

        //发送
        var shynumber=localStorage.getItem("shyphone");
        var neirong=localStorage.getItem("neirong");
        Bmob.Sms.requestSms({"mobilePhoneNumber":shynumber,"content": neirong} ).then(function(obj) {
            alert("下单成功"); //
            window.location.href="index.html";
        }, function(err){
            localStorage.setItem("fsmoshi","xg");
            alert("下单成功,但未成功发送通知短信,即将改为手动发送");
            window.location.href="fsdingdan1.html";

        });



    }

    else

    {


    }

}
