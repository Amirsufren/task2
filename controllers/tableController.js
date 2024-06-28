const TableModel = require('../models/tableModel');

class TableController {
    static getTableData(req, res) {
        const { sort, page, size } = req.query;
        let data = TableModel.getData();

        // Sorting
        if (sort) {
            const [key, order] = sort.split(':');
            data = data.sort((a, b) => {
                if (order === 'asc') {
                    return a[key] > b[key] ? 1 : -1;
                } else {
                    return a[key] < b[key] ? 1 : -1;
                }
            });
        }

        // Pagination
        const pageSize = parseInt(size) || 10;
        const currentPage = parseInt(page) || 1;
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const paginatedData = data.slice(startIndex, endIndex);

        res.json({ data: paginatedData, total: data.length });
    }
}

module.exports = TableController;
