import { useEffect, useState } from 'react';
import styled from 'styled-components';

const PrefectureBox = styled.div`
  text-align: center;
  margin-top: 20px;
  border: solid 1px;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Selector = () => {
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
      <h2>都道府県一覧</h2>
      <CheckContainer>
        {prefectures.map((prefecture) => (
          <div key={prefecture.prefCode}>{prefecture.prefName}</div>
        ))}
      </CheckContainer>
    </PrefectureBox>
  );
};

export default Selector;
