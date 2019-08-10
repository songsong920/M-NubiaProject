class PartsFetch {
      get(){
          return fetch("/api/show/page/searchAcc?cateId=18&productId=0&type=0",{
              method :"get",  
          })
          .then(response => response.json())
          .then (result=>{
              return result;
          })
      }
  }
  
  export default new PartsFetch();
  