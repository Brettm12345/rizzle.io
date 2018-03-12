<template>
  <div class="cards">
    <div v-for="(card, index) in cards" class="card" :key="index" v-scroll-reveal.reset="{ delay: 250*(index+1), duration: 500, rotate: {x: 5, y: 0, z:10} }">
      <img class="icon" :src="path(card.icon)"/>
      <div class="title">{{ card.title }}</div>
      <div class="message">{{ card.message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: ['cards'],
  methods: {
    path (icon) {
      console.log(icon.toString())
      return require('../assets/img/' + icon.toString() + '.png')
    }
  }
}
</script>

<style scoped>
img {
  height: 96px;
  width: 96px;
  align-self: center;
  margin: 20px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.card {
  border-radius: 4px;
  background-color: #fefefe;
  margin: 20px;
  width: 400px;
  padding: 20px;
  height: 420px;
  display: flex;
  flex-direction: column;
  box-shadow: 10px 10px 20px rgba(111, 172, 242, 0.2), 0 5px 15px rgba(0,0,0,.1);
  text-align: center;
  position: relative;
  transition: ease 0.3s;
  font-size: 24px;
}
.card:hover {
  box-shadow: 10px 10px 20px rgba(111, 172, 242, 0.4), 0 5px 15px rgba(0,0,0,.2);
}
@media(max-width: 450px) {
  .card {
    font-size: 20px;
  }
}
@media(max-width: 320px) {
  .card {
    font-size: 18px;
  }
}
@media(max-width: 280px) {
  .card {
    font-size: 16px;
  }
}
@media(max-width: 230px) {
  .card {
    font-size: 14px;
  }
}
.title {
  color: #000;
  font-size: 1.5em;
  font-weight: Bold;
  margin: 8px;
}
.message {
  color: #808080;
  font-size: 1em;
  font-weight: Bold;
}
</style>
