<template>
    <div class="m-2 py-3 px-2 flex justify-between rounded-xl" :class="{ 'bg-blue-50': selected }" @click="emits('select')">
        <div class="flex items-center">
            <img :src="coin.flag" alt="" height="50" />

            <span class="ml-2 font-bold">{{ coin.code }}</span>
        </div>
        <div class="flex flex-col justify-center items-end">

            <div class="font-bold" :class="{ 'text-blue-500': selected, 'text-black': !selected }">
                {{ coin.value }}
            </div>
            <span class="text-xs">
                {{ coin.name }} {{ coin.symbol }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const emits = defineEmits(['select'])


const props = defineProps({
    coin: {
        type: Object as PropType<{
            symbol: string,
            code: string,
            value: string,
            flag: string,
            name: string
        }>,
        required: true
    },
    selected: {
        type: Boolean,
        default: false
    }
})

</script>

<style scoped></style>