import { useEffect } from "react";


function Home() {


  useEffect(() => {
    document.title = "Home – Il tuo sito";
  }, []);


  return (
    <>
			<main class="container py-5 text-center">

        <h1>Benvenuto nel Garage Manager</h1>

        <p class="lead">Workshop Microservizi Java bellissimo</p>

      </main>

    </>
  );
}

export default Home;
