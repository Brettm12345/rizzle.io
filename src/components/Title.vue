<template>
  <div>
    <div class="tagline">
      <h2>Earn Rizzle While You Play</h2>
      <el-button>Read our whitepaper</el-button>
      <el-button>Participate in our daico</el-button>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style scoped>
.tagline {
  position: relative;
  z-index: 999;
  top: 10rem;
}
h2 {
  font-size: 6rem;
  margin: 30px;
}
</style>
