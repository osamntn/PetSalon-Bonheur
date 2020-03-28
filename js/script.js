$(function(){
	var count = $("#slide li").length;
	var current = 1;
	var next = 2;
	var interval = 3000;
	var duration = 500;
	var timer;

	// 1番目の写真以外は非表示
	$("#slide li:not(:first-child)").hide();

	// 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
	timer = setInterval(slideTimer, interval);
	
	// slideTimer関数
	function slideTimer(){
		$("#slide li:nth-child(+" + current + ")").fadeOut(duration);
		$("#slide li:nth-child(+" + next + ")").fadeIn(duration);

//currentをnextに変更する
		current = next;
		next = ++next;　

		if(next > count){
			next = 1;
		}

		$("#button li a").removeClass("target");
		$("#button li:nth-child("+ current +") a").addClass("target");
	}

	$("#button li a").click(function(){
		next = $(this).html();

		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
		slideTimer();
		
		return false;
	});
});



//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    var height=$("header").height();
    $("body").css("margin-top", height + 10);//10pxだけ余裕をもたせる
});




//■headerスクロール

$(function() {
  var $win = $(window),
      $header = $('header'),
      animationClass = 'is-animation';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});
//


//よくある質問アコーディオン


$(function() {

//#acMenuの中のdt要素がクリックされたら
	$('#acMenu dt').click(function(){
 
		//クリックされた#acMenuの中dt要素に隣接するdd要素が開いたり閉じたりする。
		$(this).next('dd').slideToggle();
 
	});
});






//■page topボタン

$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

 

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){

    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();

  }else{

    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();

  }
});

 

// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},100);
  return false;

});


});