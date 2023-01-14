const API_URL = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

async function fetchPrefectures() {
  const response = await fetch(API_URL, {
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
  });
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const result = await fetchPrefectures();
  res.status(200).json(result);
}
