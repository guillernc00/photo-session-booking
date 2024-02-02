const express = require('express');
const Session = require('../../models/Session');

const router = express.Router();

//create single session
router.post('/', async (req, res) => {
  const { name, date, time, phone, status, email } = req.body;
  try {
    let session = new Session({
      name,
      date,
      time,
      phone,
      status,
      email,
    });

    await session.save();
    res.json(session);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//get all sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//get session by id
router.get('/:id', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    res.json(session);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//update session
router.put('/:id', async (req, res) => {
  const { name, date, time, phone, status, email } = req.body;
  try {
    await Session.findByIdAndUpdate(req.params.id, {
      name: name,
      date: date,
      time: time,
      phone: phone,
      status: status,
      email: email,
    });

    const session = await Session.findById(req.params.id);

    res.json(session);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//cancel session
router.put('/:id', async (req, res) => {
  try {
    await Session.findOneAndUpdate(req.params.id, { status: 'CANCELED' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

//delete session
router.delete('/:id', async (req, res) => {
  try {
    await Session.findByIdAndRemove(req.params.id);
    const sessions = await Session.find();
    res.json(sessions);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
