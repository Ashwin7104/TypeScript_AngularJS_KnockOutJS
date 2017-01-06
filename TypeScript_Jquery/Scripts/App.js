var Wingtip;
(function (Wingtip) {
    var Welcome = (function () {
        function Welcome() {
        }
        //public Methods
        Welcome.get_viewModel = function () {
            return {
                "pictureUrl": Welcome.pictureUrl,
                "displayName": Welcome.displayName
            };
        };
        Welcome.init = function () {
            return jQuery.ajax({
                url: "../_api/SP.UserProfiles.PeopleManager/GetMyProperties",
                method: "GET",
                headers: {
                    "accept": "application/json",
                },
                success: function (data, status, jqXHR) {
                    console.log(data.DisplayName);
                    Welcome.displayName = data.DisplayName;
                    Welcome.pictureUrl = data.PictureUrl;
                }
            });
        };
        //Private Members
        Welcome.displayName = "";
        Welcome.pictureUrl = "";
        return Welcome;
    }());
    Wingtip.Welcome = Welcome;
})(Wingtip || (Wingtip = {}));
//knockout binding
jQuery(function () {
    Wingtip.Welcome.init().then(function (data) {
        ko.applyBindings(Wingtip.Welcome.get_viewModel());
    }, function (jqXHR, status, message) {
        alert(message);
    });
});
//# sourceMappingURL=App.js.map