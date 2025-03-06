import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333; /* Dark gray background */
  color: #fff; /* White text color */
  padding: 10px;
  text-align: center;
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Copyright>© {currentYear} Earl Alexis M. Ignacio. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;