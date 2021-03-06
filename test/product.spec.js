const { default: axios } = require("axios");

describe('/api/products', () => {

  it('should return product data', async () => {
    try {
      const response = await axios.get('https://reqres.in/api/products');
      const { data } = response;
      expect(data.data.length).toBe(3);
    } catch (error) {
      expect(error).toBe(null);
    }
  })

});
