const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3002;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/rooms', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Room Schema (for rooms)
const roomSchema = new mongoose.Schema({
  student_name: String,
  rollno: String,
  year: String,
  department: String,
  room_number: String
});

const Room = mongoose.model('Room', roomSchema);

// Complaint Schema (for complaints)
const complaintSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  roomno: String,
  mobileno: String,
  gmail: String,
  details: String
});

const Complaint = mongoose.model('Complaint', complaintSchema);

// Payment Schema (for payments)
const paymentSchema = new mongoose.Schema({
  studentName: String,
  studentId: String,
  amount: Number,
  cardNumber: String,
  expiryDate: String,
  cvc: String
});

const Payment = mongoose.model('Payment', paymentSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Add Room Route
app.post('/api/rooms', async (req, res) => {
  try {
    const room = new Room(req.body);
    const savedRoom = await room.save();
    res.status(201).send(savedRoom);
  } catch (err) {
    console.error('Error adding room:', err);
    res.status(500).send({ message: 'Error adding room. Please try again later.' });
  }
});

// Add Complaint Route
app.post('/api/rooms/complaints', async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    const savedComplaint = await complaint.save();
    res.status(201).send(savedComplaint);
  } catch (err) {
    console.error('Error adding complaint:', err);
    res.status(500).send({ message: 'Error adding complaint. Please try again later.' });
  }
});

// Delete Room by Roll Number Route
app.delete('/api/rooms/:rollNumber', async (req, res) => {
  try {
    const { rollNumber } = req.params;
    const deletedRoom = await Room.findOneAndDelete({ rollno: rollNumber });
    if (!deletedRoom) {
      return res.status(404).send({ message: 'Room not found' });
    }
    res.status(200).send(deletedRoom);
  } catch (err) {
    console.error('Error deleting room:', err);
    res.status(500).send({ message: 'Error deleting room. Please try again later.' });
  }
});

// Get All Rooms Route
app.get('/api/rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    console.log('Rooms fetched from database:', rooms);
    res.status(200).send(rooms);
  } catch (err) {
    console.error('Error fetching rooms:', err);
    res.status(500).send({ message: 'Error fetching rooms. Please try again later.' });
  }
});

// Get Room Details by Room Number Route
app.get('/api/rooms/roomNumber/:roomNumber', async (req, res) => {
  try {
    const { roomNumber } = req.params;
    const room = await Room.findOne({ room_number: roomNumber });
    if (!room) {
      return res.status(404).send({ message: 'Room not found' });
    }
    res.status(200).send(room);
  } catch (err) {
    console.error('Error fetching room:', err);
    res.status(500).send({ message: 'Error fetching room. Please try again later.' });
  }
});

// Delete Room by Room Number Route
app.delete('/api/rooms/roomNumber/:roomNumber', async (req, res) => {
  try {
    const { roomNumber } = req.params;
    const deletedRoom = await Room.findOneAndDelete({ room_number: roomNumber });
    if (!deletedRoom) {
      return res.status(404).send({ message: 'Room not found' });
    }
    res.status(200).send(deletedRoom);
  } catch (err) {
    console.error('Error deleting room:', err);
    res.status(500).send({ message: 'Error deleting room. Please try again later.' });
  }
});

// Add Payment Route
app.post('/api/payments', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    const savedPayment = await payment.save();
    res.status(201).send(savedPayment);
  } catch (err) {
    console.error('Error processing payment:', err);
    res.status(500).send({ message: 'Error processing payment. Please try again later.' });
  }
});

// Update Room Route
app.put('/api/rooms/:roomNumber', async (req, res) => {
  try {
    const { roomNumber } = req.params;
    const updatedRoom = await Room.findOneAndUpdate({ room_number: roomNumber }, req.body, { new: true });
    if (!updatedRoom) {
      return res.status(404).send({ message: 'Room not found' });
    }
    res.status(200).send(updatedRoom);
  } catch (err) {
    console.error('Error updating room:', err);
    res.status(500).send({ message: 'Error updating room. Please try again later.' });
  }
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
