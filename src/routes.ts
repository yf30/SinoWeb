import Home from './component/home/home';
import CSP from './component/csp/csp';
import TMS from './component/tms/tms';
import CCP from './component/ccp/ccp';
import About from './component/about/about';

import H5Home from './component/H5home/H5home';
import H5Csp from './component/H5Csp/H5Csp';
import H5Tms from './component/H5Tms/H5Tms';
import H5Ccp from './component/H5Ccp/H5Ccp';
import H5About from './component/H5About/H5About';
import H5Cooperate from './component/H5Cooperate/H5Cooperate';
import H5News from './component/H5News/H5News';
import H5Job from './component/H5Job/H5Job';
import H5NewsDetail from './component/H5NewsDetail/H5NewsDetail'

/**
 * 后台管理组件
 */
import AdminComponent from './component/Admin/admin';
import newsAdmin from './component/Admin/newsAdmin/newsAdmin';
import recruitAdmin from './component/Admin/recruitAdmin/recruitAdmin';
import contactAmin from './component/Admin/contactAdmin/contactAdmin';
import settingAdmin from './component/Admin/settingAdmin/settingAdmin';
import addOrEditNews from './component/Admin/addOrEditNews/addOrEditNews';
import addOrEditRecruit from './component/Admin/addOrEditRecruit/addOrEditRecruit';
import editContact from './component/Admin/editContact/editContact';
import loginComponent from './component/Admin/loginAdmin/loginAdmin';
/**
 * 404页面
 */
import NotFoundComponent from './component/error/error';


const routers = [
    {path: '/',component: Home},
    {path: '/csp',component: CSP},
    {path: '/tms',component: TMS},
    {path: '/ccp',component: CCP},
    {path: '/about',component: About},

    //h5
    {path:'/H5home',component: H5Home},
    {path:'/H5Csp',component: H5Csp},
    {path:'/H5Tms',component: H5Tms},
    {path:'/H5Ccp',component: H5Ccp},
    {path:'/H5About',component: H5About},
    {path:'/H5Cooperate',component: H5Cooperate},
    {path:'/H5News',component: H5News},
    {path:'/H5Job',component: H5Job},
    {path:'/H5NewsDetail',name:'H5NewsDetail',component:H5NewsDetail},


        //后台管理
    {path: '/login',name:"login",component: loginComponent},
    {path:'/admin',name:"admin",component:AdminComponent,
        children:[
            {path: '/newsAdmin',component: newsAdmin},
            {path: '/recruitAdmin',name:"recruitAdmin",component: recruitAdmin},
            {path: '/contactAdmin',component: contactAmin},
            {path: '/settingAdmin',name:"setting",component: settingAdmin},
            {path: '/addNews',component: addOrEditNews},
            {path: '/editNews',name:"editNews",component: addOrEditNews},
            {path: '/addRecruit',component: addOrEditRecruit},
            {path: '/editRecruit',name:"editRecruit",component: addOrEditRecruit},
            {path: '/editContact',name:"editContact",component: editContact},
        ]
    },

    /**
     * 404页面
     */
    {path:'/404',component: NotFoundComponent},
    {path: '*', component:  NotFoundComponent}
]

export default routers;