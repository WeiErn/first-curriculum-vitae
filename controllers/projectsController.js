exports.index = function(req, res, next) {
    res.render('projects', {
        projects: [
            {
                projectType: 'Final Year Project',
                projectTitle: 'The Connectivity of the Singapore MRT Network',
                topicsCovered: [
                    'Statistics',
                    'Regression Analysis',
                    'Graph Theory'
                ],
                additionalDetails: [
                    'Analyzed and evaluated data on transport connectivity, public housing prices and other variables',
                    'Engineered statistical models to assess the impact of transport connectivity and other variables on public housing prices, and proposed changes required for more equitable housing'
                ]
            },
            {
                projectType: 'Software Engineering',
                projectTitle: 'TimeMaster',
                topicsCovered: [
                    'Software Architecture',
                    'UML Diagrams',
                    'Project Management',
                    'Version Control',
                    'Error and Exception Handling',
                    'Unit Testing',
                    'Integration Testing'
                ],
                additionalDetails: [
                    'Engineered a native to-do list application as part of assessment for module CS2103'
                ]
            }
        ]
    })
};