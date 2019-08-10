import hotlistTpl from '../views/hot_list.html';
import HomeFetch from '../model/HomeFetch';
// import Bscrool from 'better-scroll';
class HotlistController{
    constructor(){
        this.render();
    }
    async render(){
        let list1 =(await HomeFetch.get()).data['506'];
        // console.log(list);
        let html =template.render(hotlistTpl,{
            list1
        })
        $(".list-hot").html(html);
        // console.log(Bscrool);
        // let bScrool = new Bscrool (".list-hot")
    }
}
export default  HotlistController;