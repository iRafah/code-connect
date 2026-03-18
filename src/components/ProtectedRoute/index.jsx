import { useAuth } from "../../hooks/useAuth"
import { Spinner } from "../Spinner"
import { useNavigate } from "react-router"
import { useEffect } from "react"

export const ProtectedRoute = ({children}) => {
    const { isAuthenticated, isLoading } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            // Redirect to login page
            navigate('/auth/login')
        }
    }, [isAuthenticated, isLoading])

    if (isLoading) {
        return <Spinner />
    }

    if (!isAuthenticated) {
        return null
    }
    return children
}