const baserUrl = 'https://bing-news-search1.p.rapidapi.com'
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
    'x-rapidapi-key':'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
		// 'X-RapidAPI-Key': '2006fcddebmshb8e2fb348e572f5p13c9acjsn19e6f039cdde',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

export const fetchNews = async (count: number, search: string) => {
  try {
    const response = await fetch(`${baserUrl}/news/search?q=${search}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`, options);
    // if (response.status !== 200) {
    //   throw new Error('failed to fetch');
    // }    
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}