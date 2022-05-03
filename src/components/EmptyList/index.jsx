import styled from 'styled-components';
import colors from '../../utils/style/colors';
import empty from '../../assets/empty.svg';
import { useTheme } from '../../utils/hooks/index';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 60px 90px;
   padding: 30px;
   background-color: ${({ theme }) =>
      theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

const Title = styled.h1`
   color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`;

const SubTitle = styled.h3`
   color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
   font-weight: normal;
`;

const Illustration = styled.img`
   margin: 30px 0;
`;

function EmptyList() {
   const { theme } = useTheme();
   return (
      <Container theme={theme}>
         <Title theme={theme}>Pas de profils </Title>
         <SubTitle theme={theme}>
            Il n'y a pas de profils pour vos besoins
         </SubTitle>
         <Illustration src={empty}></Illustration>
      </Container>
   );
}
export default EmptyList;
