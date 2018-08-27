exports.index = function(req, res, next) {
    res.render('education', {
        preUni: {
            school: "Hwa Chong Institution",
            start: "JAN-2009",
            end: "DEC-2010",
            courses: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "Economics",
                "General Paper",
                "Project Work"
            ]
        },
        uni: {
            school: "National University of Singapore",
            major: "Industrial and Systems Engineering",
            start: "AUG-2013",
            end: "JUN-2017",
            courses: [
                "Programming Methodology",
                "Data Structures and Algorithms I",
                "Software Engineering",
                "Project Management",
                "Operations Research",
                "Decision Modeling and Risk Analysis"
            ]
        }
    });
};