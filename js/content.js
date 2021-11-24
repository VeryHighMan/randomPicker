var blinkTimingArr;
var timingCnt = 0;
var timer;
var txtContMax = 7;
var txtContMin = 2;
var txtLen;

$(window).on("load", function() {
    console.log("=== page start ===");

    blinkTimingArr = pageData.blinkTimingArr;

    var txtContainer = $("#text_container");

    var firstTxt = $(".text_cont").eq(0);
    txtLen = $(".text_cont").length;

    $(".add_btn").on(touchend, function() {
        if($(".text_cont").length < txtContMax) {
            txtContainer.append('<div class="text_cont">' +
                '<span class="text"></span>' +
                '<input type="text" class="input" maxlength="6"/>' +
            '</div>');
        }
    });

    $(".remove_btn").on(touchend, function() {
        if($(".text_cont").length > txtContMin) {
            txtContainer.find(".text_cont:last-child").remove();
        }
    });

    $(".start_btn").on(touchend, function() {

        $(".text_cont").each(function() {
            var owner = $(this);
            owner.find(".input").addClass("remove");
            owner.find(".text").html(owner.find(".input").val());

            owner.on("blink", function() {
                owner.addClass("on");
                timer = setTimeout(function() {
                    owner.removeClass("on");
    
                    if(owner.next().length >= 1) owner.next().trigger("blink");
                    else firstTxt.trigger("blink");
                    
                    timingCnt++;
                    if(timingCnt > blinkTimingArr.length) {
                        timingCnt = 0;
                        finishBlink();
                    }
                }, blinkTimingArr[timingCnt]);
            });

        });

        $(".text_cont").eq(Math.floor(Math.random() * txtLen)).trigger("blink");
    });

});


function finishBlink() {
    console.log("끝");






    clearTimeout(timer);




}






function jump(target) {
    //WITH Timelines (cleaner, more versatile)
    // var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
    var tl = gsap.timeline();
    // tl.to("#player", {x: 0, duration: 1});
    tl.to(target, {y: -100, duration: 1});
    // tl.to("#player", {opacity: 0, duration: 1});

    // then we can control the whole thing easily...
    // tl.pause();
    // tl.resume();
    // tl.seek(1.5);
    // tl.reverse();


}





