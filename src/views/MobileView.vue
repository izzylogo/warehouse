<template>
  <!-- this is the mobile -->
 <v-main>
    <nav>
        <div class="left">
            <img :src="require('../assets/arthian.svg')" alt="">
        </div>
        <div class="right">
            <Icon icon="fa6-solid:bell" width="24" height="24" />
            <Icon icon="ic:twotone-menu" width="24" height="24" />
        </div>
    </nav>
    <MobileMainView/>
 </v-main>
</template>

<script>
import { Icon } from '@iconify/vue';
import MobileMainView from './MobileMainView.vue';
export default {
    name: 'MobileView',
    components: {
		Icon,
        MobileMainView,
	},
}
</script>

<style lang="scss" scoped>
@import '../scss/MobileView.scss';
@import '../scss/colors';

.v-main{
    background-color: $secondary-dark;
    /* padding: 20px; */
}
</style>