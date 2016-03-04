window.onload=
    function () {
        Bmob.initialize("250ee02b502803ee9c571ed74f36a5de", "bd1b1af6ca8ab8bf686885d2384c3349");

        var ts=document.getElementById("tishi");
        ts.style.visibility="hidden";

        var url2=localStorage.getItem("linkurl");
        if(url2==null){
            var y1=document.getElementById("queren");
            y1.style.visibility="hidden";
            sessionStorage.setItem("shifoushangchuan2","f");

        }else{
            var tu=document.getElementById("imgs");
            tu.src=url2;
            var y1=document.getElementById("queren");
            y1.style.visibility="visible";
            sessionStorage.setItem("shifoushangchuan2","t");


            var CZ = Bmob.Object.extend("linkurl");
            var query = new Bmob.Query(CZ);
// 查询所有数据
            query.find({
                success: function(results) {

                    for (var i = 0; i < results.length; i++) {
                        var object = results[i];
                        if(results[i].get('name')==localStorage.getItem('name')){
                            sessionStorage.setItem("shifoushangchuan2","t");
                            var id=results[i].id;
                            sessionStorage.setItem("scid2",id);
                            break;
                            //shangchuan();
                        }else{
                            sessionStorage.setItem("shifoushangchuan2","f");

                        }
                    }
                },
                error: function(error) {
                    //alert("查询失败: " + error.code + " " + error.message);
                }
            });


        }


    }/**
 * Created by zhangyue on 16/3/4.
 */

function dianji(){
    var fileUploadControl = $("#profilePhotoFileUpload").val();
    var extStart = fileUploadControl.lastIndexOf(".");
    var ext = fileUploadControl.substring(extStart, fileUploadControl.length).toUpperCase();
    if (ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
        alert("图片限于png,gif,jpeg,jpg格式");
        //return false;
    }else{
        var ts=document.getElementById("tishi");
        ts.style.visibility="visible";
        scc();
    }
}

function  scc(){
    var fileUploadControl = $("#profilePhotoFileUpload")[0];

    if (fileUploadControl.files.length > 0) {
        var fileObjs = fileUploadControl.files[0];
        var file = new Bmob.File(fileObjs.name, fileObjs);

        //上传文件
        file.save().then(function (obj) {

            var PhotoList = Bmob.Object.extend("test1");
            var photoList = new PhotoList();
            //把返回的文件插入到文件列表
            var image = $("<image src='" + obj.url() + "'/>");
            var imagelist = $("#imagelist")

            imagelist.append(image);
            var url = obj.url();
            sessionStorage.setItem("ddd",url);
            //把文件的url保存在表“PhotoList”的字段“url” 中
            photoList.set("url", obj.url());


            var a=url;
            localStorage.setItem("linkurl",a);
            var ts=document.getElementById("tishi");
            ts.style.visibility="hidden";
            var tu=document.getElementById("imgs");
            tu.src=url;
            var y1=document.getElementById("queren");
            y1.style.visibility="visible";

            tongji();



        }, function (error) {
            alert('上传错误！请重新上传图片。');
            var ts=document.getElementById("tishi");
            ts.style.visibility="hidden";        });
//            }
    }

}

function tiaozhuan(){
    window.location.href="index.html";
}

function tongji(){

    if(sessionStorage.getItem("shifoushangchuan2")=="t"){
        shangchuan();
    }
    if(sessionStorage.getItem("shifoushangchuan2")=="f"){
        var TJ = Bmob.Object.extend("linkurl");
        var tj = new TJ();
        tj.set("name", localStorage.getItem("name"));
        tj.set("linkurl", localStorage.getItem("linkurl"));
        tj.set("phone",localStorage.getItem("userphone"));
        tj.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
        tj.save(null, {
            success: function(tj) {
                //alert("数据同步成功1");
            },
            error: function(gameScore, error) {

            }
        });
    }

}

function shangchuan(){
    var shangchuan = Bmob.Object.extend("linkurl");
    var query = new Bmob.Query(shangchuan);
    var scid=sessionStorage.getItem("scid2");
    query.get(scid, {
        success: function(sc) {
            sc.set("linkurl", localStorage.getItem("linkurl"));
            sc.set("location",localStorage.getItem("dongxi")+localStorage.getItem("louhao")+"号楼");
            sc.save();
            //alert("数据同步成功2");

            // The object was retrieved successfully.
        },
        error: function(object, error) {

        }
    });
}