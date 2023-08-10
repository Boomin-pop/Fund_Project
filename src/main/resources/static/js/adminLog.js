
function pageMove(page){
    let by = document.getElementById("by").value;
    let ud = document.getElementById("ud").value;
    let id = document.getElementById("id").value;
    location.href="transactionLog?page=" + page + "&by=" + by + "&ud=" + ud + "&id=" + id;
}