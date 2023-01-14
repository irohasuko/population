import styled from 'styled-components';

const HeaderText = styled.div`
  font-size: 48px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: lightgray;
`;
const Header = () => {
  return <HeaderText>都道府県別人口推移グラフ</HeaderText>;
};

export default Header;
