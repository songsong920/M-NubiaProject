import discoverTpl from '../views/discover.html'
import discoverlistTpl from '../views/discover_list.html';
import DiscoverFatch from '../model/DiscoverFatch'
class DiscoverController{
    constructor (){
    }
   async render(){
        $("main").html(discoverTpl);
        let list3 = (await DiscoverFatch.get()).data;
        // console.log(list3)
        let html =template.render(discoverlistTpl,{
            list3
        })
        $(".news-list").html(html);
    }
    
}
export default new DiscoverController();

