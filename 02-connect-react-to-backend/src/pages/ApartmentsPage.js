import { useEffect, useState } from 'react'
// import axios from 'axios';
import ironApi from '../api/ironbnb.api';

const ApartmentsPage = () => {
  const [ apartments, setApartments ] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://ironbnb-m3.herokuapp.com/apartments")
    // ironApi.getApartmentsList()
    //   .then((response) => {
    //     setApartments(response.data)
    //   })
    //   .catch((error) => window.alert('Erro ao conectar na API'));
    const getApartments = async () => {
      const apartmentsList = await ironApi.getApartmentsList();
      setApartments(apartmentsList);
    }
    getApartments();
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