/* Starting Your Server
When you create an instance of ExpressOIDC, some initial communication is made to the issuer (your Okta org) to ensure that the provided client credentials are correct. Because this is asynchronous you will need to wait for ExpressOIDC to be ready, then you can tell your Express app to start listening: */


oidc.on('ready', () => {
    app.listen(3000, () => console.log(`Started!`));
});

oidc.on('error', err => {
    console.log('Unable to configure ExpressOIDC', err);
});