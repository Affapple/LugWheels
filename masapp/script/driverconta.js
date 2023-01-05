$(document).ready(function () { 
    $("#savedriver").click(function () {
        var nm50 = $("#emaildriver").val();
        var nic50 = $("#namedriver").val();
        var ps50 = $("#passdriver").val();
        var sta50 = $("#statedriver").val();
        var ctr50 = $("#countrydriver").val();
        var cit50 = $("#citydriver").val();
        var phone1driver = $("#phonedriver").val();
        var twi50 = $("#twitterdriver").val();
        var ins50 = $("#instagramdriver").val();
        var fac50 = $("#facebookdriver").val();
        var pic50 = $("#picdriver").val();
        if (nm50 != "") {
        localStorage.setItem("n1driver", nm50);};
        if (nic50 != "") {
        localStorage.setItem("ni1driver", nic50);};
        if (ps50 != "") {
        localStorage.setItem("p1driver", ps50);};
        if (sta50 != "") {
        localStorage.setItem("sta1driver", sta50);};
        if (ctr50 != "") {
        localStorage.setItem("ctr1driver", ctr50);};
        if (cit50 != "") {
        localStorage.setItem("cit1driver", cit50);};
        if (phone1driver != "") {
        localStorage.setItem("phone1driver", phone1driver);};
        if (twi50 != "") {
        localStorage.setItem("twi1driver", twi50);};
        if (ins50 != "") {
        localStorage.setItem("ins1driver", ins50);};
        if (fac50 != "") {
        localStorage.setItem("fac1driver", fac50);};
        if (pic50 != "") {
        localStorage.setItem("pic1driver", pic50);};
        });

        function WritingHTML() {
        var self = this;
        self.nome = ko.observable()
        self.mail = ko.observable()
        self.state = ko.observable()
        self.country = ko.observable()
        self.phone = ko.observable()
        self.photo = ko.observable()
        self.twitter = ko.observable()
        self.instagram = ko.observable()
        self.facebook = ko.observable()
        self.city = ko.observable()
        self.nome = localStorage.getItem("ni1driver")
        self.mail = localStorage.getItem("n1driver")
        self.state = localStorage.getItem("sta1driver")
        self.country = localStorage.getItem("ctr1driver")
        self.phone = localStorage.getItem("phone1driver")
        self.twitter = localStorage.getItem("twi1driver")
        self.instagram = localStorage.getItem("ins1driver")
        self.facebook = localStorage.getItem("fac1driver")
        self.photo = localStorage.getItem("pic1driver")
        self.city = localStorage.getItem("cit1driver")
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