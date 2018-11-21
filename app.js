
var mX;
var mY;
var dataPoints = [
  { name : "camera000",
    region : {
      mapPoints: [],
      cameraPoints: []
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
    var localX = Math.round(mX-getRectLeft("map_area_id"));
    var localY = Math.round(mY-getRectTop("map_area_id"));
    //座標を表示する
    document.getElementById("txtMapClickX").value = localX;
    document.getElementById("txtMapClickY").value = localY;

    document.getElementById("txt_log_id").innerHTML += '<a >MapPoints:[' + String(localX) + ',' + String(localY) + ']</a><br>';
    
    goBottom("txt_log_id");
  };

  document.getElementById("camera_area_id").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
    var localCameraX = Math.round(mX-getRectLeft("camera_area_id"));
    var localCameraY = Math.round(mY-getRectTop("camera_area_id"));
    var localMapX = document.getElementById("txtMapClickX").value;
    var localMapY = document.getElementById("txtMapClickY").value;

    //座標を表示する
    document.getElementById("txtCameraClickX").value = localCameraX;
    document.getElementById("txtCameraClickY").value = localCameraY;

    document.getElementById("txt_log_id").innerHTML += '<a >CameraPoints:[' + String(localCameraX) + ',' + String(localCameraY) + ']</a><br>';

    var localData = {name : "camera000", region: {mapPoints: [localMapX, localMapY], cameraPoints : [localCameraX, localCameraY]}};
    dataPoints.push(localData);
    
    goBottom("txt_log_id");
  };
  document.getElementById("make_json_data_id").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
    document.getElementById("txt_log_id").innerHTML += '<a >Start click map and camera image</a><br>';
    dataPoints.length = 0;

    document.getElementById("txtCameraClickX").value = "";
    document.getElementById("txtCameraClickY").value = "";
    document.getElementById("txtMapClickX").value = "";
    document.getElementById("txtMapClickY").value = "";
    
    goBottom("txt_log_id");
  };

  document.getElementById("save_json_data_id").onclick = function() {
    // ここに#buttonをクリックしたら発生させる処理を記述する
    document.getElementById("txt_log_id").innerHTML += '<a>' + JSON.stringify(dataPoints) + '</a><br>';
//    document.getElementById("txt_log_id").innerHTML += '<a>test</a><br>';

    dataPoints.length = 0;

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