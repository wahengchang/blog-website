import App from './containers/App';
import IntroPage from './containers/IntroPage';
import ArticlePage from './containers/ArticlePage';
// import Article from './containers/Article';
// import SearchPage from './containers/SearchPage';
import TagList from './containers/TagList';
// import TagPage from './containers/TagPage';
import LoginPage from './containers/LoginPage';
import NotFoundPage from './containers/NotFoundPage';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: ArticlePage,
      },
      {
        path: '/articles',
        exact: true,
        component: ArticlePage,
        // routes: [
        //   {
        //     path: '/articles/:articleId',
        //     component: Article,
        //   },
        // ],
      },
      {
        path: '/intro',
        exact: true,
        component: IntroPage,
      },
      {
        path: '/tags',
        component: TagList,
        // routes: [
        //   {
        //     path: '/tags/:tagName',
        //     component: TagPage,
        //   },
        // ],
      },
      // {
      //   path: '/search',
      //   component: SearchPage,
      // },
      {
        path: '/login',
        component: LoginPage,
      },
      {
        path: '*',
        component: NotFoundPage,
      },
    ],
  },
];

export default routes;
