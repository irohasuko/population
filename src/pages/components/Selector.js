import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

const PrefectureBox = styled.div`
  text-align: center;
  padding: 5px;
  border: solid 1px;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
`;

const Selector = ({ setPopulation }) => {
  const [prefectures, setPrefectures] = useState([]);
  useEffect(() => {
    const fetchPrefectures = async () => {
      const response = await fetch('/api/prefecture');
      const data = await response.json();
      setPrefectures(data.result);
    };
    fetchPrefectures();
  }, []);

  return (
    <PrefectureBox>
      <h3>都道府県一覧</h3>
      <CheckContainer>
        {prefectures.map((prefecture) => (
          <Checkbox
            key={prefecture.prefCode}
            prefecture={prefecture}
            setPopulation={setPopulation}
          />
        ))}
      </CheckContainer>
    </PrefectureBox>
  );
};

export default Selector;
