import axios from 'axios';


export async function getImagesByQuery(query, page) {

	const getImage = await axios.get('https://pixabay.com/api/', {
		params: {
			key: '51732314-3454f0789e14ece522df46b66',
			q: query,
			image_type: 'photo',
			orientation: 'horizontal',
			safesearch: true,
			page: page,
			per_page: '15',
		}
	});
	return getImage.data;
}

