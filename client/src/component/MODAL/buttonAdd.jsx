import { Button, Modal, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './buttonAdd.css';

const ButtonAdd = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {

    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} width={600} footer={null} onCancel={handleCancel}>
                <Form
                >
                    <div className='form-a'>
                        <Form.Item label="科目名">
                            <Input />
                        </Form.Item>
                    </div>
                    <div className='form-b'>
                        <Form.Item label="学部">
                            <Input />
                        </Form.Item>
                        <Form.Item label="クレジット">
                            <Input />
                        </Form.Item>
                    </div>
                    <Form.Item >
                        <div className='foot-btn'>
                            <Button style={{ backgroundColor: "#3FAA9D" }}>保存</Button>
                            <Button style={{ backgroundColor: "#FF5656" }} onClick={handleCancel}>キャンセル</Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ButtonAdd;
