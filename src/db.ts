import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://admin:M8Ka9GxEjWaNb9kl@cluster0.lphgo.mongodb.net/brainly");

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

export const UserModel = model("User", UserSchema);

enum ContentType {
    Videos = "videos",
    Tweets = "tweets",
    Documents = "documents",
    Links = "links"
}
const TagSchema = new Schema({
    tagName : {type: String, required : true} 
})

const ContentSchema = new Schema({
    type: { type: String, enum: Object.values(ContentType), required: true },
    link: { type: String, required: true },
    title: { type: String, required: true },
    tags: [TagSchema],
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});



const LinkSchema = new Schema({
    hash: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true }
});

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);

// {
// 	"type": "document" | "tweet" | "youtube" | "link",
// 	"link": "url",
// 	"title": "Title of doc/video",
// 	"tags": ["productivity", "politics", ...]
// }