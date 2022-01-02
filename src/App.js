import FetchCard from './FetchCard';
import RezizeApp from './RezizeApp';
import React, {useState} from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div >
      {/* <FetchCard></FetchCard> */}
      <button onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show && <RezizeApp/>}
    </div>
  );
}

export default App;
