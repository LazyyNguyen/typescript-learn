import {useState} from 'react';
type AuthUser = {
    name: string,
    email: string
}

export const LoggedIn = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
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

    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            
            <div>User is {isLoggedIn? `Log in
            User name ${user.name}
            User email ${user.email}
            ` 
            
            : 'Log out'}</div>
        </div>
    )
}