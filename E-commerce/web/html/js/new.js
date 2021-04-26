$(document).ready(function () {
    const button1 = $(".drop-btn1"); 
    const button2 = $(".drop-btn2"); 
    const button3 = $(".drop-btn3"); 
    button1.click(function () {
        $(".dropdown .drop-p1").toggle();
        $(".drop").css({ display: "block" });
        button1.find('i').toggleClass('fa-minus');

    });
    button2.click(function () {
        $(".dropdown .drop-p2").toggle();
        $(".drop").css({ display: "block" });
        button2.find('i').toggleClass('fa-minus');

    });
    button3.click(function () {
        $(".dropdown .drop-p3").toggle();
        $(".drop").css({ display: "block" });
        button3.find('i').toggleClass('fa-minus');

    });
});