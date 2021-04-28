

$(document).ready(function(){
    $('.batchOffering').keypress(function (e) {
      if (e.which == 13) {
        var i=$('.batchOffering').val();
        var j=1;
        console.log(i);
        //$('.schedules_wrapper').append("<div class=\"row\">Schedules for Batch"+i+"</div>");
        while(j<=i){
          
          $('.schedules_wrapper').append("<div class=\"row\">Schedules for Batch"+j+"</div><div class=\"row\"><div class=\"col\">Day</div><div class=\"col\">Time</div></div><div class=\"batchScheduleRow"+j+"\"><div class=\"row \"><div class=\"col\"><div class=\"form-group col-md-10\"><input type=\"text\" class=\"form-control batchSchedule"+j+"\" id=\"batchOffering\"></div></div><div class=\"col\"><div class=\"form-group col-md-10\"><input type=\"text\" class=\"form-control batchSchedule"+j+"\" id=\"batchOffering\"></div></div> <button class=\"btn icon-btn btn-success\" href=\"#\" onClick=\"addBatch("+j+",1)\"><span class=\"fa fa-plus\"></span>Add</button><button class=\"btn icon-btn btn-danger\" href=\"#\" onClick=\"deleteSchedule("+j+",1)\"><span class=\"fa fa-trash\"></span>Delete</button></div><br/></div");
          j++;
        }        
        return false;    //<---- Add this line
      } 
    });
});
function addBatch(batch, schedule) {
      //
      console.log(batch+"  "+schedule);
       $('.batchScheduleRow'+batch).append("<div class=\"row \"><div class=\"col\"><div class=\"form-group col-md-10\"><input type=\"text\" class=\"form-control batchSchedule"+batch+"\" id=\"batchOffering\"></div></div><div class=\"col\"><div class=\"form-group col-md-10\"><input type=\"text\" class=\"form-control batchSchedule"+batch+"\" id=\"batchOffering\"></div></div> <button class=\"btn icon-btn btn-success\" href=\"#\" onClick=\"addBatch("+batch+","+schedule+")\"><span class=\"fa fa-plus\"></span>Add</button><button class=\"btn icon-btn btn-danger\" href=\"#\" onClick=\"deleteSchedule("+batch+","+schedule+")\"><span class=\"fa fa-trash\"></span>Delete</button></div><br/>");
    }






