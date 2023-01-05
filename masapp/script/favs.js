$(document).ready(function () {
  function WritingHTML() {
    var self = this;
    self.phone = ko.observable()
    self.photo = localStorage.getItem("pic1")
    self.photo = localStorage.getItem("pic1")
}

ko.applyBindings(WritingHTML())
    
});

