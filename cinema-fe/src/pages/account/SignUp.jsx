import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useRef, memo } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../../hook/useWindowDimensions';
import "react-datepicker/dist/react-datepicker.css";
import "./layout.css"
const SignUp = memo(() => {
    const [isLoading, setIsLoading] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [isValidName, setIsValidName] = useState(true)
    const [isValidUsername, setIsValidUsername] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidRePassword, setIsValidRePassword] = useState(true)
    let canRegister = [isValidName, isValidUsername, isValidPassword].every(value=> value)
    const usernameInput = useRef()
    const passwordInput = useRef()
    const passwordReInput = useRef()
    const userEmailInput = useRef()
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
            <Form className='p-2'>
                <ToastContainer />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Tên<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={usernameInput}
                        type="text"
                        placeholder="Tên người dùng"
                        onBlur={e => { setIsValidName(true); if (e.target.value === '') setIsValidName(false) }}
                    />
                    {!isValidName && <Form.Text className="text-danger ms-2">Vui lòng điền tên người dùng</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email đăng nhập<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={userEmailInput}
                        type="text"
                        placeholder="Email hoặc số điện thoại"
                        onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                    />
                    {!isValidUsername && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={passwordInput}
                        type="password"
                        placeholder="Mật khẩu"
                        onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                    />
                    {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Nhập lại mật khẩu<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={passwordReInput}
                        type="password"
                        placeholder="nhập lại mật khẩu"
                        onBlur={e => { setIsValidRePassword(true); if (e.target.value === '') setIsValidRePassword(false) }}
                    />
                    {!isValidRePassword && <Form.Text className="text-danger ms-2">Vui lòng điền đúng Mật khẩu</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Giới tính<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
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
        :''}
        {isPC ?   
            <Form className='p-1'>
                <ToastContainer />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Tên<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={usernameInput}
                        type="text"
                        placeholder="Tên người dùng"
                        onBlur={e => { setIsValidName(true); if (e.target.value === '') setIsValidName(false) }}
                    />
                    {!isValidName && <Form.Text className="text-danger ms-2">Vui lòng điền tên người dùng</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email đăng nhập<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={userEmailInput}
                        type="text"
                        placeholder="Email hoặc số điện thoại"
                        onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                    />
                    {!isValidUsername && <Form.Text className="text-danger ms-2">Vui lòng điền email hoặc số điện thoại</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mật khẩu<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={passwordInput}
                        type="password"
                        placeholder="Mật khẩu"
                        onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                    />
                    {!isValidPassword && <Form.Text className="text-danger ms-2">Vui lòng điền Mật khẩu</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRePassword">
                    <Form.Label>Nhập lại mật khẩu<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
                    <Form.Control
                        ref={passwordReInput}
                        type="password"
                        placeholder="nhập lại mật khẩu"
                        onBlur={e => { setIsValidRePassword(true); if (e.target.value === '') setIsValidRePassword(false) }}
                    />
                    {!isValidRePassword && <Form.Text className="text-danger ms-2">Vui lòng điền đúng Mật khẩu</Form.Text>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGender">
                    <Form.Label>Giới tính<span className='text-danger' style={{position: "relative", top:"-5px"}}>&#8903;</span></Form.Label>
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
                    <Form.Check type="checkbox" label="Tôi đồng ý với Điều Khoản Sử Dụng của CGV"/>
                </Form.Group>
                <Button disabled={!canRegister} className="w-100 btn-danger" variant="primary" type="submit" onClick={e => handleLogin(e)}>
                    {isLoading ? <Spinner /> : 'Đăng ký'}
                </Button>
            </Form>
        :'PC Response'}
        </>
    )
})

export default SignUp