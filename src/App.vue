<template>
  <div>
    <div class="h-[5vh] flex justify-center ">
      <h1>Currency App</h1>

      <!-- <button class="btn btn-primary" @click="getLatestExchangeRate">Get</button> -->
    </div>

    <div class="h-[90vh] overflow-y-auto">
      <CoinList :fromNumber="coinsStore.fromNumber" :coins="coinsStore.coins" :rates="coinsStore.exchangeRate"
        @select="handleSelectCoin" :selectedCoin="coinsStore.activeCoin" />

    </div>


    <div class="h-[5vh] flex justify-center">
      <h2 class="text-center text-xs">Last updated time : {{ new Date(coinsStore.lastUpdateTime) }}</h2>
    </div>

  </div>
</template>
<script setup lang="ts">
import CoinList from './components/CoinList.vue';
import { useCoinsStore } from './stores/coins';

const coinsStore = useCoinsStore();


function getLatestExchangeRate() {
  coinsStore.getLatestExchangeRate()
}

function handleSelectCoin(coinCode: string) {
  coinsStore.activeCoin = coinCode
  coinsStore.fromNumber = 1
}

getLatestExchangeRate()

window.addEventListener('keyup', (e) => {
  const isNumber = !isNaN(Number(e.key))
  const key = e.key


  if (key === 'Backspace') {
    coinsStore.fromNumber = 0
  } else if (isNumber) {
    coinsStore.fromNumber = Number(`${coinsStore.fromNumber}${key}`)
  }
})

</script>