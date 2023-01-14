import styled from 'styled-components';

const PrefectureBox = styled.div`
  text-align: center;
  padding-top: 20px;
  margin: 5%;
  border: solid 1px;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Selector = () => {
  return (
    <PrefectureBox>
      <h2>都道府県一覧</h2>
      <CheckContainer></CheckContainer>
    </PrefectureBox>
  );
};

export default Selector;
