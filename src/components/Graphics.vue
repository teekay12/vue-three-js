<template>
  <div ref="scenecontainer"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default {
  name: "Graphics",
  data() {
    return {};
  },
  methods: {
    setupScene() {
      // Create renderer.
      this.renderer = new THREE.WebGLRenderer({ antialias: true });

      // Create camera.
      this.camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        45,
        30000
      );
      // Position Camera.
      this.camera.position.set(-900, -200, -900);

      // Create Scene.
      this.scene = new THREE.Scene();

      this.materialArray = [];
      const texture_ft = new THREE.TextureLoader().load(
        require("../assets/arid2_ft.jpg")
      );
      let texture_bk = new THREE.TextureLoader().load(
        require("../assets/arid2_bk.jpg")
      );
      let texture_up = new THREE.TextureLoader().load(
        require("../assets/arid2_up.jpg")
      );
      let texture_dn = new THREE.TextureLoader().load(
        require("../assets/arid2_dn.jpg")
      );
      let texture_rt = new THREE.TextureLoader().load(
        require("../assets/arid2_rt.jpg")
      );
      let texture_lf = new THREE.TextureLoader().load(
        require("../assets/arid2_lf.jpg")
      );

      this.materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
      this.materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
      this.materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
      this.materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
      this.materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
      this.materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

      this.addMesh();

      // Add resize listener.
      window.addEventListener("resize", this.sizeRenderer.bind(this), false);
    },
    addMesh() {
      // remove previous mesh.
      if (this.mesh) {
        this.scene.remove(this.mesh);
      }

      //this.scene.add(this.mesh);
      for (let i = 0; i < 6; i++) {
        this.materialArray[i].side = THREE.BackSide;
      }
      let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
      let skybox = new THREE.Mesh(skyboxGeo, this.materialArray);
      this.scene.add(skybox);
    },
    sizeRenderer() {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      let controls = new OrbitControls(this.camera, this.renderer.domElement);
      controls.addEventListener("change", this.renderer);
      controls.minDistance = 500;
      controls.maxDistance = 1500;
    },
    animate() {
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate.bind(this));
    },
  },
  mounted() {
    this.setupScene();
    this.sizeRenderer();
    this.$refs.scenecontainer.appendChild(this.renderer.domElement);
    this.animate();
  },
};
</script>

<style scoped>
#container {
  height: 200px;
}
</style>
