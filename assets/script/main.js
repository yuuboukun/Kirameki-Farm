/**
 * ハンバーガーメニュー
 */
var nav = $('.header__nav');

// ボタンをクリックしたら
$('.header__hamburger-btn').on('click', function () {
    // ナビゲーションの表示・非表示を繰り返す
    nav.toggleClass('header__nav--active');
});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // ハンバーガーメニューを閉じる
    nav.removeClass('header__nav--active');
});

/**
 * アコーディオン
 */
$('.faq__question').on('click', function () {
        // アンサーを選択
        var answer = $(this).next();

        // アンサーを表示非表示
        answer.slideToggle();

        // アイコンの入れ替え
        $(this).find('.bi').toggleClass('replace');
})
