import { useState } from 'react';

import { Modal } from './Modal';
import './App.css';

function App() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <main>
        <button className='open-btn' onClick={() => setModalActive(true)}>Open modal window</button>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
      </main>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
        <p>aaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaaaaaaaarrrrrryyyyyaaaaaa</p>
      </Modal>
    </div>
  );
}

export default App;
