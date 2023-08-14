<!--카테고리 ajax-->
function categoryList(){
    $.ajax({
        url: '/admin/board/category/list',
        type: 'get',
        success: function(data){
            let boardCategoryHtml = '';
            let boardCategoryHtmlO = '<option value="0">카테고리 선택</option>';

            data.forEach(row => {
                let name = row.boardCategoryName;
                let id = row.boardCategoryId;
                boardCategoryHtml += '<div class="category">';
                boardCategoryHtml += '<div class="cat-head">';
                boardCategoryHtml += '<div class="cat-name"><h5>' + name + '</h5></div>';
                boardCategoryHtml += '<input type="button" value="보기" class="btn-view mrz" onclick="showSection(' + id + ', this)"/>';
                boardCategoryHtml += '<input type="button" value="삭제" class="btn-delete" onclick="removeCategory(' + id + ')"/>';
                boardCategoryHtml += '</div>';
                boardCategoryHtml += '<div id="sec-list' + id + '" class="section"></div>';
                boardCategoryHtml += '</div>';
                boardCategoryHtmlO += '<option value="' + id + '">' + name + '</option>';
            })
            document.querySelector('#cat-list').innerHTML = boardCategoryHtml;
            document.querySelector('#b-sec-category').innerHTML = boardCategoryHtmlO;
            document.querySelector('#cat').innerHTML = boardCategoryHtmlO;
        },
        error: function(){
            console.log("category load error")
        }
    })
}
function insertCategory(name){
    $.ajax({
        url:"/admin/board/category/insert",
        type: "post",
        data: name,
        contentType:'application/json; charset-utf-8',
        success:function (result){
            categoryList();
        },
        error:  function(){
            console.log("category insert error");
        }
    });
}
function deleteCategory(cid){
    $.ajax({
        url:'/admin/board/category/' + cid,
        type:"delete",
        success:function(result){
            categoryList(cid);
        },
        error:()=>{console.log('section delete error')}
    });
}

<!--섹션 ajax-->
function sectionList(cid){
    $.ajax({
        url: '/admin/board/section/list',
        type: 'post',
        data: JSON.stringify(cid),
        contentType:'application/json; charset-utf-8',
        success: function(data){
            let boardSectionHtml = '';
            data.forEach(row => {
                let name = row.boardSectionName;
                let id = row.boardSectionId;
                boardSectionHtml += '<div class="sec-elem">';
                boardSectionHtml += '<input type="button" value="' + name + '" class="a"/>';
                boardSectionHtml += '<input type="button" value="삭제" class="btn-delete mla" onclick="removeSection('+id+','+cid+')">';
                boardSectionHtml += '</div>';
            })
            document.querySelector('#sec-list' + cid).innerHTML = boardSectionHtml;
        },
        error: function(){
            console.log("section load error");
        }
    })
}
function insertSection(section){
    $.ajax({
        url:"/admin/board/section/insert",
        type: "post",
        data: JSON.stringify(section),
        contentType:'application/json; charset-utf-8',
        success:function (result){
        },
        error:  function(){
            console.log("category insert error");
        }
    });
}
function deleteSection(sid, cid){
    $.ajax({
        url:'/admin/board/section/' + sid,
        type:"delete",
        success:function(result){
            sectionList(cid);
        },
        error:()=>{console.log('section delete error')}
    });
}

//게시글 관리
function boardList(cid){
    $.ajax({
        url: '/admin/board/list',
        type: 'post',
        data: JSON.stringify(cid),
        contentType:'application/json; charset-utf-8',
        success: function(data){
            let boardSectionHtml = '';
            data.forEach(row => {
                let name = row.boardSectionName;
                let id = row.boardSectionId;
            })
            document.querySelector('#sec-list' + cid).innerHTML = boardSectionHtml;
        },
        error: function(){
            console.log("section load error");
        }
    })
}