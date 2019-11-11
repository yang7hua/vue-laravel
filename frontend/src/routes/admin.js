const Article = () => import('@/pages/admin/article/index')
const ArticleNew = () => import('@/pages/admin/article/new')

export default [
    {
        path: '/article',
        name: 'mm.article',
        component: Article,
    },
    {
        path: '/article/new',
        name: 'mm.article.new',
        component: ArticleNew
    }
];