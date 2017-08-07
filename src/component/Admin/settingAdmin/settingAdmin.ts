import * as Vue from 'vue';


import './settingAdmin.css';
import adminService from '../adminService';

declare var $:any;

export default Vue.extend({
    template: require('./settingAdmin.html'),
    mounted(){
       this['username']=window.localStorage.getItem('username');

    },
    
    data(){

        return {
            username:"",
            oldPassword:"",
            newPassword:"",
            newPassword2:""
          
        }
       
    },
    methods: {
        handleChange(){
            if(!this['equal']){
                this['$alert']('两次输入密码不一致，请重新输入');
            }else{
                adminService.setting.editpassWord(this['username'],this['oldPassword'],this['newPassword']).then(res=>{
                    if(res.replyMsg==="密码修改成功"){
                        this['$alert']('密码修改成功,请重新登陆').then(()=>{
                            this.$router.push('login')
                        })
                    }else{
                        this['$alert'](res.replyMsg||"修改密码失败,请输入正确的原始密码")
                    }
                },rej=>{})
            }
        }
    },
    computed:{
        valid:function(){
            return this['oldPassword']&&this['newPassword']&&(this['newPassword']===this['newPassword2'])
        },
        equal:function(){
            return this['newPassword']===this['newPassword2'];
        },
        ok(){
            return Boolean(this['oldPassword']&&this['newPassword']&&this['newPassword2'])
        }
    },
    components:{     
        
    },
    
})

 