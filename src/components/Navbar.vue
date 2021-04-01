<template>
  <div class="Navbar">
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item>首頁</b-nav-item>
            <b-nav-item to="/scenicSpot">全部景點</b-nav-item>    

            <b-nav-item-dropdown text="依城市查詢" right>
              <b-dropdown-item v-for="city in citylist" :key="city.key" :to="{ name: 'scenicSpot', params: { id: city.key}}">
                {{city.name}}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      citylist: [
        {
          name: '臺北市',
          key: 'Taipei'
        },
        {
          name: '新北市',
          key: 'NewTaipei'
        },
        {
          name: '桃園市',
          key: 'Taoyuan'
        },
        {
          name: '臺中市',
          key: 'Taichung'
        },
        {
          name: '臺南市',
          key: 'Tainan'
        },
        {
          name: '高雄市',
          key: 'Kaohsiung'
        },
        {
          name: '基隆市',
          key: 'Keelung'
        },
        {
          name: '新竹市',
          key: 'Hsinchu'
        },
        {
          name: '新竹縣',
          key: 'HsinchuCounty'
        },
        {
          name: '苗栗縣',
          key: 'MiaoliCounty'
        },
        {
          name: '彰化縣',
          key: 'ChanghuaCounty'
        },
        {
          name: '南投縣',
          key: 'NantouCounty'
        },
        {
          name: '雲林縣',
          key: 'YunlinCounty'
        },
        {
          name: '嘉義縣',
          key: 'ChiayiCounty'
        },
        {
          name: '嘉義市',
          key: 'Chiayi'
        },
        {
          name: '屏東縣',
          key: 'PingtungCounty'
        },
        {
          name: '宜蘭縣',
          key: 'YilanCounty'
        },
        {
          name: '花蓮縣',
          key: 'HualienCounty'
        },
        {
          name: '台東縣',
          key: 'TaitungCounty'
        },
        {
          name: '金門縣',
          key: 'KinmenCounty'
        },
        {
          name: '澎湖縣',
          key: 'PenghuCounty'
        },
        {
          name: '連江縣',
          key: 'LienchiangCounty'
        }
      ]
    }
  }
}
</script>

<style scoped>
li a {
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #6c757d;
}
</style>