<template>
  <div id="three"></div>
</template>

<script>
export default {
  mounted() {
    if (process.browser) {
      // Set the scene size.
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;

      // Set some camera attributes.
      const VIEW_ANGLE = 45;
      const ASPECT = WIDTH / HEIGHT;
      const NEAR = 0.1;
      const FAR = 10000;

      // Get the DOM element to attach to
      const container = document.querySelector("#three");

      // Create a WebGL renderer, camera
      // and a scene
      const renderer = new this.$THREE.WebGLRenderer({ alpha: true });
      const camera = new this.$THREE.PerspectiveCamera(
        VIEW_ANGLE,
        ASPECT,
        NEAR,
        FAR
      );

      const scene = new this.$THREE.Scene();

      // Add the camera to the scene.
      scene.add(camera);

      // Start the renderer.
      renderer.setSize(WIDTH, HEIGHT);

      // Attach the renderer-supplied
      // DOM element.
      container.appendChild(renderer.domElement);

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      window.addEventListener("resize", onWindowResize, false);

      const geometry = new this.$THREE.BoxGeometry(1, 1, 1);
      const material = new this.$THREE.MeshBasicMaterial({
        color: 0x419eec,
        wireframe: true
      });
      const cube = new this.$THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = function() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    }
  }
};
</script>

<style lang="scss" scoped>
#three {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>