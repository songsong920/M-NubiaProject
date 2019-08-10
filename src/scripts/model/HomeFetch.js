class HomeFetch {
    get(){
        return fetch("/api/show/page/block?pageType=5",{
            method :"get",  
        })
        .then(response => response.json())
        .then (result=>{
            return result;
        })
    }
}

export default new HomeFetch();