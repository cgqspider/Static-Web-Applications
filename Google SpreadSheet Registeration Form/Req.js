function tell() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var reg = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (name == "") {
    
    document.getElementById('err').style.display="block";
  }

  if (email == "" || reg.test(email)==false) {
   
    document.getElementById('erreml').style.display="block";
  }

  else {
    document.getElementById('err').style.display="none";
    document.getElementById('erreml').style.display="none";
    var RESTEND = "https://script.google.com/macros/s/AKfycbw9lnt0sHhCPKn6hoJx-i0KNYYWS4ooBsw6pg5nzrGcQbgU1iA/exec?func=addData&name=" + name + "&email=" + email;
    $.get(RESTEND, function (data) {
      location.replace("./thank.html")
    });
  }




}