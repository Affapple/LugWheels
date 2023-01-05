let vm = function viewModel() {
    let self = this;
    let hoteis = ['Radisson', 'Novotel', 'SeaPorto',
        'Pestana', 'HotelAS', 'Tivoli', 'Marriot']

        
        self.phone = ko.observable()
        self.photo = localStorage.getItem("pic1")
        self.photo = localStorage.getItem("pic1")

    self.listaFavoritos = {
        'Hotel': [],
        'Aeroporto': []
    }

    self.loadFavourites = function () {
        if (localStorage.getItem('favoritos') != null) {
            self.hoteisFavoritos = JSON.parse(localStorage.favoritos).Hotel;
            self.AeroportosFavoritos = JSON.parse(localStorage.favoritos).Aeroporto;
        } else {
            localStorage.setItem('favoritos', JSON.stringify(self.listaFavoritos));

        };

        self.hoteisFavoritos.forEach(id => { $("#favourite_" + id).css('color', 'red'); });
        self.AeroportosFavoritos.forEach(id => { $("#favourite_" + id).css('color', 'red'); });
    }

    self.updateFavorites = function(id, type){
        switch(type){
            case 'Hotel':
                var fav = self.hoteisFavoritos
                break;
            case 'Aeroporto':
                var fav = self.AeroportosFavoritos
        }
        var index = fav.indexOf(String(id));
        if (index !== -1) {
            $("#favourite_" + id).css('color', 'white')
            fav.splice(index, 1)
        } else if (index === -1) {
            $("#favourite_"+id).css('color', 'red')
            fav.push(String(id))
        }
    }

    $(".save").click(function () {
        var id = $(this).attr('id').substring($(this).attr('id').indexOf('_')+1,
                                              $(this).attr('id').length)
        var type = $(this).attr('Type')
        self.updateFavorites(id, type)

        self.listaFavoritos.Hotel = self.hoteisFavoritos
        self.listaFavoritos.Aeroporto = self.AeroportosFavoritos
        window.localStorage.setItem('favoritos', JSON.stringify(self.listaFavoritos))
    })

    $('.aeroporto').click(function () {
        let id = $(this).attr('id');
        if (id != 'Sá_Carneiro' && id != 'Humberto_Delgado') {
            return false
        }

        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $('.active').removeClass('active');
            $(this).addClass('active');
        }
    })

    $('.card').click(function () {
        let id = $(this).attr('id');

        if (!hoteis.includes(id)) {
            return false
        };

        if ($(this).hasClass('selectedHotel')) {
            $(this).removeClass('selectedHotel')
        } else {
            $('.selectedHotel').removeClass('selectedHotel');
            $(this).addClass('selectedHotel');
        }
    })

    $('#pedido').click(function () {
        var hotel = $('.selectedHotel').attr('id');

        var aeroporto = $('.active').attr('id');
        var url = window.location.href;
        var end = "";
        if (aeroporto != undefined) {
            end += 'aeroporto=' + aeroporto
        }
        if (hotel != undefined) {
            if (end == "") {
                console.log(hotel)
                end += 'hotel=' + hotel;
            } else {
                end += '&hotel=' + hotel;
            }
        }
        window.location.href = url.substring(0, url.lastIndexOf('/') + 1) + 'services.html?' + end
    });

    const button = document.getElementById('pedido');
    button.scrollIntoView({ behavior: 'smooth' });

    function __init__(){
        self.loadFavourites()
    } __init__()

};

$(document).ready(function () {
    ko.applyBindings(new vm)
})