import PhoneTpl from '../views/phone_more.html'
import phonelistTpl from '../views/phone_list.html'
import PhoneFatch from '../model/PhoneFatch';
class PhoneController{
    constructor(){
        this.render();
    }
    async render(){
        $('#phone').html(PhoneTpl) ;
        let phone =(await PhoneFatch.get()).data.result;
      //   console.log(phone);
        let html =template.render(phonelistTpl,{
            phone
        })
        $(".phone-list").html(html);
    }
}
export default new PhoneController();

