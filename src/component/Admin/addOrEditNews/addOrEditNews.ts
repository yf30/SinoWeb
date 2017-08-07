import * as Vue from 'vue';
import { VueEditor } from 'vue2-editor'

import './addOrEditNews.css';
import adminService from '../adminService';

declare var $:any;

export default Vue.extend({
    template: require('./addOrEditNews.html'),
    mounted(){
        $('header').hide();
        $('.foot').hide();
        
        this['init']();

    },
    
    data(){
        return{
            id:"",
            title:"",
            date:"",
            content:"",
            imgSrc:"",
            img:"",
            adminTi:false,
            adminTit:true,
            adminContent:false,
            adminContents:true
        }
    },
    methods: {
       init(){
           this['id']= this.$route.query;
           this['id']=this['id'].id;
        //    let id=this.$route.query.id;
        //    this['id']=id;
           if(!this['id']){return}
           
           adminService.news.getNewsDetail(this['id']).then(res=>{
                   console.log(res);
                this['title']=res.newsTitle;
                this['content']=res.newsContent;
                this['imgSrc']=adminService.getBaseUrl()+ '/ow/' +res.newImagePath;
                
                this['date']=res.publishDateTime;
           },rej=>{})
        },
        selectFile(e){
            // console.log(e);
            var files = e.target.files;
            this['imgSrc']=files[0]
            // console.log(files[0])
            this['img']=files[0];
            let imgReader=new FileReader();
            imgReader.readAsDataURL(this['img']);
            imgReader.onload=(e)=>{
                var base64=e.target['result'];
                $('#newsImg').attr('src',base64);
            }
        },
        handleAdd(){
            if(this['title']&&this['content']&&this['imgSrc']&&this['img']){
                this['date']=this['date']?this['date']:new Date();
                var dataStr=adminService.transformTime(this['date']);
                let fd=new FormData();
                fd.append('id',this['id']);
                fd.append('publishDateTime',dataStr||"");
                fd.append('newsTitle',this['title']);
                fd.append('newsContent',this['content']);
                fd.append('img',this['img'])
                adminService.news.addNews(fd).then(res=>{
                     // console.log(res);
                    if(res.replyMsg&&res.replyMsg==="新闻新增成功"){
                        this['$alert']('新闻新增成功').then(res=>{
                            this.$router.push('/newsAdmin')
                        })
                    }else{
                        this['$alert'](res.replyMsg||res.errorMessage||'新闻编辑失败')
                    }
                })
            }
        },
        handleEdit(){
            if(this['title']&&this['content']){
                
                var dataStr=adminService.transformTime(this['date']);
                let fd=new FormData();
                fd.append('id',this['id']);
                fd.append('publishDateTime',dataStr||"");
                fd.append('newsTitle',this['title']);
                fd.append('newsContent',this['content']);
                fd.append('img',this['img'])
                adminService.news.editNews(fd).then(res=>{
                    // console.log(res);
                    if(res.replyMsg&&res.replyMsg==="新闻编辑成功"){
                        this['$alert']('新闻编辑成功').then(res=>{
                            this.$router.push('/newsAdmin')
                        })
                    }else{
                        this['$alert'](res.replyMsg||'新闻编辑失败')
                    }
                })
            }
        },
        cancelAdd(){
            this['$confirm']('确认取消编辑新闻吗？').then(confirm=>{
                this.$router.push('/newsAdmin')
            }).catch(e=>{})

            
        }
      
    },
    watch:{
        title:function(){
            if(this['title'].length>50){
                this['adminTi']=true;
            }else if(this['title'].length==0){
                this['adminTi']=false;
                this['adminTit']=true;
            }else{
                this['adminTi']=false;
                this['adminTit']=false;
            }
        },
        content:function(){
            let cont=this['content'].replace(/<[^>]+>/g,"");
            if(cont.length>1000){
                this['adminContent']=true;
            }else if(cont.length==0){
                this['adminContent']=false;
                this['adminContents']=true;
            }else{
                this['adminContent']=false;
                this['adminContents']=false;
            }
        }
    },
    components:{     
        VueEditor
    },
    computed:{
        canAdd:function(){
            return Boolean(this['title']&&this['content']&&this['img'] && !this['adminTi'] && !this['adminContent'])
        },
        canEdit:function(){
            return Boolean(this['title']&&this['content'] && !this['adminTi'] && !this['adminContent'])
        }
    }
})