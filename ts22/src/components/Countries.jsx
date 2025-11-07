
const Countries = () => {
  const countries = [
    { id: 1, name: "Mexico", image: "/images/mexico.png",numberofspeakers :"+130 milion speakers" },
    { id: 2, name:"colombia" , image: "/images/colombia.png" ,numberofspeakers :"+50 milion speakers" },
    { id: 3, name: "Spain", image: "/images/spain.png" ,numberofspeakers :"+47 milion speakers"  },
    { id: 4, name: "Argentina", image: "/images/argentina.png" ,numberofspeakers :"+50 milion speakers"  },
  ];

  return (
    <section className="ci">
      <div className="container">
         <h2 class="pa-1">Truly Experience Foreign Countries</h2>
            <p class="pa-2">Travel around the world and meet millions of spanish speaking perople</p>
        <div className="city-2">
          {countries.map((country) => (
            <div className="city-1" key={country.id}>
              <img src={country.image} alt={country.name}  />
              <h3>{country.name}</h3>
              <p>{country.numberofspeakers}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
