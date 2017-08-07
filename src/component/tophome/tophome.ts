import * as Vue from 'vue';
import './tophome.css';

declare var $:any;

export default Vue.extend({
    template: require('./tophome.html'),
    data(){
        return{
            imgs:[],
            showImg:'../../img/homebj1.jpg',
            showIndex:0,
            show:true
        }
    },
    mounted(){
        var userAgent = navigator.userAgent;
        var section0H=document.getElementById('section0');
        console.log("ee",$(window).height())
        var sectionHeight=$(window).height();
        var topboxHeight=(sectionHeight/2)-335;
        var topfootHeight=sectionHeight-290;
        $('.topfoot').css({'margin-top':topfootHeight+'px'});
        $('.top-box-top').css({'top':topboxHeight+'px'})

        // if(sectionHeight<=842){//谷歌build的
        //     $('.topfoot').css({'margin-top':'550px'});
        //     $('.top-box-top').css({'top':'90px'})
        // }
        // if(sectionHeight>842 && sectionHeight<=859){//谷歌build后的
        //     $('.topfoot').css({'margin-top':'568px'});
        //     $('.top-box-top').css({'top':'100px'})
        // }
        // if(sectionHeight>859 && sectionHeight<=906){//搜狗
        //     $('.topfoot').css({'margin-top':'612px'});
        //     $('.top-box-top').css({'top':'122px'})
        // }
        // if(sectionHeight>906 && sectionHeight<=915){//360
        //     $('.topfoot').css({'margin-top':'640px'});
        //     $('.top-box-top').css({'top':'126px'});
        // }
        // if(sectionHeight<=926 && sectionHeight>906){//谷歌build的
        //     $('.topfoot').css({'margin-top':'650px'});
        //     $('.top-box-top').css({'top':'100px'})
        // }
        // if(sectionHeight>926 && sectionHeight<=931){//qq的IE模式
        //     $('.topfoot').css({'margin-top':'679px'});
        //     $('.top-box-top').css({'top':'110px'})
        // }
        // if(sectionHeight==939){//qq
        //     $('.topfoot').css({'margin-top':'664px'});
        //     $('.top-box-top').css({'top':'138px'});
        // }
        // if(sectionHeight==945){//谷歌dev上的
        //     $('.topfoot').css({'margin-top':'670px'});
        //     $('.top-box-top').css({'top':'100px'})
        // }

        // if(sectionHeight==952){//ie
        //     $('.topfoot').css({'margin-top':'683px'});
        //     $('.top-box-top').css({'top':'148px'});
        // }
        
        // if(sectionHeight==968){//IE
        //     $('.topfoot').css({'margin-top':'658px'});
        //     $('.top-box-top').css({'top':'172px'});
        // }
        // if(sectionHeight==969){//谷歌
        //     $('.topfoot').css({'margin-top':'670px'});
        //     $('.top-box-top').css({'top':'140px'});
        // }

    },
    methods: {
        
    }
})