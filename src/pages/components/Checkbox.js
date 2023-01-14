import styled from 'styled-components';

const StyledCheck = styled.div`
  margin: 5px;
  border: none;
  width: 15%;
  @media screen and (min-width: 600px) {
    width: 10%;
  }
  @media screen and (min-width: 900px) {
    width: 8%;
  }
`;

const Checkbox = ({ prefecture }) => {
  return (
    <StyledCheck>
      <input type="checkbox" id={prefecture.prefCode} />
      <label htmlFor={prefecture.prefCode}>{prefecture.prefName}</label>
    </StyledCheck>
  );
};

export default Checkbox;
