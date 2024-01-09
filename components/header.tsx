import React from "react"

interface HeaderProps{
    firstName: string;
    lastName: string;
    age: number;
}

export const Header:React.FC<HeaderProps> =(props)=>{
    const {firstName, lastName, age} = props;
    return (
        <header>
            <h1>Hello!</h1>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>I am {age} years old</p>
        </header>
    )

}