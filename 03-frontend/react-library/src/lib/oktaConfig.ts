export const oktaConfig = {
  clientId: "0oalrsgdc3BmPtYsn5d7",
  issuer: "https://dev-38900208.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
