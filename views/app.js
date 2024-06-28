document.addEventListener('DOMContentLoaded', () => {
    let currentPage = 1;
    let currentSort = '';

    const fetchTableData = (page = 1, sort = '') => {
        const url = `/api/table?page=${page}&sort=${sort}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                renderTable(data.data);
                renderPagination(data.total, page);
            });
    };

    const renderTable = (data) => {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.id}</td><td>${row.name}</td><td>${row.age}</td>`;
            tableBody.appendChild(tr);
        });
    };

    const renderPagination = (total, page) => {
        const pageSize = 10;
        const totalPages = Math.ceil(total / pageSize);
        document.getElementById('page-info').innerText = `Page ${page} of ${totalPages}`;
    };

    window.sortTable = (key) => {
        currentSort = `${key}:asc`;
        fetchTableData(currentPage, currentSort);
    };

    window.prevPage = () => {
        if (currentPage > 1) {
            currentPage--;
            fetchTableData(currentPage, currentSort);
        }
    };

    window.nextPage = () => {
        currentPage++;
        fetchTableData(currentPage, currentSort);
    };

    fetchTableData();
});
