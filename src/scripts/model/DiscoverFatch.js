class DiscoverFetch {
    get(){
        return fetch("/api/viewnews.php?isAjax=1&page2",{
            method :"get",  
        })
        .then(response => response.json())
        .then (result=>{
            return result;
        })
    }
}

export default new DiscoverFetch();
