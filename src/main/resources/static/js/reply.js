
// let replyFunc = (function (){})();
let replyFunc = (() => {

    //댓글 등록
    function register(reply, cb){
        $.ajax({
            //등록(하기로 설계했다고 가정)
            url:"/bbs2/replies/new",
            type : "post",
            // 우리는 register안의 매개변수 reply를 db로 넘길 것임. 테이블안에 데이터가 들어갈 때 : 게시글 번호, 댓글 내용, 댓글 작성자 = 한번에 넘기려면 json으로 만드는 법 밖에 없다.
            // json은 자바스크립트 객체다. 따라서 문자열로 변환해줘야 한다.
            // 지금 이건 자바스크립트 객체이므로 json객체를 문자열(텍스트)로 변환작업 해줘야 한다.
            data : JSON.stringify(reply),
            //마임형태로 컨텐츠 타입을 표시해 준다.ㅎ후
            contentType: "application/json; charset=utf8",
            //성공하면 서버에서 넘어오는 데이터로 콜백함수를 호출
            // result는 서버에서 받아온 데이터
            success:function (result){
                if(cb){
                    cb(result);
                }
            },
                error:() => {alert("요청 실패!!!")}
        });
    }

    //댓글 조회
    function read(rno, cb){
        $.ajax({
            url:"/bbs2/replies/"+rno,
            type:"get",
            success:(result)=>{
                if(cb) cb(result);
            },
            error:()=>{
                alert("요청실패!!");
            }
        });
    }

    //댓글 수정
    function update(reply, cb){
        //수정된 내용이 넘어와야 하니까 json으로 받을 것
        $.ajax({
            url:"/bbs2/replies/"+reply.rno,
            //자바스크립트 객체 접근할때 = xx.xx
            type:"put",
            //post, put, patch 3개 다 가능. put은 보통 업로드할때 많이 씀
            data:JSON.stringify(reply),
            contentType:'application/json; charset=utf8',
            success:(result)=>{
                if(cb) cb(result);
            },
            error:()=>{
                alert("요청실패!!");
            }
        });
    }

    // 특정 게시글에 대한 댓글 리스트
    // function  getList(bid, cb){

    // function  getList(param, cb){
    //     $.ajax({
    //        url:"/bbs2/replies/list/"+bid,
    //        type:"get",
    //         success:(result)=>{
    //             if(cb) cb(result);
    //         },
    //         error:()=>{
    //             alert("요청실패!!");
    //         }
    //     });
    // }

    function  getList(param, cb){
        //bid값 하나 가져오기
        let bid = param.bid;
        //뷰페이지도 넘어오니 뷰페이지도 가져오기
        let viewPage = param.viewPage;

        //이번 요청엔 뷰페이지도 함께 넘어가야 함
        $.ajax({
            url:"/bbs2/replies/list/"+bid+"/"+viewPage,
            type:"get",
            //result는 댓글 테이블의 값이 넘어오는 것.
            success:(result)=>{
                if(cb) cb(result);
            },
            error:()=>{
                alert("요청실패!!");
            }
        });
    }




    // 댓글 삭제
    function remove(rno, cb){
        $.ajax({
            url:"/bbs2/replies/"+rno,
            // rest에서 삭제 요청 메서드는 delete / 기존의 get/post만 있던것과 다름!!
            type:"delete",
            success:function(result){
                if(cb){
                    cb(result);
                }
            },
            error:()=>{alert("요청 실패!!")}
        });
    }

    // 시간포맷 변경
    function showDateTime(timeValue){
        //유닉스시간을 받아서 변환
        var now = new Date(); //현재시간

        var gap = now.getTime() - timeValue;  //현재시간과 댓글등록 시간사이의 갭

        var rDate = new Date(timeValue);  // 댓글등록 시간을 Data 객체로 생성


        if(gap < (1000 * 60 * 60 * 24)){  // 현재시간과 댓글시간 사이의 갭이 24시간 미만이면 시간으로 표기.
            var hh = rDate.getHours();
            var mi = rDate.getMinutes();
            var ss = rDate.getSeconds();

            // 시,분,초 가 9보다 크면 그냥 표기, 작으면 0을 넣어주겠다.
            return [(hh > 9 ? '' : '0')+hh, ':', (mi > 9 ? '' : '0')+mi,
                ':', (ss > 9 ? '' : '0')+ss].join('');

        }else{ // 24시간 이상이면 년월일로 표기
            var yy = rDate.getFullYear();
            var mm = rDate.getMonth() + 1; // 0 --> 1월
            var dd = rDate.getDate();

            return [yy, '/', (mm > 9 ? '' : '0')+mm,
                '/', (dd > 9 ? '' : '0')+dd].join('');
        }
    }

    return{
        register:register,
        remove:remove,
        read:read,
        update:update,
        getList:getList,
        showDateTime:showDateTime
    }
})();
