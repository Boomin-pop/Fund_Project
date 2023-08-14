document.addEventListener("DOMContentLoaded", function() {
  showContent('id');
});

function showContent(contentId) {
const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  const selectedContent = document.getElementById(contentId);
  selectedContent.style.display = 'block';
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


tel.onkeyup = function(){
    var userTel = $("#tel").val();

    this.value = autoHypenPhone( this.value ) ;
    // if(userTel == "" || tel == null){
    if(userTel == "" || userTel == null){
        // $("#isTelChk").val("no");
        isTelChk = false;
        return;
    }else{
        isTelChk = true;
        return;
    }
}

function idFind(){
var userName = $("#name").val();
var userTel = $("#tel").val();

    if(userName == ""){
        alert("이름을 입력하세요.");
        return false;

    }if(userTel == ""){
        alert("전화번호를 입력하세요.");
        return false;

    }


$.ajax({
   url:'/user/findId',
   type:"post",
   data: {
       userName: userName,
       userTel: userTel
   },
   success: function(data){ // data는 찾기 실패시 null, 찾으면 해당 아이디값
       if(data == ''){
           alert("이름 및 휴대폰 번호를 다시 확인하기 바랍니다..")
       }else{ // 아이디 찾기 성공
            $("#findIdBefore").css("display", "none");
            $("#findIdSuccess").css("display", "block");
            $("#resultId").text(data);
       }
   },
    error:function(){alert("아이디 찾기 요청 실패!!")}
});
}


function pwFind(){
var uid = $("#uid").val();
var uEmail = $("#email").val();

    if(uid == ""){
        alert("아이디를 입력하세요.");
        return false;

    }if(uEmail == ""){
        alert("이메일을 입력하세요.");
        return false;

    }


$.ajax({
   url:'/user/findPw',
   type:"post",
   data: {
       uid: uid,
       uEmail: uEmail
   },
   success: function    (data){ // data는 찾기 실패시 null, 찾으면 해당 아이디값
       if(data == ''){
           alert("아이디와 이메일을 다시 확인하세요");
       }else{ // 비밀번호 찾기 성공
            $("#findPwBefore").css("display", "none");
            $("#findPwSuccess").css("display", "block");
       }
   },
    error:function(){alert("비밀번호 찾기 요청 실패!!")}
});
}

// function idFind() {
//        var userName = $("#name").val();
//        var userTel = $("#tel").val();
//
//        if (userName == "") {
//            alert("이름을 입력하세요.");
//            return false;
//        }
//        if (userTel == "") {
//            alert("전화번호를 입력하세요.");
//            return false;
//        }
//
//        $.ajax({
//            url: '/user/findId',
//            type: 'post',
//            data: {
//                userName: userName,
//                userTel: userTel
//            },
//            success: function(data) {
//                if (data == null) {
//                    alert("이름 및 휴대폰 번호를 다시 확인하기 바랍니다.");
//                    return false;
//                } else {
//                    // 아이디 찾기 성공 시 해당 섹션을 화면에 표시하고 다른 섹션을 숨김
//                    $("#id").removeClass("active");
//                    $("#pw").removeClass("active");
//                    $("#findIdSuccess").addClass("active");
//                    $("#resultId").text(data); // 찾은 아이디 값을 설정
//                }
//            },
//            error: function() {
//                alert("아이디 찾기 요청 실패!!");
//            }
//        });
//    }