module.exports = {
    store(req, res) {
        const { username } = req.body;

        return res.json({return: true});
    }
};
