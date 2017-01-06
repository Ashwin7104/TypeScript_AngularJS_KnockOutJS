var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var UserDetailCtrl = (function () {
            function UserDetailCtrl(UserDetailService) {
                this.UserDetailService = UserDetailService;
                this.project = new App.Model.UserDetail();
            }
            UserDetailCtrl.prototype.getUserDetail = function () {
                var _this = this;
                this.UserDetailService.getUserDetail().then(function (data) {
                    console.log(data);
                    _this.project.displayName = data.data.d.DisplayName;
                    _this.project.pictureUrl = data.data.d.PictureUrl;
                }).catch(function (e) {
                    console.log(e);
                });
            };
            UserDetailCtrl.$inject = ['UserDetailService'];
            return UserDetailCtrl;
        }());
        Controller.UserDetailCtrl = UserDetailCtrl;
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
//# sourceMappingURL=ProjectCtrl.js.map