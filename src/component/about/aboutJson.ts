import * as Vue from 'vue';
import  VueResource from "vue-resource";

 var dataService = {
    upload  () {
        Vue.use(VueResource);
       
        return Vue['http'].get('./news.json', {}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            // var data = response.data['data'];
            //  console.log('responsed',response.data);
            return response.data;
        }, function(response) {
            return response;
        })
     },
    /**
     * 
     * @param startIndex 新闻消息的起始index;
     * @param listLength 获取消息的条数，可以不传，默认是5;
     */
    getNewslist(startIndex,listLength=5){
        Vue.use(VueResource);
        
        return Vue['http'].get('./news.json', {}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            var newList= response.data.newsH5;
            var newsLength=newList.length;
            if(startIndex>newsLength){
                return [];
            }else if(startIndex+listLength>=newsLength){
                return newList.slice(startIndex);
            }else{
                return newList.slice(startIndex,startIndex+listLength);
            }

        }, function(response) {
            return response;
        })
    },
    /**
     * 
     * @param id 新闻id；
     * 返回一个数组;
     */
    getH5NewsById(id){
        Vue.use(VueResource);
        
        return Vue['http'].get('./news.json', {}, {
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
            emulateJSON: true
        }).then(function(response) {
            var newList= response.data.newsH5;
            return newList.filter(item=>{
                return item.id==id;
            })
            

        }, function(response) {
            return response;
        })
    }




}

export default dataService
  