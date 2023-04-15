export async function get_api() {
	try {
			const cate = await fetch('https://api.chucknorris.io/jokes/categories').then((res) => {
				return res.json();
			});
            console.log(cate);
			return cate;
	} catch (error) {
		console.log(error);
	}
}