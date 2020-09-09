$("#top-know").on('click',event=>{
    $('#more-info').slideToggle();
    $(event.currentTarget).find("img").toggleClass("rotate");
});

$(".link").on('mouseenter',event=>{
    console.log("hello");
    $(event.currentTarget).addClass("red");
    $(event.currentTarget).hide();
    $(event.currentTarget).fadeIn();
})
.on('mouseleave',event=>{
    $(event.currentTarget).removeClass("red");
});