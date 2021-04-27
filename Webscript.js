
$(document).ready(function(){
    $.ajax({
    url: "test.csv",
    success: function (data) {
        var arr = $.csv.toArray(data);
        console.log(arr);
    },
    dataType: "text",
    });
});

 function getRecords() {
      /*console.log("Reached Function");
      var arr =$.csv.toArray("resource/file/CSVconvertor.csv");
      var dataString = JSON.stringify(arr);
      console.log(dataString);*/
    /*$.ajax({
    url: "resource/file/CSVconvertor.csv",
    success: function (data) {
        var arr = $.csvtoArray(data);
        _oncomplete(arr);
    },
    dataType: "text",
    });

   _oncomplete: function (arr) {
    console.out(arr);
    }*/
  }
