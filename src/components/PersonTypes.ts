// creates exports of types of interfaces that can be imported and use in other files/components.
// you can also extract types/interfaces and use it in multiple places.

export interface Name {
    firstName: string;
    lastName: string;
}

export interface PersonProps {
    personName: Name
}