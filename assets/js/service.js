
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cb8f01e749msh6cd367bbae3eb31p1520adjsn20374442064f',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};

const lenguajes = () => fetch('https://text-translator2.p.rapidapi.com/getLanguages', options)
	.then(response => response.json())
	.then(response => response);


const traducir = async (idiomaEntrada, idiomaSalida, texto) => {
	const encodedParams = new URLSearchParams();
	encodedParams.append("source_language", idiomaEntrada);
	encodedParams.append("target_language", idiomaSalida);
	encodedParams.append("text", texto);

	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': 'cb8f01e749msh6cd367bbae3eb31p1520adjsn20374442064f',
			'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
		},
		body: encodedParams
	};

	return fetch('https://text-translator2.p.rapidapi.com/translate', options)
		.then(response => response.json())
		.then(response => response);
}


export const servicios = { lenguajes, traducir };