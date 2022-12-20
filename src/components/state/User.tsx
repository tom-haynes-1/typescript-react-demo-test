// When a user viists a website, they're usually logged out by default. In this case, we can initialise useState with 'null'.
// when a user logs out (after being logged in), we should also set the state of setUser to 'null' within the handleLogout event handler.

import { useState } from "react";

interface AuthUserProps {
    name: string;
    email: string;
}

const User = ({
    name,
    email
}: AuthUserProps) => {

    // As the useState value of 'user' is set to 'null', TS will not allow a non-null value to be passed to the setUser function.
    // In order to pacify this in TS, the type must be explicity defined in the useState hook and not rely on type inference.
    // The useState type can be explicitly defined after the useState hook using angled (<>) brackets.
    // In this example we have explicitly defined that the type of 'user' can be either AuthUserProps OR null, using the pipe operator.
    const [user, setUser] = useState<AuthUserProps | null>(null);

    // When a user logs in, the user will provide their login credentials. In this example, the values will be hardcoded using the function props.
    const handleLogin = () => {
        setUser({
            name: 'Tom',
            email: 'tom@example.com'
        })
    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
            {/* TS uses the optional chaining operator (?) with the 'user' value as we've explicity stated that it 'can' be either a prop within AuthUserProps OR null */}
            <div>User name: {user?.name}</div>
            <div>User email: {user?.email} </div>
        </div>
    )

}

export default User;