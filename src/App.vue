<template>
  <div id="app">
    <section class="intro">
      <div class="container">
        <span class="logo">RIZZLE</span>
        <h1 class="tagline">Earn RZL while you play!</h1>
        <p class="description">RIZZLE was FOUNDED in 2018 with the vision of MAKING GAMES MORE REWARDING. It is an ECOSYSTEM that EMPOWERS GAMERS and GAME DEVELOPERS on a GLOBAL SCALE to PARTICIPATE in setting the direction of the NEXT GENERATIONAL GAMING REVOLUTION.</p>
      </div>
    </section>
    <section class="users">
      <h1 class="who">WHO USES RIZZLE?</h1>
      <Cards :cards="cards"/>
    </section>
  </div>
</template>

<script>
import Cards from '@/components/Cards'
export default {
  name: 'App',
  components: {
    Cards
  },
  data () {
    return {
      cards: [
        {
          title: 'GAMERS',
          message: 'Earn RZL while Playing Mobile Games and earning Achievements for those games. Get rewarded RZL for Participating in our Weekly Lottery, and our Daily Spinner.',
          icon: 'controller'
        },
        {
          title: 'DEVELOPERS',
          message: 'Generate More Revenue using Rizzle by Creating Games or Implementing Updates to Existing Games that Interact with our Ecosystem. Sell Virtual Goods that have True Item Ownership.',
          icon: 'code'
        },
        {
          title: 'INVESTORS',
          message: 'Take Part in Setting the Direction of this Project and the Mobile Gaming Industry by Participating in our Upcoming Decentralized Autonomous Initial Coin Offering',
          icon: 'money'
        }
      ]
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Bold.ttf");
}
body {
  font-family: "Roboto", "sans-serif";
  font-size: 24px;
  margin: 0px;
}
@media(max-width: 1580px) {
  body {
    font-size: 20px;
  }
}
@media(max-width: 980px) {
  body {
    font-size: 16px;
  }
}
@media(max-width: 768px) {
  body {
    font-size: 12px;
  }
}
@media(max-width: 480px) {
  body {
    font-size: 10px;
  }
}
.tagline {
  font-style: italic;
  font-size: 4em;
  margin-top: 15%;
  text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
}
.users {
  text-align: center;
  height: 700px;
}
@media(max-width: 1440px) {
  .users {
    height: 1200px;
  }
}
@media(max-width: 960px) {
  .users {
    height: 1700px;
  }
}
.intro {
  height: 1000px;
}
.intro {
  color: #fefefe;
  width: 100%;
  background-color: #6facf2;
}
.container {
  display: flex;
  flex-direction: column;
  text-align: center; height: 100%; align-items: center; } .logo { margin: 20px; font-family: "Montserrat"; font-size: 1.8em; text-align: left;
  align-self: flex-start;
}
.description {
  font-weight: bold;
  line-height: 1.5em;
  font-size: 1em;
  width: 70%;
  align-self: center;
}
.who {
  font-size: 3em;
  color: #404040;
}
</style>
