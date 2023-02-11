// map through an array of objects to pass into the namesList prop

import { Name } from "./PersonTypes";

interface PersonListProps {
    namesList: Name[]
}

const PersonList = ({
    namesList
}: PersonListProps) => {
    return (
        <div>
            {namesList.map(personName => {
                return (
                    <h2 key={personName.firstName}>
                        { personName.firstName }
                        { personName.lastName }
                    </h2>
                )
            })}
        </div>
    )
}

export default PersonList;