import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import { Loader } from '../../utils/style/monStyle';
import colors from '../../utils/style/colors';
import { SurveyContext } from '../../utils/context/index';
import { useFetch } from '../../utils/hooks/index';
import Error from '../Error';

const QuestionTitle = styled.h2`
   text-decoration: underline;
   text-decoration-color: ${colors.primary};
`;

const QuestionContent = styled.div`
   margin: 30px;
`;

const LinkWrapper = styled.div`
   padding-top: 30px;
   & a {
      color: black;
   }
   & a:first-of-type {
      margin-right: 20px;
   }
`;

const SurveyContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const ReplyWrapper = styled.div`
   display: flex;
   flex-direction: row;
`;

const ReplyBox = styled.button`
   border: none;
   height: 100px;
   width: 300px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${colors.backgroundLight};
   border-radius: 30px;
   cursor: pointer;
   box-shadow: ${(props) =>
      props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
   &:first-child {
      margin-right: 15px;
   }
   &:last-of-type {
      margin-left: 15px;
   }
`;

function Survey() {
   const { questionNumber } = useParams();
   const questionNumberInt = parseInt(questionNumber);
   const precedentQuestion =
      questionNumberInt === 1 ? 1 : questionNumberInt - 1;
   const suivantQuestion = questionNumberInt + 1;
   const { answers, saveAnswers } = useContext(SurveyContext);

   const { data, isLoading, error } = useFetch('http://localhost:8000/survey');
   const { surveyData } = data;
   function saveReply(reply) {
      saveAnswers({ [questionNumberInt]: reply });
   }
   if (error) {
      return <Error />;
   }
   return (
      <SurveyContainer>
         <h1>Questionnaire 🧮</h1>
         <QuestionTitle>Question {questionNumber}</QuestionTitle>
         {isLoading ? (
            <Loader />
         ) : (
            <QuestionContent>
               {surveyData && surveyData[questionNumber]}
            </QuestionContent>
         )}
         <ReplyWrapper>
            <ReplyBox
               onClick={() => saveReply(true)}
               isSelected={answers[questionNumber] === true}
            >
               Oui
            </ReplyBox>
            <ReplyBox
               onClick={() => saveReply(false)}
               isSelected={answers[questionNumber] === false}
            >
               Non
            </ReplyBox>
         </ReplyWrapper>
         <LinkWrapper>
            <Link to={`/survey/${precedentQuestion}`}>Précédent</Link>
            {suivantQuestion === 10 ? (
               <Link to="/results/">Results</Link>
            ) : (
               <Link to={`/survey/${suivantQuestion}`}>Suivant</Link>
            )}
         </LinkWrapper>
         *
      </SurveyContainer>
   );
}

export default Survey;
