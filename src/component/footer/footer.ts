import * as Vue from 'vue';
import './footer.css';

declare var $:any;

export default Vue.extend({
    template: require('./footer.html'),
    mounted(){
        $('#moveDown').click(function(){
            $.fn.fullpage.moveSectionDown();
        })
    },
    methods: {
    }
})