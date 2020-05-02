$(document).ready(function(){
    $(".add").click(function(){
        toastr.success('The product added to the cart');
    });
    $(".myBox img").click(function(){
        toastr.error('Error. You must click the add to cart button');
    });
    $("#myForm").submit(function(e){
        e.preventDefault();
        $(this).css("opacity",0.4);
        $(this).html('<div class="spinner-border text-dark" role="status"><span class="text-center sr-only">Loading...</span></div>');
        setTimeout(function(){
            $("#myForm").html('<img id= "check" width="100" src = "img/check.png"/>');
            $("#myForm").append("<p class='text-center'>Το μήνυμα σας εστάλη με επιτυχία. <br> Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατόν</p>")
        },2000);
    });
});

