<template>
  <v-card>
    <v-layout
    style="min-height: 100vh;"
    >
      <v-navigation-drawer
        expand-on-hover
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        class="side-nav"
      >
        <v-list>
          <v-list-item>
            <div class="logo">
                <img style="width: 120px" :src="require('../assets/arthian.png')" alt="">
            </div>
            <!-- <template v-slot:append>
                <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
                ></v-btn>
            </template> -->
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item value="shared">
            <!-- <template v-slot:prepend>
            <v-icon icon="mdi-view-dashboard"></v-icon>
            </template> -->
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-title >
                    <Icon icon="ic:round-dashboard" width="24" height="24" />
                    Dashboard
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <ul>
                        <li>All Products</li>
                        <li>All Orders</li>
                        <li>Reception</li>
                        <li>Suppliers</li>
                    </ul>
                    
                </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>

          <v-list-item value="inventory">
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-title>
                    <Icon icon="bxs:file" color="gray" width="24" height="24" />
                    Order
                </v-expansion-panel-title>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
          

          <!-- <v-list-item prepend-icon="mdi-file-document" title="Orders" value="orders"></v-list-item> -->
          
          <v-list-item value="inventory">
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-title>
                    <Icon icon="bi:building-fill-gear" width="24" height="24" />
                    Inventory
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <ul>
                        <li>Products</li>
                        <li>Reception</li>
                    </ul>
                </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
          
          <v-list-item value="supply">
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-title>
                    <Icon icon="lets-icons:bag-fill" width="24" height="24" />
                    Supply
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <ul>
                        <li>All Products</li>
                        <li>History</li>
                    </ul>
                    
                </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
          
          <v-list-item value="admin">
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-title>
                    <Icon icon="el:puzzle" width="24" height="24" />
                    Administration
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <ul>
                        <li>Users</li>
                        <li>Inventory Logs</li>
                        <li>Boxes</li>
                        <li>Location</li>
                    </ul>
                    
                </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>

</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    name: 'DashboardVIew',
    components: {Icon,},
    data () {
      return {
        drawer: true,
        rail: false,
      }
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/DashboardView.scss';
</style>