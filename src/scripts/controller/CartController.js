import cartTpl from '../views/cart.html'
class CartController{
    constructor (){
    }
    render(){
        $("main").html(cartTpl);

    }
}
export default new CartController();