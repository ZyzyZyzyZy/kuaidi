window.onload=
    function(){
        //var y1=document.getElementById("h1");
        //var y2=document.getElementById("p1");
        //var y3=document.getElementById("p2");
        //var y4=document.getElementById("lh");
        //var y5=document.getElementById("qr");
        //y1.style.visibility="hidden";
        //y2.style.visibility="hidden";
        //y3.style.visibility="hidden";
        //y4.style.visibility="hidden";
        //y5.style.visibility="hidden";
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");
        try{
        var louhao=localStorage.getItem("louhao");
        var dongxi=localStorage.getItem("dongxi");
        var name=localStorage.getItem("name");
        if(louhao==null){
            var y1=document.getElementById("h1");
            var y2=document.getElementById("p1");
            var y3=document.getElementById("p2");
            var y4=document.getElementById("lh");
            var y5=document.getElementById("qr");
            var y6=document.getElementById("h2");
            var y7=document.getElementById("b1");
            var y8=document.getElementById("b2");
            var y9=document.getElementById("line1");
            var y10=document.getElementById("line2");
            var y11=document.getElementById("sc");
            y11.style.visibility="hidden";
            y1.style.visibility="hidden";
            y2.style.visibility="hidden";
            y3.style.visibility="hidden";
            y4.style.visibility="hidden";
            y5.style.visibility="hidden";
            y6.style.visibility="hidden";
            y7.style.visibility="hidden";
            y8.style.visibility="hidden";
            y9.style.visibility="hidden";
            y10.style.visibility="hidden";
            sessionStorage.setItem("shifoushangchuan","f");


        }else{
            var CZ = Bmob.Object.extend("users");
            var query = new Bmob.Query(CZ);
// 查询所有数据
            query.find({
                success: function(results) {

                    for (var i = 0; i < results.length; i++) {
                        var object = results[i];
                        if(results[i].get('name')==localStorage.getItem('name')){
                            sessionStorage.setItem("shifoushangchuan","t");
                            var id=results[i].id;
                            sessionStorage.setItem("scid",id);
                            break;
                            //shangchuan();
                        }else{
                            sessionStorage.setItem("shifoushangchuan","f");
                            //var TJ = Bmob.Object.extend("users");
                            //var tj = new TJ();
                            //tj.set("name", localStorage.getItem("name"));
                            //tj.set("phone",localStorage.getItem("userphone"));
                            //tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
                            //tj.save(null, {
                            //    success: function(tj) {
                            //
                            //    },
                            //    error: function(gameScore, error) {
                            //
                            //    }
                            //});
                        }
                    }
                },
                error: function(error) {
                    //alert("查询失败: " + error.code + " " + error.message);
                }
            });
            var nameinput=document.getElementById("nameinput");
            nameinput.value=name;
            var ph=document.getElementById("numberinput");
            ph.value=localStorage.getItem("userphone");
            if(dongxi=="河西"){
                jihuo("1");
                jinyong("河西");
                var m=document.getElementById("lh");
                var nownumber=louhao-1;
                m.selectedIndex=nownumber;

            }
            if(dongxi=="河东"){
                jihuo("2");
                jinyong("河东");
                var m=document.getElementById("lh");
                var nownumber=louhao-7;
                m.selectedIndex=nownumber;

            }
        }
        }catch(e){

        }
    }

