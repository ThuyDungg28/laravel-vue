import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Signup from '@/components/Signup'
import CompanyIndex from '@/components/companies/CompanyIndex'
import CompanyCreate from '@/components/companies/CompanyCreate'
import CompanyEdit from '@/components/companies/CompanyEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/companies',
      name: 'CompanyIndex',
      component: CompanyIndex,
    },
    {
      path: '/companies/create',
      component: CompanyCreate,
      name: 'createCompany'
    },
    {
      path: '/companies/edit/:id',
      component: CompanyEdit,
      name: 'editCompany'
    }
  ]
})
