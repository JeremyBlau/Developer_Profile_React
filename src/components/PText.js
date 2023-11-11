import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  margin: 50 px;
  font-size: 2.2rem;
  line-height: 2rem;
  word-wrap: break-word; /* Add this line */
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}
