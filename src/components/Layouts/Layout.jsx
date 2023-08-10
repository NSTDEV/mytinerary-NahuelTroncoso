import Footer from '../Footer/index.jsx'
import Header from '../NavBar/index.jsx'

import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
