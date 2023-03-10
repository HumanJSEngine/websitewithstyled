/** @format */

import styled from 'styled-components';

import { Container } from '../../globalStyles';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  position: sticky;
  z-index: 100;
  &:hover {
    color: red;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5;
`;

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width:960px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  transform:translate(-100%, 60%);
  font-size:1.8rem;
  cursor:pointer;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align:center;

@media screen and (max-width:960px){
  display:flex;
  flex-direction: column;
  width:100%;
  height:90vh;
  position:absolute;
  top:80px;
  left:${({click}) => (click ? 0 : '-100%')};
  opacity:1;
  transition:all 0.5s ease;
  background:#101522;

}
`