import { useState, useEffect } from 'react'

const useMemoUsername = () => {
    const [saveUsername, setSaveUsername] = useState(JSON.parse(localStorage.getItem("saveUsername")) || false)
    useEffect(() => {
        localStorage.setItem("saveUsername", JSON.stringify(saveUsername))
    }, [saveUsername])

    return [saveUsername, setSaveUsername]
}

export default useMemoUsername