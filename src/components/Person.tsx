// return values of an object to pass in the personName prop.

interface PersonProps {
    personName: {
        firstName: string;
        lastName: string;
    }
}

const Person = ({
    personName
}: PersonProps) => {
    return (
        <div>
            { personName.firstName } { personName.lastName }
        </div>
    )
}

export default Person;