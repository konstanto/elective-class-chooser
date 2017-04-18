module.exports = function(app) {
    var courses = require('./controllers/courses');

    app.get("/api/courses/", courses.getAllCourses);
}