import React from 'react'
import { NavLink } from "./styles";

const Home = () => {
    return (
        <div>
            <NavLink to='/datafetching'>Data Fetching</NavLink>
            <NavLink to='/statemanagement'>State Management</NavLink>
        </div>
    )
}

export default Home
