import positionListTpl from '../views/position_list.html'
import Fatch from '../model/fatch'
class PositionController{
    constructor(){
        this.render()
    }
    async render(){
        let list =(await Fatch.get()).content.data.page.result
        let html =template.render(positionListTpl,{
            list
        })
        document.querySelector('.list').innerHTML = html 
    }
}
export default PositionController