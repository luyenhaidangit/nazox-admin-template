import React, { useEffect, useState } from 'react'
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table'
import { GetProductCategoryManage } from '../../apis/productCategoryApiService';
import CreatableSelect from 'react-select/creatable';
import "../../assets/libs/datatables.net/css/jquery.dataTables.css"
import "../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "../../assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css"
import "../../assets/libs/datatables.net-select-bs4/css/select.bootstrap4.min.css"
import "../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css"
import { FaSortUp, FaSortDown } from 'react-icons/fa';


// React select
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';

const ProductCategoy = () => {
    const [productCategories, setProductCategories] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [sortOrder, setSortOrder] = useState(null);
    const [sortState, setSortState] = useState({ sortBy: null, orderBy: null });

    const handleSort = (sortBy) => {
        if (sortState.sortBy === sortBy) {
            setSortState({
                ...sortState,
                orderBy: sortState.orderBy === 'asc' ? 'desc' : 'asc'
            });
        } else {
            setSortState({ sortBy, orderBy: 'asc' });
        }
    };

    useEffect(() => {
        const request = {
            pageIndex,
            pageSize
        }
        fetchProductCateogories(request);
    }, []);

    const changePageIndex = (index) => {
        setPageIndex(index);
    }

    useEffect(() => {
        const request = {
            pageIndex: pageIndex,
            pageSize: pageSize,
        }
        fetchProductCateogories(request);
    }, [pageIndex]);

    useEffect(() => {
        const request = {
            pageIndex: pageIndex,
            pageSize: pageSize,
            sortBy: sortState.sortBy,
            orderBy: sortState.orderBy
        };
        console.log(request)
        // Call your API here with the updated request object
        fetchProductCateogories(request);
    }, [sortState]);

    const fetchProductCateogories = async (request) => {
        let res = await GetProductCategoryManage(request);
        setProductCategories(res.items);
        setTotalPages(res.totalPages);
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0">Loại sản phẩm</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="javascript: void(0);">Loại sản phẩm</a></li>
                                <li className="breadcrumb-item active">Danh sách</li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            {/* <h3 className="card-title">Quản lý loại sản phẩm</h3> */}
                            <div className='group-btn'>
                                <button type="button" className="btn btn-success waves-effect waves-light mt-2 mb-3 mr-2">Thêm mới</button>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 d-flex align-items-center">
                                    <div style={{ width: "300px" }} className="mr-3">
                                        <input className="custom-input" placeholder='Tên loại sản phẩm' />
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-success waves-effect waves-light">Lọc</button>
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                <table id="datatable" class="dataTable table table-bordered dt-responsive nowrap" style={{ borderCollapse: 'collapse', borderSpacing: '0', width: '100%', margin: "0 12px" }}>
                                    <thead>
                                        <tr>
                                            <th className='d-flex align-items-center sorting_asc' onClick={() => handleSort('id')}>
                                                #
                                            </th>
                                            <th className='sorting' onClick={() => handleSort('name')}>
                                                Tên loại sản phẩm
                                            </th>
                                            <th>Ảnh đại diện</th>
                                            <th className='sorting' onClick={() => handleSort('displayOrder')}>Độ ưu tiên</th>
                                            <th className='sorting' onClick={() => handleSort('published')}>Trạng thái</th>
                                            <th>Thao tác</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            productCategories && productCategories.map((item, index) => {
                                                return (
                                                    <tr>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td className='d-flex justify-content-center'>
                                                            {
                                                                item.image &&
                                                                <img style={{ height: "36px" }} src={'https://localhost:7039' + item.image} />
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.displayOrder
                                                            }
                                                        </td>
                                                        <td>
                                                            {
                                                                item.published && item.published === true &&
                                                                <span class="badge badge-success">Hoạt động</span>
                                                            }
                                                            {
                                                                item.published && item.published === false &&
                                                                <span class="badge badge-success">Không hoạt động</span>
                                                            }
                                                        </td>
                                                        <td>
                                                            <span ui-sref="info-category({id:item.ID})" class="badge badge-info" style={{ cursor: 'pointer', padding: '8px' }}> <i class="fas fa-info-circle"></i></span>
                                                            <span ui-sref="edit-category({id:item.ID})" class="badge badge-primary mx-2" style={{ cursor: 'pointer', padding: '8px' }}> <i class="far fa-edit"></i></span>
                                                            <span ng-click="DeleteCategory($event,item.ID);" class="badge badge-danger" style={{ cursor: 'pointer', padding: '8px' }}> <i class="fas fa-trash-alt"></i></span>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row justify-content-end">
                                <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                    <ul class="pagination pagination-rounded">
                                        <li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">
                                                <i class="mdi mdi-chevron-left"></i>
                                            </a>
                                        </li>
                                        {[...Array(totalPages)].map((_, i) => (
                                            <li onClick={() => setPageIndex(i + 1)} className={`paginate_button page-item cursor-pointer ${i + 1 === pageIndex ? 'active' : ''}`}>
                                                <a data-dt-idx="1" tabindex="0" class="page-link">
                                                    {i + 1}
                                                </a>
                                            </li>
                                        ))}
                                        <li class="paginate_button page-item next" id="DataTables_Table_0_next">
                                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3" tabindex="0" class="page-link">
                                                <i class="mdi mdi-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCategoy