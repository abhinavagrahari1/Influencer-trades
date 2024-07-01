import Channel from './pages/Channel';
import Channels from './pages/Channels';
import Landing from './pages/Landing';

import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/channels' element={<Channels/>}/>
        <Route path='/channel' element={<Channel/>}/>
      </Routes>
    </div>
  );
}

export default App;
