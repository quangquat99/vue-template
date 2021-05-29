<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <base-material-stats-card
          color="info"
          icon="mdi-cart-outline"
          title="Total Transaction"
          value="245"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <base-material-stats-card
          color="orange"
          icon="mdi-clipboard-outline"
          title="Total Product"
          value="30"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <base-material-stats-card
          color="green"
          icon="mdi-account-multiple"
          title="Total Customer"
          value="5000"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <base-material-stats-card
          color="pink"
          icon="mdi-account"
          title="Total Employee"
          value="48"
          sub-icon="mdi-clock"
          sub-text="Just Updated"
        />
      </v-col>

      <v-col
        cols="12"
      >
        <base-material-chart-card
          :data="revenueEmployee.data"
          :options="revenueEmployee.options"
          :responsive-options="revenueEmployee.responsiveOptions"
          color="success"
          hover-reveal
          type="Bar"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Report employee for transactions
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="text-caption grey--text font-weight-light">Just updated</span>
          </template>
        </base-material-chart-card>
      </v-col>
      <v-col
        cols="12"
      >
        <base-material-chart-card
          :data="revenueProduct.data"
          :options="revenueProduct.options"
          :responsive-options="revenueProduct.responsiveOptions"
          color="info"
          hover-reveal
          type="Line"
        >
          <h4 class="card-title font-weight-light mt-2 ml-2">
            Report the most sold products
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="text-caption grey--text font-weight-light">Just updated</span>
          </template>
        </base-material-chart-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        revenueEmployee: {
          data: {
            labels: ['employee 1', 'employee 2', 'employee 3', 'employee 5', 'employee 6', 'employee 7', 'employee 8', 'employee 9', 'employee 10'],
            series: [
              [58, 44, 43, 78, 34, 10, 45, 90, 32],
            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 100,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
        revenueProduct: {
          data: {
            labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 4', 'Product 4'],
            series: [
              [542, 443, 320, 780, 34, 290],
            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
      }
    },
  }
</script>

<style scoped>
</style>
