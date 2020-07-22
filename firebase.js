function clickEvent() {
  var bd_ref = document.getElementById('db_ref');
  var c_id = document.getElementById('c_id');
  var num = String(document.getElementById('num'));
  var letter = document.getElementById('letter');
  var title = document.getElementById('title');
  var lyric = document.getElementById('lyric');
  var porjay = document.getElementById('porjay');
  var upo_porjay = document.getElementById('upo_porjay');
  var song_num = document.getElementById('song_num');
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
  if (bd_ref.value == '') {
    swal("ডাটাবেস নাম প্রয়োজন","", "error",);
     return 
    }
  if( c_id.value == ''){
    swal("গানের নাম্বার প্রয়োজন","", "error",);
    return 
  }
  



  var ref = firebase.database().ref(bd_ref.value+"/"+c_id.value).set({
    "number": c_id.value+"",
    "letter": letter.value,
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
    title: "গান সন্নিবেশ সম্পন্ন",
    text: "নিশ্চিত ম্যাসেজ!",
    type: "success"
}).then(function() {
  $("#add").show();
  $("#add").val("hide");
  $("#del").hide();
  $("#del").val("show");
  $("#up").hide();
  $("#up").val("show");
  location.reload();
});
// location.reload(); 
// swal("Data Insertion Done","", "success",);
}

function deleteEvent() {


  var bd_ref = document.getElementById('db_ref_del');
  var c_id = document.getElementById('c_id_del');

  // console.log(bd_ref.value+" , "+c_id.value);

  if (bd_ref.value == '') {
    swal("ডাটাবেস নাম প্রয়োজন","", "error",);
     return 
    }
  if( c_id.value == ''){
    swal("গানের নাম্বার প্রয়োজন","", "error",);
    return 
  }

  swal({
    title: "আপনি কি এই গান ডিলিট করার জন্যে নিশ্চিত?",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "ডিলিট করুন",
    confirmButtonColor: "#ff0055",
    cancelButtonColor: "#999999",
    cancelButtonText: "বাতিল করুন",
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: true
  }).then(willDelete => {
    if (willDelete.value == true) {
      var ref = firebase.database().ref(bd_ref.value+"/"+c_id.value).remove();
      console.log(willDelete.value)
      swal("ডিলিট সম্পন্ন", " আপনার গান ডিলিট সম্পন্ন হয়েছে !", "success").then(function() {
        return
      });
    }else{
      swal("ডিলিট বাতিল", "আপনার গান ডিলিট বাতিল হয়েছে !", "success").then(function() {
        return
      });
    }
  });
  return
  

 
  //  var ref = firebase.database().ref("mylist/3").remove();
  // alert('Deletion Done :)  -_-');
}



