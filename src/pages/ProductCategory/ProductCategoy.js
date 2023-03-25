import React, { useEffect, useState } from 'react'

import { GetProductCategoryManage } from '../../apis/productCategoryApiService';

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useTable, usePagination } from 'react-table';

const DataTable = ({ columns, data, fetchData, loading, pageCount: controlledPageCount }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize }
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 },
            manualPagination: true,
            pageCount: controlledPageCount
        },
        usePagination
    );

    useEffect(() => {
        fetchData({ pageIndex, pageSize });
    }, [fetchData, pageIndex, pageSize]);

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};


const ProductCategoy = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);

    const fetchData = async ({ pageIndex, pageSize }) => {
        setLoading(true);

        const response = await fetch(`/api/data?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        const result = await response.json();

        setData(result.items);
        setPageCount(result.totalPages);

        setLoading(false);
    };

    const columns = [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
    ];


    useEffect(() => {
        fetchProductCateogories();
    }, []);

    const fetchProductCateogories = async () => {
        let res = await GetProductCategoryManage();
        setData(res.items);
    }

    // const columns = [
    //     {
    //         Header: 'ID',
    //         accessor: 'id'
    //     },
    //     {
    //         Header: 'Tên',
    //         accessor: 'name'
    //     },
    //     {
    //         Header: 'Ảnh',
    //         accessor: 'image'
    //     },
    //     {
    //         Header: 'Trạng thái',
    //         accessor: 'published'
    //     },
    //     {
    //         Header: 'Độ ưu tiên',
    //         accessor: 'displayOrder'
    //     }
    // ];

    return (
        <>

            <div class="row">
                <div class="col-12">
                    <div class="page-title-box d-flex align-items-center justify-content-between">
                        <h4 class="mb-0">Loại sản phẩm</h4>

                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="javascript: void(0);">Thegioididong</a></li>
                                <li class="breadcrumb-item active">Loại sản phẩm</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    fetchData={fetchData}
                                    loading={loading}
                                    pageCount={pageCount}
                                />
                                {/* <table class="table table-hover mb-0">

                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tên</th>
                                            <th>Ảnh</th>
                                            <th>Trạng thái</th>
                                            <th>Độ ưu tiên</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProductCategoy