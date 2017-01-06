module Wingtip {
    interface WelcomeData {
        pictureUrl: string;
        displayName: string;
    }


    export class Welcome {

        //Private Members
        private static displayName: string = "";
        private static pictureUrl: string = "";


        //public Methods
        public static get_viewModel(): WelcomeData {
            return {
                "pictureUrl": Welcome.pictureUrl,
                "displayName": Welcome.displayName
            };
        }

        public static init(): JQueryXHR {

            return jQuery.ajax(
                {
                    url: "../_api/SP.UserProfiles.PeopleManager/GetMyProperties",
                    method: "GET",
                    headers: {
                        "accept": "application/json",
                    },
                    success: (data: any, status: string, jqXHR: JQueryXHR) => {
                        console.log(data.DisplayName);
                        Welcome.displayName = data.DisplayName;
                        Welcome.pictureUrl = data.PictureUrl;
                    }
                }
            );
        }
    }
}

//knockout binding
jQuery(function () {
    Wingtip.Welcome.init().then(
        (data: any) => {
            ko.applyBindings(Wingtip.Welcome.get_viewModel());
        },
        (jqXHR: JQueryXHR, status: string, message: string) => {
            alert(message);
        }
    );
});