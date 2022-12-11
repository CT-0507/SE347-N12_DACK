import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useRef, memo } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import "./layout.css"
import { useEffect } from 'react'
import { useLoginMutation } from './authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLocation } from 'react-router-dom'
import usePersist from '../../hooks/usePersist'

const Login = () => {
    const [isValid, setIsValid] = useState(true)
    const [isValidUsername, setIsValidUsername] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const usernameInput = useRef()
    const passwordInput = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()
    const { width, height } = useWindowDimensions();
    const dispatch = useDispatch()
    const isPC = width > 995
    const { pathname } = useLocation()
    useEffect(() => {
        setErrMsg('')
    }, [username, password])
    useEffect(() => {
        usernameInput.current.focus()
    }, [])
    const [login, { isLoading }] = useLoginMutation()
    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)
    const canLogin = [username, password].every(value => value !== "")
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        if (canLogin) {
            try {
                const { accessToken } = await login({ username, password }).unwrap()
                dispatch(setCredentials({ accessToken }))
                setUsername('')
                setPassword('')
                if (pathname.includes('admin')) navigate('user')
                else navigate('/')
                toast("Wow so easy!")
            } catch (err) {
                console.log(err)
                if (!err.status) {
                    setErrMsg('No Server Response');
                } else if (err.status === 400) {
                    setErrMsg('Missing Username or Password');
                } else if (err.status === 401) {
                    setErrMsg('Unauthorized');
                } else {
                    setErrMsg(err.data?.message);
                }
                usernameInput.current.focus();
            }
        }
    }
    return (
        <>
            {!isPC ?
                <Form className='p-4' noValidate onSubmit={handleLogin}>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email hoặc số điện thoại</Form.Label>
                        <Form.Control
                            ref={usernameInput}
                            type="text"
                            placeholder="Email hoặc số điện thoại"
                            autoComplete='false'
                            onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                            onChange={handleUserInput}
                        />
                        {!isValidUsername && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            autoComplete='false'
                            placeholder="Mật khẩu"
                            onChange={handlePwdInput}
                            onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            id="persist"
                            onChange={handleToggle}
                            label="Save login"
                            checked={persist}
                        />
                    </Form.Group>
                    {!isValid && <p className="text-danger ms-2">Mật khẩu hoặc tài khoản không đúng</p>}
                    <Form.Text hidden={Boolean(!errMsg)}>{errMsg}</Form.Text>
                    <Button className="w-100" variant="primary" type="submit" disabled={!canLogin}>
                        {isLoading ? <Spinner /> : 'Đăng nhập'}
                    </Button>

                    <Link to=''>Quên mật khẩu</Link>
                </Form>
                : null}
            {isPC ?
                <Form className='w-pc' onSubmit={handleLogin}>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email hoặc số điện thoại</Form.Label>
                        <Form.Control
                            ref={usernameInput}
                            type="text"
                            autoComplete='false'
                            placeholder="Email hoặc số điện thoại"
                            onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                            onChange={handleUserInput}
                        />
                        {!isValidUsername && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            placeholder="Mật khẩu"
                            autoComplete='false'
                            onChange={handlePwdInput}
                            onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            id="persist"
                            onChange={handleToggle}
                            label="Save login"
                            checked={persist}
                        />
                    </Form.Group>
                    {!isValid && <p className="text-danger ms-2">Mật khẩu hoặc tài khoản không đúng</p>}
                    <Form.Text hidden={Boolean(!errMsg)}>{errMsg}</Form.Text>
                    <Button className="w-100" variant="primary" type="submit" disabled={!canLogin}>
                        {isLoading ? <Spinner /> : 'Đăng nhập'}
                    </Button>
                    <Link to=''>Quên mật khẩu</Link>
                </Form>
                : null}
        </>
    )
}

export default Login