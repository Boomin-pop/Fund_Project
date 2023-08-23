let jbox = document.getElementById("box-job");
let jbtn = document.getElementById("btn-job");
let tbox = document.getElementById("box-type");
let tbtn = document.getElementById("btn-type");
var checkType = 0;
let checkTypeM = 0;

jbox.style.display = "none";
tbox.style.display = "none";
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

<!--처음 페이지 열때-->
    window.onload = () => {
//        findAllCategory();
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
}
function addCategory(){
    // 서비스 타입 체크를 위한 준비
    let i = 0;
    let types = document.getElementsByName("typecheckM");
    let length = types.length;
    let checkedTypes = [];
    for(i=0;i<length;i++){
        if(types[i].checked == true){
            checkedTypes.push(types[i]);
            types[i].checked = false;
        }
    }
    length = checkedTypes.length;
    // 전달할 데이터 만들기
    let catData = {};
    catData.categoryName = document.getElementById("m-cat-name").value;
    catData.categoryUpperId = document.getElementById("select-upperCategory").value;
    catData.categoryRefund = document.getElementById("m-cat-refund").value;
    i=0;
    if(i<length){
        catData.serviceTypeId1 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId2 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId3 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId4 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId5 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId6 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId7 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId8 = checkedTypes[i].value;
        i++;
    }

    insertCategory(catData);
}
function updateCategory(){
    // 서비스 타입 체크를 위한 준비
    let i = 0;
    let types = document.getElementsByName("typecheckS");
    let length = types.length;
    let checkedTypes = [];
    for(i=0;i<length;i++){
        if(types[i].checked == true){
            checkedTypes.push(types[i]);
            types[i].checked = false;
        }
    }
    length = checkedTypes.length;
    // 전달할 데이터 만들기
    let catData = {};
    catData.categoryId = document.getElementById("categoryId").value
    catData.categoryName = document.getElementById("categoryName").value;
    catData.categoryUpperId = document.getElementById("categoryUpperId").value;
    catData.categoryRefund = document.getElementById("categoryRefund").value;
    i=0;
    if(i<length){
       catData.serviceTypeId1 = checkedTypes[i].value;
       i++;
    }
    if(i<length){
       catData.serviceTypeId2 = checkedTypes[i].value;
       i++;
    }
    if(i<length){
        catData.serviceTypeId3 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId4 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId5 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId6 = checkedTypes[i].value;
         i++;
    }
    if(i<length){
        catData.serviceTypeId7 = checkedTypes[i].value;
        i++;
    }
    if(i<length){
        catData.serviceTypeId8 = checkedTypes[i].value;
        i++;
    }
    modifyCategory(catData);
}
function deleteCategory(id){
    removeCategory(id);
}
function deleteCategoryU(id){
    removeCategoryU(id);
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
function addmodal(){
    addCategory();
    closemodal();
}
function changemodal(v){
    console.log(v);
    let fund = document.getElementById("m-cat-refund");
    let list = document.getElementById("modal-type-list");
    if(v==0){
        fund.style.display = "none";
        fund.value = "";
        list.style.display = "none";
    }else{
        fund.style.display = "block";
        list.style.display = "block";
    }
}

