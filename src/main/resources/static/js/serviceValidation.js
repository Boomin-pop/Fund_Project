let serviceBodyBtn = {
    init: function () {
        $("#btnSave").on("click", () => {
            if(document.getElementById("num1").innerText=='V'){
                this.firstInputValid(); console.log("1번째 세이브 버튼 클릭!");}
            if(document.getElementById("num2").innerText=='V'){
                this.firstInputValid(); console.log("2번째 세이브 버튼 클릭!");}
            if(document.getElementById("num3").innerText=='V'){
                this.firstInputValid(); console.log("3번째 세이브 버튼 클릭!");}
            if(document.getElementById("num4").innerText=='V'){
                this.firstInputValid(); console.log("4번째 세이브 버튼 클릭!");}
            if(document.getElementById("num5").innerText=='V'){
                this.firstInputValid(); console.log("5번째 세이브 버튼 클릭!");}
        });

        $("#btnNext").on("click", () => {
            if(document.getElementById("num1").innerText=='V'){
                this.firstInputValid(); console.log("1번째 다음 버튼 클릭!");}
            if(document.getElementById("num2").innerText=='V'){
                this.firstInputValid(); console.log("2번째 다음 버튼 클릭!");}
            if(document.getElementById("num3").innerText=='V'){
                this.firstInputValid(); console.log("3번째 다음 버튼 클릭!");}
            if(document.getElementById("num4").innerText=='V'){
                this.firstInputValid(); console.log("4번째 다음 버튼 클릭!");}
            if(document.getElementById("num5").innerText=='V'){
                this.firstInputValid(); console.log("5번째 다음 버튼 클릭!");}
        });

        $("#btn-one").on("click", ()=>{this.firstBtn()});
        $("#btn-two").on("click", ()=>{this.firstInputValid()});
        $("#btn-three").on("click", ()=>{this.firstInputValid()});
        $("#btn-four").on("click", ()=>{this.firstInputValid()});
        $("#btn-five").on("click", ()=>{this.firstInputValid()});

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
        let typeInput = $("input[name=typeInput]:required");
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

        if (srvCnt == typeInput.length) {
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
            //titleAlert.style.display = 'block';
            document.getElementById("titleAlert").style.display = 'block';
            document.getElementById("redBorder1").style.border='3px solid red';
        }else{
            serviceTitle.focus();
        }

        if (topCatSel.val() == null || topCatSel.val().trim() == 0) {
            document.getElementById("TopCatAlert").style.display = 'block';
            document.getElementById("redBorder2").style.border='3px solid red';
        }

        if (typeInput.val() == null || typeInput.val().trim() == "") {
            document.getElementById("SrvTypeAlert").style.display = 'block';
            let allTypeInput = document.getElementsByName("serviceTypeReq");
            for(let i=0; i<allTypeInput.length; i++){
                allTypeInput.item(i).style.border='3px solid red';
            }


        }

        if (topCatChk == "true" && titleChk == "true" && srvTypeChk == "true") {
            this.secondInputValid();
            this.secondBtn();
        }else{return;}
    },

    secondInputValid: function(){
        let priceTitleInput = $("#priceTitleInput");
        let priceExplain = $("#priceExplain");
        let servicePriceNumber = $("#servicePriceNumber");
        let serviceDuration = $("#serviceDuration");
        let svcModificationNum = $("#svcModificationNum");

        if(priceTitleInput.length > 2){
            priceTitleInputChk = "true";
            console.log("서비스 가격 제목 입력여무 : " + priceTitleInputChk);
        }
        if(priceExplain.length > 2){
            priceExplainChk = "true";
            console.log("서비스 가격 설명 입력여무 : " + priceExplainChk);
        }
        if(servicePriceNumber.length > 2){
            servicePriceNumberChk = "true";
            console.log("서비스 가격 액수 입력여무 : " + servicePriceNumberChk);
        }
        if(serviceDuration.length > 2){
            serviceDurationChk = "true";
            console.log("서비스 기간 입력여무 : " + serviceDurationChk);
        }
        if(svcModificationNum.length > 2){
            svcModificationNumChk = "true";
            console.log("서비스 수정횟수 입력여무 : " + svcModificationNumChk);
        }

        if(priceTitleInputChk == "true" && priceExplainChk == "true" && servicePriceNumberChk == "true" && serviceDurationChk == "true" && svcModificationNumChk == "true"){
            this.thirdInputValid();
            this.thirdBtn();
        }
    },

    thirdInputValid:function (){
        this.fourthInputValid();
        this.fourthBtn();
    },

    fourthInputValid:function (){
        this.fifthInputValid();
        this.fifthBtn();

    },

    fifthInputValid:function (){

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
    }

}


serviceBodyBtn.init();