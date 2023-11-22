<template>
  <v-card>
    <v-layout
    style="min-height: 100vh;"
    >
      <v-navigation-drawer
        expand-on-hover
        permanent
        class="side-nav"
        v-if="!$vuetify.display.mdAndDown"
      >
        <v-list>
          <v-list-item>
            <div class="logo">
                <img style="width: 120px" :src="require('../assets/arthian.png')" alt="">
            </div>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item >
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

          <v-list-item >
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-title>
                    <Icon icon="bxs:file" color="white" width="24" height="24" />
                    Order
                </v-expansion-panel-title>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
          

          <!-- <v-list-item prepend-icon="mdi-file-document" title="Orders" value="orders"></v-list-item> -->
          
          <v-list-item>
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
          
          <v-list-item >
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
          
          <v-list-item >
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


      <!-- mobile side nav -->
      <v-navigation-drawer
        class="side-nav"
        v-else-if="$vuetify.display.mdAndDown"
        v-model="drawer"
        temporary
      >
      <v-list>
          <v-list-item>
            <div class="logo">
                <img style="width: 120px" :src="require('../assets/arthian.png')" alt="">
            </div>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item >
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

          <v-list-item >
            <v-expansion-panels>
                <v-expansion-panel>
                <v-expansion-panel-title>
                    <Icon icon="bxs:file" color="white" width="24" height="24" />
                    Order
                </v-expansion-panel-title>
                </v-expansion-panel>
            </v-expansion-panels>
          </v-list-item>
                  
          <v-list-item>
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
          
          <v-list-item >
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
          
          <v-list-item >
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
         <!-- navbar -->
         <v-app-bar
            density="compact"
            :elevation="1"
        >
            <template v-slot:prepend>
            <v-app-bar-nav-icon v-if="$vuetify.display.mdAndDown" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            </template>

            <v-app-bar-title>Suppliers</v-app-bar-title>
            <template v-slot:append>
                <div class="button-cover">
                    <v-btn>
                        <v-icon
                        start
                        icon="mdi-sync"
                        ></v-icon>
                        SUPPLIER
                    </v-btn>
                    <v-btn>
                        <v-icon
                        start
                        icon="mdi-sync"
                        ></v-icon>
                        PRODUCTS
                    </v-btn>
                    <v-btn>
                        <v-icon
                        start
                        icon="mdi-sync"
                        ></v-icon>
                        ORDERS
                    </v-btn>
                </div>
            </template>
        </v-app-bar>
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