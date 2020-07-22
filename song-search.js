var hola = 1;
var letter  = "";
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value;
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("button");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        console.log(a);
        txtValue = a.textContent || a.innerText;
        if (txtValue.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$("a").click(function () {
    console.log("song clicked")
    var song_num = $(this).attr("id");

    var child_ref = firebase.database().ref("SongList/" + song_num);

    child_ref.orderByValue().on("value", function (snapshot2) {
        snapshot2.forEach(function (data) {

            console.log(data.val())
        });
    });

});

function get_song_info() {
    $(document).on('click', 'button', function () {
        console.log(this.id);
        var song_num = this.id;

        var child_ref = firebase.database().ref("SongList/" + song_num);

        child_ref.orderByValue().on("value", function (snapshot2) {
            snapshot2.forEach(function (data) {
                if(data.key == "title")$("#title_up").val(data.val());
                if(data.key == "letter"){
                    $("#letter").val(data.val());
                    letter = data.val();
                }
                if(data.key == "lyric")$("#lyric_up").val(data.val());
                if(data.key == "porjay")$("#porjay_up").val(data.val());
                if(data.key == "upo_porjay")$("#upo_porjay_up").val(data.val());
                if(data.key == "song_no")$("#song_num_up").val(data.val());
                if(data.key == "raag")$("#raag_up").val(data.val());
                if(data.key == "taal")$("#taal_up").val(data.val());
                if(data.key == "write_bn")$("#bn_up").val(data.val());
                if(data.key == "write_en")$("#eng_up").val(data.val());
                if(data.key == "age")$("#age_up").val(data.val());
                if(data.key == "write_place")$("#place_up").val(data.val());
                if(data.key == "pubish")$("#date_up").val(data.val());
                if(data.key == "notation_info")$("#not_info_up").val(data.val());
                if(data.key == "notation_writer")$("#writer_up").val(data.val());
                if(data.key == "footnote")$("#foot_note_up").val(data.val());
                if(data.key == "lyric_change")$("#lyrical_change_up").val(data.val());
                if(data.key == "discussion")$("#disc_up").val(data.val());
                if(data.key == "notation_file")$("#not_file_up").val(data.val());
                if(data.key == "urlNotation")$("#url_up").val(data.val());
                $("#num_up").val(song_num);
            });
        });
    });

}


$(document).ready(function () {

    var input = $("#searchInput").val();
    console.log(input);
    $("#list").append("<ul class=list-group id=myUL ></ul>");
    var db_ref = firebase.database().ref("SongList");
    db_ref.orderByValue().on("value", function (snapshot) {
        snapshot.forEach(function (data1) {
            console.log(data1.key)
            var child_ref = firebase.database().ref("SongList/" + data1.key);

            child_ref.orderByValue().on("value", function (snapshot2) {
                snapshot2.forEach(function (data) {
                    if (data.key == "title") {

                        var li = "<button class = list-group-item  href=# id=" + data1.key + "  onClick = get_song_info()><a id=" + data1.key + ">";
                        $("#myUL").append(li.concat(data.val()) + "</a></button>")
                        // $("#mylist").html("<li>" + data.val() + "</li>");
                        console.log("The " + data.key + " score is " + data.val());

                    }
                });
                $(".spinner-border").hide();
            });
        });
    });

});

$(function () {
    var fileupload = $("#FileUpload1");
    var filePath = $("#notation-path");
    var button = $("#btnFileUpload");
    button.click(function () {
        fileupload.click();
    });
    fileupload.change(function () {
        var fileName = $(this).val().split('\\')[$(this).val().split('\\').length - 1];
         $("#notation-path").val(fileName);
        
        filePath.html("<b>Selected File: </b>" + fileName);
        
    });
    $(".file").hide();
});

function updateEvent() {
    var num = String(document.getElementById('num'));
    var letter = letter;
    var title = document.getElementById('title');
    var lyric = document.getElementById('lyric');
    var porjay = document.getElementById('porjay');
    var upo_porjay = document.getElementById('upo_porjay');
    var song_num = document.getElementById('num');
    var raag = document.getElementById('raag');
    var taal = document.getElementById('taal');
    var bn = document.getElementById('bn');
    var eng = document.getElementById('eng');
    var age = document.getElementById('age');
    var place = document.getElementById('place');
    var date = document.getElementById('date');
    var not_info = document.getElementById('not_info');
    var writer = document.getElementById('writer');
    var foot_note = document.getElementById('foot_note');
    var lyrical_change = document.getElementById('lyrical_change');
    var disc = document.getElementById('disc');
    var not_file = document.getElementById('not_file');
    var url = document.getElementById('url');

    console.log(letter);
    // if (bd_ref.value == '') {
    //   swal("Database name required","", "error",);
    //    return 
    //   }
    // if( c_id.value == ''){
    //   swal("Databse child number required","", "error",);
    //   return 
    // }
    
  
  
  
    var ref = firebase.database().ref("SongList/"+num.value).set({
      "number": num.value+"",
      "letter": letter,
      "title": title.value,
      "lyric": lyric.value,
      "porjay": porjay.value,
      "upo_porjay": upo_porjay.value,
      "song_no":song_num.value,
      "raag": raag.value,
      "taal": taal.value,
      "write_bn": bn.value,
      "write_en": eng.value,
      "age": age.value,
      "write_place": place.value,
      "pubish": date.value,
      "notation_info": not_info.value,
      "notation_writer": writer.value,
      "footnote": foot_note.value,
      "lyric_change": lyrical_change.value,
      "discussion": disc.value,
      "notation_file":not_file.value,
      "urlNotation":url.value
    });
    //  var ref = firebase.database().ref("mylist/3").remove();
    swal({
      title: "Data Update Done",
      text: "Update Message!",
      type: "success"
  }).then(function() {
    location.reload();
  });
  // location.reload(); 
  // swal("Data Insertion Done","", "success",);
  }