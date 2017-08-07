import * as Vue from 'vue';
import { VueEditor } from 'vue2-editor'

import './editContact.css';
import adminService from '../adminService';

declare var $:any;

export default Vue.extend({
    template: require('./editContact.html'),
    mounted(){
        $('header').hide();
        $('.foot').hide();
        $('.teatarea-disabled input').attr('disabled',true)
        this['init']();

    },
    
    data(){
        return{
           name:"",
           phone:"",
           company:"",
           date:"",
           content:""
     
        }
    },
    methods: {
       init(){
           this['id']=this.$route.query;
           this['id']=this['id'].id;
           if(!this['id']){return}
           adminService.contact.getMessage(this['id']).then(res=>{
               //console.log(res)
                this['name']=res.contactsPerson;
                this['phone']=res.contactsTelephone;
                this['company']=res.corporateName;
                this['date']=res.createDateTime;
                this['content']=res.content
           },rej=>{})
        }

    },
    components:{     
        VueEditor
    }
})