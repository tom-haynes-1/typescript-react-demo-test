// return an interface of primitive datatypes with multiple props.
// using a ? in the prop definition interface to make it optional. It can also be destructured in the component function to be given a default value.

interface GreetProps {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
}

const Greet = ({
    name,
    messageCount,
    isLoggedIn
}: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    isLoggedIn 
                    ? `Hi ${name}! You have ${messageCount} unread messages.`
                    : 'Welcome Guest!'
                }
            </h2>
        </div>
    )
}



export default Greet;