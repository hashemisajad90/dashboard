import 'antd/dist/antd.css';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Input } from '../input/input';
import { Span } from '../span/span';
const Add = () => {
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal2Open(true)}>Add</Button>
      <Modal
        title="Enter your specification : "
        centered
        visible={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className='modal-div' >
            <Span className='span-modal' text='Name : ' />
            <Input type='text' placeholder='...' />
        </div>
        <div className='modal-div' >
            <Span className='span-modal' text='Family : ' />
            <Input type='text' placeholder='...' />
        </div>
        <div className='modal-div' >
            <Span className='span-modal' text='Age : ' />
            <Input type='text' placeholder='...' />
        </div>
        <div className='modal-div' >
            <Span className='span-modal' text='Position : ' />
            <Input type='text' placeholder='...' />
        </div>
      </Modal>
    </>
  );
};
export default Add;