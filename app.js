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
    },
    vitoria() {
      return this.playerHealth > 0 && this.monsterHealth <= 0;
    },
    finished() {
      return this.playerHealth <= 0 || this.monsterHealth <=0;
    }
  },
  data() {
    return {
      started: false,
      baseHealth: 100,
      playerHealth: 100,
      monsterHealth: 100,
      log: []
    }
  },
  methods: {
    start() {
      this.started = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.log = [];
    },
    createAttackMessage(attacker, defender, points) {
      const message = points < 1? `${attacker} erra o ataque!` : `${attacker} ataca ${defender.toLowerCase()} com ${points} pontos!`
      return message;
    },
    createHealMessage(healMessage){
      return `Jogador se cura em ${healMessage} pontos!`
    },
    calculateDamageFromAttack(factor) {
      const seed = Date.now()
      return Math.floor((Math.random() * seed) % (factor + 1));
    },

    attack() {
      const playerDamage = this.calculateDamageFromAttack(7);
      const monsterDamage = this.calculateDamageFromAttack(10);
      const player = this.createAttackMessage('Jogador', 'Monstro', playerDamage);
      const monster = this.createAttackMessage('Monstro', 'Jogador', monsterDamage);

      const currentPlayerHealth = this.playerHealth - monsterDamage;
      this.playerHealth = currentPlayerHealth < 0 ? 0 : currentPlayerHealth;

      const currentMonsterHealth = this.monsterHealth - playerDamage;
      this.monsterHealth = currentMonsterHealth < 0 ? 0 : currentMonsterHealth;

      this.log.push({player, monster});
    },

    specialAttack() {
      const playerDamage = this.calculateDamageFromAttack(20);
      const monsterDamage = this.calculateDamageFromAttack(10);
      const player = this.createAttackMessage('Jogador', 'Monstro', playerDamage);
      const monster = this.createAttackMessage('Monstro', 'Jogador', monsterDamage);

      const currentPlayerHealth = this.playerHealth - monsterDamage;
      this.playerHealth = currentPlayerHealth < 0 ? 0 : currentPlayerHealth;

      const currentMonsterHealth = this.monsterHealth - playerDamage;
      this.monsterHealth = currentMonsterHealth < 0 ? 0 : currentMonsterHealth;

      this.log.push({player, monster});
    },
    heal() {
      let player = 'Tentativa de cura fracassou!'
      const monsterDamage = this.calculateDamageFromAttack(10);
      const monster = this.createAttackMessage('Monstro', 'Jogador', monsterDamage);
      
      let currentPlayerHealth = this.playerHealth - monsterDamage;
      this.playerHealth = currentPlayerHealth < 0 ? 0 : currentPlayerHealth;
      
      if(!this.finished) {
        const playerHeal = this.calculateDamageFromAttack(10) + 1;
        currentPlayerHealth = this.playerHealth + playerHeal;
        this.playerHealth = currentPlayerHealth > 100 ? 100 : currentPlayerHealth;
        player = this.createHealMessage(playerHeal);
      }
      console.log(player, monster)
      this.log.push({player, monster});
    }
  }
});
