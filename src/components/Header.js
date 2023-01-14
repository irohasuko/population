import styled from 'styled-components';

const HeaderText = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  margin-top: 0px;
  background-color: lightgray;
`;
const Header = () => {
  return <HeaderText>都道府県別人口推移</HeaderText>;
};

export default Header;
