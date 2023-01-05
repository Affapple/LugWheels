let vm = function driverViewModel() {
    let self = this;
    self.cidade = ko.observable("Porto")
    self.Day = ko.computed(function(){
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
    
        // This arrangement can be altered based on how we want the date's format to appear.
        return `${year}/${month}/${day}`
    });

        self.photo = ko.observable()
        self.photo = localStorage.getItem("pic1driver")
        console.log(self.photo);

    

    self.serviceArray = ko.observableArray([
        {
            'id' : '0',
            'user':'José Pedro',
            'location' : 'Aeroporto Sá Carneiro',
            'date' : '2024-08-11',
            'hour' : '11:29'
        },
        {
            'id' : '1',
            'user':' Henrique Teixeira',
            'location' : 'Aeroporto Sá Carneiro',
            'date' : '2024-08-11',
            'hour' : '15:47'

        },
        {
            'id' : '2',
            'user':'Luís Costa',
            'location' : 'Aeroporto Sá Carneiro',
            'date' : '2024-08-11',
            'hour' : '23:15'

        },
    ])
    self.newServices = ko.observableArray([
        {
            'id' : '3',
            'user':'Ricardo Reis',
            'location' : 'Aeroporto Sá Carneiro',
            'date' : '2024-08-12',
            'hour' : '8:14' 
        },
        {
            'id':'4',
            'user':' Álvaro de Campos',
            'location' : 'Aeroporto Sá Carneiro',
            'date' : '2024-08-11',
            'hour' : '9:57'
        },
        {
            'id' : '5',
            'user': 'Alberto Caeiro',
            'location' : 'Aeroporto Sá Ca',
            'date' : '2024-08-11',
            'hour' : '12:09'
        }
    ])

    self.monthly = ko.observable(0);
    self.monthlyGains = ko.computed(function () {
        return String(self.monthly()) + " €"
    })


   
    self.init = function (){
        console.log(localStorage.newServices)
        if (localStorage.newServices != null){
            self.newServices(JSON.parse(localStorage.newServices))
        }
        if(localStorage.serviceArray != null){
            self.serviceArray(JSON.parse(localStorage.serviceArray))
        }
    }; self.init()

    
}

$(document).ready(function () {
    ko.applyBindings(vm)

    $("button").click(function(){

        parent = $(this).parent().parent();
        
        parentID = parent.attr('id');
        for(let i = 0; i<self.newServices().length; i++){
            if(self.newServices()[i]['id'] == self.parentID){
                var index = i;
                break;
            }
        }

        if ($(this).hasClass('btn-outline-success')){
            let xx = self.newServices()[index]
            self.serviceArray().push(xx)
            $("#currentServices").append('<tr type="activeService">'+'<td style="word-wrap: break-word">'+xx.user + '</td>' +'<td style="word-wrap: break-word">' +xx.location + '</td>'+'<td class="col-5">'+'<span>'+xx.date+'</span><br>'+'<span>'+xx.hour+'</span>'+ '</td>'+'</tr>')
        }
        parent.remove()
        self.newServices().splice(index, 1);
        console.log(self.newServices())
        console.log(self.serviceArray())

        localStorage.newServices = JSON.stringify(self.newServices())
        localStorage.serviceArray = JSON.stringify(self.serviceArray())

    })

    $('td').click(function(){
        var parent = $(this).parent()
        if (parent.attr('Type') != 'activeService'){
            return;
        }
        var id = parent.attr('id')
        $("#modal_"+id).modal('show')
    });
})
