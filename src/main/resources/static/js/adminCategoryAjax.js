//ajax 스크립트
<!--    직업 카테고리-->
    function findAllJob(){//모든 직업 카테고리 가져오기
        $.ajax({
            url: '/admin/category/job/list',
            type: 'get',
            success: function(data){
                let jobListHtml = '';
                data.forEach(row => {
                    let name = row.jobName;
                    let id = row.jobId;
                    jobListHtml += '<div class="cat-elem">';
                    jobListHtml += '<input type="button" value="' + name + '" class="a"/>';
                    jobListHtml += '<input type="button" value="삭제" class="btn-delete" onclick="deletejob('+id+')">';
                    jobListHtml += '</div>';
                })
                document.querySelector('#job-list').innerHTML = jobListHtml;
            },
            error: function(){
                console.log("job data load error")
            }
        })
    }
    function insertjob(jname){//직업 카테고리 집어넣기
        console.log(jname);
        $.ajax({
            url:"/admin/category/job/insert",
            type: "post",
            data: jname,
            contentType:'application/json; charset-utf-8',
            success:function (result){
                console.log(result);
                findAllJob()
            },
                error:  function(){
                console.log("job data insert error")
            }
        });
    }
    function removejob(jid){//직업 카테고리 삭제하기
        $.ajax({
            url:'/admin/category/job/' + jid,
            type:"delete",
            success:function(result){
                findAllJob()
            },
            error:()=>{console.log('error')}
        });
    }
<!--    서비스 타입 카테고리-->
    function findAllType(){//서비스 타입 가져오기
        $.ajax({
            url: '/admin/category/servicetype/list',
            type: 'get',
            success: function(data){
                let typeHtml = '';
                let i = 1;
                data.forEach(row => {
                    let name = row.serviceTypeName;
                    if(i%2==1){
                        typeHtml += '<div class="type-box">';
                        typeHtml += '<div class="type-info">';
                        typeHtml += '<input type="checkbox" name="typecheck"/>';
                        typeHtml += '<input type="text" name="typeName" value="' + name + '" readonly/>';
                        typeHtml += '</div>';

                    }else{
                        typeHtml += '<div class="type-info">';
                        typeHtml += '<input type="checkbox" name="typecheck"/>';
                        typeHtml += '<input type="text" name="typeName" value="' + name + '" readonly/>';
                        typeHtml += '</div>';
                        typeHtml += '</div>';
                    }
                    i++;
                })
                if(i%2==0){
                    typeHtml += '</div>';
                }
                document.querySelector('#type-box').innerHTML = typeHtml;
            },
            error: function(){
                console.log("error")
            }
        })
    }
     function inserttype(tname){//서비스 타입 카테고리 집어넣기
        console.log(tname);
        $.ajax({
            url:"/admin/category/servicetype/insert",
            type: "post",
            data: tname,
            contentType:'application/json; charset-utf-8',
            success:function (result){
                console.log(result);
                findAllType()
            },
                error:  function(){
                console.log("type data insert error")
            }
        });
    }
<!--    분야 카테고리-->
    function findAllCategory(){//분야 카테고리 리스트 가져오기
        $.ajax({
            url: '/admin/category/list',
            type: 'get',
            success: function(data){
                let categoryListHtml = '<div>';
                data.forEach(row => {
                    let ID = row.categoryId;
                    let Name = row.categoryName;
                    if(ID == row.categoryUpperId){
                        categoryListHtml += '</div>';
                        categoryListHtml += '<div class="higher-category">';
                        categoryListHtml += '<h5>' + Name + '</h5>';
                        categoryListHtml += '<div class="cat-inner-box">';
                    } else {
                        categoryListHtml += '<div class="cat-elem">';
                        categoryListHtml += '<input type="hidden" value="' + ID + '">';
                        categoryListHtml += '<input type="button" value="' + Name + '" class="a"';
                        categoryListHtml += 'onclick="viewCategory(' + ID + ')"/>';
                        categoryListHtml += '<input type="button" value="삭제" class="btn-delete"';
                        categoryListHtml += 'onclick="deleteCategory(' + ID + ')"/>';
                        categoryListHtml += '</div>';
                    }
                })
                document.querySelector('#category-list').innerHTML = categoryListHtml;
            },
            error: function(){
                console.log("error")
            }
        })
    }
    function findCategory(cid){//분야 카테고리 개별 가져오기
        console.log(cid);
        $.ajax({
            url: '/admin/category/' + cid,
            type: 'get',
            success: function(data){
                console.log(data);
                document.getElementById("categoryId").value = data.categoryId;
                document.getElementById("categoryName").value = data.categoryName;
                document.getElementById("categoryUpperId").value = data.categoryUpperId;
                document.getElementById("categoryRefund").value = date.categoryRefund;
            },
            error: function(){
                console.log("error")
            }
        })
    }