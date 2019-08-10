class DetailsFetch{
      get(){
            return fetch(  '/api/show/product/get?productId=760&specId=1138&source=8',{
                  method :'get'
            })
            .then(response =>response.json())
            .then(result=>{
                  return result;
            })
      }
}
export default new DetailsFetch();