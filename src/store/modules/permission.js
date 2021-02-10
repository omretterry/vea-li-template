import { constantRoutes } from '@/router'

/**
 * return routers which current user can enter
 * @param Router router
 */
function checkRouters(permission) {
  // TODO: filter user access routers
  return constantRoutes
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = routes
  }
}

const actions = {
  generateRoutes({ commit }, permission) {
    return new Promise(resolve => {
      const accessedRoutes = checkRouters(permission)
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
