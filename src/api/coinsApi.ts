const baserUrl = 'https://coinranking1.p.rapidapi.com/'
const options = {
	method: 'GET',
	headers: {
    'x-rapidapi-key':'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
		// 'X-RapidAPI-Key': '2006fcddebmshb8e2fb348e572f5p13c9acjsn19e6f039cdde',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

export const fetchCoins = async (count: number) => {
  try {
    const response = await fetch(`${baserUrl}coins?limit=${count}`, options);
    if (!response.ok) {
      throw new Error('failed to fetch');
    }    
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}
export const fetchSingleCoin = async (id: string) => {
  try {
    const response = await fetch(`${baserUrl}coin/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}
