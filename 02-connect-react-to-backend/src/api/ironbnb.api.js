import axios from 'axios';

class IronApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ironbnb-m3.herokuapp.com'
    })
  }

  async getApartmentsList () {
    try {
      const { data } = await this.api.get('/apartments');
      return data;
    } catch (error) {
      window.alert('Error while getting apartments data! Please see console.')
      console.log(error);
    }
  }

  async createNewApartment (payload) {
    try {
      await this.api.post('/apartment', payload);
    } catch (error) {
      // window.alert('Error while creating apartments data! Please see console.')
      console.log(error);
    }
  }
}

const ironApi = new IronApi();
export default ironApi;