import { useContext } from 'react';
import { SurveyContext } from '../../utils/context/index';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useTheme, useFetch } from '../../utils/hooks/index';
import { Loader, StyledLink } from '../../utils/style/monStyle';
import EmptyList from '../../components/EmptyList';

const ResultsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 60px 90px;
   padding: 30px;
   background-color: ${({ theme }) =>
      theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
   color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
   font-weight: bold;
   font-size: 28px;
   max-width: 60%;
   text-align: center;
   & > span {
      padding-left: 10px;
   }
`;

const DescriptionWrapper = styled.div`
   padding: 60px;
`;

const JobTitle = styled.span`
   color: ${({ theme }) =>
      theme === 'light' ? colors.primary : colors.backgroundLight};
   text-transform: capitalize;
`;

const JobDescription = styled.div`
   font-size: 18px;
   & > p {
      color: ${({ theme }) =>
         theme === 'light' ? colors.secondary : '#ffffff'};
      margin-block-start: 5px;
   }
   & > span {
      font-size: 20px;
   }
`;

const LoaderWrapper = styled.div`
   display: flex;
   justify-content: center;
`;

export function returnParamsModifyed(answers) {
   let str = '';
   const answersNumbers = Object.keys(answers);
   answersNumbers.forEach((elem) => {
      if (elem !== 1) str += '&';
      str += `a${elem}=${answers[elem]}`;
   });
   return str;

   /* Une variante avec reduce
   return answersNumbers.reduce((reducer, currentElem) => {
      const isFirstElem = currentElem === 1;
      const separator = isFirstElem ? '' : '&';
      return `${reducer}${separator}a${currentElem}=${answers[currentElem]}`;
   }, '');

   */
}
export function addSeparator(length, index) {
   return length - 1 !== index ? ',' : '';
}
function Results() {
   const { answers } = useContext(SurveyContext);
   const { theme } = useTheme();
   const paramsModifyed = returnParamsModifyed(answers);
   const { data, isLoading, error } = useFetch(
      `http://localhost:8000/results/?${paramsModifyed}`
   );
   const { resultsData } = data;
   if (resultsData.length < 1) {
      return <EmptyList />;
   }
   if (error) {
      return <p>Il y a une erreur</p>;
   }
   return isLoading ? (
      <LoaderWrapper>
         <Loader />
      </LoaderWrapper>
   ) : (
      <ResultsContainer theme={theme}>
         <ResultsTitle theme={theme}>
            Les compétences dont vous avez besoin:
            {resultsData &&
               resultsData.map((elem, index) => (
                  <JobTitle key={`title-${elem.title}-${index}`} theme={theme}>
                     {elem.title}
                     {addSeparator(resultsData.length, index)}
                  </JobTitle>
               ))}
         </ResultsTitle>
         <StyledLink $isFullLink to="/freelances">
            Découvrez les profils des freelances
         </StyledLink>
         {resultsData &&
            resultsData.map((elem, index) => (
               <DescriptionWrapper>
                  <JobDescription
                     key={`description-${elem.title}-${index}`}
                     theme={theme}
                  >
                     <JobTitle theme={theme}>{elem.title}</JobTitle>
                     <p>{elem.description}</p>
                  </JobDescription>
               </DescriptionWrapper>
            ))}
      </ResultsContainer>
   );
}

export default Results;
