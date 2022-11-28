import { Routes, Route } from "react-router-dom"
import Layout from "../components/layout/default/Layout"
import Home from "../pages/home/Home"
import NotFound from "../pages/NotFound/NotFound"
import ErrorBoundary from "../components/errorHandler/ErrorBoundary"
import { lazy, Suspense } from "react"
import Spinner from "react-bootstrap/Spinner"
import About from "../pages/about/About"
import Term from "../pages/term/Term"
import ListLayout from "../components/layout/ListLayout/ListLayout"
const Login = lazy(() => new Promise(resolve => resolve(import('../pages/account/Login'))))
const SignUp = lazy(() => new Promise(resolve => resolve(import('../pages/account/SignUp'))))
const AccountLayout = lazy(() => new Promise(resolve => resolve(import('../components/layout/accountLayout/AccountLayout'))))
const AppRoute = () => {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Spinner />} revealOrder="forward">
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='account' element={<AccountLayout />}>
                            <Route index element={<Login />} />
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<SignUp />} />
                        </Route>
                        <Route path='default' element={<ListLayout />}>
                            <Route index element={<About />} />
                            <Route path='about' element={<About />} />
                            <Route path='terms-conditions' element={<Term />} />
                        </Route>
                        <Route path='*' element={<NotFound />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>

    )
}
export default AppRoute