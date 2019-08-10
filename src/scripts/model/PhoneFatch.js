class PhoneFetch {
    get(){
        return fetch("/api/show/page/searchPhone?cateId=17&productId=0&type=0",{
            method :"get",  
        })
        .then(response => response.json())
        .then (result=>{
            return result;
        })
    }
}

export default new PhoneFetch();
