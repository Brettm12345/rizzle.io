<template>
  <el-carousel :interval="4000" type="card" height="600px">
    <el-carousel-item v-for="member in team" :key="member.id">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="require({{ member.image }})" class="image">
        <div style="padding: 14px;">
          <span class="name">{{ member.name }}</span>
          <div class="bio">
            {{ member.bio }}
          </div>
        </div>
      </el-card>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Team',
  data () {
    return {
      team: [
        {
          id: 1,
          image: '@assets/jay.jpg',
          name: 'Jason Guro',
          title: 'Chief Operating Officer',
          bio: 'Co Founder of Rizzle and LoudWay, Cryptocurrency Trader & Investor, Blockchain Enthusiast, Front-end Developer & Designer, Golang & Solidity Programmer. From Miami, United States.'
        },
        {
          id: 2,
          image: '@assets/jay.jpg',
          name: 'Jason Guro',
          title: 'Chief Operating Officer',
          bio: 'Co Founder of Rizzle and LoudWay, Cryptocurrency Trader & Investor, Blockchain Enthusiast, Front-end Developer & Designer, Golang & Solidity Programmer. From Miami, United States.'
        }
      ]
    }
  }
}
</script>
<style>
  .el-carousel__item {
    width: 400px;
  }
  .el-carousel__mask {
    left: 250px;
  }
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-card {
    width: 300px;
    height: 550px;
  }
</style>

<style scoped>
.name {
  font-weight: bold;
  font-size: 30px;
}
</style>
