import * as Vue from 'vue';
import './tophomeBg.css';

declare var $:any;

export default Vue.extend({
    template: require('./tophomeBg.html'),
    // data(){
        
    // },
    mounted(){
        // this['stop'] = setInterval(() => {
        //     var pics = $('div#tophomebg img');      
        //     var active = pics.filter(".active").length ? pics.filter(".active") : pics.first()  
        //     console.log(active,'active');
        //     var next = active.next().length ? active.next() : pics.first();
        //     active.css({"z-index": 9});
        //     next.css({opacity: 0.5, "z-index": 10}).addClass('active').animate({opacity:1},1080,()=>{
        //         //active.css({'z-index':8});
        //         active.removeClass('active').css({"z-index": 8});
        //     });
        //     // console.log(this.$route);
        //     if(this.$route.fullPath == '/about' || this.$route.fullPath == '/csp' || this.$route.fullPath == '/ccp' || this.$route.fullPath == '/tms'){
        //         clearInterval(this['stop']);
        //         $('div#tophomebg img').first().removeClass('active');
        //     }
        // },5880);   
    },

    data(){
        return{
            stop:null
        }
    },
    methods: {
    },
    props:['parentIndex'],
    watch:{
        'parentIndex':function(){
            // if(this['parentIndex']===0){
            //     clearInterval(this['stop']);
            //     $('div#tophomebg img').attr('style',"");
            // }else{
            //     $('div#tophomebg img').attr('style',"");
            //     this['stop'] = setInterval(() => {
            //         var pics = $('div#tophomebg img');
                
            //         var active = pics.filter(".active").length ? pics.filter(".active") : pics.first();
            //         var next = active.next().length ? active.next() : pics.first();
            //         active.css({"z-index": 9}).removeClass('active').animate({opacity:0},1080);
            //         next.css({opacity: 0.5, "z-index": 10}).addClass('active').animate({opacity:1},1080,()=>{
            //             //active.css({"z-index": 8}); 
            //             active.removeClass('active').css({"z-index": 8});
            //         });
            //         if(this.$route.fullPath == '/about' || this.$route.fullPath == '/csp' || this.$route.fullPath == '/ccp' || this.$route.fullPath == '/tms'){
            //             clearInterval(this['stop']);
            //         }
            //     },5880);
            // }
            
        }
    }
})