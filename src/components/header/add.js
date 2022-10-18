import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import React, { useContext, useState } from 'react';
import { Input } from '../input/input';
import { Span } from '../span/span';
import { useDispatch, useSelector } from 'react-redux';
import { initialState } from '../../redux/users/user.state';
import { add } from '../../redux/users/user.action';
import { InitialContext } from '../../contexts/initialContext';
const Add = () => {
  const clients = useSelector(state => state.client.clients)
  const [modal2Open, setModal2Open] = useState(false);

  const { inputValues , setInputValues } = useContext(InitialContext);

  const dispatch = useDispatch();

  function okBtnHandler() {
    setModal2Open(false)
    dispatch(add(inputValues))
    setInputValues({ ...inputValues, id: clients.length })
  }
  console.log(clients);
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>افزودن</Button>
      <Modal
        title="مشخصات خود را وارد کنید :  "
        centered
        visible={modal2Open}
        onOk={() => okBtnHandler()}
        okText="ثبت"
        cancelText="انصراف"
        onCancel={() => setModal2Open(false)}
      >
        <div className='modal-div' >
          <Span className='span-modal' text='نام : ' />
          <Input className='input-modal' type='text' placeholder=' . . .' onChange={(e) => setInputValues({ ...inputValues, name: e.target.value })} />
        </div>
        <div className='modal-div' >
          <Span className='span-modal' text='نام خانوادگی : ' />
          <Input className='input-modal' type='text' placeholder=' . . . ' onChange={(e) => setInputValues({ ...inputValues, family: e.target.value })} />
        </div>
        <div className='modal-div' >
          <Span className='span-modal' text='تاریخ تولد : ' />
          <Input className='input-modal' type='date' placeholder=' . . . ' onChange={(e) => setInputValues({ ...inputValues, date_of_brith: e.target.value })} />
        </div>
        <div className='modal-div' >
          <Span className='span-modal' text='سن : ' />
          <Input className='input-modal' type='number' placeholder=' . . . ' onChange={(e) => setInputValues({ ...inputValues, age: e.target.value })} />
        </div>
        <div className='modal-div' >
          <Span className='span-modal' text='قد : ' />
          <Input className='input-modal' type='number' placeholder=' . . . ' onChange={(e) => setInputValues({ ...inputValues, size: e.target.value })} />
        </div>
      </Modal>
    </>
  );
};
export default Add;