class CatsApi {
    static getAllCats() {
      return fetch('http://localhost/api/product/read.php').then(response => {
        console.log(response.json())
        return response.json();
      }).catch(error => {
        return error;
      });
    }
}

export default CatsApi;
