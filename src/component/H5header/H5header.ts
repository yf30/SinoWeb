import * as Vue from 'vue';
import '../../../node_modules/mint-ui/lib/index.js';
import '../../../node_modules/mint-ui/lib/style.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './H5header.css';
import { MessageBox } from 'mint-ui';

declare var $:any;

export default Vue.extend({
    template: require('./H5header.html'),
    mounted(){
        //隐藏掉pc端的头部，底部
        $('header').hide();
        $('.foot').hide();

        $('.hamburger').click(function(){ 
            if(this.isClosed==true){
                $('.H5headerR').removeClass('H5headerRClose');
                $('#H5HeaderOpen').hide();
                $('.hamburger').removeClass('is-open');
                $('.hamburger').addClass('is-closed');
                this.isClosed = false;
            }else{
                $('.H5headerR').addClass('H5headerRClose');
                $('#H5HeaderOpen').show();
                $('.hamburger').addClass('is-open');
                $('.hamburger').removeClass('is-closed');
                this.isClosed = true;
            }
        })

       

    },
    
    data(){
        return{
           isClosed:false
        }
    },
    methods: {
        kf(){
             MessageBox({
                title: '将拨打客服电话',
                message: '4008-616-856',
                showCancelButton: true
            }).then(action=>{
                // console.log(action)
                if(action=="confirm"){
                    window.location.href = 'tel:' + '4008-616-856';
                }else{
                    return;
                }
                
            })
        }
    },
    components:{     
        
    }
})