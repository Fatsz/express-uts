const getAllUsers = (req, res) => {
    res.json({
        message: "GET users success",
    });
}

const createNewUsers = (req, res) => {
    res.json({
        message: "POST users success",
    });
}

module.exports = {
    getAllUsers,
    createNewUsers
}