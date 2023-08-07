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
                let typeHtml = '';  // aside에 삽입
                let typeHtmlS = ''; // section에 삽입
                let typeHtmlM = ''; // modal에 삽입
                let i = 1;
                data.forEach(row => {
                    let name = row.serviceTypeName;
                    let Id = row.serviceTypeId;
                    let M = row.serviceTypeMandatory;
                    if(i%2==1){
                        typeHtmlM += '<tr>'
                        typeHtmlM += '<td><input type="checkbox" name="typecheckM" value="' + Id + '" onclick="addCheckedTypeM(this)"/>';
                        typeHtmlM += '<input type="text" name="typeName" value="' + name + '" readonly/></td>';
                    }else{
                        typeHtmlM += '<td><input type="checkbox" name="typecheckM" value="' + Id + '" onclick="addCheckedTypeM(this)"/>';
                        typeHtmlM += '<input type="text" name="typeName" value="' + name + '" readonly/></td>';
                        typeHtmlM += '</tr>'
                    }
                    typeHtml += '<div class="cat-elem">';
                    typeHtml += '<input type="button" value="' + name;
                    if(M==1){
                        typeHtml += '(필수)';
                    }
                    typeHtml += '" class="a"/><input type="button" value="삭제" class="btn-delete" onclick="deletetype('+Id+')">';
                    typeHtml += '</div>';

                    typeHtmlS += '<div class="type-info">';
                    typeHtmlS += '<input type="checkbox" name="typecheck" value="' + Id + '" onclick="addCheckedType(this)"/>';
                    typeHtmlS += '<input type="text" name="typeName" value="' + name + '" readonly/>';
                    typeHtmlS += '</div>';
                    i++;
                })
                if(i%2==0){
                    typeHtml += '</div>';
                    typeHtmlM += '</tr>'
                }
                document.querySelector('#type-list').innerHTML = typeHtml;
                document.querySelector('#type-box').innerHTML = typeHtmlS;
                document.querySelector('#modal-type-list').innerHTML += typeHtmlM;
            },
            error: function(){
                console.log("error")
            }
        })
    }
     function inserttype(tname, check){//서비스 타입 카테고리 집어넣기
        $.ajax({
            url:"/admin/category/servicetype/insert",
            type: "post",
            data: JSON.stringify(
                {
                    "serviceTypeName": tname,
                    "serviceTypeMandatory": check
                }
            ),
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
    function removetype(tid){//직업 카테고리 삭제하기
            $.ajax({
                url:'/admin/category/servicetype/' + tid,
                type:"delete",
                success:function(result){
                    findAllType()
                },
                error:()=>{console.log('error')}
            });
        }
<!--    분야 카테고리-->
    function findAllCategory(){//분야 카테고리 리스트 가져오기
        $.ajax({
            url: '/admin/category/list',
            type: 'get',
            success: function(data){
                let categoryListHtml = '<div>';// aside에 삽입
                let categoryListHtmlM = '<option>상위 카테고리로 추가</option>'; // modal에 삽입
                data.forEach(row => {
                    let ID = row.categoryId;
                    let Name = row.categoryName;
                    if(ID == row.categoryUpperId){
                        categoryListHtml += '</div>';
                        categoryListHtml += '<div class="higher-category">';
                        categoryListHtml += '<h5>' + Name + '</h5>';
                        categoryListHtml += '<div class="cat-inner-box">';
                        categoryListHtmlM += '<option value="' + ID + '">' + Name + '</>'
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
                document.querySelector('#select-upperCategory').innerHTML = categoryListHtmlM;
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
                document.getElementById("categoryRefund").value = data.categoryRefund;
            },
            error: function(){
                console.log("error")
            }
        })
    }