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
        // alert("Successful Login!");
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
      var pho40 = $("#phone").val();
      var twi40 = $("#twitter").val();
      var ins40 = $("#instagram").val();
      var fac40 = $("#facebook").val();
      var pic40 = $("#pic").val();
      var city40 = $("#city").val();
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
      if (pho40 != "") {
        localStorage.setItem("pho1", pho40);};
      if (twi40 != "") {
        localStorage.setItem("twi1", twi40);};
      if (ins40 != "") {
        localStorage.setItem("ins1", ins40);};
      if (fac40 != "") {
        localStorage.setItem("fac1", fac40);};
      if (pic40 != "") {
        localStorage.setItem("pic1", pic40);};
      if (city40 != "") {
        localStorage.setItem("city1", city40);};
      });




    function WritingHTML() {
      var self = this;
      self.nome = ko.observable()
      self.mail = ko.observable()
      self.state = ko.observable()
      self.country = ko.observable()
      self.city = ko.observable()
      self.phone = ko.observable()
      self.photo = ko.observable()
      self.city = ko.observable()
      self.nome = localStorage.getItem("ni1")
      self.mail = localStorage.getItem("n1")
      self.state = localStorage.getItem("sta1")
      self.country = localStorage.getItem("ctr1")
      self.phone = localStorage.getItem("pho1")
      self.twitter = localStorage.getItem("twi1")
      self.instagram = localStorage.getItem("ins1")
      self.facebook = localStorage.getItem("fac1")
      self.photo = localStorage.getItem("pic1")
      self.city = localStorage.getItem("city1")
      console.log(self.nome);
      console.log(self.mail);
      console.log(self.state);
      console.log(self.country);
      console.log(self.phone);
      console.log(self.twitter);
      console.log(self.instagram);
      console.log(self.facebook);
      console.log(self.photo);
      console.log(self.city);
    }

    ko.applyBindings(WritingHTML());
    
});

