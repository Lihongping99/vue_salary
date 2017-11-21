import {
    CHANGE_JISHU,
    CHANGE_JIXIAO,
    CHANGE_JIANGJIN,

    UPDATE_YANGLAO,
    UPDATE_YILIAO,
    UPDATE_SHIYE,
    UPDATE_GONGSHANG,
    UPDATE_SHENGYU,
    UPDATE_GONGJIJIN,
    UPDATE_TONGCHOU,

    IS_SHOW

} from './mutation-types'

const mutations = {
    [CHANGE_JISHU] (state, jishu) {
        state.jishu = jishu
    },
    [CHANGE_JIXIAO] (state, jixiao) {
        state.jixiao = jixiao
    },
    [CHANGE_JIANGJIN] (state, jiangjin) {
        state.jiangjin = jiangjin
    },
    // 养老费率
    [UPDATE_YANGLAO] (state, yanglao) {
        state.shebao.yanglao = yanglao
    },
    [UPDATE_YILIAO] (state, yiliao) {
        state.shebao.yiliao = yiliao
    },
    [UPDATE_SHIYE] (state, shiye) {
        state.shebao.shiye = shiye
    },
    [UPDATE_GONGSHANG] (state, gongshang) {
        state.shebao.gongshang = gongshang
    },
    [UPDATE_SHENGYU] (state, shengyu) {
        state.shebao.shengyu = shengyu
    },
    [UPDATE_GONGJIJIN] (state, gongjijin) {
        state.shebao.gongjijin = gongjijin
    },
    [UPDATE_TONGCHOU] (state, tongchou) {
        state.shebao.tongchou = tongchou
    }, 

    [IS_SHOW] (state, show) {
        state.showResult = show
    }
}

export default mutations