let serviceObject= {
    init: function () {
        $("select[name=serviceTopCat]").on("change", () => {
            this.serviceTypeChk();
        });
        $("#serviceFinalSubmit").on("click", ()=>{
            this.serviceFinalSubmit();
        })

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
        var serviceTypeCnt = 0;
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
        console.log("서비스 탑캣코드 찍어보기 : "+code.serviceTopCatCode);
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
                        serviceTypeCnt++;
                        let serviceTypeCode = row.serviceTypeCode;
                        let serviceTypeName = row.serviceTypeName;
                        let mandatoryInput = row.mandatoryInput;
                        console.log("forEach 코드 : " + serviceTypeCode + ", 타입명 : " + serviceTypeName + ", 필수입력 : " + mandatoryInput);
                        console.log("idTest : serviceType"+serviceTypeCnt);

                        if (mandatoryInput == 1) {
                            str += '<input type="hidden" name="serviceTypeName'+serviceTypeCnt+'" value="'+serviceTypeName+'">'
                                + '<div class="serviceType requiredBorder d-flex px-3 my-4" name="serviceTypeReq" style="width:800px; height:100px; line-height:100px">'
                                + '<div style="width:150px; height:50px; color:red;">'
                                + '<span name="typeName" value="' + serviceTypeCode + '" style="color:black">' + serviceTypeName + '</span>*</div>'
                                + '<div class="typeInputdiv" name="typeInputdiv"><input type="text" class="typeInput" name="serviceType'+serviceTypeCnt+'"  style="width:550px; height:50px; line-height:50px" value="" required placeholder="serviceType'+serviceTypeCnt+'"></div>'
                                + '</div>'
                        }
                        if(mandatoryInput != 1) {
                            str += '<input type="hidden" name="serviceTypeName'+serviceTypeCnt+'" value="'+serviceTypeName+'">'
                                + '<div class="serviceType d-flex px-3 my-4" name="serviceType" id="serviceType" style="width:800px; height:100px; line-height:100px">'
                                + '<div style="width:150px; height:50px;><span name="typeName" value="' + serviceTypeCode + '">' + serviceTypeName + '</span></div>'
                                + '<div class="typeInputdiv" name="typeInputdiv"><input type="text" class="typeInput" name="serviceType'+serviceTypeCnt+'"  style="width:550px; height:50px; line-height:50px" value="" placeholder="serviceType'+serviceTypeCnt+'"></div>'
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
    },

    // serviceFinalSubmit: function(){
    //     alert("서비스 등록 요청!");
    //     let serviceDTO={
    //         splID:
    //         serviceStatus:
    //         serviceTitle:
    //         serviceTopCatCode:
    //         serviceTopCatName:
    //         serviceType1:
    //         serviceType2:
    //         serviceType3:
    //         serviceType4:
    //         serviceType5:
    //         serviceType6:
    //         serviceType7:
    //         serviceType8:
    //         serviceType9:
    //         serviceType10:
    //         keywordIsExist:
    //         keyword1:
    //         keyword2:
    //         keyword3:
    //         keyword4:
    //         keyword5:
    //         priceTitle:
    //         priceExplain:
    //         priceNumber:
    //         serviceDuration:
    //         serviceModNum:
    //
    //         AddOptExist1:
    //         AddOptTitle1:
    //         AddOPtExplain1:
    //         AddOptPrice1:
    //         AddOptDay1:
    //
    //         AddOptExist2:
    //         AddOptTitle2:
    //         AddOPtExplain2:
    //         AddOptPrice2:
    //         AddOptDay2:
    //
    //         AddOptExist3:
    //         AddOptTitle3:
    //         AddOPtExplain3:
    //         AddOptPrice3:
    //         AddOptDay3:
    //
    //         AddOptExist4:
    //         AddOptTitle4:
    //         AddOPtExplain4:
    //         AddOptPrice4:
    //         AddOptDay4:
    //
    //         AddOptExist5:
    //         AddOptTitle5:
    //         AddOPtExplain5:
    //         AddOptPrice5:
    //         AddOptDay5:
    //
    //         AddOptExist6:
    //         AddOptTitle6:
    //         AddOPtExplain6:
    //         AddOptPrice6:
    //         AddOptDay6:
    //
    //         AddOptExist7:
    //         AddOptTitle7:
    //         AddOPtExplain7:
    //         AddOptPrice7:
    //         AddOptDay7:
    //
    //         AddOptExist8:
    //         AddOptTitle8:
    //         AddOPtExplain8:
    //         AddOptPrice8:
    //         AddOptDay8:
    //
    //         AddOptExist9:
    //         AddOptTitle9:
    //         AddOPtExplain9:
    //         AddOptPrice9:
    //         AddOptDay9:
    //
    //         AddOptExist10:
    //         AddOptTitle10:
    //         AddOPtExplain10
    //         AddOptPrice10:
    //         AddOptDay10:
    //
    //         serviceExplain:
    //         serviceProcedur
    //         clientPreps:
    //         mainImg:
    //
    //         subImgExist:
    //         subImg1:
    //         subImg2:
    //         subImg3:
    //         subImg4:
    //         subImg5:
    //         subImg6:
    //         subImg7:
    //         subImg8:
    //         subImg9:
    //
    //
    //     }
    // }



    // servipriceTitle;ceTitleChk:function (){
    //     lpriceExplain;et serviceTitle = $("#serviceTitle");
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
