function pageMoveT(page){
    let by = document.getElementById("by").value;
    let ud = document.getElementById("ud").value;
    let id = document.getElementById("id").value;
    location.href="transactionLog?page=" + page + "&by=" + by + "&ud=" + ud + "&id=" + id;
}
function pageMoveS(page){
    let by = document.getElementById("by").value;
    let ud = document.getElementById("ud").value;
    let id = document.getElementById("id").value;
    location.href="signLog?page=" + page + "&by=" + by + "&ud=" + ud + "&id=" + id;
}
function userView(id){

}