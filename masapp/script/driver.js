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

    

    self.serviceArray = ko.observableArray([])
    self.newServices = ko.computed(function(){
        if (localStorage.serviceRequest != undefined){
        return JSON.parse(localStorage.serviceRequest)
    } 
    return []
    })

    self.monthly = ko.observable(0);
    self.monthlyGains = ko.computed(function () {
        return String(self.monthly()) + " €"
    })


   
    self.init = function (){
        console.log(localStorage.newServices)
        if(localStorage.serviceArray != null){
            self.serviceArray(JSON.parse(localStorage.serviceArray))
        }
    }; self.init()

    
}

$(document).ready(function () {
    ko.applyBindings(vm)

    $("button").click(function(){
        if($(this).attr('type') != "check"){
            return
        }

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
            xx['status'] = "Accepted"
            self.serviceArray().push(xx)
            $("#currentServices").append('<tr type="activeService">'+'<td style="word-wrap: break-word">'+xx.user + '</td>' +'<td style="word-wrap: break-word">' +xx.dropLocation + '</td>'+'<td class="col-5">'+'<span>'+xx.dropDate+'</span><br>'+'<span>'+xx.dropHour+'</span>'+ '</td>'+'</tr>')
        }
        parent.remove()
        self.newServices().splice(index, 1);
        console.log(self.newServices())
        console.log(self.serviceArray())

        localStorage.serviceRequest = JSON.stringify(self.newServices())
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
