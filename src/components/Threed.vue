<template>
  <div class="pan"></div>
</template>

<script>
import "three/examples/js/panolens/three.js";
import * as PANOLENS from "three/examples/js/panolens/panolens.js";

export default {
  name: "Threed",
  data() {
    return {};
  },
  methods: {
    setupScene() {
      // Create renderer.
      this.pan = document.querySelector(".pan");
      var img = require("../assets/2.jpg");
      this.panorama = new PANOLENS.ImagePanorama(img);
    },
    animate() {
      this.viewer = new PANOLENS.Viewer({
        container: this.pan,
        autoRotate: true,
        autoRotateSpeed: 0.5,
      });
      this.viewer.add(this.panorama);
    },
  },
  mounted() {
    this.setupScene();
    this.animate();
  },
};
</script>

<style scoped>
.pan {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 700px;
}
</style>
