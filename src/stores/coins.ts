import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import * as currencyApi from "@/utils/currency"
//@ts-ignore
import coins from "@/assets/coins.json"

export type Coin = {
  name: string
  symbol: string
  symbol_native: string
  code: string
  decimal_digits: number
}

type Coins = {
  [countryCode: string]: Coin
}

export const useCoinsStore = defineStore('coins', {
  state: () => ({
    activeCoin: 'USD',
    fromNumber: 1,
    enabledCoins: ['USD'],
    lastUpdateTime: 0,
    coins: Object.values(coins) as Coin[],
    exchangeRate: {}
  }),
  getters: {
  },
  actions: {
    async getLatestExchangeRate() {

      const hasBeenOneHour = Date.now() - this.lastUpdateTime > 3600000

      if (!hasBeenOneHour) return

      const response = await currencyApi.getExchangeRate()

      this.lastUpdateTime = Date.now()

      this.exchangeRate = Object.values(response.data).reduce((acc: any, curr: any) => {
        const code = curr.code
        const rate = curr.value
        acc[code] = rate
        return acc
      }, {})
    }
  },
})
