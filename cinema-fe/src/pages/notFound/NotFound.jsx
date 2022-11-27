import { memo } from 'react'
import './NotFound.css'
import { Link, useNavigate } from 'react-router-dom'
const NotFound = memo(() => {
    const navigate = useNavigate()
    const onGoHomeClick = () => {
        navigate('/')
    }
    return (
        <section className="notFound">
            <div className="text">
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <h3 onClick={onGoHomeClick}>BACK TO HOME?</h3>
            </div>
        </section>
    )
})

export default NotFound