
function pageMove(page){
    let by = document.getElementById("by").value;
    let ud = document.getElementById("ud").value;
    location.href="transactionLog?page=" + page + "&by=" + by + "&ud=" + ud;
}