
<!--    카테고리 함수-->
function addCategory(){
    let textBox = document.getElementById("b-cat-name");
    let name = textBox.value;
    if(name == null || name == ''){
        alert("카테고리 명을 입력하세요!!");
        return;
    }
    insertCategory(name);
    textBox.value = "";
}
function removeCategory(cid){
    deleteCategory(cid);
}

<!--    섹션 함수-->
function showSection(cid, object){
    if(object.value == "보기"){
        sectionList(cid);
        object.value = "닫기";
    }else{
        document.querySelector('#sec-list' + cid).innerHTML = "";
        object.value = "보기";
    }
}
function addSection(){
    let textBox = document.getElementById("b-sec-name");
    let name = textBox.value;
    let select = document.getElementById("b-sec-category");
    let category = select.value;
    let section = {};

    if(category == 0){
        alert("카테고리를 선택하세요!!");
        return;
    }else if(name == null || name == ''){
        alert("섹션 명을 입력하세요!!");
        return;
    }

    section.boardSectionName = name;
    section.boardCategoryId = category;

    insertSection(section);
    textBox.value = '';
    select.value = 0;
}
function removeSection(sid, cid){
    deleteSection(sid, cid);
}

function pageMove(page){
    console.log(page);
    let by = document.getElementById("by").value;
    let ud = document.getElementById("ud").value;
    let title = document.getElementById("title").value;
    let category = document.getElementById("cat").value;

    location.href="board?page=" + page + "&by=" + by + "&ud=" + ud + "&title=" + title + "&cid=" + category;
}
