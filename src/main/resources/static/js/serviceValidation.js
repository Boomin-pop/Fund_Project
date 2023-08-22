let serviceBodyBtn = {
    init: function () {
        $("#btnSave").on("click", () => {
            if(document.getElementById("num1").innerText=='V'){
                this.firstInputValid(); console.log("1번째 세이브 버튼 클릭!"); return}
            if(document.getElementById("num2").innerText=='V'){
                this.secondInputValid(); console.log("2번째 세이브 버튼 클릭!"); return}
            if(document.getElementById("num3").innerText=='V'){
                this.thirdInputValid(); console.log("3번째 세이브 버튼 클릭!"); return}
            if(document.getElementById("num4").innerText=='V'){
                this.fourthInputValid(); console.log("4번째 세이브 버튼 클릭!"); return}
            if(document.getElementById("num5").innerText=='V'){
                this.firstInputValid(); console.log("5번째 세이브 버튼 클릭!"); return}
        });

        $("#btnNext").on("click", () => {
            if(document.getElementById("num1").innerText==='V'){
                this.firstInputValid();
               // this.firstBtn();
                console.log("1번째 다음 버튼 클릭!"); return}
            if(document.getElementById("num2").innerText==='V'){
                //this.firstInputValid();
                this.secondInputValid(); console.log("2번째 다음 버튼 클릭!"); return}
            if(document.getElementById("num3").innerText==='V'){
                //this.firstInputValid(); this.secondInputValid();
                this.thirdInputValid(); console.log("3번째 다음 버튼 클릭!"); return}
            if(document.getElementById("num4").innerText==='V'){
                //this.firstInputValid(); this.firstInputValid(); this.secondInputValid(); this.thirdInputValid();
                this.fourthInputValid(); console.log("4번째 다음 버튼 클릭!"); return}
            if(document.getElementById("num5").innerText==='V'){
                this.fifthInputValid(); console.log("5번째 다음 버튼 클릭!"); return}
        });

        $("#btn-one").on("click", ()=>{this.firstBtn(); return});
        $("#btn-two").on("click", ()=>{this.firstInputValid(); return});
        $("#btn-three").on("click", ()=>{this.firstInputValid(); this.secondInputValid(); return});
        $("#btn-four").on("click", ()=>{this.firstInputValid(); this.secondInputValid(); this.thirdInputValid(); return});
        $("#btn-five").on("click", ()=>{this.firstInputValid(); this.secondInputValid(); this.thirdInputValid(); this.fourthInputValid();
            console.log("5번째 버튼 클릭"); return;
        });

        $("#mainImg").on("change", ()=>{console.log("유효성 검사 이미지태그소스 : "+imgTagSource.length)});

    },

    firstInputValid: function () {
        let serviceTypeArea = $(".serviceType");
        let serviceTitle = $("#serviceTitle");
        let titleAlert = $("#titleAlert");
        let btnSave = $("#btn-save");
        let btnNext = $("#btn-next");
        let serviceTopCat =$("select[name=serviceTopCat]");
        let charCounter=$("div[name=charCounter]");
        let topCatSel = $("select[name=serviceTopCat] > option:selected");
        let typeInput = $(".typeInput:required");
        let topCat = document.getElementById("serviceTopCat");
        let selectedCat = (topCat.options[topCat.selectedIndex].value);
        let srvCnt = 0;

        for (var i = 0; i < typeInput.length; i++) {
            console.log(i + "번째 입력값 : " + typeInput[i].value);
            if (typeInput[i].value.length > 2) {
                srvCnt++;
            }
        }
        console.log("서비스 인풋 카운터 : " + srvCnt);
        console.log("필수입력 서비스타입 갯수 : " + typeInput.length);

        if (srvCnt >0 && srvCnt === typeInput.length) {
            srvTypeChk = "true";
            console.log("서비스타입 필수입력값 입력여부 : " + srvTypeChk)
            document.getElementById("SrvTypeAlert").style.display = 'none';
            let allTypeInput = document.getElementsByName("serviceTypeReq");
            for(let i=0; i<allTypeInput.length; i++){
                allTypeInput.item(i).style.border='1px solid gray';
            }

        }
        // console.log(selectedCat);
        console.log("탑카테고리 선택된 것의 value : "+topCatSel.val());
        if (serviceTitle.val().length < 10 || serviceTitle.val().length > 30) {
            titleChk = "false";
            //titleAlert.style.display = 'block';
            document.getElementById("titleAlert").style.display = 'block';
            document.getElementById("redBorder1").style.border='3px solid red';
            serviceTitle.focus();
        }

        if (topCatSel.val() == null || topCatSel.val().trim() == 0) {
            document.getElementById("TopCatAlert").style.display = 'block';
            document.getElementById("redBorder2").style.border='3px solid red';
        }

        if (typeInput.val() == null || typeInput.val().trim() == "") {
            srvTypeChk = "false";
            document.getElementById("SrvTypeAlert").style.display = 'block';
            let allTypeInput = document.getElementsByName("serviceTypeReq");
            for(let i=0; i<allTypeInput.length; i++){
                allTypeInput.item(i).style.border='3px solid red';
            }
        }

        if (topCatChk == "true" && titleChk == "true" && srvTypeChk == "true") {
            console.log("첫번째 유효성검사 통과!!")
            this.secondBtn();
        }else{return;}
       // }else{  this.secondBtn();;}
    },

    secondInputValid: function(){
        console.log("세컨드인풋 발리드 호출")
        let priceTitle = $("#priceTitle");
        let priceExplain = $("#priceExplain");
        let servicePriceNumber = $("#servicePriceNumber");
        let serviceDuration = $("#serviceDuration");
        let svcModificationNum = $("#svcModificationNum");

        // if(priceTitle.val().length > 2){ priceTitleInputChk = "true";
        //     console.log("2. 서비스 가격 제목 입력여무 : " + priceTitleInputChk);}
        //
        // if(priceExplain.val().length > 2){
        //     priceExplainChk = "true";
        //     console.log("2. 서비스 가격 설명 입력여무 : " + priceExplainChk);
        // }
        // if(servicePriceNumber.val().length > 1){
        //     servicePriceNumberChk = "true";
        //     console.log("2. 서비스 가격 액수 입력여무 : " + servicePriceNumberChk);
        // }
        // if(serviceDuration.val().length > 0){
        //     serviceDurationChk = "true";
        //     console.log("2. 서비스 기간 입력여무 : " + serviceDurationChk);
        // }
        // if(svcModificationNum.val().length > 0){
        //     svcModificationNumChk = "true";
        //     console.log("2. 서비스 수정횟수 입력여무 : " + svcModificationNumChk);
        // }


        if (priceTitle.val().length < 20 && priceTitle.val().length > 0) {
            document.getElementById("priceTitleAlert").style.display='none';
            priceTitleInputChk = "true";
            document.getElementById("redBorder3").style.border='1px solid gray';
            console.log("가격옵션 제목 작성여부 : "+priceTitleInputChk);
        }
        if (priceTitle.val().length > 20 || priceTitle.val().length === 0) {
            document.getElementById("priceTitleAlert").style.display='block';
            priceTitleInputChk = "false";
            document.getElementById("redBorder3").style.border='3px solid red';
            console.log("가격옵션 제목 작성여부 : "+priceTitleInputChk);
        }


        if (priceExplain.val().length <= 60 && priceExplain.val().length >= 10) {
            document.getElementById("priceExplainAlert").style.display='none';
            priceExplainChk = "true";
            document.getElementById("redBorder4").style.border='1px solid gray';
            console.log("가격옵션 내용 작성여부 : "+priceExplainChk);
        }
        if (priceExplain.val().length > 60 || priceExplain.val().length < 10) {
            document.getElementById("priceExplainAlert").style.display='block';
            priceExplainChk = "false";
            document.getElementById("redBorder4").style.border='3px solid red';
            console.log("가격옵션 내용 작성여부 : "+priceExplainChk);
        }

        if(servicePriceNumber.val()<10000000001 && servicePriceNumber.val()>999){
            document.getElementById("priceNumberAlert").style.display='none';
            servicePriceNumberChk = "true";
            document.getElementById("redBorder5").style.border='1px solid gray';
            console.log("가격옵션 금액 작성여부 : "+servicePriceNumberChk);
        }
        if(servicePriceNumber.val()>10000000000 || servicePriceNumber.val()<1000){
            document.getElementById("priceNumberAlert").style.display='block';
            servicePriceNumberChk = "false";
            document.getElementById("redBorder5").style.border='3px solid red';
            console.log("가격옵션 금액 작성여부 : "+servicePriceNumberChk);
        }

        if(serviceDuration.val()<121 && serviceDuration.val()>0){
            document.getElementById("serviceDurationAlert").style.display='none';
            serviceDurationChk  = "true";
            document.getElementById("redBorder6").style.border='1px solid gray';
            console.log("서비스 기간 작성여부 : "+serviceDurationChk);
        }
        if(serviceDuration.val()>120 || serviceDuration.val()<1){
            document.getElementById("serviceDurationAlert").style.display='block';
            serviceDurationChk  = "false";
            document.getElementById("redBorder6").style.border='3px solid red';
            console.log("서비스 기간 작성여부 : "+serviceDurationChk);
        }

        if(svcModificationNum.val()<16 && svcModificationNum.val()>0){
            document.getElementById("svcModNumAlert").style.display='none';
            svcModificationNumChk = "true";
            document.getElementById("redBorder7").style.border='1px solid gray';
            console.log("수정 횟수 작성여부 : "+svcModificationNumChk);
        }
        if(svcModificationNum.val()>15 || svcModificationNum.val()<1){
            document.getElementById("svcModNumAlert").style.display='block';
            svcModificationNumChk = "false";
            document.getElementById("redBorder7").style.border='3px solid red';
            console.log("수정 횟수 작성여부 : "+svcModificationNumChk);
        }



        if(priceTitleInputChk == "true" && priceExplainChk == "true" && servicePriceNumberChk == "true" && serviceDurationChk == "true" && svcModificationNumChk == "true"){
            console.log("두번째 유효성 검사 통과!!!");
            //this.thirdInputValid();
            this.thirdBtn();
        }else{return};
       // }else{ this.thirdBtn();};

    },

    thirdInputValid:function (){
        if (topCatChk == "true" && titleChk == "true" && srvTypeChk == "true" && priceTitleInputChk == "true" && priceExplainChk == "true"
            && servicePriceNumberChk == "true" && serviceDurationChk == "true" && svcModificationNumChk == "true"){

        console.log("세 번째 유효성 검사 통과!!!");
        //this.fourthInputValid();
        this.fourthBtn();
       }else{return};
    //    }else{ this.fourthBtn();};
    },

    fourthInputValid:function (){

        if(imgTagSource.length>100){
            console.log(imgTagSource.length);
            mainImgInputChk="true";
            console.log("메인 이미지 입력 여부 : "+mainImgInputChk);
        }
        if(imgTagSource.length<100){
            document.getElementById("mainImgWindow").style.border='5px solid red';
            document.getElementById("mainImgAlert").style.display='block';
            mainImgInputChk="false";
            console.log("메인 이미지 입력 여부 : "+mainImgInputChk);
        }

        if (topCatChk == "true" && titleChk == "true" && srvTypeChk == "true" && priceTitleInputChk == "true" && priceExplainChk == "true"
            && servicePriceNumberChk == "true" && serviceDurationChk == "true" && svcModificationNumChk == "true" && mainImgInputChk== "true"){
        console.log("네 번째 유효성 검사 통과!!!");
        //this.fifthInputValid();
        document.getElementById("btnSave").style.display='none';
        document.getElementById("btnNext").style.display='none';
        document.getElementById("serviceFinalSubmit").style.display='block';

        this.fifthBtn();
        }else{return};

    },

    fifthInputValid:function (){
        if (topCatChk == "true" && titleChk == "true" && srvTypeChk == "true" && priceTitleInputChk == "true" && priceExplainChk == "true"
            && servicePriceNumberChk == "true" && serviceDurationChk == "true" && svcModificationNumChk == "true" && mainImgInputChk == "true") {
            console.log("다섯번째 유효성 검사 통과!!!");

        };
    },

    firstBtn:function (){

        document.getElementById("btn-one").style.fontWeight='bolder';
        document.getElementById("btn-two").style.fontWeight='normal';
        document.getElementById("btn-three").style.fontWeight='normal';
        document.getElementById("btn-four").style.fontWeight='normal';
        document.getElementById("btn-five").style.fontWeight='normal';


        document.getElementById("num1").innerText='V';
        document.getElementById("num2").innerText='2';
        document.getElementById("num3").innerText='3';
        document.getElementById("num4").innerText='4';
        document.getElementById("num5").innerText='5';


        document.getElementById("firstInput").style.display='block';
        document.getElementById("secondInput").style.display='none';
        document.getElementById("thirdInput").style.display='none';
        document.getElementById("forthInput").style.display='none';
        document.getElementById("fifthInput").style.display='none';

    },

    secondBtn:function (){
        document.getElementById("btn-one").style.fontWeight='normal';
        document.getElementById("btn-two").style.fontWeight='bolder';
        document.getElementById("btn-three").style.fontWeight='normal';
        document.getElementById("btn-four").style.fontWeight='normal';
        document.getElementById("btn-five").style.fontWeight='normal';

        document.getElementById("num1").innerText='1';
        document.getElementById("num2").innerText='V';
        document.getElementById("num3").innerText='3';
        document.getElementById("num4").innerText='4';
        document.getElementById("num5").innerText='5';

        document.getElementById("firstInput").style.display='none';
        document.getElementById("secondInput").style.display='block';
        document.getElementById("thirdInput").style.display='none';
        document.getElementById("forthInput").style.display='none';
        document.getElementById("fifthInput").style.display='none';
    },
    thirdBtn:function (){
        document.getElementById("btn-one").style.fontWeight='normal';
        document.getElementById("btn-two").style.fontWeight='normal';
        document.getElementById("btn-three").style.fontWeight='bolder';
        document.getElementById("btn-four").style.fontWeight='normal';
        document.getElementById("btn-five").style.fontWeight='normal';

        document.getElementById("num1").innerText='1';
        document.getElementById("num2").innerText='2';
        document.getElementById("num3").innerText='V';
        document.getElementById("num4").innerText='4';
        document.getElementById("num5").innerText='5';

        document.getElementById("firstInput").style.display='none';
        document.getElementById("secondInput").style.display='none';
        document.getElementById("thirdInput").style.display='block';
        document.getElementById("forthInput").style.display='none';
        document.getElementById("fifthInput").style.display='none';
        return;
    },
    fourthBtn:function (){
        document.getElementById("btn-one").style.fontWeight='normal';
        document.getElementById("btn-two").style.fontWeight='normal';
        document.getElementById("btn-three").style.fontWeight='normal';
        document.getElementById("btn-four").style.fontWeight='bolder';
        document.getElementById("btn-five").style.fontWeight='normal';

        document.getElementById("num1").innerText='1';
        document.getElementById("num2").innerText='2';
        document.getElementById("num3").innerText='3';
        document.getElementById("num4").innerText='V';
        document.getElementById("num5").innerText='5';

        document.getElementById("firstInput").style.display='none';
        document.getElementById("secondInput").style.display='none';
        document.getElementById("thirdInput").style.display='none';
        document.getElementById("forthInput").style.display='block';
        document.getElementById("fifthInput").style.display='none';
        return;

    },
    fifthBtn:function (){
        document.getElementById("btn-one").style.fontWeight='normal';
        document.getElementById("btn-two").style.fontWeight='normal';
        document.getElementById("btn-three").style.fontWeight='normal';
        document.getElementById("btn-four").style.fontWeight='normal';
        document.getElementById("btn-five").style.fontWeight='bolder';

        document.getElementById("num1").innerText='1';
        document.getElementById("num2").innerText='2';
        document.getElementById("num3").innerText='3';
        document.getElementById("num4").innerText='4';
        document.getElementById("num5").innerText='V';

        document.getElementById("firstInput").style.display='none';
        document.getElementById("secondInput").style.display='none';
        document.getElementById("thirdInput").style.display='none';
        document.getElementById("forthInput").style.display='none';
        document.getElementById("fifthInput").style.display='block';
        return;

    }

}


serviceBodyBtn.init();