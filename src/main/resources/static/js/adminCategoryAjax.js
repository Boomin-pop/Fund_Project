//ajax 스크립트
var ucats = ['0'];
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
                let typeHtmlM = '<table>'; // modal에 삽입
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
                    typeHtmlS += '<input type="checkbox" name="typecheckS" value="' + Id + '" onclick="addCheckedType(this)"/>';
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
                document.querySelector('#modal-type-list').innerHTML = typeHtmlM + '</table>';
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
                let categoryListHtmlS = '<option>카테고리</option><option value=0>상위 카테고리로 변경</option>';
                let categoryListHtmlM = '<option value="0">상위 카테고리로 추가</option>'; // modal에 삽입
                data.forEach(row => {
                    let ID = row.categoryId;
                    let Name = row.categoryName;
                    if(ID == row.categoryUpperId){
                        categoryListHtml += '</div></div>';
                        categoryListHtml += '<div class="higher-category">';
                        categoryListHtml += '<div class="div"><div style="width: 60%;"><h5>' + Name + '</h5></div>';
                        categoryListHtml += '<input type="button" value="삭제" class="btn-delete"';
                        categoryListHtml += 'onclick="deleteCategoryU(' + ID + ')"/></div>';
                        categoryListHtml += '<div class="cat-inner-box">';
                        categoryListHtmlS += '<option value="' + ID + '">' + Name + '</>'
                        categoryListHtmlM += '<option value="' + ID + '">' + Name + '</>'
                    } else {
                        categoryListHtml += '<div class="cat-elem">';
                        categoryListHtml += '<input type="button" value="' + Name + '" class="a"';
                        categoryListHtml += 'onclick="viewCategory(' + ID + ')"/>';
                        categoryListHtml += '<input type="button" value="삭제" class="btn-delete"';
                        categoryListHtml += 'onclick="deleteCategory(' + ID + ')"/>';
                        categoryListHtml += '</div>';
                    }
                })
                document.querySelector('#category-list').innerHTML = categoryListHtml;
                document.querySelector('#categoryUpperId').innerHTML = categoryListHtmlS;
                document.querySelector('#select-upperCategory').innerHTML = categoryListHtmlM;
            },
            error: function(){
                console.log("error")
            }
        })
    }
function findCategory(cid){//분야 카테고리 개별 가져오기
    let types = document.getElementsByName("typecheckS");
    $.ajax({
        url: '/admin/category/' + cid,
        type: 'get',
        success: function(data){
            document.getElementById("categoryId").value = data.categoryId;
            document.getElementById("categoryName").value = data.categoryName;
            document.getElementById("categoryUpperId").value = data.categoryUpperId;
            document.getElementById("categoryRefund").value = data.categoryRefund;
            let j = 0;
            types.forEach((stype) => {
                    if(stype.value == data.serviceTypeId1 ||
                                       stype.value == data.serviceTypeId2 ||
                                       stype.value == data.serviceTypeId3 ||
                                       stype.value == data.serviceTypeId4 ||
                                       stype.value == data.serviceTypeId5 ||
                                       stype.value == data.serviceTypeId6 ||
                                       stype.value == data.serviceTypeId7 ||
                                       stype.value == data.serviceTypeId8){
                                        j++;
                                        stype.checked = true;
                                       }
                    else{
                        stype.checked = false;
                    }
                });
                checkType = j;
        },
        error: function(){
            console.log("error")
        }
    })
}
function insertCategory(putData){
    $.ajax({
        url:"/admin/category/insert",
        type: "post",
        data: JSON.stringify(putData),
        contentType:'application/json; charset-utf-8',
        success:function (result){
            console.log(result);
            findAllCategory()
        },
        error:  function(){
            console.log("service data insert error")
        }
    });
}
function modifyCategory(putData){
    $.ajax({
        url:"/admin/category/update",
        type: "post",
        data: JSON.stringify(putData),
        contentType:'application/json; charset-utf-8',
        success:function (result){
            console.log(result);
            findCategory(putData.categoryId);
        },
        error:  function(){
            console.log("service data update error")
        }
    });
}
function removeCategory(cid){
    $.ajax({
        url:'/admin/category/' + cid,
        type:"delete",
        success:function(result){
            findAllCategory()
        },
        error:()=>{console.log('error')}
    });
}
function removeCategoryU(cid){
    $.ajax({
            url:'/admin/category/U/' + cid,
            type:"delete",
            success:function(result){
                findAllCategory()
            },
            error:()=>{console.log('error')}
        });
}