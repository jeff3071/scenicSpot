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
      message: '歡迎來到景點查詢'
    }
  }
}
</script>
