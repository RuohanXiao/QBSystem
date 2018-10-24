import contentView from './views/contentView'
import geoView from './views/geoView'
import netView from './views/netView'
const routers = [
    // {
    //     path: '/main', component: main
    //     children: [
    //         // { path: 'netView', component: netView },
    //         { path: '/geoView', component: geoView },
    //         { path: '/contentView', component: contentView }
    //     ]
    // },
    {
        path: '/', component: netView
    },
    {
        path: '/geoView', component: geoView
    },
    {
        path: '/contentView', component: contentView
    }   
];
export default routers;