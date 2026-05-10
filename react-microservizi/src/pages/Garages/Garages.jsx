import { useEffect } from "react";


function Garages() {


	useEffect(() => {
		document.title = "Garage – Il tuo sito";
	}, []);


	return (
		<>
			<main class="container py-5 text-center">

				<h1>Benvenuto nella Garages</h1>

				<p class="lead">Workshop Microservizi Java</p>

			</main>

		</>
	);
}

export default Garages;
