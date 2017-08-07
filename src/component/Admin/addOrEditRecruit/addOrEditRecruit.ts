import * as Vue from 'vue';
import { VueEditor } from 'vue2-editor'

import './addOrEditRecruit.css';
import adminService from '../adminService';

declare var $:any;

export default Vue.extend({
    template: require('./addOrEditRecruit.html'),
    mounted(){
        $('header').hide();
        $('.foot').hide();

        this['init']();

    },
    
    data(){
        return{
            id:"",
            job:"",
            number:"",
            date:"",
            duty:"",
            requirements:"",
            isRequirements:false,
            isDuty:false,
            adminJob:false,
            adminNumber:false
        }
    },
    methods: {
        init(){
           this['id']=this.$route.query;
           this['id']=this['id'].id;
           if(!this['id']){return}
           adminService.recruit.getRecruitDetail(this['id']).then(res=>{
                this['job']=res.recruitPost;
                this['number']=res.recruitNum;
                this['date']=res.createDateTime;
                this['duty']=res.postResponsibility;
                this['requirements']=res.requirements;
                
                
           },rej=>{})
        },
        handleAdd(){
            let obj={
                publishDateTime:adminService.transformTime(this['date']),
                recruitPost:this['job'],
                recruitNum:this['number'],
                postResponsibility:this['duty'],
                requirements:this['requirements']
            }
            adminService.recruit.addRecruit(obj).then(res=>{
                if(res.replyMsg&&res.replyMsg==="招聘信息新增成功"){
                    this['$alert']("招聘信息新增成功").then(result=>{
                        this.$router.push('recruitAdmin')
                    })
                }else{
                    this['$alert'](res.replyMsg||"招聘信息新增失败").then(result=>{
                    })
                }
            })
        },
        handleEdit(){
            let obj={
                id:this['id'],
                publishDateTime:adminService.transformTime(this['date']),
                recruitPost:this['job'],
                recruitNum:this['number'],
                postResponsibility:this['duty'],
                requirements:this['requirements']
            }
            adminService.recruit.editRecruit(obj).then(res=>{
                if(res.replyMsg&&res.replyMsg==="招聘信息编辑成功"){
                    this['$alert']("招聘信息编辑成功").then(result=>{
                        this.$router.push('recruitAdmin')
                    })
                }else{
                    this['$alert'](res.replyMsg||"招聘信息编辑失败").then(result=>{
                    })
                }
            })
        },
        cancelAdd(){
             this['$confirm']("确认取消编辑招聘信息吗").then(result=>{this.$router.push('recruitAdmin')}).catch(e=>{})
        }
    },
    watch:{ 
       job:function(){
           if(this['job'].length>50){
               this['adminJob']=true
           }else{
               this['adminJob']=false
           }
       },
       number:function(){
           if(this['number'].search("^[0-9]*[1-9][0-9]*$")){
               this['adminNumber']=true
           }else{
               this['adminNumber']=false
           }
       },
       requirements:function(){
            let requirement=this['requirements'].replace(/<[^>]+>/g,"");
            if(requirement.length>500){
                this['isRequirements']=true;
            }else{
                this['isRequirements']=false;
            }
        },
        duty:function(){
            let dutys=this['duty'].replace(/<[^>]+>/g,"");
            if(dutys.length>500){
                this['isDuty']=true;
            }else{
                this['isDuty']=false;
            }
        }
        
    },
    computed:{
        canAdd:function(){
            return Boolean(this['job']&&this['number']&&this['duty']&&this['requirements'] && !this['isDuty'] && !this['isRequirements'] && !this['adminJob'] && !this['adminNumber'])
        },
        canEdit:function(){
            return Boolean(this['job']&&this['number']&&this['duty']&&this['requirements'] && !this['isDuty'] && !this['isRequirements'] && !this['adminJob'] && !this['adminNumber'])
        }
    },
    components:{     
        VueEditor
    }
})