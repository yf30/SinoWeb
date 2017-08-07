import * as Vue from 'vue';
import './advantagesP.css';

declare var $:any;

export default Vue.extend({
    template: require('./advantagesP.html'),
    // data(){
        
    // },
    mounted(){
            $('.advantages_closed').click(function(){   
                $("#advantagesP").animate({left:1920},300);    
                // $("#advantages_pics2").animate({left:1920},300);    
                // $("#advantages_pics3").animate({left:1920},300);           
                //// $('#advantages_pics').slideUp(300);
                //// $('#advantages_pics2').slideUp(300);
                //// $('#advantages_pics3').slideUp(300);
               
            });
    },
    methods: {
        
    }
})