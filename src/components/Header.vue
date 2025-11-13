<template>
  <div>
    <header>
      <div class="header-space">
        <img src="../assets/images/LOGO.png" alt="" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {}
  },
}
</script>

<style scoped>
header {
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, #508bcf, #2360a7) 1;
}
.header-space {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
header img {
  width: 250px;
}
</style>
