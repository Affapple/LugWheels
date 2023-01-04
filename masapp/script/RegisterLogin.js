$(document).ready(function () {
    $("#signup-form").submit(function () {
      var nm1 = $("#name1").val();
      var nic1 = $("#nick1").val();
      var ps1 = $("#pass1").val();
      localStorage.setItem("n1", nm1);
      localStorage.setItem("ni1", nic1);
      localStorage.setItem("p1", ps1);
      alert("Successful register!");  
    });
    

    $("#login-form").submit(function () {
      var enteredName = $("#name2").val();
      var enteredPass = $("#pass2").val();

      var storedName = localStorage.getItem("n1");
      var storedPass = localStorage.getItem("p1");

      if (enteredName == storedName && enteredPass == storedPass) {
        alert("Successful Login!");
        window.location.assign('../HTML/clientes.html')
        return false;
      }
      else {
        alert("Username and Password do not match!");
      }
    });

    
    $("#save").click(function () {
      var nm40 = $("#email").val();
      var nic40 = $("#name").val();
      var ps40 = $("#pass").val();
      var sta40 = $("#state").val();
      var ctr40 = $("#country").val();
      if (nm40 != "") {
      localStorage.setItem("n1", nm40);};
      if (nic40 != "") {
      localStorage.setItem("ni1", nic40);};
      if (ps40 != "") {
      localStorage.setItem("p1", ps40);};
      if (sta40 != "") {
        localStorage.setItem("sta1", sta40);};
      if (ctr40 != "") {
        localStorage.setItem("ctr1", ctr40);};
    });



    function WritingHTML() {
      var self = this;
      self.nome = ko.observable()
      self.mail = ko.observable()
      self.state = ko.observable()
      self.country = ko.observable()
      self.nome = localStorage.getItem("ni1")
      self.mail = localStorage.getItem("n1")
      self.state = localStorage.getItem("sta1")
      self.country = localStorage.getItem("ctr1")
      console.log(self.nome);
      console.log(self.mail);
      console.log(self.state);
      console.log(self.country);
    }
    ko.applyBindings(WritingHTML())
  });

  