const Contact = require("../Model/contact");



const submitMessage = async(req,res)=> {
    const {dlno,email,message} = req.body;

    try {
        const newContact = new Contact({
            dlno,
            email,
            message
        })
        await newContact.save();

        res.status(200).json({message:'Message sent',data:newContact})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Error submitting message'})
    }
}
module.exports = {
    submitMessage
}