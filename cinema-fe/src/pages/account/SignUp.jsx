import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useRef, memo } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import "react-datepicker/dist/react-datepicker.css";
import "./layout.css"
import { useEffect } from 'react'
import { useSignUpMutation } from './authApiSlice'
const SignUp = memo(() => {
    const [isValid, setIsValid] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [passwordRe, setPasswordRe] = useState('')
    const [isValidName, setIsValidName] = useState(true)
    const [isValidUsername, setIsValidUsername] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidRePassword, setIsValidRePassword] = useState(true)
    const [isValidEmail, setIsValidEmail] = useState(true)
    const canRegister = [username, password, name, email, passwordRe].every(value => value !== '')
    const firstInput = useRef()
    const passwordInput = useRef()
    const passwordReInput = useRef()
    const userEmailInput = useRef()

    const navigate = useNavigate()

    const { width, height } = useWindowDimensions();
    const isPC = width > 995

    useEffect(() => {
        setIsValidName(username !== "")
        setIsValidUsername(username !== "")
        setIsValidPassword(password !== "")
        setIsValidEmail(email !== "")
        setIsValidRePassword(passwordRe === password)
        setErrMsg()
    }, [username, password, email, passwordRe])
    useEffect(() => {
        firstInput.current.focus()
    }, [])
    const [signUp, { isLoading }] = useSignUpMutation()
    const [errMsg, setErrMsg] = useState()
    const handleLogin = async (e) => {
        const controller = new AbortController()
        e.preventDefault()
        if (canRegister) {
            try {
                await signUp({ username: username, email: email, password: password, name: name, roles: ["User"] })
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
                firstInput.current.focus();
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
            {/* {errMsg && <p className='text-danger'>{errMsg}</p>} */}
            {!isPC ?
                <Form className='p-2'>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>H??? v?? t??n<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={firstInput}
                            type="text"
                            placeholder="H??? v?? t??n"
                            onChange={e => setName(e.target.value)}
                        />
                        {!isValidName && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n t??n ng?????i d??ng</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>T??n ng?????i d??ng<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="T??n ng?????i d??ng"
                            onChange={e => setUsername(e.target.value)}
                        />
                        {!isValidUsername && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n t??n ng?????i d??ng</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email ????ng nh???p<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={userEmailInput}
                            type="text"
                            placeholder="Email ho???c s??? ??i???n tho???i"
                            onChange={e => setEmail(e.target.value)}
                        />
                        {!isValidEmail && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n email ho???c s??? ??i???n tho???i</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>M???t kh???u<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            placeholder="M???t kh???u"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n M???t kh???u</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRePassword">
                        <Form.Label>Nh???p l???i m???t kh???u<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordReInput}
                            type="password"
                            placeholder="nh???p l???i m???t kh???u"
                            onChange={e => setPasswordRe(e.target.value)}
                        />
                        {!isValidRePassword && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n ????ng M???t kh???u</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Gi???i t??nh<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
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
                                    label="N???"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="T??i ?????ng ?? v???i ??i???u Kho???n S??? D???ng c???a CGV" />
                    </Form.Group>
                    <Button disabled={!canRegister} className="w-100 btn-danger" variant="primary" type="submit" onClick={e => handleLogin(e)}>
                        {isLoading ? <Spinner /> : '????ng k??'}
                    </Button>
                </Form>
                : null}
            {isPC ?
                <Form className='w-pc my-3'>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>H??? v?? t??n<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={firstInput}
                            type="text"
                            placeholder="H??? v?? t??n"
                            onChange={e => setName(e.target.value)}
                        />
                        {!isValidName && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n t??n ng?????i d??ng</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>T??n ng?????i d??ng<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="T??n ng?????i d??ng"
                            onChange={e => setUsername(e.target.value)}
                        />
                        {!isValidUsername && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n t??n ng?????i d??ng</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={userEmailInput}
                            type="text"
                            placeholder="Email ho???c s??? ??i???n tho???i"
                            onChange={e => setEmail(e.target.value)}
                        />
                        {!isValidEmail && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n email ho???c s??? ??i???n tho???i</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>M???t kh???u<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            placeholder="M???t kh???u"
                            onChange={e => setPassword(e.target.value)}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n M???t kh???u</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRePassword">
                        <Form.Label>Nh???p l???i m???t kh???u<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
                        <Form.Control
                            ref={passwordReInput}
                            type="password"
                            placeholder="nh???p l???i m???t kh???u"
                            onChange={e => setPasswordRe(e.target.value)}
                        />
                        {!isValidRePassword && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n ????ng M???t kh???u</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicGender">
                        <Form.Label>Gi???i t??nh<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></Form.Label>
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
                                    label="N???"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="T??i ?????ng ?? v???i ??i???u Kho???n S??? D???ng c???a CGV" />
                    </Form.Group>
                    <Button disabled={!canRegister} className="w-100 btn-danger" variant="primary" type="submit" onClick={e => handleLogin(e)}>
                        {isLoading ? <Spinner /> : '????ng k??'}
                    </Button>
                </Form>
                : null}
        </>
    )
})

export default SignUp