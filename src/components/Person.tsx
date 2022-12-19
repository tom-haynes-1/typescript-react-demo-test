// return values of an object to pass in the personName prop.

import { PersonProps } from "./Person.types";

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