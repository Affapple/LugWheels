$(document).ready(function () {
    function WritingHTML() {
        var self = this;
        self.phone = ko.observable()
        self.photo = localStorage.getItem("pic1")
        self.photo = localStorage.getItem("pic1")
        self.favoritos = localStorage.getItem("favoritos")
        // Array dos IDs dos hoteis favoritos
        self.hotel = JSON.parse(localStorage.getItem("favoritos")).Hotel

        //Array dos IDs dos Aeroportos favoritos
        self.aeroporto = JSON.parse(localStorage.getItem("favoritos")).Aeroporto
    }
    ko.applyBindings(WritingHTML())


    console.log(self.favoritos)
});




// ko foreach: Aeroporto
// Passa pela string "Sá_Carneiro" e  "Humberto_Delado"
// No HTML tens de fazer $data que corresponde a string
// pela qual esta a passar

