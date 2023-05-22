const express = require('express');
const router = express.Router();
const {createEntry, deleteEntry, editEntry, getEntries, getEntry, getEntryByUserId } = require('../controllers/entriesControllers');

router.get('/', getEntries);

router.get('/:id', getEntry);

router.get('/user/:id', getEntryByUserId);

router.post('/', createEntry);

router.put('/:id', editEntry);

router.delete('/:id', deleteEntry);

module.exports = router;