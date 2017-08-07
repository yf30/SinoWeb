import * as Vue from 'vue';
import H5header from '../H5header/H5header';
import H5bottom from '../H5Bottom/H5Bottom';
import H5Wei from '../H5Wei/H5Wei';
import './H5Job.css';

import adminService from '../Admin/adminService';


declare var $:any;

export default Vue.extend({
    template: require('./H5Job.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }

        adminService.recruit.getAllRecruitsList().then((res)=>{
            console.log('res',res.recruitList)
            this['newsH5Date']=res.recruitList.reverse();
            this['newsH5Date'].forEach(ele=>{
                ele.requirements=ele.requirements.replace(/<img(.|\n)*>/g,"");
                ele.postResponsibility=ele.postResponsibility.replace(/<img(.|\n)*>/g,"");
            });   
        });


        let divobj=document.getElementById("firstpane");
        let imgs = divobj.getElementsByTagName('img')
        if(imgs.length == 0){
            console.log ("m",true);
        }else{
            console.log('3')
        }


    $("#firstpane .menu_body:eq(0)").show();
	$("#firstpane h3.menu_head").click(function(){
        //右侧加减号更换
        if($(this).next('div.menu_body').css('display')=='none'){
            $(this).removeClass('currentImg2')
            $(this).addClass('currentImg')
        }
       if($(this).next('div.menu_body').css('display')!='none'){
            $(this).removeClass('currentImg')
            $(this).addClass('currentImg2')
        }
        
		$(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
	});

	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane h3.menu_head").mouseover(function(){
		$(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
	});


    },
    
    data(){
        return{
           newsH5Date:[],
           newsH5Dates:[]
        }
    },
    methods: {
    },
    components:{     
       'H5header': H5header,
       'H5bottom': H5bottom,
       'H5Wei':H5Wei
    }
})