

class ProductApi {
    static url = 'http://localhost:90/apiTest/';
    static createProduct(product) {
      const request = new Request(`{url}/product/create.php`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({product: product})
      });
  
  
      return fetch(request).then((res) => res.json()).then(response => {
        return response;
      }).catch(error => {
        return error;
      });
    }
  
}
  
export default ProductApi;
  