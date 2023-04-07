$(document).ready(function(){
    $("#div").mouseenter(function(){
        $("#div").css("background" , "#FFFFFF") 
        $("#p6").css("color" , "#6D72DE")
    }).mouseleave(function(){
        $("#div").css("background" , "linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)") 
        $("#p6").css("color" , "#FFFFFF") 
    })
    $("#div1").mouseenter(function(){
        $("#div1").css("background" , "#6D72DE") 
        $("#p7").css("color" , "#FFFFFF")
    }).mouseleave(function(){
        $("#div1").css("background" , "#FFFFFF") 
        $("#p7").css("color" , "#6D72DE")
    })
    $("#div2").mouseenter(function(){
        $("#div2").css("background" , "#FFFFFF")
        $("#p8").css("color" , "#6D72DE") 
    }).mouseleave(function(){
        $("#div2").css("background" , "linear-gradient(135deg, #A2A7F0 0%, #696EDD 100%)") 
        $("#p8").css("color" , "#FFFFFF")
    })
    $("#doira2").hide()
    $(".ikki").hide()
    // $(".bir").show()
    $(".input").click(function(){
        $(".bir").toggle()
        $(".ikki").toggle()
        $("#doira2").toggle()
        $("#doira1").toggle()
    })
    

     
   
});
