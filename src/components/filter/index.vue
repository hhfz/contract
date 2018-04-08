<template>
  <!-- 过滤选择 -->
  <section class="filter">
    <div class="list" ref="list">
      <p class="item" :class="{ active: currentIndex === index, icon: type === 'progress' }"
        v-for="(item, index) in list" :key="index"
        @click="handleClick(item.value)">
        <label class="j-label">{{ item.label }}</label>
      </p>
      <div class="scroll-box"></div>
    </div>
  </section>
</template>

<script>
let oList = null;
let oScrollBox = null;
let oLabelList = [];

export default {
  props: {
    value: {
      required: true,
    },
    // 格式为[{ label: label, value: value }]
    list: {
      required: true,
    },
    top: {
      default: 112,
    },
    clickable: {
      type: Boolean,
      default: true,
    },
    type: {
      default: 'tab',
    },
  },
  data () {
    return {
    };
  },
  computed: {
    // 根据status计算选中的状态所处下标index
    currentIndex() {
      const { list, value } = this;
      let index;
      for (let i = 0; i < list.length; i++) {
        if (list[i].value == value) {
          index = i;
        }
      }
      this.handleSelect(index);
      return index;
    },
  },
  methods: {
    handleSelect(index) {
      if (oList) {
        const oLabel = oLabelList[index];
        const oItem = oLabel.parentNode;
        console.log(oLabel);
        oScrollBox.style.left = `${oLabel.offsetLeft + oItem.offsetLeft + (oLabel.offsetWidth - oScrollBox.clientWidth) / 2}px`;
      }
    },
    handleClick(val) {
      const { clickable } = this;
      if (clickable) {
        this.$emit('input', val);
      }
    },
  },
  mounted () {
    oList = this.$refs.list;
    oScrollBox = oList.querySelector('.scroll-box');
    oLabelList = oList.getElementsByClassName('j-label');
    this.handleSelect(this.currentIndex);
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
</style>
