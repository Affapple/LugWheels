$(document).ready(function () {
    $("#signupdriver-form").submit(function () {
      var nm1driver = $("#name1driver").val();
      var nic1driver = $("#nick1driver").val();
      var ps1driver = $("#pass1driver").val();
      localStorage.setItem("n1driver", nm1driver);
      localStorage.setItem("ni1driver", nic1driver);
      localStorage.setItem("p1driver", ps1driver);
      alert("We will check your informations and send you an email with our decision in the following weeks.");
      window.location.assign('../HTML/LugWheelsLogin1.html')
      return false;
    });

    $("#logindriver-form").submit(function () {
      var enteredNameDriver = $("#name2driver").val();
      var enteredPassDriver = $("#pass2driver").val();

      var storedNameDriver = localStorage.getItem("n1driver");
      var storedPassDriver = localStorage.getItem("p1driver");

      if (enteredNameDriver == storedNameDriver && enteredPassDriver == storedPassDriver) {
        alert("Successful Login!");
        window.location.assign('../HTML/Driver.html')
        return false;
      }
      else {
        alert("Username and Password do not match!");
      }

    });

  });