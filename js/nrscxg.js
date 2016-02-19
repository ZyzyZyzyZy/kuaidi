window.onload=

Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");

sc();
songhuo();
function sc(){
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
    //if(dongxi=="河西"){
    //    var sjk=Bmob.Object.extend("ZhangYue");
    //    var sjks=new sjk();
    //    sjks.set("danhao",danhao);
    //    sjks.set("username",name);
    //    sjks.set("location",dongxi);
    //    sjks.set("number",louhao);
    //    sjks.set("quhuoma",quhuoma);
    //    sjks.set("guitaihao",guihao);
    //    sjks.set("beizhu",beizhu);
    //    sjks.save(null, {
    //        success: function(object) {
    //            //alert("create object success, object id:"+object.id);
    //        },
    //        error: function(model, error) {
    //            alert("数据同步错误");
    //        }
    //    });
    //
    //}
    //if(dongxi=="河东"){
    //    if(louhao<21){
    //        var sjk2=Bmob.Object.extend("DongJing");
    //        var sjks2=new sjk2();
    //        sjks2.set("danhao",danhao);
    //        sjks2.set("username",name);
    //        sjks2.set("location",dongxi);
    //        sjks2.set("number",louhao);
    //        sjks2.set("quhuoma",quhuoma);
    //        sjks2.set("guitaihao",guihao);
    //        sjks2.set("beizhu",beizhu);
    //        sjks2.save(null, {
    //            success: function(object) {
    //                //alert("create object success, object id:"+object.id);
    //            },
    //            error: function(model, error) {
    //                alert("数据同步错误");
    //            }
    //        });
    //    }
    //    else {
    //        var sjk3=Bmob.Object.extend("QinPanJi");
    //        var sjks3=new sjk3();
    //        sjks3.set("danhao",danhao);
    //        sjks3.set("username",name);
    //        sjks3.set("location",dongxi);
    //        sjks3.set("number",louhao);
    //        sjks3.set("quhuoma",quhuoma);
    //        sjks3.set("guitaihao",guihao);
    //        sjks3.set("beizhu",beizhu);
    //        sjks3.save(null, {
    //            success: function(object) {
    //                //alert("create object success, object id:"+object.id);
    //            },
    //            error: function(model, error) {
    //                alert("数据同步错误");
    //            }
    //        });
    //    }
    //}

}