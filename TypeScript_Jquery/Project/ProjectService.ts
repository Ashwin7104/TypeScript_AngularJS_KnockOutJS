module App.Service {
    export class UserDetailService {

        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService) {
        }

        public getUserDetail(): ng.IPromise<any> {
            var url = "../_api/SP.UserProfiles.PeopleManager/GetMyProperties";
            return this.$http({
                method: 'GET',
                url: url,
                headers: { "Accept": "application/json; odata=verbose" }
            });
        }
    }
}