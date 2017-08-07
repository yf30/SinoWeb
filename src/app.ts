import * as Vue from 'vue';
import header from './component/header/header';
import foot from './component/footer/footer';
import wechatDialogue from './component/wechat/wechat';
import advantagesP from './component/advantagesP/advantagesP';
import email from './component/email/email';

declare var $:any;

export default Vue.extend({
    template: require('./app.html'),
    data() {
        return {
            radio: '1',
            value1: 0
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    mounted:()=> {
        // console.log(this);
    },

    components: {
        'admin-header': header,
        // bottom,
        foot,
        // open,
        wechatDialogue,
        advantagesP,
        email
    }
});