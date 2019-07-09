<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style seoped>
@import url('https://fonts.googleapis.com/css?family=Asap:400,700&display=swap');
@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c');

* {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  cursor: pointer;
}

a:focus {
  outline: none;
}

li {
  list-style: none;
}

body {
  width: 100%;
  background: #55b9ab;
  color: #ffffff;
  font-family: 'M PLUS Rounded 1c', YuGothic, 'Yu Gothic', 'ヒラギノ角ゴ Pro W3',
    'Hiragino Kaku Gothic Pro', Roboto, 'メイリオ', Meiryo, Osaka, Arial, Helvetica, Verdana,
    sans-serif;
  font-size: 100%;
  font-style: normal;
  font-weight: 700;
}

#app {
  width: 100%;
}
</style>
