let jbox = document.getElementById("box-job");
let jbtn = document.getElementById("btn-job");
let tbox = document.getElementById("box-type");
let tbtn = document.getElementById("btn-type");
let fbox = document.getElementById("box-field");
let fbtn = document.getElementById("btn-field");
let checkType = 0;
let checkTypeM = 0;

jbox.style.display = "none";
tbox.style.display = "none";
fbox.style.display = "block";
<!--    보기 버튼 함수 -->
jbtn.onclick = function(){
    if(jbtn.value == "보기"){
        jbox.style.display = "block";
        jbtn.value="닫기";
    }else{
        jbox.style.display = "none";
        jbtn.value="보기";
    }
}
tbtn.onclick = function(){
    if(tbtn.value == "보기"){
        tbox.style.display = "block";
        tbtn.value="닫기";
    }else{
        tbox.style.display = "none";
        tbtn.value="보기";
    }
}
fbtn.onclick = function(){
    if(fbtn.value == "보기"){
        fbox.style.display = "block";
        fbtn.value="닫기";
    }else{
        fbox.style.display = "none";
        fbtn.value="보기";
    }
}

<!--처음 페이지 열때-->
    window.onload = () => {
        findAllCategory();
        findAllType();
        findAllJob();
    }

<!--직업 관련 함수-->
    document.getElementById("add-job").onclick = function(){
<!--직업 추가-->
        let name = document.getElementById("jobName");
        if(name.value == null || name.value == ''){
            alert("직업명을 작성하세요!!");
            return;
        }
        insertjob(name.value);
        name.value = '';
    }
    function deletejob(id){
<!--직업 삭제-->
        removejob(id);
    }
<!--    서비스 타입 관련 함수-->
document.getElementById("add-type").onclick = function(){
<!--서비스 타입 추가-->
    let name = document.getElementById("typeName");
    let checkbox = document.getElementById("typeMandatory");
    let check = checkbox.checked == true ? 1 : 0;
    if(name.value == null || name.value == ''){
        alert("서비스 타입 명을 작성하세요!!");
        return;
    }
    inserttype(name.value, check);
    name.value = '';
    checkbox.checked = false;
}
function deletetype(id){
<!--직업 삭제-->
    removetype(id);
}
<!--  분야 상세보기  -->
function viewCategory(id){
    findCategory(id);
    checkType = countCheckedType();
}
function deleteCategory(id){
    removeCategory(id);
}
function countCheckedType(){
    let types;
    types = document.getElementsByName("typecheck");
    let j = 0;
    for(i=0;i<types.length;i++){
        if(types[i].checked){
            j++;
        }
    }
    return j;
}
function addCheckedType(elem){// 최대 선택 가능한 서비스 타입 개수 제한
    if (elem.checked)
        checkType += 1; // totalChecked 증가
    else // 체크가 아니면
        checkType -= 1;

    if(checkType>8){
        alert("8개 까지만 선택할 수 있습니다!!");
        checkType -= 1;
        elem.checked = false;
    }
}
function addCheckedTypeM(elem){// 카테고리 추가시 최대 타입 개수 제한
    if (elem.checked)
        checkTypeM += 1; // totalChecked 증가
    else // 체크가 아니면
        checkTypeM -= 1;

    if(checkTypeM>8){
        alert("8개 까지만 선택할 수 있습니다!!");
        checkTypeM -= 1;
        elem.checked = false;
    }
}
function showmodal(){
    document.getElementById("categoryInput").style.display = "block";
}
function closemodal(){
    document.getElementById("categoryInput").style.display = "none";
}

