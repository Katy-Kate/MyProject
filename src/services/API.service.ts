class APIService {
	fetchNews(url: string): Promise<any> {
		return fetch(new Request(url))
			.then((response) => response.json())
			.then((data) => {
				console.log('fetch news', data.articles);
				return data.articles;
			})
			.catch((err) => new Error(err));
	}
}

export const apiService = new APIService();
