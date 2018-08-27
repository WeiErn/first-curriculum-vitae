exports.index = function(req, res, next) {
    res.render('skills', {
        programming: [
            'HTML',
            'CSS',
            'JavaScript',
            'Python',
            'C++',
            'C',
            'Java',
            'SPARQL',
        ]
    })
};