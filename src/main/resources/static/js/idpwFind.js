document.addEventListener("DOMContentLoaded", function() {
  showContent('id');
});

function showContent(contentId) {
const contents = document.querySelectorAll('.content');
  contents.forEach(content => {
    content.style.display = 'none';
  });

  const selectedContent = document.getElementById(contentId);
  selectedContent.style.display = 'block';
}


var autoHypenPhone = function(str){
    str = str.replace(/[^0-9]/g, '');
    var tmp = '';
    if( str.length < 4){
        return str;
    }else if(str.length < 7){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
    }else if(str.length < 11){
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
    }else{
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
    }

    return str;
}



function telCheck(){
    var userTel = $("#tel").val();

    this.value = autoHypenPhone(this.value);
}