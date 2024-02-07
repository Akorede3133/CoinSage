const baserUrl = 'https://bing-news-search1.p.rapidapi.com'
const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
    // 'x-rapidapi-key':'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
		'X-RapidAPI-Key': '2006fcddebmshb8e2fb348e572f5p13c9acjsn19e6f039cdde',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
	}
};

export const fetchNews = async (count: number, search: string) => {
  try {
    const response = await fetch(`${baserUrl}/news/search?q=${search}&freshness=Day&textFormat=Raw&safeSearch=Off&count=${count}`, options);    
    const result = await response.json();    
    if (!response.ok) {
      throw new Error(result.message)
    }       
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}