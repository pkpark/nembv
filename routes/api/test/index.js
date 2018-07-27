const router = require('express').Router();
const hello = require('./hello');

router.use('/hello', hello);

router.all('*', (req, res) => {
    res.status(400).send({ success: false, msg: `unknown uri ${req.path}` });
});

module.exports = router;