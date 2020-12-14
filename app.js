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
      playerHealth: 10,
      monsterHealth: 20,
      log: [
        {
          player: {
            acao: 'Atacou',
            pontos: 12
          },
          monstro: {
            acao: 'Atacou',
            pontos: 12
          }
        }
      ]
    }
  },
  methods: {
    start() {
      this.started = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    },
  }
});
