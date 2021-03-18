import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {
  Form,
  Input,
  InputNumber,
  Modal,
  Button,
  Avatar,
  Typography,
} from 'antd';
import { SmileOutlined, UserOutlined, CloseOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

interface UserType {
  name: string;
  age: string;
}

interface ModalFormProps {
  visible: boolean;
  onCancel: () => void;
}

const useResetFormOnCloseModal = ({
  form,
  visible,
}: {
  form: FormInstance;
  visible: boolean;
}) => {
  const prevVisibleRef = useRef<boolean>();
  useEffect(() => {
    prevVisibleRef.current = visible;
  }, [visible]);
  const prevVisible = prevVisibleRef.current;
  useEffect(() => {
    if (!visible && prevVisible) {
      form.resetFields();
    }
  }, [visible]);
};

const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    visible,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal
      title={'Basic Drawer'}
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout={'vertical'} name={'userForm'}>
        <Form.Item
          name={'name'}
          label={'User name'}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={'age'} label={'User Age'} rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Form4Test = () => {
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values: any) => {
    console.log('Finish: ', values);
  };

  // const deleteUser = (index) => {
  //   const [form] = Form.useForm();
  //   console.log(index);
  //   console.log(form);
  // }

  return (
    <>
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue('users') || [];
            basicForm.setFieldsValue({ users: [...users, values] });
            setVisible(false);
          }
        }}
        onFormChange={(name, { values, forms }) => {
          // console.log('表单变化了');
          // console.log(values);
        }}
      >
        <Form {...layout} name={'basicForm'} onFinish={onFinish}>
          <Form.Item
            name={'group'}
            label={'Group Name'}
            rules={[{ require: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={'User List'}
            shouldUpdate={(prevValues, curValues) =>
              prevValues.users !== curValues.users
            }
          >
            {({ getFieldValue, setFieldsValue }) => {
              let users: UserType[] = getFieldValue('users') || [];
              console.log(users);
              const deleteUser = index => {
                console.log(index);
                const newuser = [...users];
                newuser.splice(index, 1);
                console.log(newuser);
                setFieldsValue({ users: newuser });
              };

              return users.length ? (
                <ul>
                  {users.map((user, index) => {
                    return (
                      <li key={index} className={'user'}>
                        <Avatar icon={<UserOutlined />}></Avatar>
                        {user.name} - {user.age}
                        <CloseOutlined onClick={() => deleteUser(index)} />
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <Typography.Text className={'ant-form-text'} type="secondary">
                  ( <SmileOutlined /> No user yet. )
                </Typography.Text>
              );
            }}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button htmlType={'submit'} type={'primary'}>
              Submit
            </Button>
            <Button
              htmlType={'button'}
              style={{ margin: '0 8px' }}
              onClick={showUserModal}
            >
              AddUser
            </Button>
          </Form.Item>
        </Form>
        <ModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </>
  );
};

export default Form4Test;
