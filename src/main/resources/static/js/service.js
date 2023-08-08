let serviceObject= {
    init: function () {
       // $("#serviceTopCat").on("change", () => {
        $("select[name=serviceTopCat]").on("change", () => {
            this.serviceTypeChk();
        });
    },

    serviceTypeChk: function () {
        let code={
            serviceTopCatCode : $("select[name=serviceTopCat] > option:selected").val()

            //serviceTopCatCode: $("select[name=serviceTopCat] > option:selected").val()
            //serviceTopCatCode: $("#serviceTopCat > option:selected").val()
        }

        alert(code.serviceTopCatCode)
        $.ajax({
            type:"post",
            url:"/service/chkedServiceType",
            data:JSON.stringify(code),
            contentType:"application/json; charset=utf-8",
            success: function(data){
                console.log(data);
                let str = "";
                let serviceTypeDiv = document.getElementById("serviceTypeDiv");
                let ServiceType = document.getElementById("serviceType");
                serviceTypeDiv.style.display="block";
                //ObjectMapper mapper = new ObjectMapper();

               // for(var object in data){
               // for(i=0; i< data.length; i++){
                data.forEach(row=>{
                   let serviceTypeCode= row.serviceTypeCode;
                   let serviceTypeName = row.serviceTypeName;
                   let mandatoryInput = row.mandatoryInput;
                   console.log("코드 : " + serviceTypeCode +", 타입명 : "+serviceTypeName + ", 필수입력 : " + mandatoryInput);
                   if(mandatoryInput==1){
                       str += '<div class="serviceType d-flex border border-danger" name="serviceType" id="serviceType" style="width:900px; height:100px; line-height:100px">'
                           +'<div style="width:200px; height:50px; color:red;">'
                           +'<span name="typeName" value="' + serviceTypeCode + '" style="color:black">' + serviceTypeName + '</span>*</div>'

                           +'<div><input type="text" name="typeInput"  style="width:700px; height:50px; line-height:50px" required></div>'
                           +'</div>'
                   }
                    str += '<div class="serviceType d-flex" name="serviceType" id="serviceType" style="width:900px; height:100px; line-height:100px">'
                        +'<div style="width:200px; height:50px; line-height:100px"><p name="typeName" value="' + serviceTypeCode + '">' + serviceTypeName + '</p></div>'
                        +'<div><input type="text" name="typeInput"  style="width:700px; height:50px; line-height:50px"></div>'
                        +'</div>'

                    ServiceType.innerHTML = str;

                 } )
            },
            error:function(error){
                alert(error);
            }
        })
    }
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
