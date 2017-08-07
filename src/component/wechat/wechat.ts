import * as Vue from 'vue';
import './wechat.css';

declare var $:any;

export default Vue.extend({
    template: require('./wechat.html'),
    // data(){
        
    // },
    mounted(){
        
    },
    methods: {
        closeWeChat(){
            $('#weChat').slideUp("slow");
            $('#sinoWeChat').slideUp("slow");
        }
    }
})