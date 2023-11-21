<template>
  <div class="supply">
    <div class="supply-cover">

        <!-- navbar -->
        <v-app-bar
            density="compact"
            :elevation="1"
        >
            <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
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

        <!-- main -->
        <v-main>
            <div class="supply-top">
                <div class="left">
                    <h3>Supply Order</h3>
                    <p>(17_aug_2023_20_30)</p>
                    <p>Orders History</p>
                </div>
                <div class="right">
                    <SupplyOrder/>
                    <SupplyTotal/>
                </div>
            </div>
            <div class="supply-main">
                <SupplyTable/>
            </div>
        </v-main>
    </div>
  </div>
</template>

<script>
import SupplyOrder from '@/components/SupplyOrderModal.vue';
import SupplyTotal from '@/components/SupplyTotal.vue';
import SupplyTable from '@/components/SupplyTable.vue';
export default {
    components: {SupplyOrder, SupplyTotal, SupplyTable,}
}
</script>

<style lang="scss" scoped>
@import '../scss/Supply.scss';
</style>