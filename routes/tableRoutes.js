const express = require('express');
const router = express.Router();
const TableController = require('../controllers/tableController');

router.get('/table', TableController.getTableData);

module.exports = router;
