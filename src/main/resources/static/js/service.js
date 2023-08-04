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
            contentType:"application/json; charset=utf-8"
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
