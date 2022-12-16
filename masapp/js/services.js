function organizarPedido(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const aeroporto = urlParams.get('idAirport');
    const hotel = urlParams.get('idHotel');

}