<template>
  <div class="general">
    <GeneralPage :data="data" />
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralPage from '@/components/pageComponent.vue'
let data
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
  // methods: {
  //   fetching() {
  //     fetch('https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json').then(res => res.json()).then(res => {
  //       data = res.articles
  //       console.log(data)
  //     })
  //   }
  // },
  created: function () {
    fetch('https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json').then(res => res.json()).then(res => {
      this.data = res.articles
      console.log({ data })
    })
  }
}
</script>
