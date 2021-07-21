<template>
  <div>
    <h-button type="primary" @click="alert(1)">primary</h-button>
    <h-button type="success">success</h-button>
    <h-button type="warning">warning</h-button>
    <h-button type="danger">danger</h-button>
    <h-button type="info">info</h-button>
    <h-button type="text">text</h-button>
  </div>

  <div style="margin-top: 20px">
    <h-button type="primary" :round="true">primary</h-button>
    <h-button type="success" :round="true">success</h-button>
    <h-button type="warning" :round="true">warning</h-button>
    <h-button type="danger" :round="true">danger</h-button>
    <h-button type="info" :round="true">info</h-button>
    <h-button type="text" :round="true">text</h-button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
