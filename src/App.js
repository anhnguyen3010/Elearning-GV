import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import Course from "./pages/Course";
import AppLayout from "./layouts/AppLayout";
import AdminLayout from "./layouts/AdminLayout";
// import AdminCourses from "./pages/AdminCourses";
// import AdminUsers from "./pages/AdminUsers";
// import LoginPage from "./pages/LoginPage";
import AdminRoute from "./auth/AdminRoute";
// import SignupPage from "./pages/SignupPage";

//Sử dụng Lazyload không import trực tiprs page vào
const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Course = lazy(() => import("./pages/Course"));
const AdminCourses = lazy(() => import("./pages/AdminCourses"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/"> */}
          <AdminRoute path="/admin">
            <AdminLayout path="/admin">
              <Redirect from="/admin" to="/admin/courses" exact />
              <Route path="/admin/courses">
                <AdminCourses />
              </Route>
              <Route path="/admin/users">
                <AdminUsers />
              </Route>
            </AdminLayout>
          </AdminRoute>

          <AppLayout path="/">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/courses/:category">
                <Courses />
              </Route>
              <Route path="/course/:id">
                <Course />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              {/* <Route path='/signup'>
              <SignupPage/>
            </Route> */}
            </Switch>
          </AppLayout>
          {/* </Route> */}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
