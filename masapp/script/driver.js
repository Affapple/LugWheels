let vm = function driverViewModel() {
    let self = this;
    self.City = ko.observable("Porto")
    self.Day = ko.computed(function(){
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
    
        // This arrangement can be altered based on how we want the date's format to appear.
        return `${year}/${month}/${day}`
    });

    self.serviceArray = ko.observable([])

    self.monthly = ko.observable(0);
    self.monthlyGains = ko.computed(function () {
        return String(self.monthly()) + " €"
    })

    
}

$(document).ready(function () {
    ko.applyBindings(vm)
})