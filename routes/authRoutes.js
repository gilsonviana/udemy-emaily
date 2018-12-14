const passport = require('passport');

module.exports = (app) => {
    app.get(

        '/auth/google',

        passport.authenticate(

            'google',

            {
                scope: ['profile', 'email']
            }

        )

    );

    app.get(

        '/auth/google/callback',

        passport.authenticate(

            'google',

            {
                successRedirect: '/profile',
                
                failureRedirect: '/'
            }

        )

    );

    app.get(

        '/api/logout',

        (req, res) => {
            req.logout();
            res.end();
        }

    );

    app.get(

        '/api/current_user',

        (req, res) => {
            res.json(req.user)
        }

    )
}