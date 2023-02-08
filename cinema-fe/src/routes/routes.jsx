import LayoutUser from "../pages/account/user/Layout";
import User from "../pages/account/user/User";
import Point from "../pages/account/user/Point";
import Card from "../pages/account/user/Card";
import Gift from "../pages/account/user/Gift";
import Voucher from "../pages/account/user/Voucher";
import Coupon from "../pages/account/user/Coupon";
import Info from "../pages/account/user/Info";
import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/default/Layout"
import Home from "../pages/home/Home"
import Movies from "../pages/movies/Movies"
import MovieDescription from "../pages/movieDescription/MovieDescription"
import ShowTimes from "../pages/showTimes/ShowTimes"
import BookTicket from "../pages/bookTicket/BookTicket"
import Pay from "../pages/bookTicket/Pay"
import MoMo from "../pages/bookTicket/MoMo"
import Cinema from '../pages/cinema/Cinema'
import NotFound from "../pages/NotFound/NotFound"
import About from "../pages/about/About"
import Term from "../pages/term/Term"
import TermsUse from "../pages/termsUse/TermsUse"
import Contact from "../pages/contact/Contact"
import UserMenu from '../pages/admin/User'
import FilmMenu from "../pages/admin/Film"
import PaymentPolicy from '../pages/paymentPolicy/PaymentPolicy'
import FAQ from '../pages/faq/FAQ'
import AccountLayout from '../components/layout/accountLayout/AccountLayout'
import AdminLayout from '../components/layout/adminLayout/adminLayout'
import AdminPrefetch from "../pages/admin/adminPrefetch"
import PersistLogin from "../pages/account/PersistLogin"
import UserPrefetch from "../components/userPrefetch/UserPrefetch"
import CinemaMenu from "../pages/admin/Cinema"
import PremiereSlotMenu from "../pages/admin/PremiereSlot"
import RequireAuth from "../pages/account/RequireAuth"
import { ROLES } from "../config/roles"
import TicketMenu from "../pages/admin/Ticket"
import Login from '../pages/account/Login'
import SignUp from '../pages/account/SignUp'
import ListLayout from "../components/layout/ListLayout/ListLayout"
import History from "../pages/account/user/History";
const AppRoute = () => {
    return (
        <Routes>
            <Route path='/admin'>
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route element={<PersistLogin />} >
                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        <Route element={<AdminPrefetch />}>
                            <Route element={<AdminLayout />}>
                                <Route path='user' element={<UserMenu />} />
                                <Route path='film' element={<FilmMenu />} />
                                <Route path='cinema' element={<CinemaMenu />} />
                                <Route path='premiere-slot' element={<PremiereSlotMenu />} />
                                <Route path='ticket' element={<TicketMenu />} />
                            </Route>
                        </Route>
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
                    <Route element={<PersistLogin publicURL={true} />}>

                        <Route path='movies' element={<Movies />} />
                        <Route path='show-times' element={<ShowTimes />} />
                        <Route path='book-ticket' element={<BookTicket />} />
                        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
                            <Route path="user" element={<LayoutUser />}>
                                <Route index element={<User />} />
                                <Route path="point" element={<Point />} />
                                <Route path="card" element={<Card />} />
                                <Route path="gift" element={<Gift />} />
                                <Route path="voucher" element={<Voucher />} />
                                <Route path="coupon" element={<Coupon />} />
                                <Route path="edit" element={<Info />} />
                                <Route path="history" element={<History />} />
                            </Route>
                            <Route path='pay' element={<Pay />} />
                            <Route path='mo-mo' element={<MoMo />} ></Route>
                        </Route>
                        <Route path='cinema' element={<Cinema />} ></Route>


                        <Route path="movie-description">
                            <Route path=":slug" element={<MovieDescription />} />
                        </Route>
                        <Route path="default" element={<ListLayout />}>
                            <Route index element={<About />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="terms-conditions" element={<Term />} />
                            <Route path="terms-use" element={<TermsUse />} />
                            <Route path="payment-policy" element={<PaymentPolicy />} />
                            <Route path="faq" element={<FAQ />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
export default AppRoute;
