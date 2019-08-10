import indexTpl from '../views/index.html'
import PartslistController from './PartslistController'
import HotlistController from './HotlistController'
import HomeController from './HomeController'
import ClassifyController from './ClassifyController'
import ProfileController from './ProfileController'
import DiscoverController from './DiscoverController'
import CartController from './CartController'
new HotlistController();
class IndexController {
      constructor() {
            this.render();
            this.bindTabbarEvt();
            this.bindHashChange();
            this.components = {
                  home: HomeController,
                  classify: ClassifyController,
                  discover: DiscoverController,
                  cart: CartController,
                  profile: ProfileController,
            }
      }
      render() {
            $('#nubia').html(indexTpl);
      }
      //改变哈希值
      bindHashChange() {
            $(window).on("hashchange", () => {
                  // console.log(1)
                  let hash = location.hash && location.hash.substr(1) || "home";
                  // console.log(hash)
                  this.setTabActive(hash);
                  this.renderMain(this.components[hash]);
                  new HotlistController();
                  new PartslistController();
            })
            $(window).on("load", () => {
                  let hash = location.hash && location.hash.substr(1) || "home";
                  location.hash = hash;
                  this.renderMain(this.components[hash])
                  this.setTabActive(hash);
                  new HotlistController();
                  new PartslistController();
            })
      }
      //首页渲染
      renderMain(controller) {
            controller.render();
            this.banner();
      }
      //选项卡高亮显示
      setTabActive(hash) {
            // let hash = location.hash.substr(1);
            $(`footer li[data-hash=${hash}]`).addClass('active').siblings().removeClass('active')
      }
      // 选项卡切换
      bindTabbarEvt() {
            $('footer li').on('tap', function () {
                  let dataHash = $(this).attr("data-hash");
                  location.hash = dataHash;
            })
      }
      //轮播图
      banner() {
            var mySwiper = new Swiper(".swiper-container", {
                  autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                  }, //每2秒中轮播一次
                  loop: true,//--可以让图片循环轮播
                  effect: 'slide',//在点击之后可以继续实现轮播
                  pagination: {
                        el: '.swiper-pagination',
                        clickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                  },//--让小圆点显示
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
            });
      }
}
export default new IndexController();