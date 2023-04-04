import React, { useEffect, useState, useRef } from 'react'
import { GetProductCategoryManage, DeleteProductCategoryMulti, DeleteProductCategoryManage } from '../../apis/productCategoryApiService';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "../../assets/libs/datatables.net/css/jquery.dataTables.css"
import "../../assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css"
import "../../assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css"
import "../../assets/libs/datatables.net-select-bs4/css/select.bootstrap4.min.css"
import "../../assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css"
import { useNavigate } from 'react-router-dom';

const ProductCategoy = () => {
    const [productCategories, setProductCategories] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [sortState, setSortState] = useState({ sortBy: null, orderBy: null });
    const [selectedRecords, setSelectedRecords] = useState([]);
    const selectAllCheckboxRef = useRef();
    const navigate = useNavigate();

    // Handle Page
    useEffect(() => {
        const request = {
            pageIndex,
            pageSize
        }
        fetchProductCateogories(request);
    }, []);

    const fetchProductCateogories = async (request) => {
        let res = await GetProductCategoryManage(request);
        // setProductCategories(res.items);
        // setTotalPages(res.totalPages);

        // Laravel
        setProductCategories(res);
        // setTotalPages(res.totalPages);
    }

    useEffect(() => {
        const request = {
            pageIndex: pageIndex,
            pageSize: pageSize,
        }
        fetchProductCateogories(request);
    }, [pageIndex]);

    // Handle Sort
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
            pageIndex: pageIndex,
            pageSize: pageSize,
            sortBy: sortState.sortBy,
            orderBy: sortState.orderBy
        };
        fetchProductCateogories(request);
    }, [sortState]);

    // Handel Multi
    const handleSelectAllCheckbox = (event) => {
        const isChecked = event.target.checked;
        let selectedIds = [];
        if (isChecked) {
            selectedIds = [...selectedRecords, ...productCategories.map(record => record.id)];
            selectedIds = [...new Set(selectedIds)];
            // selectAllCheckboxRef.current.indeterminate = false;
        } else {
            const currentPageIds = productCategories.map(record => record.id);
            selectedIds = selectedRecords.filter(id => !currentPageIds.includes(id));
        }
        setSelectedRecords(selectedIds);
    };

    const handleSelectRecord = (event, record) => {
        const recordId = record.id;
        const isSelected = event.target.checked;
        const selectedIds = [...selectedRecords];

        if (isSelected) {
            selectedIds.push(recordId);
        } else {
            const index = selectedIds.indexOf(recordId);
            selectedIds.splice(index, 1);
        }
        setSelectedRecords(selectedIds);

        // const currentPageIds = productCategories.map(record => record.id);
        // selectAllCheckboxRef.current.indeterminate = selectedIds.some(id => currentPageIds.includes(id));
    };

    const submitDeleteMulti = async () => {
        const MySwal = withReactContent(Swal);

        const result = await MySwal.fire({
            title: `Bạn có chắc muốn xóa ${selectedRecords.length} bản ghi?`,
            text: "Bạn sẽ không thể khôi phục dữ liệu sau khi xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Bỏ qua'
        });

        if (result.isConfirmed) {
            try {
                // Gọi hàm deleteProductCateogoriesMulti và chờ kết quả trả về
                DeleteProductCategoryMulti(selectedRecords).then(function (response) {
                    // console.log(response)
                    // toast.success("Thêm thông tin thành công");
                    // handleClose();
                    // props.fetchUsersWithPanigate(1);
                    // props.setCurrentPage(1);
                    const request = {
                        pageIndex,
                        pageSize
                    }
                    fetchProductCateogories(request);
                }).catch(function (error) {

                });

                Swal.fire(
                    'Đã xóa!',
                    'Dữ liệu đã xóa khỏi hệ thống!.',
                    'success'
                );
            } catch (error) {
                // Xử lý lỗi ở đây
                console.error(error);
            }
        }
    };

    const handleDelete = async (item) => {
        const MySwal = withReactContent(Swal);

        const result = await MySwal.fire({
            title: `Bạn có chắc muốn xóa ${selectedRecords.length} bản ghi?`,
            text: "Bạn sẽ không thể khôi phục dữ liệu sau khi xóa!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
            cancelButtonText: 'Bỏ qua'
        });

        if (result.isConfirmed) {
            try {
                // Gọi hàm deleteProductCateogoriesMulti và chờ kết quả trả về
                DeleteProductCategoryManage(item?.id).then(function (response) {
                    // console.log(response)
                    // toast.success("Thêm thông tin thành công");
                    // handleClose();
                    // props.fetchUsersWithPanigate(1);
                    // props.setCurrentPage(1);
                    const request = {
                        pageIndex,
                        pageSize
                    }
                    fetchProductCateogories(request);
                    console.log("haha")

                }).catch(function (error) {

                });

                Swal.fire(
                    'Đã xóa!',
                    'Dữ liệu đã xóa khỏi hệ thống!.',
                    'success'
                );
            } catch (error) {
                // Xử lý lỗi ở đây
                console.error(error);
            }
        }

        // const res = DeleteProductCategoryManage(item?.id);
        // console.log(item?.id)
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
                            <div className='group-btn'>
                                <button onClick={() => navigate("/product-category/create")} type="button" className="btn btn-success waves-effect waves-light mt-2 mb-3 mr-2">Thêm mới</button>
                                {
                                    selectedRecords && selectedRecords.length > 0 &&
                                    <button onClick={() => submitDeleteMulti()} type="button" className="btn btn-danger waves-effect waves-light mt-2 mb-3 mr-2">Xóa {selectedRecords.length} lựa chọn</button>
                                }
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
                                            <th style={{ maxWidth: "4px", borderRight: "none" }}>
                                                <div class="custom-control custom-checkbox" style={{ width: "6px" }}>
                                                    <input
                                                        type="checkbox"
                                                        class="custom-control-input"
                                                        id="ordercheck"
                                                        onChange={(e) => handleSelectAllCheckbox(e)}
                                                        checked={productCategories.map((item) => item.id).every((item) => selectedRecords.includes(item))}
                                                        ref={selectAllCheckboxRef} />
                                                    <label class="custom-control-label" for="ordercheck">&nbsp;</label>
                                                </div>
                                            </th>
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
                                                        <td style={{ maxWidth: "4px", borderRight: "none" }}>
                                                            <div class="custom-control custom-checkbox" style={{ width: "6px" }}>
                                                                <input type="checkbox" class="custom-control-input" id={`ordercheck-${item.id}`} checked={selectedRecords.includes(item.id)} onChange={(event) => handleSelectRecord(event, item)} />
                                                                <label class="custom-control-label" for={`ordercheck-${item.id}`}>&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td style={{ paddingLeft: "0px" }}>{item.id}</td>
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
                                                            <span onClick={() => handleDelete(item)} class="badge badge-danger" style={{ cursor: 'pointer', padding: '8px' }}> <i class="fas fa-trash-alt"></i></span>
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