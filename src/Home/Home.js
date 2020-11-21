import React from 'react'
import { NavLinkContainer, NavLink } from "./styles";

const Home = () => {
    return (
        <NavLinkContainer>
            <NavLink to='/counter'>Counter</NavLink>
            <NavLink to='/pagination'>Pagination</NavLink>
            <NavLink to='/datafetching'>Data Fetching</NavLink>
            <NavLink to='/statemanagement'>State Management</NavLink>
            <NavLink to='/reacttable'>React Table</NavLink>
        </NavLinkContainer>
    )
}

export default Home
