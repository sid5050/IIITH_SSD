document.getElementById("submit-btn").addEventListener("click", checkFields);
document.getElementById("servername").addEventListener("keyup", checkInput);


document.body.addEventListener("keydown", function (ev) {
  
    // function to check the detection
    ev = ev || window.event;  // Event object 'ev'
    var key = ev.which || ev.keyCode; // Detecting keyCode
      
    // Detecting Ctrl
    var ctrl = ev.ctrlKey ? ev.ctrlKey : ((key === 17)
        ? true : false);
  
    if (key == 77 && ctrl) {
        // print in console.
        var getBody = document.getElementsByTagName("body")[0]
        var prop = window.getComputedStyle(getBody).getPropertyValue("background-color");
        console.log(prop);
        if(prop == "rgba(0, 0, 0, 0)" || prop == "rgb(255, 255, 255)") {
          console.log("Ctrl+M is pressed.");
          document.body.style.backgroundColor = "black";
          var elements = document.getElementsByClassName('lbl'); // get all elements
          for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "white";
          }
        } else if(prop == "rgb(0, 0, 0)") {
          console.log("Ctrl+M is pressed.");
          document.body.style.backgroundColor = "white";
          var elements = document.getElementsByClassName('lbl'); // get all elements
          for(var i = 0; i < elements.length; i++){
            elements[i].style.color = "black";
          }
        }
        // document.body.style.backgroundColor = "red";
    }
  
}, false);

function checkFields(e) {
  // document.getElementById("demo").innerHTML = Date();
  // alert("Hello! I am an alert box!!");
  e.preventDefault();
  let mgrname = document.getElementById('mgrname').value;
  let grpemail = document.getElementById('email').value;
  let serveruname = document.getElementById('servername').value;
  let serverpass = document.getElementById('serverpass').value;
  let confirmpass = document.getElementById('confirmpass').value;
  var e = document.getElementById("teamlead");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;

  console.log(mgrname, grpemail, serverpass, serveruname, serverpass, confirmpass, text);
  let flag = 1;
  // serverpass == "" || confirmpass == ""
  if(mgrname == "") {
    flag = 0;
    document.getElementById('noname').innerHTML = 'Invalid Name';
  }
  if(serverpass == "") {
    flag = 0;
    document.getElementById('noserverpass').innerHTML = 'Invalid Password';
  }
  if(confirmpass == "") {
    flag = 0;
    document.getElementById('nopass').innerHTML = 'Invalid Password';
  }

  if(confirmpass != serverpass) {
    flag = 0;
    document.getElementById('nopass').innerHTML = 'Password not matching';
  }
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(grpemail) == false) {
    flag = 0;
    document.getElementById('noemail').innerHTML = 'Invalid Email';
  }

  if(document.getElementById('noservername').innerHTML != '') {
    flag = 0;
    document.getElementById('noservername').innerHTML = "Invalid Servername";
  }

  if(flag == 1) {
    let result = "Name: " +mgrname+" Email: "+grpemail+" Username: "+serveruname+ " Team Lead: "+text;
    alert(result);
  }

}

function checkInput() {
  var myTextBox = document.getElementById('servername');
  document.getElementById('noservername').innerHTML = '';
  var value = myTextBox.value;
  console.log(value);
  let f1 = false;
  let f2 = false;

  for (var i = 0; i < value.length; i++) {
   // alert(str[i]);
   let ch = value[i];
   if (!isNaN(ch * 1)){
      f1 = true
    }
    else {
      if (ch == ch.toUpperCase()) {
         f2 = true;
      }
   }
  }

  let res = "";
  if(f1 == false || f2 == false)
    res = "Invalid username";

  document.getElementById('noservername').innerHTML = res;

}