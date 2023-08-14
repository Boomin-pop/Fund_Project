//update
function update(){
    let chk = [];
    $( "input[name = 'No']:checked").each(function (){
        chk.push({projectRequestNo:$(this).val()});
        console.log(chk)
    })

    $.ajax({
        url: "/admin/project/delete",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(chk),
        success : function (result){
            console.log(result);
            alert("업데이트 완료");
            location.replace("/admin/project");
        },
        error: function (error){
            alert(error)
        }
    });
}


//cancle
function cancle(){
    let chk = [];
    $( "input[name = 'No']:checked").each(function (){
        chk.push({projectRequestNo:$(this).val()});
        console.log(chk)
    })

    $.ajax({
        url: "/admin/project/cancle",
        type: "post",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(chk),
        success : function (result){
            console.log(result);
            alert("업데이트 취소 완료");
            location.replace("/admin/project");
        },
        error: function (error){
            alert(error)
        }
    });
}
// admission
function admission(){
    alert("승인하시겠습니까?")
}

// modal1
let modal1 = document.getElementById("Modal1");

function btn1(projectRequestNo) {
    $.ajax({
        url: "/admin/project/"+projectRequestNo,
        type: "get",
        success : function (data) {
            modal1.style.display = "block";
            console.log(data);
            document.getElementById("no1").textContent = data.projectRequestNo;
            document.getElementById("category1").value = data.projectRequestCategory;
            document.getElementById("projectName1").value = data.projectRequestTitle;
            document.getElementById("work1").value = data.projectRequestWork;
            document.getElementById("request1").value = data.projectRequestRequest;
            document.getElementById("budget1").value = data.projectRequestBudget;
            // document.getElementById("wanted1").value = data.;
            // document.getElementById("close1").value = data.;
            document.getElementById("requestTerm1").value = data.projectRequestTerm;
            document.getElementById("userId1").value = data.userId;
            document.getElementById("upload1").textContent = data.projectRequestUpload;
            document.getElementById("approve1").textContent = data.projectRequestApprove;
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
    let no1 = document.getElementById("no1").value;
    let category1 = document.getElementById("category1").value;
    let projectName1 = document.getElementById("projectName1").value;
    let work1 = document.getElementById("work1").value;
    let request1 = document.getElementById("request1").value;
    let budget1 = document.getElementById("budget1").value;
    // let wanted1 = document.getElementById("wanted1").value;
    // let close1 = document.getElementById("close1").value;
    let requestTerm1 = document.getElementById("requestTerm1").value;
    $.ajax({
        url: "/admin/project/"+ no1,
        type: "put",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify({projectRequestCategory: category1, projectRequestTitle: projectName1, projectRequestWork:work1, projectRequestRequest:request1, projectRequestBudget:budget1, projectRequestTerm:requestTerm1}),
        success : function (data){
            modal1.style.display = "none";
            console.log(data);
            alert("수정완료");
            location.replace("/admin/project");
        },
        error: function (error){
            alert(error)
        }
    });

}

// modal2
let modal2 = document.getElementById("Modal2");
function btn2(projectRequestNo){
    $.ajax({
        url: "/admin/project/"+projectRequestNo,
        type: "get",
        success : function (data) {
            modal2.style.display = "block";
            console.log(data);
            document.getElementById("no2").textContent = data.projectRequestNo;
            document.getElementById("category2").textContent = data.projectRequestCategory;
            document.getElementById("projectName2").textContent = data.projectRequestTitle;
            document.getElementById("work2").textContent = data.projectRequestWork;
            document.getElementById("request2").textContent = data.projectRequestRequest;
            document.getElementById("budget2").textContent = data.projectRequestBudget;
            document.getElementById("wanted2").textContent = data.projectRequestWanted;
            document.getElementById("close2").textContent = data.projectRequestClose;
            document.getElementById("requestTerm2").textContent = data.projectRequestTerm;
            document.getElementById("userId2").textContent = data.userId;
            document.getElementById("upload2").textContent = data.projectRequestUpload;
            document.getElementById("approve2").textContent = data.projectRequestApprove;
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
function btn3(projectRequestNo){
    $.ajax({
        url: "/admin/project/"+projectRequestNo,
        type: "get",
        success : function (data){
            modal3.style.display="block";
            console.log(data);
            document.getElementById("no3").textContent=data.projectRequestNo;
            document.getElementById("userId3").textContent=data.userId;
            document.getElementById("projectName3").textContent=data.projectRequestTitle;
            document.getElementById("delete").value=data.projectDelete;
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
    let no = document.getElementById("no3").textContent;
    let del = document.getElementById("delete").value;
    $.ajax({
        url: "/admin/project/"+ no,
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        data: JSON.stringify({userId: no, userDelete: del}),
        success : function (data){
            modal1.style.display = "none";
            console.log(data);
            alert("삭제 실행");
            location.replace("/admin/project");
        },
        error: function (error){
            alert(error)
        }
    });
}

