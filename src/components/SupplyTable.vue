<template>
    <div class="supplyTable-cover">
        <div class="supply-head">
            <div class="left">
                <div class="inputs">
                    <v-text-field label="Search by Name or EAN" variant="underlined"></v-text-field>
                    <Icon icon="material-symbols:search" width="24" height="24" />
                </div>
                <v-btn>Search</v-btn>
            </div>
            <div class="right">
                <v-select v-model="value" variant="underlined" :items="items" label="Supplier"></v-select>
                <v-select v-model="value" variant="underlined" :items="items" label="Avaliability"></v-select>
            </div>
        </div>

        <!-- table -->
        <div class="table-contain">
            <table>
                <thead>
                    <tr>
                        <th><v-checkbox style="align-items: end; margin-bottom: -20px;"></v-checkbox></th>
                        <th><p>id</p></th>
                        <th><p>Images</p></th>
                        <th><p>EAN</p></th>
                        <th><p>Name</p></th>
                        <th><p>Sales</p></th>
                        <th><p>Supplier</p></th>
                        <th><p>Stock</p></th>
                        <th><p>loc_qty</p></th>
                        <th><p>Actions</p></th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="item in details" :key="item.id"
                    >
                        <td><v-checkbox style="align-items: end; margin-bottom: -20px;"></v-checkbox></td>
                        <td><p>{{ item.id }}</p></td>
                        <td><img :src="item.image" alt="image" class="product-img"></td>
                        <td><p>{{ item.ean }}</p></td>
                        <td>
                            <p>{{ item.namesup }}</p>
                            <div class="name-cover">
                                <InternalTable/>
                            </div>
                        </td>
                        <td>
                            <div class="sales-date">
                                <p><span>0</span>24h</p>
                                <p><span>0</span>7d</p>
                                <p><span>0</span>14d</p>
                                <p><span>0</span>30d</p>
                            </div>
                        </td>
                        <td><p>{{ item.supplier }}</p></td>
                        <td><p>{{ item.stoc }}</p></td>
                        <td><p>{{ item.loc_qty }}</p></td>
                        <td>
                            <div class="cart-cover">
                                <h4>2</h4>
                                <div class="cart-icon">
                                    <Icon icon="fa6-solid:cart-plus" width="24" height="24" />
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import InternalTable from './InternalTable.vue';
export default {
    name: 'SupplyTable',
    components: {
		Icon,
        InternalTable,
	},
    data () {
      return {
        items: ['all', 'some', 'few'],
        value: ['all'],
        details: [
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
            {
                id: '102',
                image: require('../assets/tesla-model-s.png'),
                ean: '075254316311',
                namesup: 'Unicorn Beetl Pro - Samsung Galaxy S8 - Black',
                pret: 80.18,
                tva: 147.99,
                vechi: 147.99,
                redus: "0.00%",
                profit: 67.81,
                supplier: 'koff',
                stoc: 0,
                loc_qty: 0,
            },
        ]
      }
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/SupplyTable.scss';
</style>