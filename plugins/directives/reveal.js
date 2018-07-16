import Vue from "vue";
import ScrollMonitor from "scrollmonitor";
import anime from "animejs";

Vue.directive("reveal", {
  inserted: function(el) {
    const watcher = scrollMonitor.create(el);
    el.style.opacity = 0;
    watcher.enterViewport(() => {
      watcher.destroy();
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 800,
        easing: "easeInOutCubic",
        translateY: [60, 0]
      });
    });
  }
});
