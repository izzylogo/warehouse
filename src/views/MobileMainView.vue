<template>
    <div class="main-cover">
        <div class="cubes">
            <div class="cube">
                <div class="image-cover">
                    <Icon icon="fluent:grid-dots-28-regular" width="40" height="40" />
                </div>
                <p>Picking</p>
            </div>
            <div class="cube">
                <div class="image-cover sec">
                    <Icon icon="mingcute:box-line" width="40" height="40" />
                </div>
                <p>Ambalare</p>
            </div>
            <div class="cube">
                <div class="image-cover thr">
                    <Icon icon="bi:file-check-fill" width="40" height="40" />
                </div>
                <p>Inventar</p>
            </div>
            <div class="cube">
                <div class="image-cover four">
                    <Icon icon="fa-solid:cubes" width="40" height="40" />
                </div>
                <p>Asociere</p>
            </div>
        </div>

        <div class="content">
            <div class="pain">
                <h2>Pain Score</h2>
                <v-progress-linear
                model-value="20"
                rounded
                color="orange"
                height="25"
                style="border: 3px solid white;"
                ></v-progress-linear>
            </div>

            <div class="comenzi">
                <h2>Comenzi</h2>
                <div class="tabs">
                    <div class="tab">
                        <h1>1127</h1>
                        <h2>In procesare</h2>
                    </div>
                    <div class="tab">
                        <h1>132</h1>
                        <h2>In picking</h2>
                    </div>
                    <div class="tab">
                        <h1>1127</h1>
                        <h2>In ambalare</h2>
                    </div>
                    <div class="tab">
                        <h1>11</h1>
                        <h2>Cu probleme</h2>
                    </div>
                </div>
            </div>

            <div class="clasament">
                <h2>Clasament</h2>
                <table>
                    <thead>
                        <tr>
                            <th style="border-top-left-radius: 10px;">#</th>
                            <th>Utilizator</th>
                            <th>P/P/A</th>
                            <th style="border-top-right-radius: 10px;">Puncte</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border-top-left-radius: 10px;">#1</td>
                            <td>
                                <p style="display: inline;">Andrei P.</p>
                                <Icon icon="fa6-solid:crown" style="margin-bottom: -5px; margin-left: 2px;" color="gold" width="24" height="24" />
                            </td>
                            <td>273/148/200</td>
                            <td style="border-top-right-radius: 10px;">12398</td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>
                                <p style="display: inline;">Andrei P.</p>
                                <Icon icon="fa6-solid:crown" style="margin-bottom: -5px; margin-left: 2px;" color="gray" width="24" height="24" />
                            </td>
                            <td>273/148/200</td>
                            <td>12398</td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>Andrei P.</td>
                            <td>273/148/200</td>
                            <td>12398</td>
                        </tr>
                        <tr>
                            <td>#1</td>
                            <td>Andrei P.</td>
                            <td>273/148/200</td>
                            <td>12398</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    name: 'MobileMain',
    components: {
		Icon,
	},
}
</script>

<style lang="scss" scoped>
@import '../scss/MobileMain.scss';

</style>