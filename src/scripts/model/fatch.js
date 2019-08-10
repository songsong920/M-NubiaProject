class Fetch {
      get(){
          return fetch("/api/listmore.json?pageNo=2&pageSise=15")
          .then(response => response.json())
          .then (result=>{
              return result;
          })
      }
  }
  export default new Fetch();