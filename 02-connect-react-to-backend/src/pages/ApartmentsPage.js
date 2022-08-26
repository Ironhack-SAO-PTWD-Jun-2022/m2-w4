import { useEffect, useState } from 'react'
import axios from 'axios';

const ApartmentsPage = () => {
  const [ apartments, setApartments ] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        setApartments(response.data)
      })
      .catch((error) => window.alert('Erro ao conectar na API'));
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>
      {apartments.map((apartment) => {
        return (
          <div key={apartment._id} className="card">
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price: {apartment.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ApartmentsPage;