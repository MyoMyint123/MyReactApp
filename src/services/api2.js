

class ProductApi {

    static createProduct(product) {
      const request = new Request('http://localhost:90/apiTest/product/create.php', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }), 
        body: JSON.stringify({product: product})
      });
  
  
      return fetch(request).then(response => {
        return response;
      }).catch(error => {
        return error;
      });
    }
  
}
  
export default ProductApi;
  