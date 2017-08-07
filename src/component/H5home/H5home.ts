import * as Vue from 'vue';
import H5header from '../H5header/H5header';
import H5bottom from '../H5Bottom/H5Bottom';
import H5Wei from '../H5Wei/H5Wei';
// import { Swipe, SwipeItem } from 'mint-ui';
import './H5home.css';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

//import { Swipe, SwipeItem } from 'c-swipe';
// require('c-swipe/dist/swipe.css');
// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);

import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './bootstrap-touch-slider.css';
import './bootstrap-touch-slider.js';
import './bootstrap-touch-slider-min.js';

declare var $:any;

export default Vue.extend({
    template: require('./H5home.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }

        $('#bootstrap-touch-slider').bsTouchSlider();

        // $('#homeH5Slider').addClass('homeH5Sli');
        
        // document.querySelector("#homeH5Bg").addEventListener('touchstart', function(e) { 
        //     // $('#homeH5Slider').addClass('homeH5Sli');
        //     // $('.c-swipe').addClass('homeH5Bgs')
        //     var touch = e.targetTouches[0];
        //     this['startPos'] = {x:touch.screenX,y:touch.screenY,time:+new Date};      
        // }, false);

        // document.querySelector("#homeH5Bg").addEventListener('touchmove',function(e){
        //     // $('#homeH5Slider').addClass('homeH5Sli')
        //     var touchs = e.targetTouches[0];
        //     var endPos = {x:touchs.screenX - this['startPos'].x,y:touchs.screenY - this['startPos'].y};
        //     this['isScrolling'] = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1:0;  
        //     if(this['isScrolling'] === 0){ //当为水平滚动时
        //         console.log("xxx")
        //         $('.c-swipe').removeClass('homeH5Bgs');
        //          $('#homeH5Slider').removeClass('homeH5Sli');
                
        //     // document.querySelector("#homeH5Bg").addEventListener('touchstart', function(e) { 
        //     //     // $('#homeH5Slider').addClass('homeH5Sli');
        //     //     // $('.c-swipe-item').css({transform:'none'})
        //     //     //$('.c-swipe').addClass('homeH5Bgs')
        //     // }, false);
        //     }
        //     if(this['isScrolling']===1){
        //         console.log("yyy")
        //         $('#homeH5Slider').addClass('homeH5Sli');
        //         $('.c-swipe').addClass('homeH5Bgs')
        //     }  

            

        // },false);

        // document.querySelector("#homeH5").addEventListener('touchmove',function(e){
        //     if(this['isScrolling']===1){
        //         $('#homeH5Slider').addClass('homeH5Sli')
        //     }   
        // },false);

    },
    
    data(){
        return{
           index:0,
           auto:true,
           interval:null,
           time:3000,
           startPos:{
               x:0,
               y:0
           },
           isScrolling:0
        }
    },
    methods: {
        // $init(){
        // // 自动轮播
        // this['autoChange'](this['time']);
        // },
        // autoChange(time){
        //     if(time==0) return;
        //     this['interval'] = setInterval(() => {
        //         this.$emit("input",this['rightIndex'])
        //     }, time);
        // }
    },
    components:{     
       'H5header': H5header, 
       'H5bottom': H5bottom,
       'H5Wei':H5Wei
    }
})