//update
function update(){
    alert("업데이트하시겠습니까?")
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
            document.getElementsByClassName("name").value = data.userName;

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
    modal1.style.display = "none";
}

// modal2
let modal2 = document.getElementById("Modal2");
function btn2(){
    modal2.style.display = "block";
}
function span2(){
    modal2.style.display = "none";
}

//modal3
let modal3=document.getElementById("Modal3");
function btn3(){
    modal3.style.display="block";
}
function span3(){
    modal3.style.display = "none";
}
function modify2(){
    modal3.style.display = "none";
}

