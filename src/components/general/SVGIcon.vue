<script lang="ts">
// todo : move this into own release
const types = {
  mdi: {
    size: 24,
    viewbox: "0 0 24 24",
  },
  "simple-icons": {
    size: 24,
    viewbox: "0 0 24 24",
  },
  default: {
    size: 0,
    viewbox: "0 0 0 0",
  },
};

export default {
  name: "icon",

  props: {
    type: String,
    path: { type: String, required: true },
    size: { type: [String, Number], default: 24 },
    viewbox: String,
    flip: {
      type: String,
      validator: (value) => ["horizontal", "vertical", "both", "none"].includes(value),
    },
    rotate: { type: Number, default: 0 },
  },

  computed: {
    styles() {
      return {
        "--sx": ["both", "horizontal"].includes(this.flip) ? "-1" : "1",
        "--sy": ["both", "vertical"].includes(this.flip) ? "-1" : "1",
        "--r": isNaN(this.rotate) ? this.rotate : this.rotate + "deg",
      };
    },

    defaults() {
      return types[this.type] || types.default;
    },

    sizeValue() {
      return this.size || this.defaults.size;
    },

    viewboxValue() {
      return this.viewbox || this.defaults.viewbox;
    },
  },
};
</script>

<template>
  <svg :width="sizeValue" :height="sizeValue" :viewBox="viewboxValue" :style="styles">
    <path :d="path" />
  </svg>
</template>

<style scoped>
path {
  fill: currentColor;
}
</style>
