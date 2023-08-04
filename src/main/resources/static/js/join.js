	function submitChk(){
		let isIdChk = $("#isIdChk").val();
		console.log("isIdChk : " + isIdChk);
		if(isIdChk == "no"){
			alert("아이디 중복체크를 확인해주세요!!");
			$("#id").select();
			return false;
		}

		if(!isEmailChk){
			alert("이메일 인증 확인을 해주세요!!");
			$("#email").select();
			return false;
		}
  }

// 비밀번호 길이 체크
function pwCheck(){
		var userPassword = $("#userPassword").val();

		if(uid.length<3){
			$("#chkMsg").html("비밀번호는 8자리 이상이어야 합니다.")
			$("#chkMsg").css({"color":"red", "font-size":"13px"});
			return;
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
