import styled from 'styled-components';
import colors from '../../utils/style/colors';
import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import { useTheme } from './../../utils/hooks/index';
import { useState } from 'react';

const CardLabel = styled.span`
   color: #5843e4;
   font-size: 22px;
   font-weight: normal;
   padding-left: 15px;
`;

const CardImage = styled.img`
   height: 150px;
   width: 150px;
   align-self: center;
   border-radius: 50%;
`;

const CardWrapper = styled.div`
   display: flex;
   flex-direction: column;
   padding: 15px;
   background-color: ${colors.backgroundLight};
   border-radius: 30px;
   width: 350px;
   transition: 200ms;
   &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px #e2e3e9;
   }
`;

const CardTitle = styled.span`
   color: black;
   font-size: 22px;
   font-weight: normal;
   align-self: center;
`;

function Card({ title, label, picture }) {
   const theme = useTheme();
   const [isFavorite, setFavorite] = useState(false);
   const favorite = isFavorite ? '⭐️' : '';
   return (
      <CardWrapper
         theme={theme}
         onClick={() => {
            setFavorite(!isFavorite);
         }}
      >
         <CardLabel theme={theme}>{label}</CardLabel>
         <CardImage src={picture} alt={label} />
         <CardTitle theme={theme}>
            {favorite} {title} {favorite}
         </CardTitle>
      </CardWrapper>
   );
}

Card.propTypes = {
   label: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   picture: PropTypes.string.isRequired,
};
Card.defaultProps = {
   label: '',
   title: 'Default Title',
   picture: DefaultPicture,
};
export default Card;
