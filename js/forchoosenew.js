/**
 * Created by zhangyue on 16/4/17.
 */
Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
var louhao,dongxi,name,yhid,phone;
window.onload=
    function () {
         louhao=localStorage.getItem("louhao");
         dongxi=localStorage.getItem("dongxi");
         name=localStorage.getItem("name");
         yhid=localStorage.getItem("yhid");
        phone=localStorage.getItem("userphone");
       if(yhid==null || yhid==undefined || yhid==""){
           console.log("本地无数据");
           dongxi="河东";
           louhao=7;
           //localStorage.setItem("louhao",louhao);


       }else{
           //var m=document.getElementById("lh");
           //var nownumber=louhao-1;
           //m.selectedIndex=nownumber;

           console.log("本地有数据");

           jiazai();
           //jinyong(dongxi);

       }

        hedongxi(dongxi);
    };

function jiazai(){
       document.getElementById("nameinput").value=name;
       document.getElementById("numberinput").value=phone;

        console.log(name);
       //var id=document.getElementById("lh");
       //id.selectedIndex=louhao;
       //console.log(louhao);
       //hedongxi(dongxi);

}


function  phonechange(){
    name=document.getElementById("nameinput").value;
    phone=document.getElementById("numberinput").value;
    var Tongbu = Bmob.Object.extend("users");
    var query = new Bmob.Query(Tongbu);
    query.equalTo("name", name);
    query.equalTo("phone", phone);
    query.find({
        success: function(results) {
            // 循环处理查询到的数据
            if(results.length==0){
                sessionStorage.setItem("shifoushangchuan","f");
                console.log("无信息")

            }else {
                sessionStorage.setItem("shifoushangchuan","t");

                alert("已有您的信息,正在同步");
                //for (var i = 0; i < results.length; i--) {
                    var object = results[results.length-1];
                    var location=object.get("location");
                    //var p=document.getElementById("numberinput");
                    //p.value=object.get("phone");
                localStorage.setItem("userphone",object.get("phone"));
                localStorage.setItem("name",object.get("name"));
                locationchuli(location);
                    console.log(object.id);
                sessionStorage.setItem("scid",object.id);
                localStorage.setItem("yhid",object.id);

                //}
            }
        },
        error: function(error) {
            alert("查询失败: " + error.code + " " + error.message);
        }
    });
}

function locationchuli(l) {
    var a = l;
    var re = /[\u4000-\uFFFF]/g;
    louhao= a.replace(re, '');
    dongxi= a.substring(0,2);
    console.log(dongxi,louhao);
    localStorage.setItem("louhao",louhao);
    localStorage.setItem("dongxi",dongxi);
    hedongxi(dongxi);
    //jinyong(dongxi);

    songhuo();
}

function hedongxi(d){
    var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
    if(d=="河西"){
        b1.className="btn btn-primary btn-lg";
        b2.className="btn btn-default btn-lg";
    }
    if(d=="河东"){
        b1.className="btn btn-default btn-lg";
        b2.className="btn btn-primary btn-lg";
    }

    dongxi=d;
    //louhaojiazai();
    jinyong(dongxi);

}

function jinyong(i){
    var id=document.getElementById("lh");
    var y2=document.getElementById("p1");

    if(i=="河西"){
        y2.innerHTML="河西";
        for(var q= 1;q<id.options.length+1;i++){
            id.options[0]=null;
        }
        for(var a= 1;a<9;a++)
        {
            var neirong ="    "+a.toString();
            id.options.add(new Option(neirong, a.toString()));

        }

    }
    if(i=="河东"){
        y2.innerHTML="河东";
        for(var q= 1;q<id.options.length+1;i++){
            id.options[0]=null;
        }
        for(var a= 7;a<28;a++)
        {
            var neirong =a.toString();
            id.options.add(new Option(neirong, a.toString()));
        }

    }

    //var m=document.getElementById("lh");
    //var nownumber=louhao-1;
    //m.selectedIndex=nownumber;
    if(dongxi=="河西"){

        var m=document.getElementById("lh");
        var nownumber=louhao-1;
        m.selectedIndex=nownumber;

    }
     else if(dongxi=="河东"){
        var m=document.getElementById("lh");
        var nownumber=louhao-7;
        m.selectedIndex=nownumber;

    }
}
function xuanze(){
    var id=document.getElementById("lh");
    var neirong=id.value;
    localStorage.setItem("louhao",neirong);
    songhuo();

}

function shangchuan(){
    localStorage.setItem("dongxi",dongxi);
     name=document.getElementById("nameinput").value;
    phone=document.getElementById("numberinput").value;
    if(phone=="" || phone==null || name=="" ||name==null || name==undefined ||phone==undefined){
        alert("请完善信息");
    }else {

        localStorage.setItem("name", name);
        localStorage.setItem("userphone", phone);
        if (sessionStorage.getItem("shifoushangchuan") == "t") {
            var shangchuan = Bmob.Object.extend("users");
            var query = new Bmob.Query(shangchuan);
            var scid = sessionStorage.getItem("scid");

            query.get(scid, {
                success: function (sc) {
                    sc.set("phone", localStorage.getItem("userphone"));
                    sc.set("name", localStorage.getItem("name"));
                    sc.set("location", localStorage.getItem("dongxi") + localStorage.getItem("louhao") + "号楼");
                    sc.save();
                    alert("数据同步成功");
                    window.location.href="index.html";

                },
                error: function (object, error) {

                }
            });

        } else {
            var TJ = Bmob.Object.extend("users");
            var tj = new TJ();
            tj.set("name", localStorage.getItem("name"));
            tj.set("phone",localStorage.getItem("userphone"));
            tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
            tj.save(null, {
                success: function(tj) {
                    localStorage.setItem("yhid",tj.id);
                    sessionStorage.setItem("scid",tj.id);
                    sessionStorage.setItem("shifoushangchuan","t");
                    alert("数据同步成功");
                    window.location.href="index.html";

                },
                error: function(gameScore, error) {

                }
            });
        }
    }
}

function tiaozhuan(){
    localStorage.setItem("dongxi",dongxi);
    name=document.getElementById("nameinput").value;
    phone=document.getElementById("numberinput").value;
    if(phone=="" || phone==null || name=="" ||name==null || name==undefined ||phone==undefined){
        alert("请完善信息");
    }else {

        localStorage.setItem("name", name);
        localStorage.setItem("userphone", phone);
        if (sessionStorage.getItem("shifoushangchuan") == "t") {
            var shangchuan = Bmob.Object.extend("users");
            var query = new Bmob.Query(shangchuan);
            var scid = sessionStorage.getItem("scid");

            query.get(scid, {
                success: function (sc) {
                    sc.set("phone", localStorage.getItem("userphone"));
                    sc.set("name", localStorage.getItem("name"));
                    sc.set("location", localStorage.getItem("dongxi") + localStorage.getItem("louhao") + "号楼");
                    sc.save();
                    window.location.href="shangchuan.html";

                },
                error: function (object, error) {

                }
            });

        } else {
            var TJ = Bmob.Object.extend("users");
            var tj = new TJ();
            tj.set("name", localStorage.getItem("name"));
            tj.set("phone",localStorage.getItem("userphone"));
            tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
            tj.save(null, {
                success: function(tj) {
                    localStorage.setItem("yhid",tj.id);
                    sessionStorage.setItem("scid",tj.id);
                    sessionStorage.setItem("shifoushangchuan","t");
                    window.location.href="shangchuan.html";
                },
                error: function(gameScore, error) {

                }
            });
        }
    }
}