import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/default/Layout"
import Home from "../pages/home/Home"
import Movies from "../pages/movies/Movies"
import NotFound from "../pages/NotFound/NotFound"
import Spinner from "react-bootstrap/Spinner"
import About from "../pages/about/About"
import Term from "../pages/term/Term"
import TermsUse from "../pages/termsUse/TermsUse"
import Contact from "../pages/contact/Contact"
import UserMenu from '../pages/admin/User'
import FilmMenu from "../pages/admin/Film"
import PaymentPolicy from '../pages/paymentPolicy/PaymentPolicy'
import FAQ from '../pages/faq/FAQ'

import ListLayout from "../components/layout/ListLayout/ListLayout"
import Login from '../pages/account/Login'
import SignUp from '../pages/account/SignUp'
// import Admin from '../pages/admin/Admin'
import AccountLayout from '../components/layout/accountLayout/AccountLayout'
import AdminLayout from '../components/layout/adminLayout/adminLayout'
import AdminPrefetch from "../pages/admin/adminPrefetch"
import PersistLogin from "../pages/account/PersistLogin"
import useAuth from "../hooks/useAuth"
import AdminHeader from "../components/layout/adminLayout/adminLayoutHeader"
// import AdminLogin from "../pages/admin/AdminLogin"
const AppRoute = () => {
    const { status } = useAuth()
    return (
        <Routes>
            <Route path='/admin'>
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route element={<PersistLogin />} >
                    <Route element={<AdminPrefetch />}>
                        <Route element={<AdminLayout />}>
                            <Route path='user' element={<UserMenu />} />
                            <Route path='film' element={<FilmMenu />} />
                        </Route>
                    </Route>
                </Route>
            </Route>
            <Route path='/' element={<Layout />}>

                <Route index element={<Home />} />
                <Route path='account' element={<AccountLayout />}>
                    <Route index element={<Login />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<SignUp />} />
                </Route>
                <Route element={<PersistLogin />}>
                    <Route path='movies' element={<Movies />} >

                    </Route>
                    <Route path='default' element={<ListLayout />}>
                        <Route index element={<About />} />
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='terms-conditions' element={<Term />} />
                        <Route path='terms-use' element={<TermsUse />} />
                        <Route path='payment-policy' element={<PaymentPolicy />} />
                        <Route path='faq' element={<FAQ />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>


    )
}
export default AppRoute