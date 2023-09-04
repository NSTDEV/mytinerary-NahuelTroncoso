import Footer from '../Footer/index.jsx'
import Header from '../NavBar/index.jsx'
import './style.css'

import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header />

            <main className='container'>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};
