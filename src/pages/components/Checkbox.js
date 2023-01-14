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

const Checkbox = ({ prefecture, setPopulation }) => {
  const fetchPopulation = async (e) => {
    if (e.target.checked) {
      const response = await fetch(`/api/population/${e.target.id}`);
      const data = await response.json();
      setPopulation((prev) => [
        ...prev,
        { prefId: e.target.id, name: e.target.value, population: data.result.data[0].data },
      ]);
    } else {
      setPopulation((prev) => prev.filter((pref) => pref.prefId !== e.target.id));
    }
  };
  return (
    <StyledCheck>
      <input
        type="checkbox"
        id={prefecture.prefCode}
        value={prefecture.prefName}
        onChange={fetchPopulation}
      />
      <label htmlFor={prefecture.prefCode}>{prefecture.prefName}</label>
    </StyledCheck>
  );
};

export default Checkbox;
