$(function(){
    setTimeout(function(){

    },1000);
});

$(window).on('scroll',function(){
    let ccanime = $('.ccanime');
    let anistart = $('.rogo').offset().top;
    let rogoanime = $('.rogoanime');
    let ccrogo = $('.mounten').offset().top;


if ($(this).scrollTop() > ccrogo){
    rogoanime.fadeIn();
}

if ($(this).scrollTop() > anistart){
    ccanime.fadeIn();
}
});
