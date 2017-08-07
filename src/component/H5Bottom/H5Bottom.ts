import * as Vue from 'vue';
import './H5Bottom.css';
import { MessageBox } from 'mint-ui';

declare var $:any;

export default Vue.extend({
    template: require('./H5Bottom.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();
        
        // var u=navigator.userAgent;
        // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        //  u.indexOf('iPhone') > -1



    },
    
    data(){
        return{
           isClosed:false,
           selected:'1'
        }
    },
//     created: function () {
//         if(this.$route.fullPath == "./H5News"){
//             localStorage.setItem("selected","1");
//         }
//         this['selected'] = localStorage.getItem("1")
        
//    },
    methods: {
        openH5Wei(){
            $('#H5Wei').css({height:'100%'}).slideDown("slow");
            $('#H5SinoWei').css({height:'100%'}).slideDown("fast");
        },
        kfs(){
             MessageBox({
                title: '将拨打客服电话',
                message: '4008-616-856',
                showCancelButton: true
            }).then(action=>{
                // console.log(action)
                if(action=="confirm"){
                    window.location.href = 'tel:' + '4008-616-856';
                }else{
                    return;
                }
                
            })
        }

        // clickRouterLink(){
        //     //ios中新闻需要在进入页面之前刷新一下
        //     // if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ||  navigator.userAgent.indexOf('iPhone') > -1){
        //     //     $('.mint-loadmore-bottom').css({'margin-bottom':'4em'})
        //     //     location.reload(true);
        //     // } 
        // }
    },
    components:{       
    }
})