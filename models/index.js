import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: String,
    url: String,
    category: String,
    duration: Number,
    sets: String,
    reps: String,
    equipment: [String],
})

const VideoModel = mongoose.model('Video' , videoSchema);

export default VideoModel;
