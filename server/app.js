// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Create a new express app
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb+srv://hvs42:<password></password>@cluster0.upu3bh6.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB database'))
  .catch((err) => console.error(`Error connecting to MongoDB database: ${err}`));

// Create a patient schema
const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  age: Number,
  contactNumber: String,
  address: String,
  bloodGroup: String,
  dateOfBirth: Date,
  dateOfRegistration: Date,
  patientID: String
});

// Create a patient model
const Patient = mongoose.model('Patient', patientSchema);

// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle POST requests to /patients
app.post('/patients', async (req, res) => {
  try {
    // Get patient data from request body
    const { name, email, password, age, contactNumber, address, bloodGroup, dateOfBirth } = req.body;

    // Generate patient ID
    const phoneNo = contactNumber.substring(1); // Remove first character from phone number
    const dateOfRegistration = new Date(); // Set date of registration to current date and time
    let patientID;
    do {
      patientID = phoneNo + dateOfRegistration.getTime().toString().substr(-8); // Generate a 12-digit patient ID using phone number and date of registration
      // Check if patient ID already exists in the database
      const existingPatient = await Patient.findOne({ patientID: patientID });
      if (existingPatient) {
        // If patient ID already exists, generate a new patient ID
        patientID = '';
      }
    } while (!patientID);

    // Create a new patient document
    const patient = new Patient({
      name: name,
      email: email,
      password: password,
      age: age,
      contactNumber: contactNumber,
      address: address,
      bloodGroup: bloodGroup,
      dateOfBirth: new Date(dateOfBirth),
      dateOfRegistration: dateOfRegistration,
      patientID: patientID
    });

    // Save the patient document to the database
    const savedPatient = await patient.save();

    // Send the saved patient document as a response
    res.status(201).json(savedPatient);
  } catch (err) {
    console.error(`Error handling POST request to /patients: ${err}`);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server started on port 3000'));
