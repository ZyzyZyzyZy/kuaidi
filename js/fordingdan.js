/**
 * Created by zhangyue on 16/2/19.
 */
window.onload=
    function () {
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
        var y1=document.getElementById("qrdd");
        var y2=document.getElementById("qxdd");
        y1.style.visibility="hidden";
        y2.style.visibility="hidden";
        sessionStorage.clear();
         chaxun();

        document.getElementById("myModal");
    }

function chaxun(){
    var name=localStorage.getItem("name");
    var qr="f";
    var QueRen = Bmob.Object.extend("All");
    var query = new Bmob.Query(QueRen);
    query.equalTo("username",name);
    query.equalTo("queren",qr);
    query.find({
        success: function(results) {
            //alert("共查询到 " + results.length + " 条记录");
            // 循环处理查询到的数据
            for (var i = 0; i < results.length; i++) {
                var object = results[i]
                var shyname=object.get("songhuoren");
                var shyphone=object.get("songhuophone");
                var danhao=object.get("danhao");
                var shijian=object.timeout;
                var id=object.id;
                var tb=document.getElementById("biaoge");
                var nh=tb.insertRow();
                var nl=nh.insertCell();
                var h=i+1;
                var innerTD = "<tr style='color: black' onclick='dianji(this)' id="+ h.toString()+"><td>"+id+"</td><td>"+danhao+"</td><td>"+shyphone+"</td><td>"+shyname+"</td></tr>"
                $(innerTD).appendTo("#biaoge");
                var a="nrid"+ h.toString();
                var b="nrdh"+ h.toString();

                sessionStorage.setItem(a,id);
                sessionStorage.setItem(b,danhao);
                sessionStorage.setItem("length",results.length);
            }

        },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    });
}

function dianji(obj){

var l=parseInt(sessionStorage.getItem('length'));
    var idnow=obj.id;
    var i1="nrxuanze"+idnow;
    if(obj.style.color=="black"){
        obj.style.color="blue";
        sessionStorage.setItem(i1,"true");
    }else{
        sessionStorage.setItem(i1,"false");
        obj.style.color="black";
    }
    var truenumber=0;
    for(a=1;a<=l;a++){
        var i2="nrxuanze"+ a.toString();
        if(sessionStorage.getItem(i2)=="true"){
           truenumber=truenumber+1;
        }

    }
    if(truenumber==0){
        var y1=document.getElementById("qrdd");
        var y2=document.getElementById("qxdd");
        y1.style.visibility="hidden";
        y2.style.visibility="hidden";
    }else{
        var y1=document.getElementById("qrdd");
        var y2=document.getElementById("qxdd");
        y1.style.visibility="visible";
        y2.style.visibility="visible";
    }


}

function querendingdan(){
    if (confirm("你确定确认订单吗？")) {

        var l=parseInt(sessionStorage.getItem('length'));
        for(b=1;b<=l;b++){
            var i3="nrxuanze"+ b.toString();
            if(sessionStorage.getItem(i3)=="true"){
                var i4="nrid"+ b.toString();
                var neirongid=sessionStorage.getItem(i4);

                var GameScore = Bmob.Object.extend("All");
                var query = new Bmob.Query(GameScore);
                query.get(neirongid, {
                    success: function(object) {
                        // The object was retrieved successfully.
                        object.set("queren", "t");
                        object.save(null, {
                            success: function(objectUpdate) {
                                //alert("create object success, object score:"+objectUpdate.get("score"));
                            window.location.href="dingdan.html";


                            },
                            error: function(model, error) {
                                alert("信息同步错误,请联系管理员 qq:894403712");
                            }
                        });
                    },
                    error: function(object, error) {
                        alert("信息同步错误,请联系管理员 qq:894403712");
                    }
                });





            }
        }





    }
    else {

    }
}

function  quxiao(){
    if (confirm("你确定取消订单吗？")) {

        var l=parseInt(sessionStorage.getItem('length'));
        for(b=1;b<=l;b++){
            var i3="nrxuanze"+ b.toString();
            if(sessionStorage.getItem(i3)=="true"){
                var i4="nrid"+ b.toString();
                var neirongid=sessionStorage.getItem(i4);
                var i5="nrdh"+ b.toString();
                var danhao2=sessionStorage.getItem(i5);

                var GameScore = Bmob.Object.extend("All");
                var query = new Bmob.Query(GameScore);
                query.get(neirongid, {
                    success: function(object) {
                        // The object was retrieved successfully.
                        object.set("queren", "q");
                        object.save(null, {
                            success: function(objectUpdate) {
                                alert("create object success, object score:"+objectUpdate.get("score"));
                                var shyphone2=localStorage.getItem("shyphone");
                                var userphone=localStorage.getItem("userphone");
                                var fsnr="取消订单通知    单号为:"+danhao2+"的订单被"+userphone+"取消";


                                Bmob.Sms.requestSms({"mobilePhoneNumber":shyphone2,"content": fsnr} ).then(function(obj) {
                                    alert("订单取消成功"); //
                                    window.location.href="dingdan.html";
                                }, function(err){
                                    localStorage.setItem("fsmoshi","quxiao");
                                    alert("订单取消未成功通知送货员,即将改为手动发送");
                                    window.location.href="fsdingdan1.html";
                                });

                            //fasongxinxi(danhao2);





                            },
                            error: function(model, error) {
                                alert("信息同步错误,请联系管理员 qq:894403712");
                            }
                        });
                    },
                    error: function(object, error) {
                        alert("信息同步错误,请联系管理员 qq:894403712");
                    }
                });





            }
        }





    }
    else {

    }
}
function fanhui(){
    window.location.href="index.html";
}

function fasongxinxi(d){
    var shyphone2=localStorage.getItem("shyphone");
    var userphone=localStorage.getItem("userphone");
    var fsnr="取消订单通知,单号为:"+d+"的订单被"+userphone+"取消";
    localStorage.setItem("neirong",fsnr);

    Bmob.Sms.requestSms({"mobilePhoneNumber":shyphone2,"content":fsnr} ).then(function(obj) {
        alert("订单取消成功"); //
        window.location.href="dingdan.html";
    }, function(err){
        localStorage.setItem("fsmoshi","quxiao");
        alert("订单取消未成功通知送货员,即将改为手动发送");
        window.location.href="fsdingdan1.html";
    });

}