const User = require('../models/user');

exports.postUserData = async (req, res, next) => {
    try {
        const { name, phoneno, emailid } = req.body;
        console.log(req.body);
        const user = await User.create({ name, phoneno, emailid });
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error : "Error creating user" });
    }
};

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();
        console.log(users);
        if (users.length == 0) {
            return res.status(404).json({ message: "No appointments found." });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching appointments", error);
        res.status(500).json({error: "Internal server error"});
    }
}

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await user.destroy();
        res.json({ message: "User deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
}



