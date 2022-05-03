import Card from '../../components/Card/index';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/monStyle';
import { useFetch } from '../../utils/hooks';
import { Link } from 'react-router-dom';
import Error from '../Error';

const PageWrapper = styled.div`
   display: flex;
   justify-content: center;
`;

const PageTitle = styled.h1`
   font-size: 30px;
   color: black;
   text-align: center;
   padding-bottom: 30px;
`;

const CardContainer = styled.div`
   display: grid;
   gap: 24px;
   grid-template-rows: 350px 350px;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
   justify-items: center;
`;

const PageSubtitle = styled.h2`
   font-size: 20px;
   color: ${colors.secondary};
   font-weight: 300;
   text-align: center;
   padding-bottom: 30px;
`;

function Freelances() {
   const { data, isLoading, error } = useFetch(
      'http://localhost:8000/freelances'
   );
   const { freelancersList } = data;

   if (error) {
      return <Error />;
   }
   return (
      <PageWrapper>
         <PageTitle>Freelances</PageTitle>
         <PageSubtitle>Profiles</PageSubtitle>
         {isLoading ? (
            <Loader />
         ) : (
            <CardContainer>
               {freelancersList.map((profile) => (
                  <Link key={`id-${profile.id}`} to={`/profile/${profile.id}`}>
                     <Card
                        key={profile.id}
                        title={profile.name}
                        label={profile.job}
                        picture={profile.picture}
                     />
                  </Link>
               ))}
            </CardContainer>
         )}
      </PageWrapper>
   );
}
export default Freelances;
