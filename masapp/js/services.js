function organizarPedido(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aeroporto = urlParams.get('idAirport');
    const hotel = urlParams.get('idHotel');

}

function publishToTable() {
    const name = document.getElementById('fullName1').value;
    const bags = document.getElementById('nBags1').value;
    const pdate = document.getElementById('pickDate1').value;
    const pplace = document.getElementById('pickPlace1').value;
    const ddate = document.getElementById('dropDate1').value;
    const dplace = document.getElementById('dropPlace1').value;
    if (name && bags && pdate && pplace && ddate && dplace) {
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