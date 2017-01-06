module App.Controller {

    export class UserDetailCtrl {
        public project: App.Model.UserDetail;

        static $inject = ['UserDetailService'];
        constructor(private UserDetailService: App.Service.UserDetailService) {
            this.project = new App.Model.UserDetail();
        }
        public getUserDetail(): void {
            this.UserDetailService.getUserDetail().then(data => {
                console.log(data);
                this.project.displayName = data.data.d.DisplayName
                this.project.pictureUrl = data.data.d.PictureUrl
            }).catch(e => {
                console.log(e);
            });
        }
    }
}