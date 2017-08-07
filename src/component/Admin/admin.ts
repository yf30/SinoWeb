import * as Vue from 'vue';


import './admin.css';
import adminService from './adminService';


declare var $:any;

export default Vue.extend({
    template: require('./admin.html'),
    mounted(){
        $('header').hide();
        $('.foot').hide();
        // $('.ad-nav li').click(function(e){
        //     $(this).addClass('ad-active');
        //     $(this).siblings().removeClass('ad-active')
        // })
        this['userName']=window.localStorage.getItem('username');
        if(!this['userName']){
            this['$alert']('未登录，请重新登陆').then(res=>{
                this.$router.push('login');
            })
        }
        // console.log(this.$route.path);
        adminService.contact.getUnCount().then(res=>{
            console.log('frefrwfr',res)
            this['unCount']=res.unCount;
        })

    },
    
    data(){
        return{
           userName:"",
           unCount:0,
           
        }
    },
    methods: {
        logout(){
            this.$router.push('login');
            window.localStorage.removeItem('username');
        },
        to_set(){
            this.$router.push('setting');
        },
        getUnCount(uncont){
            this['unCount']=uncont
        }
    },
    components:{     
      
    },
    computed: {
        isNews:function(){
            return this.$route.path.indexOf('ews')>0;
        },
        isRecruit:function(){
            return this.$route.path.indexOf('ecruit')>0;
        },
        isContact:function(){
            return this.$route.path.indexOf('ontact')>0;
        },
        isSetting:function(){
            return this.$route.path.indexOf('set')>0;
        },
        show_badage:function(){
            return this['unCount']!=0;
        }
    },
    watch:{
        "$route":function(){
            if(window.location.href.indexOf('editContact')>-1){
                adminService.contact.getUnCount().then(res=>{
                    console.log('frefrwfr',res)
                    this['unCount']=res.unCount;
                })
            }
        }
    }
})