<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tabList"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "CommonTag",
  data() {
    return {};
  },
  mounted() {},
  computed: {
    // ...mapState({
    //   tags: (state) => state.tab.tabsList,
    // }),
    ...mapState("tab", ["tabList"]),
  },
  methods: {
    ...mapMutations("tab", ["closeTag"]),
    //点击tag跳转的功能
    changeMenu(item) {
      this.$router.push({ name: item.name });
    },
    //点击tag删除的功能
    handleClose(item, index) {
      //调用store中的mutations
      this.closeTag(item);
      const length = this.tabList.length;
      //删除之后的跳转功能
      if (item.name !== this.$route.name) {
        return;
      }
      //表示删除的最后一项
      if (index === length) {
        this.$router.push({
          name: this.tabList[index - 1].name,
        });
      } else {
        this.$route.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
