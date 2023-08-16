let pw="";
let currentPwChk="";

// 현재 비밀번호 체크
function pwCheck(){
    pw = $("#pw").val(); // 입력된 현재 비밀번호

    $.ajax({
        url:"/user/pwCheck",
        type: "post",
        data:{"pw":pw},
        async:false, // 동기화처리
        success:function(result){
            console.log("result : " + result);
            if(result =="ok"){ // 입력된 비밀번호와 현재 비밀번호가 일치
                alert("현재 비밀번호 확인 완료!!");
                currentPwChk=true;
            }else{
                alert("현재 비밀번호 다시 확인 요망!!");
                currentPwChk=false;
            }
        },
        error:function(){alert("현재 비밀번호 체크 요청 실패!!")}
    });
}

let newPwChk = "";
// 새비밀번호 유효성 체크
$("#newPw").on("keyup", function(){
   let npValue = $("#newPw").val();
   let pw = $("#pw").val();
   if(npValue ==""){
       $("#pwChkMsg").text("새 비밀번호를 입력하세요.")
       newPwChk = false;
   }else if(npValue.length < 6){
       $("#pwChkMsg").text("6자리 이상 입력하세요.")
       $("#pwChkMsg").css({"color":"red", "font-size":"13px"});
       newPwChk = false;
   }else if(npValue == pw){
       $("#pwChkMsg").text("현재 비밀번호와 새 비밀번호가 같습니다.")
       $("#pwChkMsg").css({"color":"red", "font-size":"13px"});
       newPwChk = false;
   }else{
       $("#pwChkMsg").text("");
       newPwChk = true;
   }

});

let newPwConfirmChk="";

// 새비밀번호 확인 체크
$("#newPwConfirm").on("keyup", function(){
   let npcValue = $("#newPwConfirm").val();
   if(npcValue ==""){
       $("#pwChkMsg").text("확인 비밀번호를 입력하세요.")
       newPwConfirmChk = false;
   }else if($("#newPw").val() != npcValue){
       $("#pwChkMsg").text("새 비밀번호가 일치하지 않습니다.")
       newPwConfirmChk = false;
   }else{
       $("#pwChkMsg").text("");
       newPwConfirmChk = true;
   }

});


// 비밀번호 변경 요청
$("#pwChangeBtn").on("click", function(){
    pwCheck();
    let id = $("#userId").val();

    console.log("id : " + id);
    console.log("currentPwChk : "+currentPwChk);
    console.log("newPwChk : "+newPwChk);
    console.log("newPwConfirmChk : "+newPwConfirmChk);

    if(currentPwChk == false){
        alert("현재 비밀번호를 다시 확인하세요!!")
    }else if(newPwChk == false){
        alert("새 비밀번호를 다시 확인하세요!!")
    }else if(newPwConfirmChk == false){
        alert("새 비밀번호가 일치하지 않습니다... 다시 확인하세요!!")
    }else if(currentPwChk && newPwChk && newPwConfirmChk){
        let id = $("#userId").val();
        let pw = $("#newPw").val();
        let user = {"userId":id, "userPassword":pw};

        console.log(pw);
        console.log(id);
        console.log(user);

        $.ajax({
           url:'/user/changePw',
           type:"post",
//           data: pw,
           data:JSON.stringify(user), // JSON 문자열로 변환
           contentType:"application/json; charset=utf8",
           success: function(result){
            console.log("result : " + result);
               if(result > 0){
                   alert("비밀번호 변경처리 완료!! 새로운 비밀번호로 로그인 하세요!!");
                   window.location.href = "/user/logout";
               }
           },
           error:function(){alert("비밀번호 변경 요청 실패!!");}
        });
    }
});