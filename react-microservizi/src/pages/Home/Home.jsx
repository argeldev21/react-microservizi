import { useEffect } from "react";


function Home() {


  useEffect(() => {
    document.title = "Home – Il tuo sito";
  }, []);


  return (
    <>
			<h1>HOME</h1>
    </>
  );
}

export default Home;
