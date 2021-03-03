<template>
    <div class="Navbar">
        <ul id="nav">
            <li><router-link to="/">首頁</router-link></li>
            <li><router-link to="/scenicSpot">全部景點</router-link></li>
            <li id="first-list"><router-link to="/">依城市查詢</router-link>
                <div class="second-list">
                    <ul>
                        <li v-for="city in citylist" :key="city.key">
                            <router-link :to="{ name: 'scenicSpot', params: { id: city.key}}">{{ city.name }}</router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
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
.second-list {
    display: none;
}

#first-list:hover > .second-list {
    display: block;
    z-index: 9999;
}

ul {
    display: block;
    padding: 0;
    list-style: none;
    position: absolute;
    z-index: 999;
}

ul#nav > li {
    display: inline-block;
    position: relative;
}

.Navbar {
    height: 50px;
}

li {
    width: 100px;
    background-color: white;
}

a {
    font-size: 20px;
    color: black;
    text-decoration:none;
}

li:hover {
    background-color: #ccc;
}

</style>
