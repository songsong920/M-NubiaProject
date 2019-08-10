import detailsTpl from '../../details.html'
import DetailsFetch from '../model/DetailsFetch'
class DetailsController{
    constructor (){
      this.render();
    }
  async  render(){
        $("#details").html(detailsTpl);
        let details = (await DetailsFetch.get()).data;
      //   console.log(details);
      //   let html = template.render(detailsTpl,{
      //       html
      //   })
      // $('.contents').html(html);
    }
}
export default new DetailsController();