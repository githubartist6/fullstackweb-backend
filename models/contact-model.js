const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: { type: String, required: [true, "Username is required"] },
    phone: { type: String, required: [true, "Phone is required"] },
    email: { type: String, required: [true, "Email is required"] },
    message: { type: String, required: [true, "Message is required"] }
});

// Define the model
const Contact = model("Contact", contactSchema);

module.exports = Contact;
