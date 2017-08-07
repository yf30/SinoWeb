import * as Vue from 'vue';
import './H5Wei.css';

declare var $:any;

export default Vue.extend({
    template: require('./H5Wei.html'),
    // data(){
        
    // },
    mounted(){
        
    },
    methods: {
        closeH5Wei(){
            $('#H5Wei').slideUp();
            $('#H5SinoWei').slideUp();
        }
    }
})