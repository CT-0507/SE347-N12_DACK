import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import Button from "react-bootstrap/Button"
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUserById, useUpdateUserMutation, useAddNewUserMutation } from '../usersApiSlice';
import { ROLES } from '../../../../config/roles';
import Spinner from 'react-bootstrap/Spinner';
const UserForm = ({ userId, handleClose }) => {
    let user
    if (userId) {
        user = useSelector(state => selectUserById(state, userId))
        console.log(user)
    }
    const [username, setUsername] = useState(user ? user.username : undefined)
    const [password, setPassword] = useState()
    const [passwordRe, setPasswordRe] = useState()
    const [email, setEmail] = useState(user ? user.email : undefined)
    const [name, setName] = useState(user ? user.name : undefined)
    const [active, setActive] = useState(user ? user.active : undefined)
    const [roles, setRoles] = useState(user ? user.roles : [])
    const firstInput = useRef()
    const canSave = password ? [username, password, email, name].every(value => value !== "" && typeof value !== "undefined") && password === passwordRe : [username, email, name].every(value => value !== "" && typeof value !== "undefined")
    useEffect(() => {
        firstInput.current.focus()
    }, [])
    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()
    const [updateUser, {
        isLoading: isUpdateLoading,
        isSuccess: isUpdateSuccess,
        isError: isUpdateError,
        error: updateError
    }] = useUpdateUserMutation()
    const handleConfirm = userId
        ? async (userId) => {
            if (password) {
                await updateUser({ id: user.id, username, name, email, password, roles, active })
            } else {
                await updateUser({ id: user.id, username, name, email, roles, active })
            }
        }
        : async () => {
            if (canSave) {
                try {
                    await addNewUser({ username: username, email: email, password: password, name: name, roles })
                } catch (err) {
                    console.log(err)
                }
            }

        }
    useEffect(() => {
        if (isSuccess || isUpdateSuccess) {
            handleClose()
        }
    }, [isSuccess, isUpdateSuccess])
    const validRolesClass = !Boolean(roles.length) ? 'form__input--incomplete' : ''
    const onRolesChanged = e => {
        const values = Array.from(
            e.target.selectedOptions, //HTMLCollection 
            (option) => option.value
        )
        setRoles(values)
    }
    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })
    return (
        <Modal show onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{userId ? "Ch???nh ng?????i d??ng" : "Th??m ng?????i d??ng"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputUserName" className="col-sm-2 col-form-label">T??n ????ng nh???p<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input ref={firstInput} type="text" className="form-control" id="inputUserName" value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    {username === "" && <p className="text-danger">Vui l??ng nh???p t??n ????ng nh???p</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputFullName" className="col-sm-2 col-form-label">T??n ng?????i d??ng<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="text" className="form-control" id="inputFullName" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    {name === "" && <p className="text-danger">Vui l??ng nh???p t??n</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputEmail" className="col-sm-2 col-form-label">Email<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    {email === "" && <p className="text-danger">Vui l??ng nh???p email</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputPassword" className="col-sm-2 col-form-label">M???t kh???u<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    {typeof password === "undefined" && <p className="text-danger">Vui l??ng nh???p m???t kh???u</p>}
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputConfirmPassword" className="col-sm-2 col-form-label">X??c nh???n m???t kh???u<span className='text-danger' style={{ position: "relative", top: "-5px" }}>&#8903;</span></label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <input type="password" className="form-control" id="inputConfirmPassword" value={passwordRe} onChange={e => setPasswordRe(e.target.value)} />
                        {passwordRe !== password && <p className="text-danger">Vui l??ng nh???p l???i m???t kh???u</p>}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="roles">Vai tr??</label>
                    <select
                        id="roles"
                        name="roles"
                        className={`form__select ${validRolesClass}`}
                        multiple={true}
                        size="3"
                        value={roles}
                        onChange={onRolesChanged}
                    >
                        {options}
                    </select>
                </div>
                <div className="mb-3 row">
                    <label style={{ width: '30%' }} forhtml="inputStatus" className="col-sm-2 col-form-label">Tr???ng th??i k??ch ho???t</label>
                    <div style={{ width: '70%' }} className="col-sm-10">
                        <FormCheckInput checked={active} onChange={e => setActive(e.target.value)}></FormCheckInput>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    ????ng
                </Button>
                <Button variant="primary" disabled={!canSave} onClick={handleConfirm}>
                    {isLoading || isUpdateLoading ? <Spinner /> : userId ? "Ch???nh ng?????i d??ng" : "L??u ng?????i d??ng"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UserForm