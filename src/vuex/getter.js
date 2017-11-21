// 获取基本工资
export const getJishuState = (state)=>{
    return state.jishu
}
// 获取绩效工资
export const getJixiaoState = (state) => {
    return state.jixiao
}
// 获取奖金
export const getJiangjinState = (state) => {
    return state.jiangjin
}
// 获取五险一金费率
export const getYanglaoState = (state) => {
    return state.shebao.yanglao
}
export const getYiliaoState = (state) => {
    return state.shebao.yiliao
}
export const getShiyeState = (state) => {
    return state.shebao.shiye
}
export const getGongshangState = (state) => {
    return state.shebao.gongshang
}
export const getShengyuState = (state) => {
    return state.shebao.shengyu
}
export const getGongjijinState = (state) => {
    return state.shebao.gongjijin
}
export const getTongchouState = (state) => {
    return state.shebao.tongchou
}

export const getShowResultState = (state) => {
    return state.showResult
}
