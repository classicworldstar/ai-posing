
var mX;
var mY;
var dataPoints = [
  { name : "camera000",
    region : {
      cameraPoints: [],
      mapPoints: []
    }
  }
];

window.onload=function(){
  //マウス移動時のイベントをBODYタグに登録する
  document.body.addEventListener("mousemove", function(e){
  
    //座標を取得し、格納
    mX = e.pageX;  //X座標
    mY = e.pageY;  //Y座標
  
    //座標を表示する
    document.getElementById("txtX").value = mX;
    document.getElementById("txtY").value = mY;
  });

  document.getElementById("map_area_id").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
 
    //座標を表示する
    document.getElementById("txtMapClickX").value = mX;
    document.getElementById("txtMapClickY").value = mY;

    document.getElementById("txt_log_id").innerHTML += '<a >MapPoints:[' + String(Math.round(mX-getRectLeft("map_area_id"))) + ',' + String(Math.round(mY-getRectTop("map_area_id"))) + ']</a><br>';
    
    goBottom("txt_log_id");
  };

  document.getElementById("camera_area_id").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
 
    //座標を表示する
    document.getElementById("txtCameraClickX").value = mX;
    document.getElementById("txtCameraClickY").value = mY;

    document.getElementById("txt_log_id").innerHTML += '<a >CameraPoints:[' + String(mX) + ',' + String(mY) + ']</a><br>';
    goBottom("txt_log_id");
  };

  // <input type="file" id="target" multiple>にchangeイベントを設定
  document.getElementById( "target1" ).addEventListener( "change", function() {
    // フォームで選択された全ファイルを取得
    var fileList = this.files ;

    // 個数分の画像を表示する
    for( var i=0,l=fileList.length; l>i; i++ ) {
      // Blob URLの作成
      var blobUrl = window.URL.createObjectURL( fileList[i] ) ;

      // HTMLに書き出し (src属性にblob URLを指定)
//  		document.body.innerHTML += '<a href="' + blobUrl + '" target="_blank"><img src="' + blobUrl + '"></a>' ;
//  		document.getElementById("map_area_id").innerHTML += '<a href="' + blobUrl + '" target="_blank"><img src="' + blobUrl + '"></a>' ;
      document.getElementById("map_area_id").innerHTML += '<a><img src="' + blobUrl + '"></a>' ;
    }
  } ) ;

    // <input type="file" id="target" multiple>にchangeイベントを設定
    document.getElementById( "target2" ).addEventListener( "change", function() {
      // フォームで選択された全ファイルを取得
      var fileList = this.files ;
  
      // 個数分の画像を表示する
      for( var i=0,l=fileList.length; l>i; i++ ) {
        // Blob URLの作成
        var blobUrl = window.URL.createObjectURL( fileList[i] ) ;
  
        // HTMLに書き出し (src属性にblob URLを指定)
//    		document.body.innerHTML += '<a href="' + blobUrl + '" target="_blank"><img src="' + blobUrl + '"></a>' ;
//        document.getElementById("video_area_id").innerHTML = '<a href="' + blobUrl + '" target="_blank"><img src="' + blobUrl + '"></a>' ;
        document.getElementById("camera_area_id").innerHTML = '<a><img src="' + blobUrl + '"></a>' ;
      }
    } ) ;
    
}


function goBottom(targetId) {
  var obj = document.getElementById(targetId);
  if(!obj) return;
  obj.scrollTop = obj.scrollHeight;
}

function getRectLeft(targetId) {
  // 要素の位置座標を取得
  var clientRect = document.getElementById(targetId).getBoundingClientRect() ;

  // 画面の左端から、要素の左端までの距離
  return clientRect.left ;

}

function getRectTop(targetId) {
  // 要素の位置座標を取得
  var clientRect = document.getElementById(targetId).getBoundingClientRect() ;

  // 画面の左端から、要素の左端までの距離
  return clientRect.top ;

}