import colors from '../../utils/style/colors';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../utils/hooks';
import { useState, useEffect } from 'react';
import { Loader } from '../../utils/style/monStyle';
import Error from '../Error';

const ProfileWrapper = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 90px 0;
   margin: 0 90px;
   background-color: ${({ theme }) =>
      theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`;

const ProfileDetails = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 50px;
   color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const Picture = styled.img`
   height: 150px;
   width: 150px;
   border-radius: 75px;
`;

const Title = styled.h1`
   font-size: 25px;
   margin: 0;
   font-weight: 500;
`;

const JobTitle = styled.h2`
   padding-top: 10px;
   font-size: 20px;
   margin: 0;
   font-weight: 500;
`;

const Location = styled.span`
   margin-left: 15px;
   color: ${colors.secondary};
`;

const TitleWrapper = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

const Price = styled.span`
   padding-top: 10px;
   font-weight: 500;
   font-size: 20px;
`;

const SkillsWrapper = styled.div`
   display: flex;
   flex-direction: row;
   padding: 10px 0;
`;

const Skill = styled.span`
   border-radius: 5px;
   padding: 5px;
   margin-right: 5px;
   border: 1px solid
      ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`;

const Availability = styled.span`
   &:before {
      position: absolute;
      left: 0;
      top: 4px;
      height: 10px;
      width: 10px;
      border-radius: 5px;
      background-color: ${({ available }) => (available ? 'green' : 'red')};
      content: '';
   }
   padding-left: 20px;
   position: relative;
`;

function Profile() {
   const { id: queryId } = useParams();
   const { theme } = useTheme();
   const [error, setError] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   const [profileData, setProfileData] = useState({});
   useEffect(() => {
      const url = `http://localhost:8000/freelance?id=${queryId}`;

      //Une variante avec then
      /*
      fetch(url)
         .then((response) => response.json())
         .then((data) => {
            const { freelanceData } = data;
            setProfileData(freelanceData);
            setIsLoading(false);
         })
         .catch((error) => {
            console.log(error);
            setError(true);
         });
      */
      //Une Variante avec async/await

      async function getProfileData() {
         try {
            const response = await fetch(url);
            const data = await response.json();
            const { freelanceData } = data;
            setProfileData(freelanceData);
         } catch (error) {
            console.log(error);
            setError(true);
         } finally {
            setIsLoading(false);
         }
      }
      getProfileData();
   }, [queryId]);
   if (error) {
      return <Error />;
   }
   const { id, name, job, picture, skills, location, available, tjm } =
      profileData;
   console.log(skills);
   return (
      <ProfileWrapper theme={theme}>
         {isLoading ? (
            <Loader />
         ) : (
            <>
               <Picture src={picture} alt={name} />
               <ProfileDetails theme={theme}>
                  <TitleWrapper>
                     <Title>{name}</Title>
                     <Location>{location}</Location>
                  </TitleWrapper>
                  <JobTitle>{job}</JobTitle>
                  <SkillsWrapper>
                     {skills &&
                        skills.map((skill) => (
                           <Skill key={`skill-${id}`} theme={theme}>
                              {skill}
                           </Skill>
                        ))}
                  </SkillsWrapper>
                  <Availability available={available}>
                     {available ? 'Available' : 'Indisponible'}
                  </Availability>
                  <Price>{tjm} Euros par jour</Price>
               </ProfileDetails>
            </>
         )}
      </ProfileWrapper>
   );
}
export default Profile;
