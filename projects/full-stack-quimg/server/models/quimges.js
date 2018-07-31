const mongoose = require('mongoose');
const { Schema } = mongoose;

const quimgSchema = new Schema ({
    id: String,
    createdAt: String,
    creatorName: String,
    creatorAvatar: String,
    // tags: [],
    title: String,
    quote: String,
    likesCount: Number,
    // likedBy: [],
    fontStyle: String,
    textAlign: String,
    image: String
});

module.exports = mongoose.model("Quimg", quimgSchema)


////////////// IDEA FOR HOW TO HANDLE LIKES COUNT
// ArticleSchema.methods.clap = function() {
//     this.claps++
//     return this.save()
// }