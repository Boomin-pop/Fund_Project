//update
function update(){
    let userId = document.getElementById("id3").textContent;
    let chk = [];
    $( "input[name = 'user']:checked").each(function (i){
        chk.push($(this).val());
    })
    let allData = {"userId":userId , "chkArray":chk};
    $.ajax({
        url: "/admin/user/"+ userId,
        type: "delete",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: allData,
        success : function (data){
            console.log(data);
            alert("업데이트 완료");
            location.replace("/admin/user");
        },
        error: function (error){
            alert(error)
        }
    });
}

//cancle
function cancle(){
    alert("취소하시겠습니까?")
}
// admission
function admission(){
    alert("승인하시겠습니까?")
}

// modal1
let modal1 = document.getElementById("Modal1");
// let userId = document.getElementById("userId").val();

function btn1(userId) {
    $.ajax({
        url: "/admin/user/"+userId,
        type: "get",
        success : function (data) {
            modal1.style.display = "block";
            console.log(data);
            document.getElementById("name1").value = data.userName;
            document.getElementById("id1").value = data.userId;
            document.getElementById("pw1").value = data.userPassword;
            document.getElementById("nick1").value = data.userNickname;
            document.getElementById("email1").value = data.userEmail;
            // document.getElementById("bir").value = data.userbir;
            document.getElementById("tel1").value = data.userTel;
            document.getElementById("job1").value = data.userJobId;
            // document.getElementById("reg").value = data.userRegdate;
        },
        error: function (error) {
            alert(error);
        }
    });
}
function span1(){
    modal1.style.display = "none";
}
function modify1(){
    let userId = document.getElementById("id1").value;
    let name1 = document.getElementById("name1").value;
    let pw1 = document.getElementById("pw1").value;
    let nick1 = document.getElementById("nick1").value;
    let email1 = document.getElementById("email1").value;
    // let bir1 = document.getElementById("bir1").value;
    let tel1 = document.getElementById("tel1").value;
    let job1 = document.getElementById("job1").value;
    // let reg1 = document.getElementById("reg1").value;

    $.ajax({
        url: "/admin/user/"+ userId,
        type: "put",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify({userId: userId, userName: name1, userPassword:pw1, userNickname:nick1, userEmail:email1, userTel:tel1, userJobId:job1}),
        success : function (data){
            modal1.style.display = "none";
            console.log(data);
            alert("수정완료");
            location.replace("/admin/user");
        },
        error: function (error){
            alert(error)
        }
    });

}

// modal2
let modal2 = document.getElementById("Modal2");
function btn2(userId){
    $.ajax({
        url: "/admin/user/"+userId,
        type: "get",
        success : function (data) {
            modal2.style.display = "block";
            console.log(data);
            document.getElementById("name2").textContent = data.userName;
            document.getElementById("id2").textContent = data.userId;
            document.getElementById("pw2").textContent = data.userPassword;
            document.getElementById("nick2").textContent = data.userNickname;
            document.getElementById("email2").textContent = data.userEmail;
            // document.getElementById("bir").textContent = data.userbir;
            document.getElementById("tel2").textContent = data.userTel;
            document.getElementById("job2").textContent = data.userJobId;
            // document.getElementById("reg").value = data.userRegdate;
        },
        error: function (error) {
            alert(error);
        }
    });
}
function span2(){
    modal2.style.display = "none";
}

//modal3
let modal3=document.getElementById("Modal3");
function btn3(userId){
    $.ajax({
        url: "/admin/user/"+userId,
        type: "get",
        success : function (data){
            modal3.style.display="block";
            console.log(data);
            document.getElementById("name3").textContent=data.userName;
            document.getElementById("id3").textContent=data.userId;
            document.getElementById("delete").value=data.userDelete;
        },
        error: function (error){
            alert(error);
        }
    })
}
function span3(){
    modal3.style.display = "none";
}
function modify2(){
    modal3.style.display = "none";
    let userId = document.getElementById("id3").textContent;
    let del = document.getElementById("delete").value;
    $.ajax({
        url: "/admin/user/"+ userId,
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify({userId: userId, userDelete: del}),
        success : function (data){
            modal1.style.display = "none";
            console.log(data);
            alert("삭제 실행");
            location.replace("/admin/user");
        },
        error: function (error){
            alert(error)
        }
    });
}

