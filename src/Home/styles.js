import styled from 'styled-components'
import { Link } from "react-router-dom";


export const NavLinkContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    padding: 20px;
    &:hover {
        color: #FFF;
        background: #292929;
    }
`