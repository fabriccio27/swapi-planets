import React, {useState, useEffect} from 'react';
import './App.css';

const StarWarsPlanets = () => {

  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState();

  const rootStyle = {
    width:'100vw',
    backgroundColor:'black',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  };

  const PlanetCard = ({planet}) => {
    const cardStyle = {
      width:'50%',
      border:'2px solid lightBlue',
      backgroundColor:'darkslateblue',
      color:'white'
    }
  
    const handleClick = () => {
      console.log(`planet ${planet.name} was clicked`);
      setSelectedPlanet(planet);
    };
  
    return (
      <div style={cardStyle} onClick={handleClick}>
        <h2>{planet.name}</h2>
      </div>
    )
  };
  

  const PlanetList = () => {
    return (
      planets.map((planet, idx) => <PlanetCard key={idx} planet={planet} />)
    )
  };

  useEffect(() => {

    fetch('https://swapi.dev/api/planets/')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setPlanets(data.results);
    });
    return setPlanets([]);

  }, []);

  if (planets.length === 0) return <h1>Loading...</h1>;

  return (
    <div style={rootStyle}>
      <h1 style={{color:'yellow'}}>Star Wars Planets</h1>
      <PlanetList />
    </div>
  )
}


export default StarWarsPlanets;
