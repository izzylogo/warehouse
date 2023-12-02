<template>
  <nav>
    <div class="nav-contain">
        <div class="menu">
            <Icon icon="ion:menu" width="30" height="30" v-if="$vuetify.display.mdAndDown"/>
        </div>
        <div class="nav-cover">

            <v-divider color="white" :thickness="2" class="border-opacity-50" vertical></v-divider>
            <Icon icon="mdi:bell-outline" color="white" width="25" height="25" />
            <v-divider color="white" :thickness="2" class="border-opacity-50" vertical></v-divider>
            <div class="user">
    
                <Icon icon="mingcute:user-4-fill" color="white" width="25" height="25" />
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <Icon icon="iconamoon:arrow-down-2-bold" v-bind="props" color="white" width="20" height="20" />
                    </template>
        
                    <v-list>
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                      >
                        <v-list-item-title style="cursor: pointer;">{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
            </div>
        </div>
    </div>

    <div class="nav-bottom">
        <div class="left">
            <Icon icon="iconamoon:arrow-left-2-bold" color="white" width="20" height="20" />
            <h2>Supply - All products</h2>
        </div>
        <div class="right">
            <div class="button-cover">
                <button>New supply order</button>
            </div>
        </div>
    </div>
  </nav>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    name: 'AppBar',
    components: {
		Icon,
	},
    data: () => ({
      items: [
        { title: 'Login' },
        { title: 'View Account' },
      ],
    }),
}
</script>

<style lang="scss" scoped>
@import '../scss/colors';
@import '../scss/AppBar.scss';

</style>