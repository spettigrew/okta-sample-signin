

const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

// session support is required to use ExpressOIDC
app.use(session({
    secret: 'this should be secure',
    resave: true,
    saveUninitialized: false
}));

const oidc = new ExpressOIDC({
    issuer: 'https://${yourOktaDomain}/oauth2/default',
    client_id: '{clientId}',
    client_secret: '{clientSecret}',
    redirect_uri: 'http://localhost:3000/authorization-code/callback',
    scope: 'openid profile'
});

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);