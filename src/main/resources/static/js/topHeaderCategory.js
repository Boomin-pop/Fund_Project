$(document).ready(function () {
    $.ajax({
        url: '/header/categoryList',
        type: 'GET',
        success: function (data) {
            let catarr = [];
            let categoryHtml = '';
            data.forEach(item => {
                let categoryName = item.serviceTopCatName;
                // console.log(categoryName);
                catarr.push(categoryName);
                categoryHtml += '<li>';
                categoryHtml += '<a class="dropdown-item">';
                categoryHtml += categoryName;
                categoryHtml += '</a>';
                categoryHtml += '</li>';
            })
            // console.log(catarr);
            document.querySelector('#dropdown-menu').innerHTML = categoryHtml;
            for (let i = 0; i < 5; i++) {
                document.querySelector('#cat' + (i+1)).innerHTML = catarr[i];
            }

        },
        error: function () {
            console.log('출력실패')
        }
    });
});