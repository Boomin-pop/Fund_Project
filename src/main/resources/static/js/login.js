    function uLogin(){
            var userId = document.getElementById("id");
            var userPw = document.getElementById("password");

            if(userId == ""){
                alert("아이디를 입력하세요.");
                userId.focus();
                return ;
            }
            else if(userPwe == ""){
                alert("비밀번호를 입력하세요.");
                userPw.focus();
                return ;
            }

        }