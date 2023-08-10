let jbox = document.getElementById("box-job");
    let jbtn = document.getElementById("btn-job");
    let fbox = document.getElementById("box-field");
    let fbtn = document.getElementById("btn-field");

    jbox.style.display = "none";
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
        findAllJob();
        findAllType();
        findAllCategory()
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
        if(name.value == null || name.value == ''){
            alert("서비스 타입 명을 작성하세요!!");
            return;
        }
        inserttype(name.value);
        name.value = '';
    }
<!--  분야 상세보기  -->
    function viewCategory(id){
        findCategory(id);
    }
    function deleteCategory(id){
        removeCategory(id);
    }