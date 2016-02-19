window.onload=
    function(){
        songhuo();
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

    setInterval("nr()",1000);


}
function nr(){
    var mydate=new Date();

    var l3=document.getElementById("xsdd");
    var neirong="单号:"+localStorage.getItem("danhao")+"用户名"+localStorage.getItem("name")+"  "+"用户联系方式:"+localStorage.getItem("userphone")+"   "+"下单时间"+mydate.toLocaleString()+"   "+"取货号:"
        +localStorage.getItem("quhuohao")+"   "+"备注:"+localStorage.getItem("beizhu")+"   "+"注:订单将以短信方式发送至订单处" +
        "理中心,实际发送内容与订单有所不同"
    var neirongchucun="单号:"+localStorage.getItem("danhao")+";"+"货架;"+"用户:"+localStorage.getItem("name")+";"+"用户联系方式:"+localStorage.getItem("userphone")+";"+localStorage.getItem("dongxi")+
        localStorage.getItem("louhao")+"号楼;"+"取货号:"+ localStorage.getItem("quhuohao")+";"+"校园卡"+localStorage.getItem("linkurl")+";"+"备注:"+localStorage.getItem("beizhu");
    l3.innerHTML=neirong;

    localStorage.setItem("neirong",neirongchucun);
}
function f4(){
    if(confirm("你确定要下单了吗?"))

    {
        var dongxi=localStorage.getItem("dongxi");
        var louhao=localStorage.getItem("louhao");
        var name=localStorage.getItem("name");
        var quhuohao=localStorage.getItem("quhuohao");
        var linkurl=localStorage.getItem("linkurl");
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
                //alert("query object fail");
            }
        });

        var shy=localStorage.getItem("shy");
        var shyid=localStorage.getItem("shyid");
        var shyphone=localStorage.getItem("shyphone");
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
        sjksall.set("quhuohao",quhuohao);
        sjksall.set("linkurl",linkurl);
        sjksall.set("beizhu",beizhu);
        sjksall.set("songhuoren",shy);
        sjksall.set("songhuoid",shyid)
        sjksall.set("songhuophone",shyphone);
        sjksall.set("queren","f");
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
        sjks.set("userphone",userphone);
        sjks.set("username",name);
        sjks.set("location",dongxi);
        sjks.set("number",louhao);
        sjks.set("quhuohao",quhuohao);
        sjks.set("linkurl",linkurl);
        sjks.set("beizhu",beizhu);
        sjks.set("songhuoren",shy);
        sjks.set("songhuoid",shyid);
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
            localStorage.setItem("fsmoshi","hj");
            alert("下单失败,即将改为手动发送");
            window.location.href="fsdingdan1.html";
        });



    }

    else

    {


    }



}