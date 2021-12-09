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

    selectRecord();

});


function finishBlink() {
    console.log("끝");

    clearTimeout(timer);
}

function selectRecord(idx) {
    var sql;
    if(!idx) sql = 'SELECT * FROM `record` ORDER BY `index` DESC LIMIT 10';
    else sql = 'SELECT * FROM `record` WHERE `index` > ' + idx + ' ORDER BY `index` ASC LIMIT 10';

    $.ajax({
        url: './db/selectRecord.php',
        type: 'POST',
        data: {
            sql: sql
        },
        success: function (result) {
            var resultArr = eval(result);
            if(idx) resultArr.sort(function(){ return -1; });

            $(".record_container .record").remove();

            $(resultArr).each(function(idx) {
                var owner = $(this);
                $(".record_container").append("<div class='record' data-index='" + owner[0] + "'>" +
                    "<div class='title'>" + owner[1] + "</div>" +
                    "<div class='date'>" + owner[2] + "</div>" +
                    "<div class='blank'></div>" +
                "</div>");

                $(".record_container .record").eq(idx).on(touchend, function() {
                    console.log("레코드 클릭됨");
                    var recordIdx = $(this).attr("data-index");
                    selectRecordDetail(recordIdx);
                });

                $(".record_container .record .blank").eq(idx).on(touchend, function(e) {
                    e.stopPropagation();
                    console.log("blank 클릭됨");
                });

            });
        }
    });
}

function selectRecordDetail(idx) {
    $.ajax({
        url: './db/selectRecordDetail.php',
        type: 'POST',
        data: {
            sql: 'SELECT * FROM `record` WHERE `index` = ' + idx + ''
        },
        success: function (result) {
            // console.log(result);
            var resultArr = eval(result);
            // console.log(resultArr);

            showRecord(resultArr[0], resultArr[1], resultArr[2], resultArr[3], resultArr[4], resultArr[5], resultArr[6], resultArr[7]);
        }
    });
}

function insertRecord(title, picker, pickerIdx, startIdx, timingArr, contentArr) {

    $.ajax({
        url: './db/insertRecord.php',
        type: 'POST',
        data: {
            sql: 'INSERT INTO `record`(`title`, `result_picker`, `result_picker_index`, `condition_start_index`, `condition_timing_array`, `condition_content_array`) VALUES ("' + title + '","' + picker + '",' + pickerIdx + ',' + startIdx + ',"' + timingArr + '","' + contentArr + '")'
        },
        success: function (result) {
            console.log(result);
            // INSERT INTO `record`(`title`, `result_picker`, `result_picker_index`, `condition_start_index`, `condition_timing_array`, `condition_content_array`) VALUES ("테스트데이터","당첨자",0,0,"타이밍배열","컨텐츠배열")
        }
    });

}




function showRecord(idx, title, date, picker, pickerIdx, startIdx, timingArr, contentArr) {
    console.log("showRecord");

    $(".index_cont .context").html(idx);
    $(".title_cont .context").html(title);
    $(".date_cont .context").html(date);
    $(".picker_cont .context").html(picker);
    $(".picker_index_cont .context").html(pickerIdx);
    $(".start_index_cont .context").html(startIdx);
    $(".timing_array_cont .context").html(timingArr);
    $(".content_array_cont .context").html(contentArr);



}


