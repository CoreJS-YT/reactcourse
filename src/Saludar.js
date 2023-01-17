import { Component } from "react"

export function Saludar5({ title }) {
    return <h1>{title}</h1>
}

export function UserCard() {
    return <h2>User Card</h2>
}

export class Saludar extends Component {
    render() {
        return <h1>Hello World</h1>
    }
}