import PartsTpl from '../../parts.html'
import phonelistTpl from '../views/parts_more_list.html'
import PartsFetch from '../model/PartsFetch';
class PhoneController{
    constructor(){
        this.render();
    }
    async render(){
        $('#parts').html(PartsTpl) ;
        let parts =(await PartsFetch.get()).data.result;
      //   console.log(parts);
        let html =template.render(phonelistTpl,{
            parts
        })
        $(".parts-list").html(html);
    }
}
export default new PhoneController();
