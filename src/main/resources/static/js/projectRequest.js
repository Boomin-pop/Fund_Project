// 프로그래스 진행상황을 위한 입력 체크
function updateProgressBarAndSubmitButton() {
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    $('.progress-value').html(sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
}

// 입력 받은 값이 v 버전 input 박스에 복사
$('#category').on('propertychange change paste input', function () {
    $('#category-v').val($('#category').val());
    updateProgressBarAndSubmitButton();
});
$('#title').on('propertychange change paste input', function () {
    $('#title-v').val($('#title').val());
    updateProgressBarAndSubmitButton();
});
$('input[name=work]').on('propertychange change paste input', function () {
    $('#work-v').val($('input[name=work]:checked').val());
    updateProgressBarAndSubmitButton();
});
$('#requested').on('propertychange change paste input', function () {
    $('#requested-v').val($('#requested').val());
    updateProgressBarAndSubmitButton();
});
$('#budget').on('propertychange change paste input', function () {
    $('#budget-v').val(addCommas($('#budget').val().replace(/[^0-9]/g, "")));
    updateProgressBarAndSubmitButton();
});
$('#wanted').on('propertychange change paste input', function () {
    $('#wanted-v').val($('#wanted').val());
    updateProgressBarAndSubmitButton();
});
$('#close').on('propertychange change paste input', function () {
    $('#close-v').val($('#close').val());
    updateProgressBarAndSubmitButton();
});
$('#term').on('propertychange change paste input', function () {
    $('#term-v').val($('#term').val());
    updateProgressBarAndSubmitButton();
});

// 입력이 여부에 따른 값 리턴
function inputChk(val) {
    return val ? 12.5 : 0;
}


// 다음, 이전버튼
function showNextStep(next) {
    let currentDisplay = $('div[id^="step"]:visible');
    let targetStep = next ? currentDisplay.next() : currentDisplay.prev();

    if (!targetStep.length || targetStep.attr('id') === 'step6') {
        return;  // 첫 번째에서 이전 버튼을 누를 경우나 여섯 번째에서 다음 버튼을 누를 경우 아무 작업도 하지 않음
    }

    currentDisplay.css('display', 'none');
    targetStep.css('display', 'block');
}


$('#nextBtn').on("click", function () {
    showNextStep(true);
});

$('#prevBtn').on("click", function () {
    showNextStep(false);
});

// budget-v 3자리 마다 " , " 붙히기
function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$("#budget-v").on("input", function () {
    this.value = addCommas(this.value.replace(/[^0-9]/g, ""));
});

// submit전 유효성 체크
function chk() {
    const requiredFields = [
        {id: 'category', message: '카테고리를 선택해주세요'},
        {id: 'title', message: '제목을 작성해주세요'},
        {name: 'work', message: '필요한 업무를 선택해주세요'},
        {id: 'requested', message: '요청사항을 입력해주세요'},
        {id: 'budget', message: '예산을 입력해주세요'},
        {id: 'wanted', message: '모집 마감 일자를 선택해주세요'},
        {id: 'close', message: '프로젝트 마감 일자를 선택해주세요'},
        {id: 'term', message: '작업 기간을 입력해주세요'}
    ];

    for (const field of requiredFields) {
        const element = field.id ? $('#' + field.id) : $('input[name="' + field.name + '"]');
        if (element.val() === '') {
            event.preventDefault();
            alert(field.message);
            element.focus();
            return false;
        }
    }

    const budgetValue = parseInt($('#budget').val().replace(/[^0-9]/g, ''));
    if (budgetValue < 10000) {
        event.preventDefault();
        $('#budgetErrorMessage').text('예산은 10,000 이상이어야 합니다.');
        $('#budget').focus();
        return false;
    } else {
        $('#budgetErrorMessage').text(''); // Clear the error message if valid value
    }
}

const modal = document.getElementById('myModal');
const form = document.getElementById('requestForm');
const progress = document.querySelector('.progress-bar');
const progressValue = document.querySelector('.progress-value');

// 모달 닫기 버튼 클릭 시 경고 알림 보여주기
modal.querySelector('.btn-close').addEventListener('click', function (event) {
    if (formIsDirty()) {
        if (!isEmptyForm()) {
            if (!confirm('변경 사항이 저장되지 않을 수 있습니다. 정말로 닫으시겠습니까?')) {
                event.preventDefault(); // 모달을 닫지 않도록 기본 동작을 막습니다.
            } else {
                clearFormInputs();
            }
        }
    }
});

function clearFormInputs() {
    // 입력 요소들의 값을 초기화합니다.
    $('input[type="text"]').val('');
    $('textarea').val('');
    $('input[type="radio"]').prop('checked', false);
    $('select').prop('selectedIndex', 0); // 혹은 원하는 선택 인덱스로 설정
    // 추가로 다른 입력 요소들도 초기화할 수 있습니다.
}

// 폼 필드가 수정되었는지 확인하는 함수
function formIsDirty() {
    // 여기에 필요한 로직을 추가하여 수정 여부를 판단합니다.
    // 필드의 현재 값과 초기값을 비교하여 수정 여부를 판단할 수 있습니다.
    // 수정 여부에 따라 true 또는 false를 반환합니다.
    // 이 예시에서는 단순히 폼이 수정되었다고 가정합니다.
    return true;
}

// 폼이 비어있는지 확인하는 함수
function isEmptyForm() {
    const inputFields = form.querySelectorAll('input[type="text"], textarea, select');
    for (const field of inputFields) {
        if (field.value.trim() !== '') {
            return false; // 하나라도 입력된 필드가 있다면 false 반환
        }
    }
    return true; // 모든 필드가 비어있으면 true 반환
}

// 현재 날짜로부터 3일 뒤부터 선택 가능
$(document).ready(function () {
    // 현재 날짜 구하기
    var currentDate = new Date();

    // 5일 후의 날짜 계산
    var fiveDaysLater = new Date(currentDate);
    fiveDaysLater.setDate(currentDate.getDate() + 3);

    // 날짜 입력 포맷 생성 (YYYY-MM-DD)
    var formattedFiveDaysLater = fiveDaysLater.toISOString().split('T')[0];

    // 필요한 input 엘리먼트에 최소 날짜 설정
    $('#wanted').attr('min', formattedFiveDaysLater);
    $('#close').attr('min', formattedFiveDaysLater);

    ////////////////////////////////////////////////////////////////

    $('#title').on('input', function () {
        const inputVal = $(this).val();
        const charCnt = inputVal.length;
        if (charCnt < 8) {
            $('#title-chk').css('display', 'block');
            $('#title-chk').text('8글자 이상 입력하세요').css('color', 'red');
        } else {
            $('#title-chk').css('display', 'none');
        }
    });
    $('#requested').on('input', function () {
        const inputVal = $(this).val();
        const charCnt = inputVal.length;
        if (charCnt < 8) {
            $('#requested-chk').css('display', 'block');
            $('#requested-chk').text('20글자 이상 입력하세요').css('color', 'red');
        } else {
            $('#requested-chk').css('display', 'none');
        }
    });
    $('#term').on('input', function () {
        const inputVal = $(this).val();
        if (inputVal < 1 || inputVal > 9999) {
            $('#term-chk').css('display', 'block');
            $('#term-chk').text('0 ~ 9999 사이로 입력하세요').css('color', 'red');
        } else {
            $('#term-chk').css('display', 'none');
        }
    });

    ///////////////////////////////////////////////////////////////

    $.ajax({
        url: '/header/categoryList',
        type: 'GET',
        success: function (data) {
            let catarr = [];
            let categoryHtml = '<option value="" selected="selected">카테코리 선택</option>';
            let categoryCnt = 1;
            data.forEach(item => {
                let categoryName = item.serviceTopCatName;
                // console.log(categoryName);
                catarr.push(categoryName);
                categoryHtml += '<option value="' + categoryName + '">';
                categoryHtml += categoryName;
                categoryHtml += '</option>';
            })
            // console.log(catarr);
            document.querySelector('#category').innerHTML = categoryHtml;
            for (let i = 0; i < 5; i++) {
                document.querySelector('#cat' + (i + 1)).innerHTML = catarr[i];
            }

        },
        error: function () {
            console.log('출력실패')
        }
    });

});

$('#requested').on('click', () => $('#tip').css('display', 'block'));
$('#requested').focusout(() => $('#tip').css('display', 'none'));

// $(document).ready(function () {
//     $('#title').on('input', function () {
//         const inputVal = $(this).val();
//         const charCnt = inputVal.length;
//         if (charCnt < 8) {
//             $('#title-chk').css('display', 'block');
//             $('#title-chk').text('8글자 이상 입력하세요').css('color', 'red');
//         } else {
//             $('#title-chk').css('display', 'none');
//         }
//     });
//     $('#requested').on('input', function () {
//         const inputVal = $(this).val();
//         const charCnt = inputVal.length;
//         if (charCnt < 8) {
//             $('#requested-chk').css('display', 'block');
//             $('#requested-chk').text('20글자 이상 입력하세요').css('color', 'red');
//         } else {
//             $('#requested-chk').css('display', 'none');
//         }
//     });
//     $('#term').on('input', function () {
//         const inputVal = $(this).val();
//         if (inputVal < 1 || inputVal > 9999) {
//             $('#term-chk').css('display', 'block');
//             $('#term-chk').text('0 ~ 9999 사이로 입력하세요').css('color', 'red');
//         } else {
//             $('#term-chk').css('display', 'none');
//         }
//     });
// });
//
// $(document).ready(function () {
//     $.ajax({
//         url: '/header/categoryList',
//         type: 'GET',
//         success: function (data) {
//             let catarr = [];
//             let categoryHtml = '<option value="" selected="selected">카테코리 선택</option>';
//             let categoryCnt = 1;
//             data.forEach(item => {
//                 let categoryName = item.serviceTopCatName;
//                 // console.log(categoryName);
//                 catarr.push(categoryName);
//                 categoryHtml += '<option value="'+categoryName+'">';
//                 categoryHtml += categoryName;
//                 categoryHtml += '</option>';
//             })
//             // console.log(catarr);
//             document.querySelector('#category').innerHTML = categoryHtml;
//             for (let i = 0; i < 5; i++) {
//                 document.querySelector('#cat' + (i+1)).innerHTML = catarr[i];
//             }
//
//         },
//         error: function () {
//             console.log('출력실패')
//         }
//     });
// });


/*  리펙토링 하기 전 코드
    $('#category').on('propertychange change paste input', function () {
    $('#category-v').val($('#category').val());
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});
$('#title').on('propertychange change paste input', function () {
    $('#title-v').val($('#title').val());
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});
$('input[name=work]').on('propertychange change paste input', function () {
    $('#work-v').val($('input[name=work]').val());
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});
$('#requested').on('propertychange change paste input', function () {
    $('#requested-v').val($('#requested').val());
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});
$('#budget').on('propertychange change paste input', function () {
    $('#budget-v').val(addCommas($('#budget').val().replace(/[^0-9]/g,"")));

    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});
$('#wanted').on('propertychange change paste input', function () {
    $('#wantedy-v').val($('#wanted').val());
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});
$('#close').on('propertychange change paste input', function () {
    $('#close-v').val($('#close').val());
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});
$('#term').on('propertychange change paste input', function () {
    $('#term-v').val($('#term').val());
    let a = inputChk($('#category').val());
    let b = inputChk($('#title').val());
    let c = inputChk($('input[name=work]:checked').val());
    let d = inputChk($('#requested').val());
    let e = inputChk($('#budget').val());
    let f = inputChk($('#wanted').val());
    let g = inputChk($('#close').val());
    let h = inputChk($('#term').val());
    let sum = a + b + c + d + e + f + g + h;
    $('.progress-bar').css('width', sum + '%');
    sum == 100 ? $('#submit').prop('disabled', false) : $('#submit').prop('disabled', true);
});

function inputChk(val) {
    let progress = 0;
    if (typeof val != "undefined" && val != null && val != "") {
        progress = 12.5;
    } else {
        progress = 0;
    }
    return progress;
}

$('#nextBtn').on("click", function () {
    if ($('#first').css('display') == 'block') {
        $('#first').css('display', 'none');
        $('#second').css('display', 'block');
    } else if ($('#second').css('display') == 'block') {
        $('#second').css('display', 'none');
        $('#third').css('display', 'block');
    } else if ($('#third').css('display') == 'block') {
        $('#third').css('display', 'none');
        $('#fourth').css('display', 'block');
    } else if ($('#fourth').css('display') == 'block') {
        $('#fourth').css('display', 'none');
        $('#fifth').css('display', 'block')
    }
});

$('#prevBtn').on("click", function () {
    if ($('#fifth').css('display') == 'block') {
        $('#fifth').css('display', 'none');
        $('#fourth').css('display', 'block');
    } else if ($('#fourth').css('display') == 'block') {
        $('#fourth').css('display', 'none');
        $('#third').css('display', 'block');
    } else if ($('#third').css('display') == 'block') {
        $('#third').css('display', 'none');
        $('#second').css('display', 'block');
    } else if ($('#second').css('display') == 'block') {
        $('#second').css('display', 'none');
        $('#first').css('display', 'block');
    }
});

function chk() {
    if ($('#category').val() == '') {
        event.preventDefault();
        alert("카테고리를 선택해주세요");
        $('#category').focus();
        return false;
    }
    if ($('#title').val() == '') {
        event.preventDefault();
        alert("제목을 작성해주세요");
        $('#title').focus();
        return false;
    }
    if ($('input[name=work]').val() == '') {
        event.preventDefault();
        alert("필요한 업무를 선택해주세요");
        $('input[name=work]').focus();
        return false;
    }
    if ($('#requested').val() == '') {
        event.preventDefault();
        alert("요청사항을 입력해주세요");
        $('#requested').focus();
        return false;
    }
    if ($('#budget').val() == '') {
        event.preventDefault();
        alert("예산을 입력해주세요");
        $('#budget').focus();
        return false;
    }
    if ($('#wanted').val() == '') {
        event.preventDefault();
        alert("모집 마감 일자를 선택해주세요");
        $('#wanted').focus();
        return false;
    }
    if ($('#close').val() == '') {
        event.preventDefault();
        alert("프로젝트 마감 일자를 선택해주세요");
        $('#close').focus();
        return false;
    }
    if ($('#term').val() == '') {
        event.preventDefault();
        alert("작업 기간을 입력해주세요");
        $('#term').focus();
        return false;
    }
}*/
