<template>
  <div class="general">
    <GeneralPage :data="data" />
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralPage from '@/components/pageComponent.vue'
var data
fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json').then(res => res.json()).then(res => {
  data = res.articles
  console.log(data)
})
export default {
  name: 'HomeView',
  data: function () {
    return {
      data: data
    }
  },
  components: {
    GeneralPage
  }
}
</script>
