<template>
  <div class="sidebar" v-if="isNavOpen">
    <div class="sidebar-backdrop" @click="toggle"></div>
    <div class="sidebar-panel">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    isPanelOpen: true,
  }),
  computed: {
    ...mapGetters(["isNavOpen"]),
  },
  methods: {
    toggle() {
      this.isPanelOpen = false;
      this.$store.commit("toggleNav");
    },
  },
};
</script>
<style>
.sidebar-backdrop {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #00121a;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 600px;
}
</style>
