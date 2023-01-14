const API_URL =
  'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=';

async function fetchPrefectures(req) {
  const id = req.query.id;
  const response = await fetch(`${API_URL}${id}`, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  });
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const result = await fetchPrefectures(req);
  res.status(200).json(result);
}
