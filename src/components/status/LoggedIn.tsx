import {useState} from 'react';
type AuthUser = {
    name: string,
    email: string
}

export const LoggedIn = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true);
        setUser({
            name: 'Khánh Linh',
            email:'linh.nguyenthikhanh@gmail.com'
        })
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUser(null)

    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name {user?.name}</div>
            <div>User email {user?.email}</div>
            <div>User is {isLoggedIn? 'Log in' : 'Log out'}</div>
        </div>
    )
}