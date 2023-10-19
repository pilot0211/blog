module.exports = {
    multipleMongooseToObject: function (mongoose) {
        return mongoose.map((mongoose) => mongoose);
    },
    mongooseToObject: function () {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
