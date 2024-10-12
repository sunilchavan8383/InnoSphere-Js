


let count=1;

$(".fa-heart").on("click", function() {

    $(this).toggleClass("red");
    count++;
    $("#count").text(count); 
    if($(this).addClass()!="red"){
        count--;
        $("#count").text(count); 
    }
    // $(this).toggleClass("red");
    // if($(this).css="red"){
    //     count++;
    //     $("#count").text(count); 

    }
   
  );