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
          <v-card-text style="display: flex; margin-bottom: 20px; align-items: center; justify-content: space-between;">
            <div class="cover">
                <v-icon icon="mdi-calender"></v-icon>
                <h3>New Supply Order</h3>
            </div>
            <v-icon icon="mdi-cancel"></v-icon>
          </v-card-text>
          <v-card-actions>
            <v-form>
                <div class="inputs">
                    <label for="name">Order Name</label>
                    <input type="text">
                </div>
                <div class="inputs">
                    <label for="name">Order Name</label>
                    <input type="text">
                </div>
                <div class="inputs">
                    <label for="name">Order Name</label>
                    <input type="text">
                </div>
                <v-btn>Start Order</v-btn>
            </v-form>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
    export default {
      name: 'SupplyOrder',
      data () {
        return {
          dialog: false,
        }
      },
    }
</script>

<style lang="scss" scoped>
@import '../scss/SupplyOrder.scss';
</style>