import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import Home from '../pages/Home/index';
import Cities from '../pages/Cities/index';
//import City from '../pages/City/index';

const router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
        { path: '/', element: <Home /> },
        { path: '/cities', element: <Cities /> },
        //{ path: '/city/:id', element: <City /> }
    ]
}]);

export default router;
