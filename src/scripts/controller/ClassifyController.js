import classifyTpl from '../views/classify.html'
import classifylistTpl from '../views/classify_list.html';
import ClassifyFetch from '../model/ClassifyFetch';
class ClassifyController{
    constructor (){
    }
  async  render(){
        $("main").html(classifyTpl);
        let data =(await ClassifyFetch .get()).data.result;
        console.log(data);
        let html = template.render(classifylistTpl,{
              data
        })
      
        $(".page-index").html(html);
    }
}
export default new ClassifyController();