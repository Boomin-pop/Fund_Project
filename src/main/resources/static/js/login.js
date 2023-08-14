function login(){
    var userId = $("#userId").val();
    var userPassword = $("#userPassword").val();

    if(userId == ""){
        alert("아이디를 입력하세요.");
        userId.select();
        return false;
    }
    if(userPassword == ""){
        alert("비밀번호를 입력하세요.");
        userPassword.select();
        return false;
    }
        alert("로그인에 성공했습니다.")
}