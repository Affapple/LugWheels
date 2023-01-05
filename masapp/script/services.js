//current script that is cleared upon changing window



function clearTable() {
    document.getElementsByTagName("tr")[1].remove();
}

//new script using local storage and knockout to keep it always updated (even upon closing the window)
var vm = function () {
    var self = this

    self.fullname = ko.observableArray()
    self.bags = ko.observableArray()
    self.pdate = ko.observableArray()
    self.pplace = ko.observableArray()
    self.ddate = ko.observableArray()
    self.dplace = ko.observableArray()
    self.photo = ko.observableArray()  
    self.fullname = localStorage.getItem("n2")
    self.bags = localStorage.getItem("b1")
    self.pdate = localStorage.getItem("pd1")
    self.pplace = localStorage.getItem("pl1")
    self.ddate = localStorage.getItem("dd1")
    self.dplace = localStorage.getItem("dp1")
    self.photo = localStorage.getItem("pic1")
    console.log(self.fullname);
    console.log(self.bags);
    console.log(self.pdate);
    console.log(self.pplace);
    console.log(self.ddate);
    console.log(self.dplace);
    console.log(self.photo);  

    self.serviceData = {
        namearray: [],
        bagsarray: [],
        pdatearray:[],
        pplacearray: [],
        ddatearray:[],
        dplacearray:[],
    }

    var url = new URL(window.location.href);
    if (window.location.href.includes('?')){
        var hotel = url.searchParams.get("hotel")
        var aeroporto = url.searchParams.get("aeroporto")
        startService(hotel, aeroporto);
    }
  

};


function startService(hotel, aeroporto){
    if (hotel != undefined){
        $("#dropPlace1").val(hotel.replace(/_/g, ' '))
    }
    if (aeroporto != undefined){
        $("#pickPlace1").val(aeroporto.replace(/_/g, ' '))
    }
    $("#ModalForm").modal('toggle');
}



$(document).ready(function () {
    console.log("Ready!");

        $("#send").click(function () {

            var name40 = $('#fullName1').val();
            var bags40 = $('#nBags1').val();
            var pdate40 = $('#pickDate1').val();
            var pplace40 =$('#pickPlace1').val();
            var ddate40 = $('#dropDate1').val();
            var dplace40 = $('#dropPlace1').val();
                if (name40 != "") {
                localStorage.setItem("n2", name40);};
                if (bags40 != "") {
                localStorage.setItem("b1", bags40);};
                if (pdate40 != "") {
                localStorage.setItem("pd1", pdate40);};
                if (pplace40 != "") {
                localStorage.setItem("pl1", pplace40);};
                if (ddate40 != "") {
                localStorage.setItem("dd1", ddate40);};
                if (dplace40 != "") {
                localStorage.setItem("dp1", dplace40);};

            // Atualizar a Pagina
            window.location.href = window.location.href
            
        });


        


    ko.applyBindings(new vm())
})

$("#clear").click( function clearServicesStorage() {
    localStorage.removeItem('n2');
    localStorage.removeItem('b1');
    localStorage.removeItem('pd1');
    localStorage.removeItem('pl1');
    localStorage.removeItem('dd1');
    localStorage.removeItem('dp1');

     // Atualizar a Pagina
     window.location.href = window.location.href
  })
