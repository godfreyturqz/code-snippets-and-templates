import React from 'react'
import { NavLinkContainer, NavLink } from './NavStyles'


const Nav = () => {
    return (
        <NavLinkContainer>
            <NavLink to='/counter'>Counter</NavLink>
            <NavLink to='/pagination'>Pagination</NavLink>
            <NavLink to='/datafetching'>Data Fetching</NavLink>
            <NavLink to='/reacttable'>React Table</NavLink>
            <NavLink to='/search'>Search</NavLink>
            <NavLink to='/statemanagement'>State Management</NavLink>
            <NavLink to='/urlparsing'>URL Parsing</NavLink>
            <NavLink to='/modal'>Modal</NavLink>
            <NavLink to='/imageslider'>Image Slider</NavLink>
            <NavLink to='/cloudinary'>Cloudinary</NavLink>
            <NavLink to='/table'>Table</NavLink>
        </NavLinkContainer>
    )
}

export default Nav
