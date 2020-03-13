/* Protect Your Routes
If you require authentication for certain routes, add the oidc.ensureAuthenticated() middleware.If the user is not authenticated, they will be redirected to the login page: */

app.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
    res.send(JSON.stringify(req.userContext.userinfo));
});

// OR 

/* If you want a page to always be accessible, but change its contents if the user is logged in, you can do a truthy check on req.userContext.userinfo to know if the user is authenticated or not:*/

app.get('/', (req, res) => {
    if (req.userContext.userinfo) {
        res.send(`Hi ${req.userContext.userinfo.name}!`);
    } else {
        res.send('Hi!');
    }
});