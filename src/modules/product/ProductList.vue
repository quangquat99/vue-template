<template>
  <v-row>
    <v-col
      v-for="product in products"
      :key="product.name"
      cols="12"
      md="4"
    >
      <v-card max-height="500px">
        <div
          class="view-detail"
          @click="viewDetail(product)"
        >
          <v-img
            height="200"
            :src="product.imgLink"
          />

          <v-card-title>{{ product.title }}</v-card-title>

          <v-card-text>
            <div class="my-4 text-subtitle-1">
              $ • {{ product.price }}
            </div>

            <div class="text-description">
              {{ product.description }}
            </div>
          </v-card-text>
        </div>

        <v-divider />

        <v-card-actions>
          <v-btn
            color="red"
            text
            @click="deleteProduct"
          >
            Delete
          </v-btn>
          <v-btn
            color="blue"
            text
          >
            Edit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      products: [
        {
          id: 1,
          title: 'Nodejs',
          price: 100,
          description: 'Small plates, salads sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          imgLink: 'https://nordiccoder.com/app/uploads/2019/08/26-nodejs.png',
        },
        {
          id: 2,
          title: 'Vuejs',
          price: 100,
          description: 'Small plates, salads sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          imgLink: 'https://aduka.asia/wp-content/uploads/2018/05/vuejs-1.png',
        },
        {
          id: 3,
          title: 'Java Web',
          price: 100,
          description: 'Small plates, salads sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          imgLink: 'https://1.bp.blogspot.com/-E7cY_4HWkBM/XfiByMAirsI/AAAAAAAAQDE/7qS5dIQbyhUo5AQFFyD1KQusM3NhN-TUgCPcBGAYYCw/s1600/java-logo-696x348.png',
        },
        {
          id: 4,
          title: 'Fullstack development',
          price: 100,
          description: 'Small plates, salads sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          imgLink: 'https://resources.mindx.edu.vn/uploads/images/full-stack%2001.jpg',
        },
        {
          id: 5,
          title: 'Front-end development',
          price: 100,
          description: 'Small plates, salads sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          imgLink: 'https://codelearn.io/Upload/Blog/lo-trinh-hoan-chinh-cho-front-end-developer-nam-2020-63720702179.0041.png',
        },
        {
          id: 6,
          title: 'Front-end development',
          price: 100,
          description: 'Small plates, salads sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          imgLink: 'https://jobsgo.vn/blog/wp-content/uploads/2020/07/Frontend-l%C3%A0-g%C3%AC-Backend-l%C3%A0-g%C3%AC.jpg',
        },
        {
          id: 7,
          title: 'Front-end development',
          price: 100,
          description: 'Small plates, salads sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          imgLink: 'https://nordiccoder.com/app/uploads/2019/08/26-nodejs.png',
        },
      ],
    }),

    methods: {
      async deleteProduct () {
        const confirms = confirm('Are you sure you want to delete this product')
        if (confirms) {
          console.log('confirm')
        }
      },
      viewDetail (product) {
        console.log('product', product)
        this.$router.push({ name: 'product-detail', params: { id: product.id } })
      },
    },
  }
</script>

<style scoped>
.text-description {
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.view-detail {
  cursor: pointer;
}
</style>
