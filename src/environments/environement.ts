import myAppConfig from "src/app/config/my-app-config";

export const environment = {
    production: false,
    redirectUri: "https://localhost:8080/api",
    issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes,
        baseUrl : myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.redirectUri,
  };