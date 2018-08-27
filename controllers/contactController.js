const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.contact_create_get = function(req, res, next) {
    res.render('contact-form', {title: 'Contact Form'});
};

exports.contact_create_post = [

    // Validate fields
    body('name', 'Name must not be empty.').isLength({ min: 1 }).trim(),
    body('email', 'Email must not be empty.').isLength({ min: 1 }).trim(),
    body('message', 'Message must not be empty.').isLength({ min: 1 }).trim(),

    // Sanitize fields (using wildcard)
    sanitizeBody('*').trim().escape(),

    (req, res, next) => {

        // Extract the validation errors from a request
        const errors = validationResult(req);

        var sender = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };

        if(!errors.isEmpty()) {

        } else {
            console.log(sender);
            res.render('contact-success', sender);
        }
    }
];