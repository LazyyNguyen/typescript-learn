import {useState,useContext} from 'react';
import { UserContext } from './UserContext';


export const User = () => {
    const userContext = useContext(UserContext)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true);
        if(userContext){
            userContext.setUser({
                name: 'Khánh Linh',
                email: "linh.nguyenthikhanh@gmail.com"
            })
        }
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
        if(userContext){
            userContext.setUser(null)
        }
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            
            <div>User is {isLoggedIn? `Log in
            Username: ${userContext?.user?.name}
            UserEmail: ${userContext?.user?.email}`
            
            : 'Log out'}</div>
        </div>
    )
}