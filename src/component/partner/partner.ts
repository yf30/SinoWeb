import * as Vue from 'vue';
import './partner.css';
import './utils.js'

declare var $:any;
declare var parallax:any
var parallax = require('./parallax.js')
// var parallax = require("../../../node_modules/parallax.js/src/parallax.js");
export default Vue.extend({
    template: require('./partner.html'),
    mounted:()=>{
        
        var viewport = document.getElementById("parallax");
        var pic1 = document.getElementById("ju_pic1");
        var pic2 = document.getElementById("ju_pic2");
        var pic3 = document.getElementById("ju_pic3");
        var pic4 = document.getElementById("ju_pic4");

        var view = parallax.init(viewport);

        view.add(pic1, parallax.uniform2(0.5,0));
        view.add(pic2, parallax.uniform2(0.8,0));
        view.add(pic3, parallax.uniform2(0.4,0));
        view.add(pic4, parallax.uniform2(0.5,0));

   
    },
    // data() {
    //     return {
    //         form: {
    //             name: '',
    //             region: '',
    //             date1: '',
    //             date2: '',
    //             delivery: false,
    //             type: [],
    //             resource: '',
    //             desc: ''
    //         }
    //     }
    // },
    
    methods: {

    }
})