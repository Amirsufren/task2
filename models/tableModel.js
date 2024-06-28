const fs = require('fs');
const path = require('path');

class TableModel {
    static getData() {
        const dataPath = path.join(__dirname, '../assets/data.json');
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return data;
    }
}

module.exports = TableModel;
