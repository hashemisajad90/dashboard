import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Input } from '../input/input';
import { Span } from '../span/span';
const Add = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>افزودن</Button>
      <Modal
        title="مشخصات خود را وارد کنید :  "
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        okText="ثبت"
        cancelText="انصراف"
        onCancel={() => setModal2Open(false)}
      >
        <div className='modal-div' >
            <Span className='span-modal' text='نام : ' />
            <Input type='text' placeholder=' . . .' />
        </div>
        <div className='modal-div' >
            <Span className='span-modal' text='نام خانوادگی : ' />
            <Input type='text' placeholder=' . . .' />
        </div>
        <div className='modal-div' >
            <Span className='span-modal' text='سن : ' />
            <Input type='text' placeholder=' . . .' />
        </div>
        <div className='modal-div' >
            <Span className='span-modal' text='رشته تحصیلی : ' />
            <Input type='text' placeholder=' . . .' />
        </div>
      </Modal>
    </>
  );
};
export default Add;