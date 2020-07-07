// import NotFound from '../pages/NotFound';
import test from '../pages/test'
//配置
let router = [{
        path: '/test',
        name: 'test',
        component: test
    },
    {
        path: "/",
        redirect: "/test"
    }
];

export default router;