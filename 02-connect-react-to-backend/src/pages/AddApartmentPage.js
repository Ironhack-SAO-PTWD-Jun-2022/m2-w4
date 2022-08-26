import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddApartmentPage = () => {
  const [headline, setHeadline] = useState('');
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      title: headline,
      pricePerDay: price,
    }

    axios
      .post('https://ironbnb-m3.herokuapp.com/apartments', body)
      .then(() => {
        // em caso de resposta positiva/sucesso
        
        // limpa o formulário
        setHeadline('');
        setPrice(0);

        // navigate funciona como um <Link to='/'>
        navigate('/');
      })
      .catch((error) => window.alert('Erro ao enviar apartamento para a API'))
  };

  return (
    <div>
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type='text'
            name='headline'
            onChange={(e) => setHeadline(e.target.value)}
            value={headline}
          />
        </div>

        <div>
          <label>Price Per Day</label>
          <input
            type='number'
            name='price'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>

        <button type='submit'>Create Apartment</button>
      </form>
    </div>
  )
}


export default AddApartmentPage;
