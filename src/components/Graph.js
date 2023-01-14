import styled from 'styled-components';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const StyledContainer = styled.div`
  width: 90%;
  @media screen and (min-width: 1200px) {
    width: 49%;
  }
`;

const Graph = ({ population }) => {
  // 都道府県ごとの色を得る関数
  const getColorById = (id) => {
    const red_array = [0, 3, 5, 6]; // 0で割ると0,3,5,6余るidには赤を適用
    const green_array = [1, 3, 4, 6]; // 0で割ると1,3,4,6余るidには緑を適用
    const blue_array = [2, 4, 5, 6]; // 0で割ると2,4,5,6余るidには青を適用
    const colorStrength = ('0', (50 + id * 4).toString(16)).slice(-2); // 暗いと判別しにくいので最低を50に
    const red = red_array.includes(Math.floor(id % 7)) ? colorStrength : '00';
    const green = green_array.includes(Math.floor(id % 7)) ? colorStrength : '00';
    const blue = blue_array.includes(Math.floor(id % 7)) ? colorStrength : '00';
    const colorCode = `${red}${green}${blue}`;
    return `#${colorCode}`;
  };

  return (
    <StyledContainer>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 40, bottom: 20, left: 40 }}>
          <XAxis
            type="number"
            dataKey="year"
            unit="年"
            domain={['dataMin', 2020]}
            allowDataOverflow={true}
            padding={{ left: 5, right: 5 }}
          />
          <YAxis type="number" dataKey="value" name="総人口" unit="人" />
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          {population.map((prefecture) => (
            <Scatter
              key={prefecture.prefId}
              name={prefecture.name}
              datakey="value"
              data={prefecture.population}
              fill={getColorById(prefecture.prefId)}
              line
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </StyledContainer>
  );
};

export default Graph;
