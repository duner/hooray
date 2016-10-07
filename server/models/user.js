import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: Boolean,
    meta: {
        twitter: String
    },
    created_at: Date,
    updated_at: Date
});


userSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.updated_at = currentDate;
    if (!this.created_at) {
        this.created_at = currentDate;
    }
    next();
});


export default mongoose.model('User', userSchema);
