import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Missions from './components/pages/Missions';
import Navbar from './components/Navbar';
import Rockets from './components/pages/Rockets';
import MyProfile from './components/pages/MyProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Rockets />} />
      <Route path="missions" index element={<Missions />} />
      <Route path="myProfile" index element={<MyProfile />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
