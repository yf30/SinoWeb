import * as Vue from 'vue';
import './showproject.css';

declare var $:any;

export default Vue.extend({
    template: require('./showproject.html'),
    mounted:()=>{
        //项目展示的划线
        var userAgent = navigator.userAgent;
        var section0H=document.getElementById('section1');
        console.log("eew",$(window).height())
        var sectionHeight=$(window).height();
        var topboxHeight=sectionHeight/2+120;
        var topfootHeight=topboxHeight/2-10;
        var topborderHeight = topboxHeight/2+200;
        var arrowTop=topboxHeight/2-99;

        $('#tms-pc').css({'height':topboxHeight/2+'px'});
        $('#csp-pc').css({'height':topboxHeight/2+'px','margin-top':-topboxHeight/8+'px'});
        $('#showprojectCon').css({'height':topboxHeight+'px'});
        $('.none-border1').css({'position':'absolute','top':topfootHeight+'px'});
        $('.none-border2').css({'position':'absolute','top':topfootHeight+'px'});
        $('.none-border3').css({'position':'absolute','top':topborderHeight+'px'});
        $('.none-border4').css({'position':'absolute','top':topborderHeight+'px'});
        $('.none-border5').css({'position':'absolute','top':topborderHeight+'px'});
        $('#arrow-a').css({'margin-top':arrowTop+'px'});
        $('#arrow-c').css({'margin-top':arrowTop+'px'});
    },

    methods: {
        
    }
})