import * as Vue from 'vue';


import './loginAdmin.css';
import adminService from '../adminService';

declare var $:any;

export default Vue.extend({
    template: require('./loginAdmin.html'),
    mounted(){
        //在初始化之前销毁fullpage
        if (typeof $.fn.fullpage.destroy == 'function') { 
            $.fn.fullpage.destroy('all');
        }
        
        $('header').hide();
        $('.foot').hide();
        $('.ad-nav li').click(function(e){
            $(this).addClass('ad-active');
            $(this).siblings().removeClass('ad-active')
        })
        var width=$('.login-bg').height()*1120/950;
        $('login-bg').width(width);
        let loginObj=adminService.getLoginCookie();
        if(loginObj){
            this['username']=loginObj.username;
            this['password']=loginObj.password;
            // this['login']();
        }


    },
    
    data(){
        return{
            username:"",
            password:"",
            rules: {
               
            },
            remenber:false
           
        }
    },
    methods: {
        login(){
                if(!(this['username']&&this['password'])){
                    // alert('fra')

                    this['$alert']('请输入用户名和密码');
                }else{
                    if(this['remenber']){
                        adminService.setLoginCookie(this['username'],this['password'])
                    }
                    let loginObj={
                        userName:this['username'],
                        password:this['password']
                    }
                    adminService.setting.login(loginObj).then(res=>{
                        if(res.userName){
                            this.$router.push({name:"admin"});
                            window.localStorage.setItem('username',res.userName);
                            
                        }else{
                            this['$alert']('用户名或密码错误');
                        }
        
                    })
                }
        },
        toggleCheck(){
                $('.login-check').toggleClass('login-checked');
                this['remenber']=!this['remenber'];
        }
      
    },
    components:{     
      
    }
})