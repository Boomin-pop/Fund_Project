	function submitChk(){
		let isIdChk = $("#isIdChk").val();
		console.log("isIdChk : " + isIdChk);
		if(isIdChk == "no"){
			alert("아이디 중복체크를 확인해주세요!!");
			$("#userId").select();
			return false;
		}

		if(!isEmailChk){
			alert("이메일 인증 확인을 해주세요!!");
			$("#email").select();
			return false;
		}
  }
// 아이디 길이 체크
	function idCheck(){

		var uid = $("#userId").val();
        console.log("######## : " + uid);
		if(uid.length<3){
			$("#chkMsg").html("아이디 길이는 3자리 이상이어야 합니다.")
			$("#chkMsg").css({"color":"red", "font-size":"13px"});
			return;
		}
		$.ajax({
        			url:'user/idcheck',
        			type: "posr",
        			data:{"uid":uid}, // 서버에 전송할 데이터
        			success: function(responseData){
        				// responseData = "yes" or "no", yes:사용가능 no:사용불가

        				if(responseData == "yes"){
        					$("#chkMsg").html("사용가능한 아이디 입니다!!");
        					$("#chkMsg").css({"color":"blue", "font-size":"13px"});
        					$("#isIdChk").val("yes");
        				}else{
        					$("#chkMsg").html("사용할 수 없는 아이디 입니다!!");
        					$("#chkMsg").css({"color":"red", "font-size":"13px"});
        				}

        			},
        			error : function(){
        				$("#chkMsg").html("서버 에러 입니다!!!");
//        				$("#chkModal").modal("show");
        			}
        		});
        	}

// 비밀번호 길이 체크
function pwCheck(){
		var password = $("#password").val();

		if(password.length<6){
			$("#chkMsg2").html("비밀번호는 6자리 이상이어야 합니다.")
			$("#chkMsg2").css({"color":"red", "font-size":"13px"});
            return;
		}else{
		$("#chkMsg2").html("사용가능한 비밀번호 입니다!!");
        $("#chkMsg2").css({"color":"blue", "font-size":"13px"});
            return;
		}
  }

// 비밀번호 확인
function rePwCheck(){
        var password = $("#password").val();
		var repassword = $("#repassword").val();

		if(password != repassword){
			$("#chkMsg3").html("비밀번호를 확인해주세요.")
			$("#chkMsg3").css({"color":"red", "font-size":"13px"});
            return false;
		}else{
            $("#chkMsg3").html("비밀번호가 일치합니다!!");
            $("#chkMsg3").css({"color":"blue", "font-size":"13px"});
           return true;
		}
  }

let submitBtn = document.getElementById("joinclear");
// 테이블의 모든 행을 선택/해제하는 메소드
function checkAll(){
            // chkall input이 체크가되면 true, 그렇지않으면 false 리턴
            let isChecked = document.getElementById("chkall").checked;

            let chks = document.getElementsByName('chk');
            for(let i=0; i<chks.length; i++){
                chks[i].checked = isChecked;
            }
            checkRequiredChoice();

        }

function checkRequiredChoice(){
  let ageChk = document.getElementById("age").checked;
  let svcChk = document.getElementById("termsOfService").checked;
  let privacyChk = document.getElementById("privacyPolicy").checked;

  console.log(submitBtn.disabled);

  if(ageChk && svcChk && privacyChk){
    submitBtn.disabled=false;
  }else{
    submitBtn.disabled=true;
  }
  console.log(ageChk);
  console.log(svcChk);
  console.log(privacyChk);
}


let serverUUID = "";
	let isEmailChk = false;
	function emailCheck(){
		let uEmail = $("#email").val();

		$.ajax({
			url:'/user/userEmailCheck',
			type: "get",
			data: {"uEmail":uEmail},
			success: function(uuid){
				if(uuid != "fail"){
					serverUUID = uuid;
					console.log("이메일 인증코드 : " + uuid);
					$("#confirmEmail").html('<div class="col-md-8">'
							+'<input class="form-control mb-2" type="text" id="confirmUUID"/></div>'
							+'<div class="col-md-4">'
							+'<span class="btn btn-outline-secondary w-100" onclick="emailConfirm()"> 인증코드확인</span></div>'
						);
				}else{
					alert("이메일을 다시 확인하세요!!");
					$("#email").select();
				}
			},
			error:function(){
				alert("인증 실패!!");
			}
		});
    }

	function emailConfirm(){
		let confirmUUID = $("#confirmUUID").val();

		if(confirmUUID == null || confirmUUID ==""){
			alert("인증 코드 확인하세요!!!");
			$("#confirmUUID").select();
		}else if(serverUUID == confirmUUID){
			alert("인증 성공!!");
			isEmailChk = true;
		}else{
			alert("인증코드를 다시 확인하세요!!");
			$("#confirmUUID").select();
			return;
		}
	}
