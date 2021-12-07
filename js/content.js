var blinkTimingArr;
var timingCnt = 0;
var timer;
var txtContMax = 7;
var txtContMin = 2;
var txtLen;

var db;
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

function selectRecord(idx) {

    $.ajax({
        url: './db/selectRecord.php',
        type: 'POST',
        data: {
            sql: 'SELECT * FROM `record` WHERE `index` > ' + idx + ' ORDER BY `index` ASC LIMIT 10'
        },
        success: function (result) {
            var resultArr = eval(result);
            resultArr.sort(function(){ return -1; });

            $(".record_container .record").remove();

            $(resultArr).each(function(idx) {
                var owner = $(this);
                $(".record_container").append("<div class='record' data-index='" + owner[0] + "'>" +
                    "<div class='title'>" + owner[1] + "</div>" +
                    "<div class='date'>" + owner[2] + "</div>" +
                    "<div class='blank'></div>" +
                "</div>");
            });

            
        }
    });

}
