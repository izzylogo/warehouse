<template>
  <div class="supply">
    <div class="supply-cover">
        
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