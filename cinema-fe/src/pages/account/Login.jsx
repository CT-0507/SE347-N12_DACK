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
import useMemoUsername from '../../hooks/useMemoUsername'

const Login = () => {
    const [isValid, setIsValid] = useState(true)
    const [isValidUsername, setIsValidUsername] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const usernameInput = useRef()
    const passwordInput = useRef()
    const [saveUsername, setSaveUsername] = useMemoUsername()
    const [username, setUsername] = useState(saveUsername ? JSON.parse(localStorage.getItem("username")) || "" : "")
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
        if (!saveUsername) localStorage.removeItem("username")
    }, [])
    const [login, { isLoading }] = useLoginMutation()
    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)
    const handleToggleSaveUsername = () => setSaveUsername(prev => !prev)
    const canLogin = [username, password].every(value => value !== "")
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        if (canLogin) {
            try {
                const { accessToken } = await login({ username, password }).unwrap()
                dispatch(setCredentials({ accessToken }))
                if (saveUsername) localStorage.setItem("username", JSON.stringify(username))
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
                        <Form.Label>Email ho???c s??? ??i???n tho???i</Form.Label>
                        <Form.Control
                            ref={usernameInput}
                            type="text"
                            placeholder="Email ho???c s??? ??i???n tho???i"
                            autoComplete='false'
                            value={username}
                            onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                            onChange={handleUserInput}
                        />
                        {!isValidUsername && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n email ho???c s??? ??i???n tho???i</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>M???t kh???u</Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            autoComplete='false'
                            placeholder="M???t kh???u"
                            onChange={handlePwdInput}
                            value={password}
                            onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n M???t kh???u</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTrustCheckbox">
                        <Form.Check
                            type="checkbox"
                            id="persist"
                            onChange={handleToggle}
                            label="L??u phi??n ????ng nh???p"
                            checked={persist}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSaveUsernameCheckbox">
                        <Form.Check
                            type="checkbox"
                            id="save-username"
                            onChange={handleToggleSaveUsername}
                            label="L??u t??i kho???n"
                            checked={saveUsername}
                        />
                    </Form.Group>
                    {!isValid && <p className="text-danger ms-2">M???t kh???u ho???c t??i kho???n kh??ng ????ng</p>}
                    <Form.Text hidden={Boolean(!errMsg)}>{errMsg}</Form.Text>
                    <Button className="w-100" variant="primary" type="submit" disabled={!canLogin}>
                        {isLoading ? <Spinner /> : '????ng nh???p'}
                    </Button>

                    <Link to=''>Qu??n m???t kh???u</Link>
                </Form>
                : null}
            {isPC ?
                <Form className='w-pc my-3' onSubmit={handleLogin}>
                    <ToastContainer />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email ho???c s??? ??i???n tho???i</Form.Label>
                        <Form.Control
                            ref={usernameInput}
                            type="text"
                            autoComplete='false'
                            placeholder="Email ho???c s??? ??i???n tho???i"
                            value={username}
                            onBlur={e => { setIsValidUsername(true); if (e.target.value === '') setIsValidUsername(false) }}
                            onChange={handleUserInput}
                        />
                        {!isValidUsername && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n email ho???c s??? ??i???n tho???i</Form.Text>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>M???t kh???u</Form.Label>
                        <Form.Control
                            ref={passwordInput}
                            type="password"
                            placeholder="M???t kh???u"
                            autoComplete='false'
                            value={password}
                            onChange={handlePwdInput}
                            onBlur={e => { setIsValidPassword(true); if (e.target.value === '') setIsValidPassword(false) }}
                        />
                        {!isValidPassword && <Form.Text className="text-danger ms-2">Vui l??ng ??i???n M???t kh???u</Form.Text>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            type="checkbox"
                            id="persist"
                            onChange={handleToggle}
                            label="L??u phi??n ????ng nh???p"
                            checked={persist}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSaveUsernameCheckbox">
                        <Form.Check
                            type="checkbox"
                            id="save-username"
                            onChange={handleToggleSaveUsername}
                            label="L??u t??i kho???n"
                            checked={saveUsername}
                        />
                    </Form.Group>
                    {!isValid && <p className="text-danger ms-2">M???t kh???u ho???c t??i kho???n kh??ng ????ng</p>}
                    <Form.Text hidden={Boolean(!errMsg)}>{errMsg}</Form.Text>
                    <Button className="w-100" variant="primary" type="submit" disabled={!canLogin}>
                        {isLoading ? <Spinner /> : '????ng nh???p'}
                    </Button>
                    <Link to=''>Qu??n m???t kh???u</Link>
                </Form>
                : null}
        </>
    )
}

export default Login