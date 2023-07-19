$(document).ready(function() {
    $.getJSON('http://127.0.0.1:5501/miJS/MIData.Json', function (data) {
        var reviewInfo = ' ';
        $.each(data, function() {
            reviewInfo += '<ul class ="reviewCard">'
            $.each(this, function(name, value){
                if(name === 'image'){
                    reviewInfo += (`<img class ="albumImg" src ='${value}'>`) 
                }  else if(name === 'url') {
                    reviewInfo += (`<a href= '${value}'><li>Go To Review</li></a>`) 
                } else {
                    reviewInfo += (`<li>${value}</li>`);
                }
                
            })
           reviewInfo += '</ul>';
        });
           
        console.log(reviewInfo)
        $('#MIreviews').html(reviewInfo)

        });
        
});

