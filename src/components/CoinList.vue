<template>
    <div>
        <CointListItem v-for="coin in coinsWithRate" :key="coin.symbol" :coin="coin" :selected="coin.code === selectedCoin"
            @select="emits('select', coin.code)" />
    </div>
</template>

<script setup lang="ts">

import type { Coin } from "@/stores/coins";
import { computed, type PropType } from "vue"
import CointListItem from "./CointListItem.vue";

const emits = defineEmits(['select'])
const props = defineProps({
    fromNumber: {
        type: Number,
        required: true
    },
    coins: {
        type: Array as PropType<Coin[]>,
        required: true
    },
    rates: {
        type: Object as PropType<{ [key: string]: number }>,
        required: true
    },
    selectedCoin: {
        type: String,
        default: 'USD'
    }
})

const getCountryCodeFromCoinCode = (code: string) => {
    return code.slice(0, 2)
}


const coinsWithRate = computed(() => {
    return props.coins
        .filter(c => !!c)
        .map((coin: Coin) => {

            const decimal = coin.decimal_digits

            const fromNumberRateUsd = props.fromNumber / props.rates[props.selectedCoin]

            const value = fromNumberRateUsd * props.rates[coin.code]

            return {
                name: coin.name,
                symbol: coin.symbol,
                code: coin.code,
                value: coin.code === props.selectedCoin ? props.fromNumber : value.toFixed(decimal),
                flag: `/flags/${getCountryCodeFromCoinCode(coin.code).toLocaleLowerCase()}.svg`
            }
        })
})



</script>

<style scoped></style>