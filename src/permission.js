/* eslint-disable */
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, setToken, removeToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()
  if(!hasToken && whiteList.indexOf(to.path) === -1) {
    await store.dispatch("user/resetToken");
    if (from.path != "/") {
      Message.error("Token expired, please login again!");
    }
    next(`/login?redirect=${to.path}`);
    NProgress.done();
  }
  next();
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
