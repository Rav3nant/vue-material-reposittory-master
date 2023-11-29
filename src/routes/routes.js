import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Analytics from "@/pages/Analytics.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import Login from "@/pages/Login.vue";
import SignIn from "@/pages/SignIn.vue";
import ForgotPassword from "@/pages/ForgotPassword.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "Tablero Principal",
        component: Dashboard,
      },
      {
        path: "analytics",
        name: "Analíticas",
        component: Analytics,
      },
      {
        path: "user",
        name: "Perfil de Usuario",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Amigos y Seguidores",
        component: TableList,
      },
      {
        path: "icons",
        name: "Post Nuevo",
        component: Icons,
      },
      {
        path: "notifications",
        name: "Notificaciones",
        component: Notifications,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "signIn",
        name: "Registro",
        component: SignIn,
      },
      {
        path: "forgotPassword",
        name: "Recuperar Contraseña",
        component: ForgotPassword,
      },
    ],
  },
];

export default routes;
