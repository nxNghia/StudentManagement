import { Button, Modal, Form, Input, DatePicker } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './buttonAdd2.css';

const ButtonAdd2 = () => {
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
                Open Modal 2
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} width={600} footer={null} onCancel={handleCancel}>
                <Form
                >
                    <div className='form-a'>
                        <Form.Item label="クラス名">
                            <Input />
                        </Form.Item>
                    </div>
                    <div className='form-b'>
                        <Form.Item label="科目">
                            <Input />
                        </Form.Item>
                        <Form.Item label="担当者">
                            <Input />
                        </Form.Item>
                    </div>
                    <div className='form-c'>
                        <Form.Item label="終了日">
                            <DatePicker />
                        </Form.Item>
                    </div>

                    <Form.Item >
                        <div className='foot-btn'>
                            <Button style={{ backgroundColor: "#3FAA9D" }} >保存</Button>
                            <Button style={{ backgroundColor: "#FF5656" }} onClick={handleCancel}>キャンセル</Button>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ButtonAdd2;
