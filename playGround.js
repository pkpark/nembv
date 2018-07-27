const Company = require('./models/companies');
const Group = require('./models/groups');
const Board = require('./models/boards');
const Comment = require('./models/comments');

exports.test = {
    model: () => {
        console.log('모델 테스트');

        // const cp = new Company({
        //     name: '테스트',
        // });
        // cp.save()
        //     .then((r) => {
        //         console.log(r);
        //     })
        //     .catch(err => console.error(err));

        // Company.findOne({ name: '테스트' })
        //     .then((r) => {
        //         console.log(r);
        //     })
        //     .catch(err => console.err(err));

        /*Company.findOne({ name: '테스트' })
            .then((cp) => {
                if (!cp) throw new Error('회사가 존재하지 않음');

                const gr = new Group({
                    name: '소속2',
                    cp_id: cp._id,
                });

                return gr.save();
            })
            .then((gr) => {
                return Company.findOneAndUpdate({ _id: gr.cp_id }, { $addToSet: { gr_ids: gr._id } }, { new: true }).populate('gr_ids');
            })
            .then((r) => {
                console.log(r);
            })
            .catch(err => console.error(err));*/

        /*Board.find()
            .then((cp) => {
                if (!cp) throw new Error('Board 없음');
                console.log(cp);
            })
            .catch(err => console.error(err));

        Comment.findById({ _id: '5b596f7d498e75666c3f94ec' })
            .then((cmt) => {
                console.log(cmt);
            })
            .catch(err => console.error(err));*/
    },
};