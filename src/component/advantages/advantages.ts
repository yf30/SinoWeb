import * as Vue from 'vue';
import './advantages.css';

declare var $:any;

export default Vue.extend({
    template:require('./advantages.html'),
    mounted:function(){
            $('#advantages1').hover(function(){ 
                $(this).children().stop(false,true);
                $(this).children('#advantages11').fadeIn("slow");
                $(this).children(".advantages1_imgA").animate({left: 360},400);
                $(this).children(".advantages1_imgB").animate({left: 143},400);
                $(this).children(".advantitme2").animate({left: -360},400);
                $(this).children(".advantitme21").animate({left: 0},400);	
            },
            function() {
                $(this).children().stop(false,true);
                $(this).children("#advantages11").fadeOut("slow");
                $(this).children(".advantages1_imgA").animate({left:143},400);
                // $(this).children(".advantages1_imgB").css({display: "none"});
                $(this).children(".advantages1_imgB").animate({left: -75},400);
                $(this).children(".advantitme2").animate({left: 0},400);
                $(this).children(".advantitme21").animate({left:360},400);	
            });

            $('#advantages2').hover(function(){ 
                $(this).children().stop(false,true);
                $(this).children('#advantages11').fadeIn("slow");
                $(this).children(".advantages1_imgA").animate({left: 360},400);
                $(this).children(".advantages1_imgB").animate({left: 143},400);
                $(this).children(".advantitme2").animate({left: -360},400);
                $(this).children(".advantitme21").animate({left: 0},400);	
            },
            function() {
                $(this).children().stop(false,true);
                $(this).children("#advantages11").fadeOut("slow");
                $(this).children(".advantages1_imgA").animate({left:143},400);
                // $(this).children(".advantages1_imgB").css({display: "none"});
                $(this).children(".advantages1_imgB").animate({left: -75},400);
                $(this).children(".advantitme2").animate({left: 0},400);
                $(this).children(".advantitme21").animate({left:360},400);	
            });

            $('#advantages3').hover(function(){ 
                $(this).children().stop(false,true);
                $(this).children('#advantages11').fadeIn("slow");
                $(this).children(".advantages1_imgA").animate({left: 360},400);
                $(this).children(".advantages1_imgB").animate({left: 143},400);
                $(this).children(".advantitme2").animate({left: -360},400);
                $(this).children(".advantitme21").animate({left: 0},400);	
            },
            function() {
                $(this).children().stop(false,true);
                $(this).children("#advantages11").fadeOut("slow");
                $(this).children(".advantages1_imgA").animate({left:143},400);
                // $(this).children(".advantages1_imgB").css({display: "none"});
                $(this).children(".advantages1_imgB").animate({left: -75},400);
                $(this).children(".advantitme2").animate({left: 0},400);
                $(this).children(".advantitme21").animate({left:360},400);	
            });

    },

     methods: {
         openP(index){
             switch(index){
                 case 0:
                    $("#advantages_pics3").hide();
                    $("#advantages_pics2").hide();
                    $("#advantages_pics").show();
                    $("#advantagesP").animate({left:0},300);
                    break;
                 case 1:
                    $("#advantages_pics").hide();
                    $("#advantages_pics3").hide();
                    $("#advantages_pics2").show();
                    $("#advantagesP").animate({left:0},300);
                    break;
                 case 2:
                    $("#advantages_pics").hide();
                    $("#advantages_pics2").hide();
                    $("#advantages_pics3").show();
                    $("#advantagesP").animate({left:0},300);
                 break;
             }
             
         }
        //  openP2(){
        //      $("#advantages_pics2").animate({left:0},300);
        //  },
        //  openP3(){
        //      $("#advantages_pics3").animate({left:0},300);
        //  }

    }
})