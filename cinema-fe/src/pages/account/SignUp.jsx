import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useRef, memo } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../../hook/useWindowDimensions';
import "react-datepicker/dist/react-datepicker.css";
import "./layout.css"
import { useEffect } from 'react'
import { useSignUpMutation } from './authApiSlice'
const SignUp = memo(() => {
    const [isValid, setIsValid] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [passwordRe, setPasswordRe] = useState('')
    const [isValidName, setIsValidName] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidRePassword, setIsValidRePassword] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const canRegister = [username, password, email, passwordRe].every(value => value !== '')
    const usernameInput = useRef()
    const passwordInput = useRef()
    const passwordReInput = useRef()
    const userEmailInput = useRef()

    const navigate = useNavigate()

    const { width, height } = useWindowDimensions();
    const isPC = width > 995

    useEffect(() => {
        setIsValidName(username !== "")
        setIsValidPassword(password !== "")
        setIsValidEmail(email !== "")
        setIsValidRePassword(passwordRe === password)
        setErrMsg()
    }, [username, password, email, passwordRe])
    useEffect(() => {
        usernameInput.current.focus()
    }, [])
    const [signUp, { isLoading }] = useSignUpMutation()
    const [errMsg, setErrMsg] = useState()
    const handleLogin = async (e) => {
        const controller = new AbortController()
        e.preventDefault()
        if (canRegister) {
            try {
                await signUp({ username: username, password: password, roles: ["Employee"] })
                navigate('/account/login')
            }
            catch (err) {
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
            {errMsg && <p className='text-danger'>{errMsg}</p>}
            {!isPC ?
                <Form className='p-2'>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Tên<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={usernameInput}
                            type="text"
                            placeholder="Tên người dùng"
                            onChange={e => setUsername(e.target.value)}
                        />
                        {!isValidName && <Form.Text className="text-danger ms-2">Vui lòng điền tên người dùng</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email đăng nhập<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={userEmailInput}
                            type="text"
                            placeholder="Email hoặc số điện thoại"
                            onChange={e => setEmail(e.target.value)}
                        />
                        {!isValidEmail && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật khẩu<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            placeholder="Mật khẩu"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRePassword">
                        <Form.Label>Nhập lại mật khẩu<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordReInput}
                            type="password"
                            placeholder="nhập lại mật khẩu"
                            onChange={e => setPasswordRe(e.target.value)}
                        />
                        {!isValidRePassword && <Form.Text className="text-danger ms-2">Vui lòng điền đúng Mật khẩu</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Giới tính<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Nam"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Nữ"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Tôi đồng ý với Điều Khoản Sử Dụng của CGV" />
                    </Form.Group>
                    <Button disabled={!canRegister} className="w-100 btn-danger" variant="primary" type="submit" onClick={e => handleLogin(e)}>
                        {isLoading ? <Spinner /> : 'Đăng ký'}
                    </Button>
                </Form>
                : null}
            {isPC ?
                <Form className='w-pc'>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Tên<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={usernameInput}
                            type="text"
                            placeholder="Tên người dùng"
                            onChange={e => setUsername(e.target.value)}
                        />
                        {!isValidName && <Form.Text className="text-danger ms-2">Vui lòng điền tên người dùng</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email đăng nhập<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={userEmailInput}
                            type="text"
                            placeholder="Email hoặc số điện thoại"
                            onChange={e => setEmail(e.target.value)}
                        />
                        {!isValidEmail && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mật khẩu<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            placeholder="Mật khẩu"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRePassword">
                        <Form.Label>Nhập lại mật khẩu<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordReInput}
                            type="password"
                            placeholder="nhập lại mật khẩu"
                            onChange={e => setPasswordRe(e.target.value)}
                        />
                        {!isValidRePassword && <Form.Text className="text-danger ms-2">Vui lòng điền đúng Mật khẩu</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Giới tính<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="Nam"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Nữ"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Tôi đồng ý với Điều Khoản Sử Dụng của CGV" />
                    </Form.Group>
                    <Button disabled={!canRegister} className="w-100 btn-danger" variant="primary" type="submit" onClick={e => handleLogin(e)}>
                        {isLoading ? <Spinner /> : 'Đăng ký'}
                    </Button>
                </Form>
                : null}
        </>
    )
})

export default SignUp