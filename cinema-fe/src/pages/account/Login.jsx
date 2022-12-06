import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useRef, memo } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../../hook/useWindowDimensions';
import "./layout.css"
const Login = memo(() => {
    const [isLoading, setIsLoading] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [isValidUsername, setIsValidUsername] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const usernameInput = useRef()
    const passwordInput = useRef()
    const { width, height } = useWindowDimensions();
    const isPC = width > 995
    const handleLogin = (e) => {
        const controller = new AbortController()
        e.preventDefault()
        if (usernameInput.current.value !== '' && passwordInput.current.value !== '') {
            setIsValid(true)
            setIsLoading(true)
            setTimeout(() => setIsLoading(false), 2000)
            toast("Wow so easy!")
        }
        else {
            setIsValid(false)
        }
        return () => {
            controller.abort()
        }
    }
    return (
        <>
            {!isPC ?  
                <Form className='p-4'>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email hoặc số điện thoại</Form.Label>
                        <Form.Control
                            ref={usernameInput}
                            type="text"
                            placeholder="Email hoặc số điện thoại"
                            onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                        />
                        {!isValidUsername && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            placeholder="Mật khẩu"
                            onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Lưu đăng nhập" />
                    </Form.Group>
                    {!isValid && <p className="text-danger ms-2">Mật khẩu hoặc tài khoản không đúng</p>}
                    <Button className="w-100" variant="primary" type="submit" onClick={e => handleLogin(e)}>
                        {isLoading ? <Spinner /> : 'Đăng nhập'}
                    </Button>
                    <Link to=''>Quên mật khẩu</Link>
                </Form>
                :''}
            {isPC ?
                <Form className='p-1'>
                <ToastContainer />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email hoặc số điện thoại</Form.Label>
                    <Form.Control
                        ref={usernameInput}
                        type="text"
                        placeholder="Email hoặc số điện thoại"
                        onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                    />
                    {!isValidUsername && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                        ref={passwordInput}
                        type="password"
                        placeholder="Mật khẩu"
                        onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                    />
                    {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lưu đăng nhập" />
                </Form.Group>
                {!isValid && <p className="text-danger ms-2">Mật khẩu hoặc tài khoản không đúng</p>}
                <Button className="w-100" variant="primary" type="submit" onClick={e => handleLogin(e)}>
                    {isLoading ? <Spinner /> : 'Đăng nhập'}
                </Button>
                <Link to=''>Quên mật khẩu</Link>
            </Form>
            :''}
        </>
    )
})

export default Login