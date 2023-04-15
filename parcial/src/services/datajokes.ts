export async function getApi() {
	try {
			const jokes = await fetch('https://api.chucknorris.io/jokes/random').then((res) => {
				return res.json();
			});
            console.log(jokes);
			return jokes;
	} catch (error) {
		console.log(error);
	}
}