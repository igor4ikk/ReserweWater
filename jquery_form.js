// $(document).ready(function(){
//     $("#demo333").click(function(){
//     $("#demo_222").load ("/js/text.html", function (responseTxt, statusTxt, xhr){
//         if (statusTxt == "success")
//         alert("Файл завантажено успішно");
//         if (statusTxt == "error");
//         alert("Файл не завантажено" + xhr.status + ":" + xhr.statusTxt);
//         });    
//     });
// });

// $(document).ready(function(){
//     $("#zamovlenjaVodu").click(function(){
//     $("#showWindow_regisrtation").toggle();
//     });
// });

// $(document).ready(function(){
//     $(".prAljaska").click(function(){
//         $(".prAljaska1").toggle();
//     });
// });

// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });

function name1(){
    var x = document.forms["form"]["name"].value;
    if(x.length == ""){
        document.getElementById("men").innerHTML = "поле не заповнене";
        return false;
    }
}