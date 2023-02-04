<template>
  <div class="general">
    <GeneralPage :data="data" />
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralPage from '@/components/pageComponent.vue'
// var data
// fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json').then(res => res.json()).then(res => {
//   data = res.articles
//   console.log(data)
// })
export default {
  name: 'HomeView',
  data: function () {
    return {
      data: ''
    }
  },
  components: {
    GeneralPage
  },
  created: function () {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/general/in.json').then(res => res.json()).then(res => {
      this.data = res.articles
      // console.log({ data })
    })
  }
}
</script>
