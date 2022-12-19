import { useState } from "react";

const LoggedIn = () => {

    // setting useState variables, in this example using a boolean as a useState default value
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // define the state of the variable within the handler function for a logged-in user
    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    // define the state of the variable within the hanlder function for a user who has logged out
    const handleLogut = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogut}>Log out</button>
            <div>User is { isLoggedIn ? 'logged in' : 'logged out' }</div>
        </div>
    )
}

export default LoggedIn;