<template>
    <div class="text-center">
      <v-btn
        @click="dialog = true"
        class="main-btn"
        variant="outlined"
      >
        Total: 1283 lei (14 Products)
      </v-btn>
  
      <v-dialog
        v-model="dialog"
        width="1000px"
      >
        <v-card style="padding: 20px;">
          <v-card-text class="header-top" style="display: flex; align-items: center;">
           <v-icon icon="mdi-clipboard-outline"></v-icon>
           <h2>Order #32131</h2>
           <div class="close">
            <Icon @click="dialog = false" icon="carbon:close-outline" width="24" height="24" />
           </div>
          </v-card-text>
          <v-card-text class="header-bottom">
            <h4>Name: <span>KOFF_18-08-2023_13-19</span></h4>
            <h4>Date of Order: <span>18-08-2023</span></h4>
            <h4>Arrival date: <span>21-08-2023</span></h4>
            <Icon style="display: inline-block;" icon="fa6-solid:pen" width="24" height="24" />
          </v-card-text>
          <v-card-text>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quality</th>
                        <th>Stock</th>
                        <th>14 days sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in products"
                        :key="item.stock"
                    >
                        <td>
                            <div class="product-cover">
                                <img :src="item.image" alt="">
                                <div class="desc">
                                    <p>{{ item.description }}</p>
                                    <p>{{ item.description2 }}</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="num">
                                <p>2</p>
                                <p>22</p>
                            </div>
                            <v-progress-linear  style="width: 150px; margin-left: -10px; margin-right: 10px;" :model-value="item.value"></v-progress-linear>
                        </td>
                        <td><p style="text-align: center;">{{ item.stock }}</p></td>
                        <td><p style="text-align: center;">{{ item.day }}</p></td>
                    </tr>
                </tbody>
            </table>
          </v-card-text>
          <v-card-text>
            <v-btn variant="flat" class="start">Start Order</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
    export default {
      name: 'SupplyTotal',
      components: {Icon},
      data () {
        return {
          dialog: false,
          products: [
            {
                image: require('../assets/tesla-model-s.png'),
                description: 'Folie de sticla Samsung galaxy S22 Ultra, Blue Star UV',
                description2: 'Glass - Transparent',
                value: 20,
                stock: 2,
                day: 30,
            },
            {
                image: require('../assets/tesla-model-s.png'),
                description: 'Folie de sticla Samsung galaxy S22 Ultra, Blue Star UV',
                description2: 'Glass - Transparent',
                value: 20,
                stock: 2,
                day: 30,
            },
            {
                image: require('../assets/tesla-model-s.png'),
                description: 'Folie de sticla Samsung galaxy S22 Ultra, Blue Star UV',
                description2: 'Glass - Transparent',
                value: 20,
                stock: 2,
                day: 30,
            },
            {
                image: require('../assets/tesla-model-s.png'),
                description: 'Folie de sticla Samsung galaxy S22 Ultra, Blue Star UV',
                description2: 'Glass - Transparent',
                value: 20,
                stock: 2,
                day: 30,
            },
            {
                image: require('../assets/tesla-model-s.png'),
                description: 'Folie de sticla Samsung galaxy S22 Ultra, Blue Star UV',
                description2: 'Glass - Transparent',
                value: 20,
                stock: 2,
                day: 30,
            },
            
          ],
        }
      },
    }
</script>

<style lang="scss" scoped>
@import '../scss/SupplyTotal.scss';
</style>