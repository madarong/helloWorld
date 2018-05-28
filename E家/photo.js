var num = 0;
var imageId = 0;
var otherIndex = 0;
var tb = 0;
$(function () {
    init()
})

function init() {
    $('#add1').on('click',function () {
        pic('t'+otherIndex+'_'+tb)
    })
}

function pic(i) {
    imageId=i;
    /*
    *    调用壳接口
    *    goTakePhoto(params)
    *    @params 回调函数方法名
    * */
    image()
}

function image(i) {
    var html="";
    html+='<div class="upload-img lg" id="other'+otherIndex+'" style="margin-right:23px">';
    html+='<input id="picOther1'+otherIndex+'" type="file" onclick="pic6C(this)">';
    html+='<img src="" id="t'+otherIndex+'_'+tb+'">';
    html+='</div>';
    $(".add1").before(html);
    /*
    *  if(myScroll){
     myScroll.refresh();
     }
    * */

    num++;
    otherIndex++;
    var img = document.getElementById(imageId)
    var image = 'data:image/png;base64,'+i;
    img.src = image;
    /*
    * 上传图片
    * @params {string} a 图片base64
    * @params {tring}  otherImgId 图片ID
    * @params {string} insured 保单号
    * @params {string} img img.src
    * imgUpload(a,other1ImgId,insured,img);
    *
     */


}
/*
* 调用拍照，或从相册中获取
* */
function pics1() {
    closeDiv('open0');
    $("#MyPhoto").attr("onclick","goTakePhoto('imgs0')");
    $("#MyAlbum").attr("onclick","openLibrary('imgs0')");
    showDiv('open0');
}