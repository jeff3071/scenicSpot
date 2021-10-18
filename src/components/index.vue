<template>
    <div class="container">
        <Navbar></Navbar>
        {{ message }}
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      message: '縣市查詢景點'
    }
  }
}
</script>
