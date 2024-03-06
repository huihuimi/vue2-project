import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout/Index.vue";
import Login from "@/views/login/Index.vue";
import Home from "@/views/home/Home.vue";

//* 这里使用异步加载的方式加载
const Product = () => import("@/views/product/Index.vue");
const ProductList = () => import("@/views/product/list/Index.vue");
const Category = () => import("@/views/product/category/Index.vue");

const Order = () => import("@/views/order/Index.vue");
const OrderList = () => import("@/views/order/list/Index.vue");
const OrderCollection = () => import("@/views/order/collection/Index.vue");
const OrderAudit = () => import("@/views/order/audit/Index.vue");

const Advert = () => import("@/views/advert/Index.vue");
const AdvertList = () => import("@/views/advert/list/Index.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      //f 产品管理 路由配置
      {
        path: "/product",
        name: "product",
        component: Product,
        children: [
          {
            path: "list", //访问路径：/product/list
            name: "product-list",
            component: ProductList,
          },
          {
            path: "category", //访问路径：/product/category
            name: "product-category",
            component: Category,
          },
        ],
      },
      //f 订单管理 路由配置
      {
        path: "/order",
        name: "order",
        component: Order,
        children: [
          {
            path: "list", //访问路径：/order/list
            name: "list",
            component: OrderList,
          },
          {
            path: "collection", //访问路径：/order/collection
            name: "collection",
            component: OrderCollection,
          },
          {
            path: "audit", //访问路径：/order/audit
            name: "audit",
            component: OrderAudit,
          },
        ],
      },
      //f 广告分类 路由配置
      {
        path: "/advert",
        name: "advert",
        component: Advert,
        children: [
          {
            path: "list", //访问路径：/advert/list
            name: "list",
            component: AdvertList,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
