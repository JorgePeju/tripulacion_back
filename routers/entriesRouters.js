const express = require('express');
const router = express.Router();
const {createEntry, deleteEntry, editEntry, getEntries } = require('../controllers/entriesControllers');

router.get('/', getEntries);

router.post('/', createEntry);

router.put('/:id', editEntry);

router.delete('/:id', deleteEntry);

module.exports = router;