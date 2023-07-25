import { URLS } from "./constants"
import axios from "axios"

const BASE_URL = URLS.currencyapi


const api = axios.create({
    baseURL: BASE_URL,
    params: {
        apikey: import.meta.env.VITE_APP_CURRENCY_APP
    }
})

type ExchangeRateApiData = {
    [currencyCode: string]: {
        code: string,
        value: number
    }
}

type ExchangeRateApiResponse = {
    meta: {
        last_updated_at: string
    }
    data: ExchangeRateApiData
}

export const getExchangeRate = async (): Promise<ExchangeRateApiResponse> => {
    return {
        "meta": {
            "last_updated_at": "2023-07-20T23:59:59Z"
        },
        "data": {
            "ADA": {
                "code": "ADA",
                "value": 3.1561356222
            },
            "AED": {
                "code": "AED",
                "value": 3.6730956152
            },
            "AFN": {
                "code": "AFN",
                "value": 87.5057347695
            },
            "ALL": {
                "code": "ALL",
                "value": 89.7016224523
            },
            "AMD": {
                "code": "AMD",
                "value": 386.2896813764
            },
            "ANG": {
                "code": "ANG",
                "value": 1.8024312168
            },
            "AOA": {
                "code": "AOA",
                "value": 827.5035409396
            },
            "ARB": {
                "code": "ARB",
                "value": 0.7911375253
            },
            "ARS": {
                "code": "ARS",
                "value": 268.613056708
            },
            "AUD": {
                "code": "AUD",
                "value": 1.4756552479
            },
            "AVAX": {
                "code": "AVAX",
                "value": 0.0719783249
            },
            "AWG": {
                "code": "AWG",
                "value": 1.79
            },
            "AZN": {
                "code": "AZN",
                "value": 1.7037991806
            },
            "BAM": {
                "code": "BAM",
                "value": 1.7458372416
            },
            "BBD": {
                "code": "BBD",
                "value": 2.019326292
            },
            "BDT": {
                "code": "BDT",
                "value": 108.5537219878
            },
            "BGN": {
                "code": "BGN",
                "value": 1.7564973419
            },
            "BHD": {
                "code": "BHD",
                "value": 0.3770030638
            },
            "BIF": {
                "code": "BIF",
                "value": 2835
            },
            "BMD": {
                "code": "BMD",
                "value": 1
            },
            "BNB": {
                "code": "BNB",
                "value": 0.0041081588
            },
            "BND": {
                "code": "BND",
                "value": 1.3228891912
            },
            "BOB": {
                "code": "BOB",
                "value": 6.926040738
            },
            "BRL": {
                "code": "BRL",
                "value": 4.7986965087
            },
            "BSD": {
                "code": "BSD",
                "value": 1.0001121657
            },
            "BTC": {
                "code": "BTC",
                "value": 0.0000334634
            },
            "BTN": {
                "code": "BTN",
                "value": 82.0595266209
            },
            "BUSD": {
                "code": "BUSD",
                "value": 0.9957050669
            },
            "BWP": {
                "code": "BWP",
                "value": 13.0566176461
            },
            "BYN": {
                "code": "BYN",
                "value": 2.5243802638
            },
            "BYR": {
                "code": "BYR",
                "value": 19600
            },
            "BZD": {
                "code": "BZD",
                "value": 2.0159523519
            },
            "CAD": {
                "code": "CAD",
                "value": 1.3175251605
            },
            "CDF": {
                "code": "CDF",
                "value": 2480.0007047137
            },
            "CHF": {
                "code": "CHF",
                "value": 0.8663101049
            },
            "CLF": {
                "code": "CLF",
                "value": 0.0296090049
            },
            "CLP": {
                "code": "CLP",
                "value": 816.9998136286
            },
            "CNY": {
                "code": "CNY",
                "value": 7.1776027628
            },
            "COP": {
                "code": "COP",
                "value": 3979
            },
            "CRC": {
                "code": "CRC",
                "value": 536.7481013861
            },
            "CUC": {
                "code": "CUC",
                "value": 1
            },
            "CUP": {
                "code": "CUP",
                "value": 24
            },
            "CVE": {
                "code": "CVE",
                "value": 99.4980729311
            },
            "CZK": {
                "code": "CZK",
                "value": 21.5343017176
            },
            "DAI": {
                "code": "DAI",
                "value": 0.9975025003
            },
            "DJF": {
                "code": "DJF",
                "value": 177.7197274878
            },
            "DKK": {
                "code": "DKK",
                "value": 6.6923107956
            },
            "DOP": {
                "code": "DOP",
                "value": 56.0004423366
            },
            "DOT": {
                "code": "DOT",
                "value": 0.1863821042
            },
            "DZD": {
                "code": "DZD",
                "value": 134.8109989686
            },
            "EGP": {
                "code": "EGP",
                "value": 30.8023037333
            },
            "ERN": {
                "code": "ERN",
                "value": 15.0000162004
            },
            "ETB": {
                "code": "ETB",
                "value": 54.689893468
            },
            "ETH": {
                "code": "ETH",
                "value": 0.000527666
            },
            "EUR": {
                "code": "EUR",
                "value": 0.8982021464
            },
            "FJD": {
                "code": "FJD",
                "value": 2.218303242
            },
            "FKP": {
                "code": "FKP",
                "value": 0.7768849298
            },
            "GBP": {
                "code": "GBP",
                "value": 0.7768951465
            },
            "GEL": {
                "code": "GEL",
                "value": 2.5650233868
            },
            "GGP": {
                "code": "GGP",
                "value": 0.7768849808
            },
            "GHS": {
                "code": "GHS",
                "value": 11.6500626591
            },
            "GIP": {
                "code": "GIP",
                "value": 0.7768844465
            },
            "GMD": {
                "code": "GMD",
                "value": 59.7012275555
            },
            "GNF": {
                "code": "GNF",
                "value": 8650.0006960005
            },
            "GTQ": {
                "code": "GTQ",
                "value": 7.8508224627
            },
            "GYD": {
                "code": "GYD",
                "value": 209.2362326177
            },
            "HKD": {
                "code": "HKD",
                "value": 7.8140513835
            },
            "HNL": {
                "code": "HNL",
                "value": 24.6197004653
            },
            "HRK": {
                "code": "HRK",
                "value": 6.7238602493
            },
            "HTG": {
                "code": "HTG",
                "value": 136.5111443934
            },
            "HUF": {
                "code": "HUF",
                "value": 342.7550624013
            },
            "IDR": {
                "code": "IDR",
                "value": 15056
            },
            "ILS": {
                "code": "ILS",
                "value": 3.6126756261
            },
            "IMP": {
                "code": "IMP",
                "value": 0.7768843159
            },
            "INR": {
                "code": "INR",
                "value": 82.0827629486
            },
            "IQD": {
                "code": "IQD",
                "value": 1310.1249311789
            },
            "IRR": {
                "code": "IRR",
                "value": 42250.005576717
            },
            "ISK": {
                "code": "ISK",
                "value": 131.4045863231
            },
            "JEP": {
                "code": "JEP",
                "value": 0.7768845121
            },
            "JMD": {
                "code": "JMD",
                "value": 154.3488146747
            },
            "JOD": {
                "code": "JOD",
                "value": 0.709097102
            },
            "JPY": {
                "code": "JPY",
                "value": 139.8720432304
            },
            "KES": {
                "code": "KES",
                "value": 141.8201723455
            },
            "KGS": {
                "code": "KGS",
                "value": 87.869931828
            },
            "KHR": {
                "code": "KHR",
                "value": 4127.4987420979
            },
            "KMF": {
                "code": "KMF",
                "value": 439.0499645649
            },
            "KPW": {
                "code": "KPW",
                "value": 900.0214087332
            },
            "KRW": {
                "code": "KRW",
                "value": 1278.7252185396
            },
            "KWD": {
                "code": "KWD",
                "value": 0.3068800371
            },
            "KYD": {
                "code": "KYD",
                "value": 0.8334561087
            },
            "KZT": {
                "code": "KZT",
                "value": 444.5218858226
            },
            "LAK": {
                "code": "LAK",
                "value": 19137.507431509
            },
            "LBP": {
                "code": "LBP",
                "value": 15092.731676503
            },
            "LKR": {
                "code": "LKR",
                "value": 326.303864321
            },
            "LRD": {
                "code": "LRD",
                "value": 184.7498878045
            },
            "LSL": {
                "code": "LSL",
                "value": 17.8599627572
            },
            "LTC": {
                "code": "LTC",
                "value": 0.0108233977
            },
            "LTL": {
                "code": "LTL",
                "value": 2.95274
            },
            "LVL": {
                "code": "LVL",
                "value": 0.60489
            },
            "LYD": {
                "code": "LYD",
                "value": 4.7364857988
            },
            "MAD": {
                "code": "MAD",
                "value": 9.7297502101
            },
            "MATIC": {
                "code": "MATIC",
                "value": 1.3003877995
            },
            "MDL": {
                "code": "MDL",
                "value": 17.4521233953
            },
            "MGA": {
                "code": "MGA",
                "value": 4470.0007097129
            },
            "MKD": {
                "code": "MKD",
                "value": 55.3345416361
            },
            "MMK": {
                "code": "MMK",
                "value": 2100.1989482396
            },
            "MNT": {
                "code": "MNT",
                "value": 3450.8194145025
            },
            "MOP": {
                "code": "MOP",
                "value": 8.0476500074
            },
            "MRO": {
                "code": "MRO",
                "value": 356.999828
            },
            "MUR": {
                "code": "MUR",
                "value": 45.2402423747
            },
            "MVR": {
                "code": "MVR",
                "value": 15.4035303696
            },
            "MWK": {
                "code": "MWK",
                "value": 1053.590167214
            },
            "MXN": {
                "code": "MXN",
                "value": 16.8810570432
            },
            "MYR": {
                "code": "MYR",
                "value": 4.5429864944
            },
            "MZN": {
                "code": "MZN",
                "value": 63.2498411785
            },
            "NAD": {
                "code": "NAD",
                "value": 17.8597177628
            },
            "NGN": {
                "code": "NGN",
                "value": 791.0100009908
            },
            "NIO": {
                "code": "NIO",
                "value": 36.5497776233
            },
            "NOK": {
                "code": "NOK",
                "value": 10.0718160159
            },
            "NPR": {
                "code": "NPR",
                "value": 131.2960255198
            },
            "NZD": {
                "code": "NZD",
                "value": 1.6053851742
            },
            "OMR": {
                "code": "OMR",
                "value": 0.3850320623
            },
            "OP": {
                "code": "OP",
                "value": 0.6512736411
            },
            "PAB": {
                "code": "PAB",
                "value": 1.0001291485
            },
            "PEN": {
                "code": "PEN",
                "value": 3.5849554454
            },
            "PGK": {
                "code": "PGK",
                "value": 3.5199524956
            },
            "PHP": {
                "code": "PHP",
                "value": 54.6660184572
            },
            "PKR": {
                "code": "PKR",
                "value": 284.9994860641
            },
            "PLN": {
                "code": "PLN",
                "value": 3.9995904265
            },
            "PYG": {
                "code": "PYG",
                "value": 7277.6782937845
            },
            "QAR": {
                "code": "QAR",
                "value": 3.6409835765
            },
            "RON": {
                "code": "RON",
                "value": 4.4276007304
            },
            "RSD": {
                "code": "RSD",
                "value": 105.2503639944
            },
            "RUB": {
                "code": "RUB",
                "value": 90.0962707976
            },
            "RWF": {
                "code": "RWF",
                "value": 1169.8021763429
            },
            "SAR": {
                "code": "SAR",
                "value": 3.7509875537
            },
            "SBD": {
                "code": "SBD",
                "value": 8.3478285476
            },
            "SCR": {
                "code": "SCR",
                "value": 13.4981138696
            },
            "SDG": {
                "code": "SDG",
                "value": 600.5166426328
            },
            "SEK": {
                "code": "SEK",
                "value": 10.3494167631
            },
            "SGD": {
                "code": "SGD",
                "value": 1.3269702442
            },
            "SHP": {
                "code": "SHP",
                "value": 1.2167501495
            },
            "SLL": {
                "code": "SLL",
                "value": 19750.002301435
            },
            "SOL": {
                "code": "SOL",
                "value": 0.0392867612
            },
            "SOS": {
                "code": "SOS",
                "value": 569.4923939128
            },
            "SRD": {
                "code": "SRD",
                "value": 38.266953743
            },
            "STD": {
                "code": "STD",
                "value": 20697.981008
            },
            "SVC": {
                "code": "SVC",
                "value": 8.7514241443
            },
            "SYP": {
                "code": "SYP",
                "value": 2512.5533172144
            },
            "SZL": {
                "code": "SZL",
                "value": 17.7640538435
            },
            "THB": {
                "code": "THB",
                "value": 34.2098549071
            },
            "TJS": {
                "code": "TJS",
                "value": 10.9564354965
            },
            "TMT": {
                "code": "TMT",
                "value": 3.5
            },
            "TND": {
                "code": "TND",
                "value": 3.0295025929
            },
            "TOP": {
                "code": "TOP",
                "value": 2.3401503064
            },
            "TRY": {
                "code": "TRY",
                "value": 26.8555991292
            },
            "TTD": {
                "code": "TTD",
                "value": 6.7876812437
            },
            "TWD": {
                "code": "TWD",
                "value": 31.0525020002
            },
            "TZS": {
                "code": "TZS",
                "value": 2445.0000490102
            },
            "UAH": {
                "code": "UAH",
                "value": 36.9356693973
            },
            "UGX": {
                "code": "UGX",
                "value": 3645.5338738371
            },
            "USD": {
                "code": "USD",
                "value": 1.0000010722
            },
            "USDC": {
                "code": "USDC",
                "value": 0.9978665644
            },
            "USDT": {
                "code": "USDT",
                "value": 0.9971170058
            },
            "UYU": {
                "code": "UYU",
                "value": 38.0799432171
            },
            "UZS": {
                "code": "UZS",
                "value": 11610.001648763
            },
            "VEF": {
                "code": "VEF",
                "value": 2889772.8961462
            },
            "VND": {
                "code": "VND",
                "value": 23653.5
            },
            "VUV": {
                "code": "VUV",
                "value": 117.964394053
            },
            "WST": {
                "code": "WST",
                "value": 2.7037934164
            },
            "XAF": {
                "code": "XAF",
                "value": 585.5322336045
            },
            "XAG": {
                "code": "XAG",
                "value": 0.0403203173
            },
            "XAU": {
                "code": "XAU",
                "value": 0.0005070175
            },
            "XCD": {
                "code": "XCD",
                "value": 2.7025502856
            },
            "XDR": {
                "code": "XDR",
                "value": 0.7383900961
            },
            "XOF": {
                "code": "XOF",
                "value": 583.5043880554
            },
            "XPD": {
                "code": "XPD",
                "value": 0.0007779168
            },
            "XPF": {
                "code": "XPF",
                "value": 106.7500059331
            },
            "XPT": {
                "code": "XPT",
                "value": 0.0010400752
            },
            "XRP": {
                "code": "XRP",
                "value": 1.2537860999
            },
            "YER": {
                "code": "YER",
                "value": 250.2974864944
            },
            "ZAR": {
                "code": "ZAR",
                "value": 17.8913014837
            },
            "ZMK": {
                "code": "ZMK",
                "value": 9001.2
            },
            "ZMW": {
                "code": "ZMW",
                "value": 19.2775853251
            },
            "ZWL": {
                "code": "ZWL",
                "value": 321.999592
            }
        }
    }

    const response = await api.get('/latest')

    return response.data
}

export default api