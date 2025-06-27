<script lang="ts" setup>

</script>

<template>
  <div>
    <img alt="" class="avatar" src="/avatar.png">
    <div class="name">air</div>
  </div>
  <hr>
  <h2>My Website</h2>
  <div class="parent">
    <div class="child">
      <div class="child-content">
        <a class="link-button" href="https://github.com/yuanair">github</a>
        <a class="link-button" href="https://space.bilibili.com/1042293844">bilibili</a>
      </div>
      <div class="child-button">
      </div>
    </div>
  </div>
  <hr>
  <h2>My Project</h2>
  <div class="parent">
    <div class="child">
      <div class="child-content">
        <h3>annasul</h3>
        <p>User-friendly yet personalized tool library</p>
      </div>
      <div class="child-button">
        <a class="link-button" href="https://yuanair.github.io/annasul">annasul</a>
      </div>
    </div>
    <div class="child">
      <div class="child-content">
        <h3>Error: Reboot</h3>
        <p>A puzzle game</p>
      </div>
      <div class="child-button">
        <router-link class="link-button" to="/error-reboot">Error: Reboot</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.avatar {
  border-radius: 50%;
  box-sizing: content-box;
  height: 100px;
  user-select: none;
}

.child {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  background-color: #2a4d3b;
  border: 1px solid #8dffc4;
  padding: 10px;
  margin: 10px;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.child:hover {
  transform: scale(1.2);
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);
}

.warning {
  background-color: #5d4b14;
  border: 1px solid #ffda66;
  padding: 10px;
  margin: 10px;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.warning:hover {
  transform: scale(1.2);
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);
}

.link-button {
  border: 1px solid transparent;
  display: inline-block;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.link-button:hover {
  border-color: rgba(99, 107, 255, 0.5);
  transform: scale(1.2);
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);
}

.badge {
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.badge:hover {
  transform: scale(1.2);
  box-shadow: 0 1em 2em rgba(0, 0, 0, 0.3);
}


.img {
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.img:hover {
  transform: scale(1.2);
}
</style>