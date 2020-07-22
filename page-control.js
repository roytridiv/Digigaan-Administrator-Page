var flag = true;
$(document).ready(function () {
if(flag){
    $("#home").show();
    $("#add").hide();
    $("#add").val("show");
    $("#del").hide();
    $("#del").val("show");
    $("#up").hide();
    $("#up").val("show");
    flag = false;
}

});

$("button").click(function() {
    $("#home").hide();
    var but_id = this.id
    var  but_val = $("button").val();

    console.log("page-control -> "+but_id);
    console.log(but_val);

    if(but_id == "b1"){
        if(but_val == "show"){
            $("#add").show();
            $("#add").val("hide");
            $("#del").hide();
            $("#del").val("show");
            $("#up").hide();
            $("#up").val("show");
        }
    }else if(but_id == "b2"){
        if(but_val == "show"){
            $("#del").show();
            $("#del").val("hide");
            $("#add").hide();
            $("#add").val("show");
            $("#up").hide();
            $("#up").val("show");
        }
    }else{
        if(but_val == "show"){
            $("#up").show();
            $("#up").val("hide");
            $("#add").hide();
            $("#add").val("show");
            $("#del").hide();
            $("#del").val("show");
        }
    }

    
});



    

