const User = require("../Model/user");

const updateAttendance = async (req, res) => {
    const { email } = req.body;
    console.log('Received email for update:', email);

    try {
        if (!email) {
            console.error('Email is required');
            return res.status(400).json({ message: 'Email is required' });
        }

        const updateResult = await User.updateOne(
            { email }, 
            { $set: { attending: true } }
        );

        console.log('Update result:', updateResult);

        if (updateResult.nModified === 0) {
            console.error('User not found or already updated');
            return res.status(404).json({ message: 'User not found or already updated' });
        }

        res.status(200).json({ message: 'Attendance updated successfully.' });
    } catch (error) {
        console.error('Error updating attendance:', error);
        res.status(500).json({ error: 'Failed to update attendance.' });
    }
};

const Login = async (req, res) => {
    const body = req.body;
    const findUser = await User.findOne({
        email: body.email,
        password: body.password,
    });
    if (!findUser) {
        return res.status(401).json({ message: "Invalid email or password" });
    }
    res.json({ message: "LoggedIn", data: findUser });
};

const Register = async (req, res) => {
    const body = req.body;
    const saveData = await User.create({
        dlno: body.dlno,
        email: body.email,
        password: body.password,
        attending: false
    });
    res.json({ message: "Registered Successfully", data: saveData });
};

module.exports = {
    Login,
    Register,
    updateAttendance
};
