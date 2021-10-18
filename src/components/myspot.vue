<template>
  <div class="container">
    <Navbar></Navbar>
    <div v-for="(spot, index) in myspotlist" :key = "index">
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
        <b-button :key="index" @click="removespot(index)">從我的景點移除</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myspot',
  data (){
    return {
      myspotlist: [],
    }
  },
  methods: {
    removespot(index){
      this.myspotlist.splice(index, 1)
      localStorage.myspot = JSON.stringify(this.myspotlist)
    }
  },
  created () {
    if(localStorage.myspot != undefined)
      this.myspotlist = JSON.parse(localStorage.myspot)
  }
}
</script>