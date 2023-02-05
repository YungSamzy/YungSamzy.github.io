$( document ).ready(function() {window.getAnswer = function (){
    $.get("https://gist.githubusercontent.com/Iloveyou123098/60469eba10f31e497eb35d8cc4fb7c95/raw/af855b7f90a0e1c52ff501ec8e5bcdc0118cde63/json.json", (urldata, status) => 
    {
      var found = false;
      var data = JSON.parse(atob(urldata));
      let results = document.getElementsByClassName('result').length;
      if (results != null && results != undefined && results > 0){
        document.getElementsByClassName('result')[0].remove();
        $('.content-box').find('br').remove();
      }
      var goal = document.getElementById('question').value;
      for (var s = 0, _pj_a = data.length; s < _pj_a; s += 1) 
      {
        if (data[s]["url"] == goal) {
          if (data[s]["answer"].length > 1000){
            var blob = new Blob([data[s]["answer"]], { type: 'text/html; charset=utf-8' });
            var fileURL = window.URL.createObjectURL(blob);
            //console.log(fileURL);
            $("form").after("<br><div class=\"result\"><a href=\"" + fileURL + "\" target=\"_blank\"><center><strong>Output Too Big, Open Here</strong></center></a></div><br>");
            return;
          }
          $("form").after("<br><div class=\"result\">" + data[s]["answer"] + "</div>");
          $('*').each(function(){ 
            if ($(this).is('img')) {
                $(this).wrap("<a href=\""+$(this).prop('src') + "\" target=\"_blank\">");
            } else {
            }
        });
          found = true;
          return true;
        }
      }
      if (!found){
        $("form").after("<br><div class=\"result\">" + "<p style=\"text-align: center;\">Question was not leaked!</p>" + "</div>");
        $('.content-box').find('br').remove();
        return false;
      }
      return false;
    });
  }
  })