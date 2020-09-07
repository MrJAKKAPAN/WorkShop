// เพียว JS 
// const btn = document.querySelector("#request");
// const facebook = document.querySelector("#facebook ");

// const request = new XMLHttpRequest();

// request.onreadystatechange = function() {

//     if (request.readyState === 4) {
//         facebook.style.border = "  1px solid #e8e8e8"
        
//         if(request.status === 200) {
//             facebook.innerHTML = request.responseText;
//         } else {
//             facebook.innerHTML = 'error :'+ request.status + '' + request.statusText;
//         }
//     }
// }
// request.open("get", "https://baconipsum.com/api/?type=meat-and-filler")

// btn.addEventListener('click', function () {

//     this.style.display = "none";

//     request.send();
// }) 

// jQuery
$(document).ready(function() {

    const $btn = $('#request')
    const $facebook = $('#facebook')

    function completeFunction(responseText, textStatus, request) {
        $facebook.css('border','1px solid #e8e8e8');
            if(textStatus == 'error') {
                $facebook.text( 'error :'+ request.status + '' + request.statusText);
            }
    }

    $btn.on('click', function() {
        $(this).hide();
        $facebook.load('https://baconipsum.com/api/?type=meat-and-filler' ,completeFunction);
    });
});