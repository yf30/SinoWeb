import * as Vue from 'vue';
import './email.css';
import adminService from '../Admin/adminService';

declare var $:any;

export default Vue.extend({
    template: require('./email.html'),
    data(){
        return {
            ruleForm:{
                tel:"",
                user:"",
                cont:"",
                name:""
            },
            canAdd:true,
            rules:{
                tel:[
                    { required: true, message: '请输入联系电话', trigger: 'blur' },
                    
                    { pattern:/(^(\d{3,4}-)?\d{6,7}\d$)|^(1(3|4|5|7|8)\d{9})$/ ,message:'请输入正确的联系方式', trigger: 'blur' },
                    { min:7,max:11,message:'号码不得超过11位',trigger:'blur'}
                ],
                name:[
                    {required:true, message: '请输入联系人',trigger:'blur'},
                    // {
                    //     pattern: /^[\u4E00-\u9FA5]+$/,///^[\u4E00-\u9FA5]+$/
                    //     message: '用户名只能为中文',
                    //     trigger:'blur'
                    // }
                ],
                cont:[
                    {required:true, message: '请输入联系内容',trigger:'blur'}
                    // {
                    //     min:1,message:'请填写留言内容',trigger:'blur'
                    // }
                ]
            }
            
        }
    },
    mounted(){

    },
    methods: {
        closeEmail(){
            $('#Email').slideUp("slow");
            this['ruleForm'].name="";
            this['ruleForm'].user="";
            this['ruleForm'].tel="";
            this['ruleForm'].cont=""
        },
        addMessages(formName){
            let obj={
                contactsPerson:this['ruleForm'].name,
                corporateName:this['ruleForm'].user,
                contactsTelephone:this['ruleForm'].tel,
                content:this['ruleForm'].cont
            }

            
               
            this.$refs['ruleForm']['validate'](result=>{
                this['canAdd']=false;
                if(result){
                    adminService.contact.addMessage(obj).then(res=>{
                            console.log('res',res.replyMsg);
                        this['$alert'](res.replyMsg).then(result=>{
                            $('#Email').slideUp();
                            this['ruleForm'].name="";
                            this['ruleForm'].user="";
                            this['ruleForm'].tel="";
                            this['ruleForm'].cont="";
                        })
                    })
                }else{
                    this['canAdd']=true;
                    this['$alert']("请填写联系人，联系电话，联系内容").then(result=>{  })
                }
            })
        }

        
    }
})