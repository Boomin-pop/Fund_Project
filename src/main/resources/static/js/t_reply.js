// let replyFunc = (function(){
let replyFunc = (() => {
    // 댓글 등록
    function register(reply, cb){
        $.ajax({
            url:'/bbs2/replies/new',
            type:'post',
            data:JSON.stringify(reply), // JSON객체를 문자열(텍스트) 변환
            contentType: 'application/json; charset=utf8',
            success:function(result){
                if(cb){
                    cb(result);
                }
            },
            error:()=>{alert("요청 실패!!!")}
        });
    }
    // 댓글 조회
    function read(rno, cb){
        $.ajax({
            url:'/bbs2/replies/'+rno,
            type:'get',
            success:(result)=>{
                if(cb) cb(result);
            },
            error:()=>{
                alert('요청 실패!!');
            }
        });
    }

    // 댓글 삭제
    function remove(rno, cb){
        $.ajax({
            url:'/bbs2/replies/'+rno,
            type:'delete',
            success:(result) => {
                if(cb){
                    cb(result);
                }
            },
            error:()=>{alert("요청실패!!")}
        });
    }

    // 댓글 수정
    function update(reply, cb){
        $.ajax({
            url:'/bbs2/replies/'+reply.rno,
            type:'put',
            data:JSON.stringify(reply),
            contentType: 'application/json; charset=utf8',
            success:(result) => {
                if(cb) cb(result);
            },
            error:()=>{
                alert("요청실패!!!");
            }
        });
    }

    // 특정 게시글에 대한 댓글 리스트
    function getList(bid, cb){
        $.ajax({
            url:'/bbs2/replies/list/'+bid,
            type:'get',
            success:(result) => {
                if(cb) cb(result);
            },
            error:()=>{
                alert("요청실패!!!");
            }
        });
    }

    return {
        register:register,
        read:read,
        remove :remove,
        update:update,
        getList:getList
    }

})();