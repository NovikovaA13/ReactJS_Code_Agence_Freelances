import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useTheme } from '../../utils/hooks/index';
import EmailInput from './../EmailInput/index';

const FooterContainer = styled.footer`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding-top: 60px;
`;

const NightModeButton = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
   color: ${colors.secondary};
`;

function Footer() {
   const { theme, toogleTheme } = useTheme();
   return (
      <FooterContainer>
         <EmailInput theme={theme} />
         <NightModeButton onClick={() => toogleTheme()}>
            Changer le theme {theme === 'light' ? '☀' : '🌙'}
         </NightModeButton>
      </FooterContainer>
   );
}

export default Footer;
