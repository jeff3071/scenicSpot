<template>
  <div class="container">
    <Navbar></Navbar>
    <div v-for="(spot,index) in spotlist" :key="spot.ID + spot.Name">
      <b-card :title="spot.Name" :sub-title="spot.Address +' ('+spot.Phone+')'"
        tag="article"
        style="text-align:left;"
        class="mb-2"
      >
        <b-card-text>
          {{ spot.Description }}
        </b-card-text>
        <b-card-text>
          {{ spot.TicketInfo }}
        </b-card-text>
        <b-button v-if="saved_spot_id.indexOf(spot.ID) == -1" :key="index" @click="setfavorite(index)">加入我的景點</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scenicSpot',
  data () {
    return {
      spotlist: [],
      city: this.$route.params.id,
      load: true,
      saved_spot_id: []
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
          console.log(res.data)
          if (res.data.length !== 0) {
            for (let spot in res.data) {
              vm.spotlist.push(res.data[spot])
            }
          } else {
            vm.load = false
          }
        })
    },
    setfavorite(index) {
      let temp = []
      if(localStorage.myspot != undefined)
        temp = JSON.parse(localStorage.myspot)
      
      if(this.saved_spot_id.indexOf(this.spotlist[index].ID) == -1){
        temp.push(this.spotlist[index])
        this.saved_spot_id.push(this.spotlist[index].ID)
      }

      localStorage.myspot = JSON.stringify(temp)
      // console.log(localStorage.myspot)
    }
  },
  created () {
    let temp = []
    if(localStorage.myspot != undefined)
      temp = JSON.parse(localStorage.myspot)
    for(let i in temp){
      this.saved_spot_id.push(temp[i].ID)
    }


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
