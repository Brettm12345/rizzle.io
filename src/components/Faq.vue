<template>
  <div class="faq">
    <h2>Frequently asked questions</h2>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        id="faq-item"
        v-for="(question, index) in questions"
        :key="question.id">
        <template slot="title">
          {{ question.message }}
        </template>
        <template slot="name">
          {{ index }}
        </template>
        <div>{{ question.answer }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data () {
    return {
      activeName: 1,
      questions: [
      {
        id: 1,
        message: 'What is Rizzle?',
        answer: 'Rizzle is a decentralized gaming platform that is available to download on both iOS and Android. Rizzle App is a game library and a wallet. The application incentivizes gamers to play mobile games by rewarding them with RZL. There are a variety of ways a user can earn RZL other than playing the games available via the game library. Game developers are also incentivized to implement our API into their games and use our SDK to add their games to our platform. They will receive more profit compared to traditional methods because of the implementation of blockchain technology. Rizzle will have a decentralized payment gateway that will offer all users and game creators a new model for virtual item ownership and in-application purchases by having instant transactions, with no fees, and at scale."'
      },
      {
        id: 2,
        message: 'Why is Rizzle for Gamers?',
        answer: 'Gamers are the sole intended users of our application. We offer many benefits to improve the Gamer Experience such as a personal five-level referral program, earnings from personal and joint achievements, monetization of content created, earning extra income from in-game activities, syndication to earn from joint activities, and the ability to withdraw tokens to a personal wallet.'
      },
      {
        id: 3,
        message: 'Why is Rizzle for Game Creators and Developers?',
        answer: 'Game Developers are content creators and the driving force behind the success of Rizzle. Without games there will be no game library. We offer many benefits to incentivize game developers to utilize our application such as a personal five-level referral program, a targeted and content-generating audience from the start of the project, access to specialized game statistics, a multilingual 24/7 customer support service, a convenient traffic rotation mechanism in every game on the platform, and also simple techniques to get internal and external traffic.'
      },
      {
        id: 4,
        message: 'Who is restricted from participating in the token sale?',
        answer: 'The Rizzle Token Sale (DAICO) is available globally and all U.S. persons can register and participate in the referral program to receive free bonus tokens from contributions made by their referrals. However, only accredited U.S. investors may contribute. Sale in the U.S. to accredited investors is carried out under Regulation D of the Securities Act of 1933. Transfer of tokens sold under Regulation D will be restricted for a 1 year period in accordance with aforesaid regulations. You will receive your purchased tokens automatically, after transaction is complete. Referral program bonus tokens will be accrued within 30 days after the Token Sale (DAICO) is closed.'
      },
      {
        id: 5,
        message: 'What is DAICO',
        answer: 'DAICO is an innovative fundraising model (suggested by the founder of Ethereum, Vitalik Buterin) that merges some of the benefits of Decentralized Autonomous Organizations (DAOs), aimed at upgrading and making the initial ICO concept more transparent and secure. The Rizzle Token Sale is an advanced and improved DAICO model, allowing contributors to control the withdrawal of funds, and also providing an option to vote for refund of the contributed money in case the team fails to implement the project, with Oracles (appointed industry leaders) acting as arbitrators.'
      }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 3rem;
}
</style>
