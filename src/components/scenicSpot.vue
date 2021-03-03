<template>
  <div class="hello container">
    <Navbar></Navbar>
    <ul>
      <li v-for="spot in spotlist" :key="spot.ID + spot.Name">
        <div class="row">
          <div class="col-3">{{ spot.Name }}</div>
          <div class="col-9">{{ spot.Description }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'scenicSpot',
  data () {
    return {
      spotlist: [],
      city: this.$route.params.id,
      load: true
    }
  },
  methods: {
    getspotinfo () {
      const axios = require('axios')
      let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON&$skip=' + this.spotlist.length.toString()
      let vm = this
      axios.get(url)
        .then(function (res) {
          if (res.data.length !== 0) {
            for (let spot in res.data) {
              vm.spotlist.push(res.data[spot])
            }
          } else {
            vm.load = false
          }
        })
    },
    getcityspotinfo () {
      const axios = require('axios')
      let url = 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/' + this.city.toString() + '?$top=30&$skip=' + this.spotlist.length.toString() + '&$format=JSON'
      let vm = this
      axios.get(url)
        .then(function (res) {
          console.log(res.data.length)
          if (res.data.length !== 0) {
            for (let spot in res.data) {
              vm.spotlist.push(res.data[spot])
            }
          } else {
            vm.load = false
          }
        })
    }
  },
  created () {
    if (this.$route.params.id === undefined) {
      this.getspotinfo()
      this.load = true
    } else {
      this.getcityspotinfo()
      this.load = true
    }

    let vm = this
    window.onscroll = function () {
      if (vm.load === true) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        if (scrollTop + windowHeight === scrollHeight) {
          if (vm.$route.params.id === undefined) {
            vm.getspotinfo()
          } else {
            vm.getcityspotinfo()
          }
        }
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  border: 1px #ccc solid;
}
</style>
