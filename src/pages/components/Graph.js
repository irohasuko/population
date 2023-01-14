import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Graph = ({ population }) => {
  console.log(population);
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 40, bottom: 40, left: 20 }}>
        <XAxis type="category" dataKey="year" unit="年" allowDuplicatedCategory={false} />
        <YAxis type="number" dataKey="value" name="総人口" unit="人" />
        {population.map((prefecture) => (
          <Scatter key={prefecture.prefId} datakey="value" data={prefecture.population} />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default Graph;
