const Module = () => import("./Module.vue")
const Home = () => import("./views/Home.vue")
const Product = () => import("./views/Product.vue")



const moduleRoute = {
    path: "/cart",
    component: Module,
    children: [
        {path: "/", component:Home},
        {path: ":id", component:Product}
    ]

}

export default route => {
    router.addRoutes([ModuleRouter])
}