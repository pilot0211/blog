const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', { course: course.toObject() });
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next){
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCML-byK5TPhWN_-ZuZal4h5KasYw`
        const course = new Course(req.body)
        course.save()
        .then(() => {res.redirect('/')})
        .catch((error) => {})
    }
}

module.exports = new CourseController();
