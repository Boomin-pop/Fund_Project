function pageMoveT(page){
    let by = document.getElementById("by").value;
    let ud = document.getElementById("ud").value;
    let id = document.getElementById("id").value;
    location.href="transactionLog?page=" + page + "&by=" + by + "&ud=" + ud + "&id=" + id;
}
function pageMoveS(page){
    let by = document.getElementById("by").value;
    let ud = document.getElementById("ud").value;
    let id = document.getElementById("id").value;
    location.href="signLog?page=" + page + "&by=" + by + "&ud=" + ud + "&id=" + id;
}

let modal2 = document.getElementById("Modal2");
function userView(userId){
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
            document.getElementById("tel2").textContent = data.userTel;
            document.getElementById("job2").textContent = data.userJobId;
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function span2(){
    modal2.style.display = "none";
}