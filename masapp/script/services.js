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
    self.mail = localStorage.getItem("n1")
    self.phone = localStorage.getItem("pho1")

    console.log(self.fullname);
    console.log(self.bags);
    console.log(self.pdate);
    console.log(self.pplace);
    console.log(self.ddate);
    console.log(self.dplace);
    console.log(self.photo);
    console.log(self.mail);
    console.log(self.phone);



    self.serviceData = {
        namearray: [],
        bagsarray: [],
        pdatearray: [],
        pplacearray: [],
        ddatearray: [],
        dplacearray: [],
    }

    var url = new URL(window.location.href);
    if (window.location.href.includes('?')) {
        var hotel = url.searchParams.get("hotel")
        var aeroporto = url.searchParams.get("aeroporto")
        startService(hotel, aeroporto);
    }


};


function startService(hotel, aeroporto) {
    if (hotel != undefined) {
        $("#dropPlace1").val(hotel.replace(/_/g, ' '))
    }
    if (aeroporto != undefined) {
        $("#pickPlace1").val(aeroporto.replace(/_/g, ' '))
    }
    $("#ModalForm").modal('toggle');
}



$(document).ready(function () {
    console.log("Ready!");
    ko.applyBindings(new vm())


    $("#send").click(function () {
        var name40 = $('#fullName1').val();
        var bags40 = $('#nBags1').val();
        var pdate40 = $('#pickDate1').val();
        var pplace40 = $('#pickPlace1 option:selected').val();
        var ddate40 = $('#dropDate1').val();
        var dplace40 = $('#dropPlace1  option:selected').val();
        if (name40 == "" || bags40 == "" || pplace40 == "Select Airport" || dplace40 == "Select Hotel") {
            return
        }
        
        localStorage.setItem("n2", name40);
        localStorage.setItem("b1", bags40);
        localStorage.setItem("pd1", pdate40);
        localStorage.setItem("pl1", pplace40);
        localStorage.setItem("dd1", ddate40);
        localStorage.setItem("dp1", dplace40);


        var servicos = JSON.parse(localStorage.getItem('serviceRequest'))
        if (servicos == null) {
            servicos = []
        }
        var name = localStorage.n2
        if (localStorage.n2 == "" ||  localStorage.n2 == undefined){
            name = "Client's Names"
        }
        var Aeroporto = $('#pickPlace1 option:selected').text();
        var Hotel = $('#dropPlace1 option:selected').text();

        var pickDate = pdate40.substring(0, pdate40.indexOf('T'));
        var pickHour = pdate40.substring(pdate40.indexOf('T') + 1, pdate40.length);
        var dropDate = ddate40.substring(0, ddate40.indexOf('T'));
        var dropHour = ddate40.substring(ddate40.indexOf('T') + 1, ddate40.length);
        var orderID = function () {
            let max = -1
            servicos.forEach(order => {
                if (order.id > max) {
                    max = order.id
                }
            });

            return max == -1 ? 0 : ++max
        }
        servicos.push({
            'id': orderID(),
            'user': name,
            'numBags': bags40,
            'pickLocation': Aeroporto,
            'pickDate': pickDate,
            'pickHour': pickHour,
            'dropLocation': Hotel,
            'dropDate': dropDate,
            'dropHour': dropHour,
            'status': 'Waiting',
        })
        localStorage.setItem('serviceRequest', JSON.stringify(servicos))
        // Atualizar a Pagina
        console.log(servicos)
        window.location.href = '//' + location.host + location.pathname
    });

    $("#clear").click(function clearServicesStorage() {
        localStorage.removeItem('n2');
        localStorage.removeItem('b1');
        localStorage.removeItem('pd1');
        localStorage.removeItem('pl1');
        localStorage.removeItem('dd1');
        localStorage.removeItem('dp1');
    
        // Atualizar a Pagina
        window.location.href = window.location.href
    })
        
    // Initialize the map with a center and zoom level
    if (localStorage.getItem("dp1") == "SeaPorto") {
        var marker
        var map_init = L.map("map", {
            center: [41.17988002637636, -8.691622226834616],
            zoom: 20,
        });
    
        if (marker) {
            map_init.removeLayer(marker);
        }
    
    
        marker = L.marker([41.17988002637636, -8.691622226834616]).bindPopup(
            "This is your baggages' location"
        );
    
        var featureGroup = L.featureGroup([marker]).addTo(map_init);
    }
    else if (localStorage.getItem("dp1") == "Radisson") {
        var map_init = L.map("map", {
            center: [38.757178846692376, -9.152605127275878],
            zoom: 20,
        });
    
        if (marker) {
            map_init.removeLayer(marker);
        }
    
    
        marker = L.marker([38.757178846692376, -9.152605127275878]).bindPopup(
            "This is your baggages' location"
        );
    
        var featureGroup = L.featureGroup([marker]).addTo(map_init);
    }
    else if (localStorage.getItem("dp1") == "Pestana") {
        var map_init = L.map("map", {
            center: [38.70782436913877, -9.1391753530921958],
            zoom: 20,
        });
    
        if (marker) {
            map_init.removeLayer(marker);
        }
    
    
        marker = L.marker([38.70782436913877, -9.139175353092195]).bindPopup(
            "This is your baggages' location"
        );
    
        var featureGroup = L.featureGroup([marker]).addTo(map_init);
    }
    else if (localStorage.getItem("dp1") == "Novotel") {
        var map_init = L.map("map", {
            center: [40.64427, -8.64554],
            zoom: 20,
        });
        alert("Your baggages' can't be found, contact our telephonic support +351808XXXXXX ou our e-mail adress lugwheels@lugwpt.com")
    }
    else if (localStorage.getItem("dp1") == "HotelAS") {
        var map_init = L.map("map", {
            center: [38.71687330317059, -9.200267041375733],
            zoom: 20,
        });
    
        if (marker) {
            map_init.removeLayer(marker);
        }
    
    
        marker = L.marker([38.71687330317059, -9.200267041375733]).bindPopup(
            "This is your baggages' location"
        );
    
        var featureGroup = L.featureGroup([marker]).addTo(map_init);
    }
    else if (localStorage.getItem("dp1") == "Tivoli") {
        var map_init = L.map("map", {
            center: [38.71687330317059, -9.200267041375733],
            zoom: 20,
        });
    
        if (marker) {
            map_init.removeLayer(marker);
        }
    
    
        marker = L.marker([38.71687330317059, -9.200267041375733]).bindPopup(
            "This is your baggages' location"
        );
    
        var featureGroup = L.featureGroup([marker]).addTo(map_init);
    }
    else if (localStorage.getItem("dp1") == "Marriot") {
        var map_init = L.map("map", {
            center: [38.723708668684075, -9.163525358358978],
            zoom: 20,
        });
    
        if (marker) {
            map_init.removeLayer(marker);
        }
    
    
        marker = L.marker([38.723708668684075, -9.163525358358978]).bindPopup(
            "This is your baggages' location"
        );
    
        var featureGroup = L.featureGroup([marker]).addTo(map_init);
    }
    else {
        var map_init = L.map("map", {
            center: [40.64427, -8.64554],
            zoom: 20,
        });
        alert('Não tem nenhum pedido LugWheels ativo!')
    }
    
    
    
    
    // Add a tile layer from OpenStreetMap
    var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map_init);
    
    // Add a geocoder control to the map
    L.Control.geocoder().addTo(map_init);    
})

