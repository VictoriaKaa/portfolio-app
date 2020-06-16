const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const BlogSchema = new Schema({
    userId: setStringType(512),
    slug: { type: String, unique: true, sparse: true },
    title: { type: String, required: true, maxlength: 96},
    subTitle: { type: String, required: true },
    story: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: String, default: 'draft' },
    author: setStringType(256),
})

module.exports = mongoose.model('Blog', BlogSchema)