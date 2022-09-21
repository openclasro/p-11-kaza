import { useEffect, useState } from "react";
import Card from "../../components/card/Card";

import "./home.css";
import Banner from "../../components/banner/Banner";
import bannerImg from "../../assets/bannerHome.png";

function Home() {
  const [logements, setlogements] = useState([]);

  const getData = () => {
    fetch("https://github.com/openclasro/p-11-kaza/blob/master/public/logements.json")
      .then(async function (response) {
        const logements1 = await response.json();
        setlogements(logements1);
      })
     
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
     
      <Banner img={bannerImg} title={"Chez vous, partout et ailleurs!"} />
      <section className="home__houses">
        <ul className="home__houses__list">
          {logements.map((logement) => (
            <li key={logement.id}>
              <Card
                key={logement.id}
                img={logement.cover}
                title={logement.title}
                id={logement.id}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
