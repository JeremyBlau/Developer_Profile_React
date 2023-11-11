import React from 'react';
import styled from 'styled-components';

const PStyle = styled.div`
  margin: 500 px;
  font-size: 1.8rem;
  line-height: 1.5rem;
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
