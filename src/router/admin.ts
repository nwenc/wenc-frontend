const ArticleEditorView = () => import("../views/admin/ArticleEditorView.vue")

const route = {
  path: "/admin",
  name: "admin",
  children: [
    {
      path: "article-editor",
      name: "article editor",
      component: ArticleEditorView,
    },
  ],
}

export default route
