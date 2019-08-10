import partslistTpl from '../views/parts_list.html';
import HomeFetch from '../model/HomeFetch';
// import Bscrool from 'better-scroll';
class PartslistController{
    constructor(){
        this.render();
    }
    async render(){
        let list2 =(await HomeFetch.get()).data['505'];
        // console.log(list2);
        let html =template.render(partslistTpl,{
            list2
        })
        $(".list-parts").html(html);
        // let bScrool = new Bscrool (".list-parts")
    }
}
export default  PartslistController;