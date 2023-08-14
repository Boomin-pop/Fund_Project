let serviceObject= {
    init: function () {
        $("select[name=serviceTopCat]").on("change", () => {
            this.serviceTypeChk();
        });
      //   $("#serviceTitle").on("change", ()=>{
      //       console.log("제목입력 포착")
      //       this.serviceTitleChk();
      //   });
      //   $("#serviceTopCat").on("change", ()=>{
      //       console.log("1차 카테고리 선택 포착")
      //       this.serviceTopCatChk();
      //   });
      // //  $("div[name=typeInputdiv] > input").on("change", () =>{
      //   //$("input[name=typeInput]").on("change", () =>{
      //   $("input[name=typeInput].value").on("change", () =>{
      //       console.log("typeInput박스 입력 포착")
      //       this.serviceTypeInputChk();
      //   })
      //   let topCatChk = "";
      //   let titleChk="";
      //   let srvCnt=0;
      //   let srvInput = "";
    },


    serviceTypeChk: function () {
        let ServiceType;
        let code={
            serviceTopCatCode : $("select[name=serviceTopCat] > option:selected").val()
        }
        console.log(code);
        if(code.serviceTopCatCode==0){
            let str="";
            ServiceType = document.getElementById("serviceType");
            str += '';
            ServiceType.innerHTML = str;

            return;
        }
        alert("서비스 탑캣코드 찍어보기 : "+code.serviceTopCatCode);
        $.ajax({
            type:"post",
            url:"/service/chkedServiceType",
            data:JSON.stringify(code),
            contentType:"application/json; charset=utf-8",
            success: function(data){
                console.log("불러온 데이터 : " +data);
                let str = "";
                let serviceTypeDiv = document.getElementById("serviceTypeDiv");
                ServiceType = document.getElementById("serviceType");
                serviceTypeDiv.style.display="block";
                //ObjectMapper mapper = new ObjectMapper();

               // for(let idx in data) {

                    // for(i=0; i< data.length; i++){
                    data.forEach(row => {
                        let serviceTypeCode = row.serviceTypeCode;
                        let serviceTypeName = row.serviceTypeName;
                        let mandatoryInput = row.mandatoryInput;
                        console.log("forEach 코드 : " + serviceTypeCode + ", 타입명 : " + serviceTypeName + ", 필수입력 : " + mandatoryInput);
                        if (mandatoryInput == 1) {
                            str += '<div class="serviceType d-flex border border-danger px-3 my-4" name="serviceType" id="serviceType" style="width:1000px; height:100px; line-height:100px">'
                                + '<div style="width:200px; height:50px; color:red;">'
                                + '<span name="typeName" value="' + serviceTypeCode + '" style="color:black">' + serviceTypeName + '</span>*</div>'

                                + '<div class="typeInputdiv" name="typeInputdiv"><input type="text" name="typeInput"  style="width:700px; height:50px; line-height:50px" required placeholder="입력해주세요."></div>'
                                + '</div>'
                        }
                        if(mandatoryInput != 1) {
                            str += '<div class="serviceType d-flex px-3 my-4" name="serviceType" id="serviceType" style="width:1000px; height:100px; line-height:100px">'
                                + '<div style="width:200px; height:50px; line-height:100px"><p name="typeName" value="' + serviceTypeCode + '">' + serviceTypeName + '</p></div>'
                                + '<div class="typeInputdiv" name="typeInputdiv"><input type="text" name="typeInput"  style="width:700px; height:50px; line-height:50px" placeholder="입력해주세요."></div>'
                                + '</div>'
                        }
                        if(serviceTypeCode=null){
                            str +=''
                        }
                        ServiceType.innerHTML = str;
                    })
            },
            error:function(error){
                let serviceTypeDiv = document.getElementById("serviceTypeDiv");
                let ServiceType = document.getElementById("serviceType");
                serviceTypeDiv.style.display="none";
                alert(error);
            }
        })
    }

    // serviceTitleChk:function (){
    //     let serviceTitle = $("#serviceTitle");
    //     if (serviceTitle.val().length < 30 || serviceTitle.val().length > 10) {
    //         document.getElementById("titleAlert").style.display='none';
    //         titleChk = "true";
    //         console.log("제목 작성여부 : "+titleChk);
    //     }
    //
    // },
    //
    // serviceTopCatChk:function (){
    //     let topCatSel = $("select[name=serviceTopCat] > option:selected");
    //     console.log("topcatsel : " + topCatSel.val());
    //     if(topCatSel.val().trim()!="" || topCatSel.val().length>3){
    //         document.getElementById("TopCatAlert").style.display='none';
    //         topCatChk="true";
    //         console.log("카테고리 선택 여부 : "+topCatChk);
    //     }
    //     if(topCatSel.val().trim()==""){
    //         topCatChk="false";
    //         console.log(document.getElementById("serviceTypeDiv"));
    //         document.getElementById("serviceTypeDiv").style.display="none";
    //         console.log("카테고리 선택 여부 : "+topCatChk);
    //     }
    // },
    //
    // serviceTypeInputChk:function (){
    //     console.log("serviceTypeInputChk 호출")
    //     let typeInput = $("input[name=typeInput]:required");
    //     //console.log("타이프인풋 : "+typeInput.length);
    //     console.log("typeInput 입력값 : " + typeInput.val());
    //     if(typeInput.val().length > 4){
    //         srvCnt++;
    //         console.log("서비스 카운터 : "+srvCnt)
    //     }
    //     if(typeInput.length==srvCnt){
    //         srvInput="true";
    //
    //     }
    // }



    //
    // function selbox(){
    // alert("코드 선택")
    // let code={
    //     serviceTopCatCode: $("select[name=serviceTopCat] > option:selected").val()
    //     //serviceTopCatCode: $("#serviceTopCat > option:selected").val()
    // }
    // alert(code.serviceTopCatCode)
    // $.ajax({
    //     type:"post",
    //     url:"/service/chkedServiceType",
    //     data:JSON.stringify(code),
    //     contentType:"application/json; charset=utf-8"
    // })


}

serviceObject.init();
