// 변경하기 버튼 클릭 시 프로필 정보 업데이트
function changeBtn() {

    var userId = $("#userId").val();
    var userPassword = $("#userPassword").val();
    var userName = $("#userName").val();
    var userNickname = $("#userNickname").val();

    var userEmail = $("#userEmail").val();
    var userTel = $("#userTel").val();
    var userJobId = $("#jobId").val();
    console.log(userJobId);
    console.log(userId);

    if (userEmail === "") {
        alert("이메일을 입력하세요.");

    }

    if (userTel === "") {
        alert("전화번호를 입력하세요.");

    }

    // AJAX 요청 보내기
    $.ajax({
        url: '/user/userUpdate', // 사용자 정보 업데이트를 처리하는 컨트롤러 메서드 URL로 변경해야 합니다.
        type: "POST",
        data: {
            userId: userId,
            userPassword: userPassword,
            userName: userName,
            userNickname: userNickname,
            userEmail: userEmail,
            userTel: userTel,
            userJobId: userJobId
        },
        success: function(response) {
            alert("사용자 정보가 업데이트 되었습니다.");
            // 페이지 리로딩 또는 다른 처리를 수행할 수 있습니다.
        },
        error: function(xhr, status, error) {
            alert("사용자 정보 업데이트에 실패했습니다.");
            console.log(xhr.responseText);
        }
    });
}

//전화번호 확인

var autoHypenPhone = function(str){
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }

    return str;
}




$("#userTel").on("keyup", function() {
    var userTel = $(this).val();
    $(this).val(autoHypenPhone(userTel));
});