import React, { useState } from "react";
import { Table } from 'antd';
import 'antd/dist/antd.min.css';
import "./buttonClassList.css";

const ButtonClassList = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: '教師',
            dataIndex: 'teacher',
            key: 'teacher',
        },
        {
            title: '学生数',
            dataIndex: 'number',
            key: 'number',
        },
    ];
    const data = [
        {
            key: '1',
            ID: 123,
            teacher: 'Tagashira Nobuyuki',
            number: 40,
        },
        {
            key: '2',
            ID: 123,
            teacher: 'Tagashira Nobuyuki',
            number: 40,
        },
        {
            key: '3',
            ID: 123,
            teacher: 'Tagashira Nobuyuki',
            number: 40,
        },
    ];

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Table
                            pagination={false}
                            columns={columns}
                            dataSource={data}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default ButtonClassList;