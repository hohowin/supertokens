import { Component } from "@angular/core";

import * as SuperTokens from "supertokens-auth-react";
import * as EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

SuperTokens.init({
    appInfo: {
        appName: "frontend",
        apiDomain: "http://localhost:8080",
        websiteDomain: "http://localhost:4200",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"
    },
    recipeList: [
        EmailPassword.init(),
        Session.init(),
    ],
});

@Component({
    selector: "app-root",
    template: "<router-outlet></router-outlet>",
})
export class AppComponent {
    title = "frontend";
}