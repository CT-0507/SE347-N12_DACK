import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/default/Layout"
import Home from "../pages/home/Home"
import Movies from "../pages/movies/Movies"
import MovieDescription from "../pages/movieDescription/MovieDescription"
import NotFound from "../pages/NotFound/NotFound"
import About from "../pages/about/About"
import Term from "../pages/term/Term"
import TermsUse from "../pages/termsUse/TermsUse"
import Contact from "../pages/contact/Contact"
import UserMenu from '../pages/admin/User'
import FilmMenu from "../pages/admin/Film"
import CinemaMenu from "../pages/admin/Cinema"
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
import UserPrefetch from "../components/userPrefetch/UserPrefetch"

import UserLayout from '../components/layout/userLayout/userLayout'
import Admin from '../pages/admin/Admin'
const AppRoute = () => {
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
                            <Route path='cinema' element={<CinemaMenu />} />
                        </Route>
                    </Route>
                    <Route path='userLayout' element={<UserLayout />}>
                            <Route path='user' element={<UserMenu />} />
                            <Route path='film' element={<FilmMenu />} />
                            <Route path='cinema' element={<CinemaMenu />} />
                            
                    </Route>
                </Route>
            </Route>

            <Route path='/' element={<Layout />}>
                <Route element={<UserPrefetch />}>
                    <Route index element={<Home />} />
                    <Route path='account' element={<AccountLayout />}>
                        <Route index element={<Login />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<SignUp />} />
                    </Route>
                    <Route element={<PersistLogin />}>
                        <Route path='movies' element={<Movies />} />

                        <Route path='movie-description' element={<MovieDescription />} />
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
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>


    )
}
export default AppRoute