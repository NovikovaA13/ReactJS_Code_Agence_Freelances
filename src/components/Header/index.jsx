import styled from 'styled-components';
import { StyledLink } from '../../utils/style/monStyle';
import DarkLogo from '../../assets/dark-logo.png';

const NavContainer = styled.nav`
   padding: 30px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Logo = styled.img`
   height: 70px;
`;

function Header() {
   return (
      <NavContainer>
         <StyledLink to="/">
            <Logo src={DarkLogo} />
         </StyledLink>
         <StyledLink to="/survey/1">Questionnaire</StyledLink>
         <StyledLink to="/freelances">Profils</StyledLink>
      </NavContainer>
   );
}

export default Header;
