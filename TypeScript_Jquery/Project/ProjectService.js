var App;
(function (App) {
    var Service;
    (function (Service) {
        var UserDetailService = (function () {
            function UserDetailService($http) {
                this.$http = $http;
            }
            UserDetailService.prototype.getUserDetail = function () {
                var url = "../_api/SP.UserProfiles.PeopleManager/GetMyProperties";
                return this.$http({
                    method: 'GET',
                    url: url,
                    headers: { "Accept": "application/json; odata=verbose" }
                });
            };
            UserDetailService.$inject = ['$http'];
            return UserDetailService;
        }());
        Service.UserDetailService = UserDetailService;
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
//# sourceMappingURL=ProjectService.js.map