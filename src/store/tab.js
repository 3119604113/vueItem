export default {
  namespaced: true,
  state: {
    isCollapse: false, //用于控制菜单的展开还是收起
    tabList: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
    ], //面包屑的数据
  },
  mutations: {
    //修改菜单展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    //修改更新面包屑数据
    selectMenu(state, val) {
      console.log(val, "val");
      //判断添加的数据是否为首页
      if (val.name !== "home") {
        const index = state.tabList.findIndex((item) => item.name === val.name);
        //如果不存在
        if (index === -1) {
          state.tabList.push(val);
          console.log(state.tabList);
        }
      }
    },
    //删除指定的tag数据
    closeTag(state, item) {
      console.log(item, "item");
      const index = state.tabList.findIndex((val) => val.name === item.name);
      state.tabList.splice(index, 1);
    },
  },
};
