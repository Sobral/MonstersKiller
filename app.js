new Vue({
  el: '#app',
  computed: {
    maxHealth() {
      return `width: ${this.baseHealth * 3}px`;
    },
    currentPlayerHealth() {
      return `width: ${this.playerHealth * 3}px`;
    },
    currentMonsterHealth() {
      return `width: ${this.monsterHealth * 3}px`;
    }
  },
  data() {
    return {
      started: false,
      baseHealth: 100,
      playerHealth: 100,
      monsterHealth: 100
    }
  }
});
