// 회원 탈퇴 버튼 클릭 시
function userDeleteButton() {
//    var loginDto = window.sessionStorage.getItem("loginDto");
//    console.log(loginDto);

    var userId = $("#userId").val();
     console.log(userId);

    // AJAX 요청 보내기
    $.ajax({
        url: '/user/userDelete', // 사용자 정보 삭제를 처리하는 컨트롤러 메서드 URL로 변경해야 합니다.
        type: "POST",
        data: { userId: userId }, // 서버로 전달할 데이터
        success: function(response) {
            alert("회원 탈퇴가 완료되었습니다.");
            // 페이지 리로딩 또는 다른 처리를 수행할 수 있습니다.
            window.location.href = "/";
        },
        error: function(xhr, status, error) {
            alert("회원 탈퇴에 실패했습니다.");
        }
    });
}
