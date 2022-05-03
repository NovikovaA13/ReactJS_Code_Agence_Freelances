import styled from 'styled-components';
import colors from '../../utils/style/colors';
import errorImg from '../../assets/404.svg';

const ErrorWrapper = styled.div`
   margin: 30px;
   display: flex;
   flex-direction: column;
   background-color: ${colors.background};
   align-items: center;
`;

const ErrorTitle = styled.h1`
   font-weight: 300;
`;

const ErrorSubtitle = styled.h2`
   font-weight: 300;
   color: ${colors.secondary};
`;

const Image = styled.img`
   max-width: 800px;
`;

function Error() {
   return (
      <ErrorWrapper>
         <ErrorTitle>Erreur</ErrorTitle>
         <Image src={errorImg} />
         <ErrorSubtitle>Cette page n’existe pas</ErrorSubtitle>
      </ErrorWrapper>
   );
}

export default Error;
