let serviceObject= {
    init: function () {
        $("#serviceTopCat").on("change", () => {
            this.serviceTypeChk();
        });
    },

    serviceTypeChk: function () {
        let code={
            serviceTopCatCode: $("#selectedCat").val()
        }
        $.ajax({
            type:"get",
            url:"/service/serviceReg",
            data:JSON.stringify(code),
            contentType:"application/json; charset=utf-8"
        })
    }


}