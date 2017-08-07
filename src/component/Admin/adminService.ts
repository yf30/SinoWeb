import * as Vue from 'vue';
import  VueResource from "vue-resource";
import adminRoutes from './adminRouteService';
declare var $:any;

var adminUrl='http://192.168.0.124:333/ow/';
// var adminUrl='/ow';

var adminService = {
    getBaseUrl(){
        return adminRoutes.adminUrl.slice(0,-3);
    },
    setLoginCookie(username,password){
        document.cookie="ow-login-username="+username;
        document.cookie="ow-login-password="+password;
    },
    getLoginCookie(){
       var cookie=document.cookie;
       let cookieList=cookie.split(';');
       let usernameCookie=cookieList.filter(item=>{return item.indexOf('ow-login-username=')>=0})[0];
       let username=usernameCookie?usernameCookie.split('=')[1]:"";
       let pswCookie=cookieList.filter(item=>{return item.indexOf('ow-login-password=')>=0})[0];
       let psw=pswCookie?pswCookie.split('=')[1]:"";

       return username&&psw?{username:username,password:psw}:null;
      
    },
    /**
     * 转换时间
     */
    transformTime(time: any, type?: any) {
        if(time==""||time==null||time=="0001-01-01 00:00:00"){return ""};
        var type = type || "yyyy-MM-dd HH:mm:ss"
        var t = new Date(time);
        var tf = function (i) { return (i < 10 ? '0' : '') + i };
        var ty=function(i){
            var tempStr;
            if(i<10){tempStr='000'+i}
            else if(i<100){tempStr='00'+i;}
            else if(i<1000){tempStr='0'+i}
            else{tempStr=i};
            return tempStr;
        }
        return type.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                    return ty(t.getFullYear());
                case 'MM':
                    return tf(t.getMonth() + 1);
                case 'mm':
                    return tf(t.getMinutes());
                case 'dd':
                    return tf(t.getDate());
                case 'HH':
                    return tf(t.getHours());
                case 'ss':
                    return tf(t.getSeconds());
            }
        });
    },
    
    news:{
        getNewsList(startDateTime,endDateTime,NewsTitle,PageSize,CurPage){
            Vue.use(VueResource);
            var url=adminRoutes.news.getNewsList(startDateTime,endDateTime,NewsTitle,PageSize,CurPage);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
         getAllNews(){
             Vue.use(VueResource);
            var url=adminRoutes.news.getAllNews();
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
        delNews(id){
            Vue.use(VueResource);
            var url=adminRoutes.news.delNews(id);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
        getNewsDetail(id){
            Vue.use(VueResource);
            var url=adminRoutes.news.getNewsDetail(id);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
         addNews(newsObj){
            Vue.use(VueResource);
            var url=adminRoutes.news.addNews();
            return Vue['http'].post(url,newsObj,{
                //  headers: {
                //     // "content-type": "application/json"
                
                //     "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }
            ).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
        },
        editNews(newsObj){
            Vue.use(VueResource);
            var url=adminRoutes.news.editNews();
            return Vue['http'].post(url,newsObj,{
                //  headers: {
                //     // "content-type": "application/json"
                
                //     "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }
            ).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         }
     },
     recruit:{
         getRecruitList(startDateTime,endDateTime,NewsTitle,PageSize,CurPage){
            Vue.use(VueResource);
            var url=adminRoutes.recruit.getRecruitList(startDateTime,endDateTime,NewsTitle,PageSize,CurPage);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
        },
        getAllRecruitsList(){
            Vue.use(VueResource);
            var url=adminRoutes.recruit.getAllRecruitsList();
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },

        getRecruitDetail(id){
            Vue.use(VueResource);
            var url=adminRoutes.recruit.getRecruitDetail(id)
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },

         delRecruit(id){
            Vue.use(VueResource);
            var url=adminRoutes.recruit.delRecruit(id);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
        },
        addRecruit(obj){
            Vue.use(VueResource);
            var url=adminRoutes.recruit.addRecruit();
            return Vue['http'].post(url,obj,{
                //  headers: {
                // "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
        },
        editRecruit(obj){
            Vue.use(VueResource);
            var url=adminRoutes.recruit.editRecruit();
            return Vue['http'].post(url,obj,{
                //  headers: {
                // "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
        }
     },
     contact:{
        getMessageList(startDateTime,endDateTime,ContactsPerson,ContactsTelephone,PageSize,CurPage){
             Vue.use(VueResource);
            var url=adminRoutes.contact.getMessageList(startDateTime,endDateTime,ContactsPerson,ContactsTelephone,PageSize,CurPage);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
        delMessage(id){
            Vue.use(VueResource);
            var url=adminRoutes.contact.delMessage(id);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
         getMessage(id){
            Vue.use(VueResource);
            var url=adminRoutes.contact.getMessage(id);
            return Vue['http'].get(url,{},{
                 headers: {
                "X-Requested-With": "XMLHttpRequest"
                },
                emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
         addMessage(obj){
             Vue.use(VueResource);
            var url=adminRoutes.contact.addMessage();
            return Vue['http'].post(url,obj,{
                //  headers: {
                // "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         },
        getUnCount(){
             Vue.use(VueResource);
            var url=adminRoutes.contact.getUnCount();
            return Vue['http'].get(url,{
                //  headers: {
                // "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         }
     },
     setting:{
         editpassWord(UserName,UserPwd,NewPwd){
            Vue.use(VueResource);
            var url=adminRoutes.setting.editpassWord(UserName,UserPwd,NewPwd)
            return Vue['http'].post(url,{},{
                //  headers: {
                // "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })

         },
         login(loginObj){
            Vue.use(VueResource);
            var url=adminRoutes.setting.login();
            return Vue['http'].post(url,loginObj,{
                //  headers: {
                // "X-Requested-With": "XMLHttpRequest"
                // },
                // emulateJSON: true
            }).then(function(response){
                return response.data;
            },function(rej){
                return rej
            })
         }
     }
 }

 export default adminService;