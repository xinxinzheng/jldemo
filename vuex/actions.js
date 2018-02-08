

import * as types from './mutations-types'

export const setLoginState = ({commit},boolean) => {
    commit(types.SET_LOGIN_STATE, boolean);
}
export const setUserInfo = ({commit}, data) => {
    commit(types.SET_USER_INFO, data);
}