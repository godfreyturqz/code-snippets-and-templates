import styled from 'styled-components'
import { Link } from "react-router-dom";


export const NavLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
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