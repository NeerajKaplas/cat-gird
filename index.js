var nextIndex = 0;
var rowSize = 4;
var gridImagesIndex = [];
$(document).ready(function () {
    attachEvents();
})

function attachEvents() {
    $(".image-row").on("click", 'img', function () {
        var $el = $(this);
        var index = $el.attr("data-index");
        var $gridEl = $("#grid-" + nextIndex);
        $gridEl.find("img").attr("src", $el.attr('src'));
        $gridEl.find(".curtain").addClass('u-hide');
        gridImagesIndex.push(index);
        if (nextIndex == 11) {
            if (validate()) {
                alert("you won");
            } else {
                alert("you lose");
            }
        } else {
            nextIndex++;
        }
    });
}


function validate() {
    var length = gridImagesIndex.length / rowSize;
    var check = true;
    for (var i = 0; i < length; i++) {
        var item = gridImagesIndex.slice(i, rowSize);
        if (hasDuplicate(item.slice())) {
            check = false;
            break;
        }
    }
    return check;
}

function hasDuplicate(arr) {
    arr.sort();
    var check = false;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            check = true;
            break
        }
    }
    return check;
}