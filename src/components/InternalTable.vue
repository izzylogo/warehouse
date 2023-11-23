<template>
  <div class="internal">
    <table>
        <thead>
            <tr>
                <th>Pret achiz</th>
                <th>Pret site(TVA)</th>
                <th>Pret vechi</th>
                <th>Redus</th>
                <th>Profit</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in detail"
            :key="item.pret"
          >
            <td>{{ item.pret }}</td>
            <td>{{ item.tva }}</td>
            <td>{{ item.vechi }}</td>
            <td>{{ item.redus }}</td>
            <td>{{ item.profit }}</td>
            <td><v-btn size="small">Edit</v-btn></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InternalTable',
  data() {
    return {
      detail: [
        {
          pret: 80.18,
          tva: 147.99,
          vechi: 147.99,
          redus: "0.00%",
          profit: 67.81,
          supplier: 'koff',
          stoc: 0,
          loc_qty: 0,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/InternalTable.scss';
</style>