function jihuo(j1){
    var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
   if(j1=="1"){
      b1.className="btn btn-primary btn-lg";
      b2.className="btn btn-default btn-lg";
   }
   if(j1=="2"){
      b1.className="btn btn-default btn-lg";
      b2.className="btn btn-primary btn-lg";
   }
}
function x1(v1){
    var weizhi1=document.getElementById("dongxi");
    var vv=v1;

    localStorage.setItem("dongxi",vv);
    jinyong(vv);
    xuanze();
}
function jinyong(i){
    var id=document.getElementById("lh");
    var y1=document.getElementById("h1");
    var y2=document.getElementById("p1");
    var y3=document.getElementById("p2");
    var y5=document.getElementById("qr");
    var y11=document.getElementById("sc");
    var y9=document.getElementById("line2");
    y1.style.visibility="visible";
    y2.style.visibility="visible";
    y3.style.visibility="visible";
    y5.style.visibility="visible";
    id.style.visibility="visible";
    y9.style.visibility="visible";
    y11.style.visibility="visible";

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


}
function xuanze(){
    var id=document.getElementById("lh");
    var neirong=id.value;
    localStorage.setItem("louhao",neirong);
    songhuo();
    tongji();

}
function namechange(){
    var name=document.getElementById("nameinput").value;
    localStorage.setItem("name",name);

}

function phonechange(){
    var phone=document.getElementById("numberinput").value;
    localStorage.setItem("userphone",phone);
    var y6=document.getElementById("h2");
    var y7=document.getElementById("b1");
    var y8=document.getElementById("b2");
    var y9=document.getElementById("line1");
    y9.style.visibility="visible";
    y8.style.visibility="visible";
    y7.style.visibility="visible";
    y6.style.visibility="visible";
}

function tongji(){

    var CZ = Bmob.Object.extend("users");
    var query = new Bmob.Query(CZ);
// 查询所有数据
    query.find({
        success: function(results) {

            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                if(results[i].get('name')==localStorage.getItem('name')){
                    sessionStorage.setItem("shifoushangchuan","t");
                    var id=results[i].id;
                    sessionStorage.setItem("scid",id);
                    shangchuan();
                    break;
                    //shangchuan();
                }else{
                    sessionStorage.setItem("shifoushangchuan","f");
                    //var TJ = Bmob.Object.extend("users");
                    //var tj = new TJ();
                    //tj.set("name", localStorage.getItem("name"));
                    //tj.set("phone",localStorage.getItem("userphone"));
                    //tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
                    //tj.save(null, {
                    //    success: function(tj) {
                    //
                    //    },
                    //    error: function(gameScore, error) {
                    //
                    //    }
                    //});
                }
            }
        },
        error: function(error) {
            //alert("查询失败: " + error.code + " " + error.message);
        }
    });


    //if(sessionStorage.getItem("shifoushangchuan")=="t"){
    //    shangchuan();
    //    return;
    //}
    if(sessionStorage.getItem("shifoushangchuan")=="f"){
        var TJ = Bmob.Object.extend("users");
        var tj = new TJ();
        tj.set("name", localStorage.getItem("name"));
        tj.set("phone",localStorage.getItem("userphone"));
        tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
        tj.save(null, {
            success: function(tj) {

                sessionStorage.setItem("scid",tj.id);
                sessionStorage.setItem("shifoushangchuan","t");
             //alert("数据同步成功1");
            },
            error: function(gameScore, error) {

            }
        });
    }




    //var TJ = Bmob.Object.extend("users");
    //var tj = new TJ();
    //tj.set("name", localStorage.getItem("name"));
    //tj.set("phone",localStorage.getItem("userphone"));
    //tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
    //tj.save(null, {
    //    success: function(tj) {
    //
    //    },
    //    error: function(gameScore, error) {
    //
    //    }
    //});
}

function shangchuan(){
    var shangchuan = Bmob.Object.extend("users");
    var query = new Bmob.Query(shangchuan);
    var scid=sessionStorage.getItem("scid");
    query.get(scid, {
        success: function(sc) {
            sc.set("phone", localStorage.getItem("userphone"));
            sc.set("name",localStorage.getItem("name"));
            sc.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
            sc.save();
            //alert("数据同步成功2");

            // The object was retrieved successfully.
        },
        error: function(object, error) {

        }
    });
}

function queren(){
    tongji();
    alert("数据同步成功");
    window.location.href="index.html";
}