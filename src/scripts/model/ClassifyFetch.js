class ClassifyFetch {
      get(){
          return fetch("/api/show/page/fetch/cateInfos",{
              method :"get",  
          })
          .then(response => response.json())
          .then (result=>{
              return result;
          })
      }
  }
  
  export default new ClassifyFetch();
  