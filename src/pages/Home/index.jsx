import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink } from '../../utils/style/monStyle';
import Picture from '../../assets/home-illustration.svg';

const PageWrapper = styled.div`
   display: flex;
   justify-content: center;
`;

const PageContainer = styled.div`
   margin: 30px;
   background-color: ${colors.background};
   padding: 60px 90px;
   display: flex;
   flex-direction: row;
   max-width: 1200px;
`;

const LeftCol = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   flex: 1;
   ${StyledLink} {
      max-width: 250px;
   }
`;

const PageTitle = styled.h2`
   padding-bottom: 30px;
   max-width: 280px;
   line-height: 50px;
`;

const PagePicture = styled.img`
   flex: 1;
`;

function Home() {
   return (
      <PageWrapper>
         <PageContainer>
            <LeftCol>
               <PageTitle>
                  Repérez vos besoins, on s’occupe du reste, avec les meilleurs
                  talents
               </PageTitle>
               <StyledLink to="/survey/1" $isFullLink>
                  Faire le test
               </StyledLink>
            </LeftCol>
            <PagePicture src={Picture} />
         </PageContainer>
      </PageWrapper>
   );
}

export default Home;
