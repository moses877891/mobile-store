import { Routes, Route } from 'react-router-dom';

import Home from './routes/homepage/homepage';
import CheckOut from './routes/checkout/checkout.component';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
