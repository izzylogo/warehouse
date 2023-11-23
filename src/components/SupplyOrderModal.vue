<template>
    <div class="text-center">
      <v-btn
        @click="dialog = true"
        class="main-btn"
      >
      Add Supply Order
      </v-btn>
  
      <v-dialog
        v-model="dialog"
        width="400px"
      >
        <v-card style="padding: 20px;">
          <v-card-text style="display: flex; margin-bottom: 20px; padding: 0px !important; align-items: center; justify-content: space-between;">
            <div class="cover">
              <Icon icon="icon-park-outline:order" width="23" height="23" />
                <h3>New Supply Order</h3>
            </div>
            <div class="cansel">
              <Icon icon="iconamoon:close-bold" width="30" height="30" />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-form>
                <div class="inputs">
                    <label for="name">Order Name</label>
                    <input type="text" placeholder="KOFF_18_08_2023_13-19">
                </div>
                <div class="inputs">
                    <label for="name">When you will place the order?</label>
                    <input type="text" placeholder="18_08_2023">
                </div>
                <div class="inputs">
                    <label for="name">Shipping date (estimate)</label>
                    <input type="text" placeholder="21_08_2023">
                </div>
                <v-btn>Start Order</v-btn>
            </v-form>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
    export default {
      name: 'SupplyOrder',
      data () {
        return {
          dialog: false,
        }
      },
      components: {
        Icon,
      },
    }
</script>

<style lang="scss" scoped>
@import '../scss/SupplyOrder.scss';
</style>