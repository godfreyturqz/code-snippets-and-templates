import styled from 'styled-components'
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    padding: 20px;
    /* border: 1px solid #292s929; */
    &:hover {
        color: #FFF;
        background: #292929;
    }
`