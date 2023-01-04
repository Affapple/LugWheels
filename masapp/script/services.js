//current script that is cleared upon changing window

function publishToTable() {
    const name = document.getElementById('fullName1').value;
    const bags = document.getElementById('nBags1').value;
    const pdate = document.getElementById('pickDate1').value;
    const pplace = document.getElementById('pickPlace1').value;
    const ddate = document.getElementById('dropDate1').value;
    const dplace = document.getElementById('dropPlace1').value;
    var rowCount = document.getElementById('table').rows.length;
    if (bags && pdate && pplace && ddate && dplace && rowCount == 1) {
        const tableElement = document.getElementById('table');
        const trElement = document.createElement('tr');
        const tbodyElement = document.createElement('tbody');
        const nameEle = document.createElement('td');
        const bagsEle = document.createElement('td');
        const pdateEle = document.createElement('td');
        const pplaceEle = document.createElement('td');
        const ddateEle = document.createElement('td');
        const dplaceEle = document.createElement('td');
        nameEle.innerHTML = name;
        bagsEle.innerHTML = bags;
        pdateEle.innerHTML = pdate;
        pplaceEle.innerHTML = pplace;
        ddateEle.innerHTML = ddate;
        dplaceEle.innerHTML = dplace;
        trElement.appendChild(nameEle);
        trElement.appendChild(bagsEle);
        trElement.appendChild(pdateEle);
        trElement.appendChild(pplaceEle);
        trElement.appendChild(ddateEle);
        trElement.appendChild(dplaceEle);
        tbodyElement.appendChild(trElement);
        tableElement.appendChild(tbodyElement);
    }
}

function clearTable() {
    document.getElementsByTagName("tr")[1].remove();
}

//new script using local storage and knockout to keep it always updated (even upon closing the window)
var vm = function () {
    var self = this

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

    self.Datanamearray = ko.observableArray()
    self.Databagsarray = ko.observableArray()
    self.Datapdatearray = ko.observableArray()
    self.Datapplacearray = ko.observableArray()
    self.Dataddatearray = ko.observableArray()
    self.Datadplacearray = ko.observableArray()

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

$().ready(function () {
    console.log("Ready!");
    ko.applyBindings(new vm())
})