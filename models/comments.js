const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    bd_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', index: true },
    ut: { type: Date, default: Date.now }, // 변경 날짜 : timestamp
    ip: { type: String, default: '' }, // ip address
    id: { type: String, default: '' }, // 작성자
    content: { type: String, default: '' }, // 글
    cntLike: { type: Number, default: 0 }, // 좋아요 수
});

module.exports = mongoose.model('Comment', commentSchema);