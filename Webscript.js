

$(document).ready(function(){
    $('.batchOffering').keypress(function (e) {
      if (e.which == 13) {
        var i=$('.batchOffering').val();
        console.log(i);
        while(i>0){
          $('.schedules_wrapper').append("<div class=\"row\"><div class=\"col\"><label for=\"batchSchedule\""+i+">No. of Batch Offering</label><div class=\"form-group col-md-10\"><input type=\"text\" class=\"form-control batchSchedule\""+i+" id=\"batchOffering\"></div></div><div class=\"col\"></div></div");
          i--;
        }
        
        return false;    //<---- Add this line
      } 
    });
});



