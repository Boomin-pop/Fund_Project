$(document).ready(function () {
    $.ajax({
        url: '/header/categoryList',
        type: 'GET',
        success: function (data) {
            let categoryHtml = '';
            data.forEach(item => {
                let categoryName = item.serviceTopCatName;
                console.log(categoryName);
                categoryHtml += '<li>';
                categoryHtml += '<a class="dropdown-item">';
                categoryHtml += categoryName;
                categoryHtml += '</a>';
                categoryHtml += '</li>';
            })
            document.querySelector('#dropdown-menu').innerHTML = categoryHtml;
        },
        error: function () {
            console.log('출력실패')
        }
    });
});