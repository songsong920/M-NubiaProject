import homeTpl from '../views/index.html'
class HomeController{
    constructor (){
    }
    render(){
        $("main").html(homeTpl);
    }
}
export default new HomeController();
