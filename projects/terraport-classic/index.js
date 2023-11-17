const { getFactoryTvl } = require('../terraswap/factoryTvl')

module.exports = {
    timetravel: false,
    misrepresentedTokens: true,
    methodology: "Liquidity on the DEX",
    terra: {
        tvl: getFactoryTvl("terra1n75fgfc8clsssrm2k0fswgtzsvstdaah7la6sfu96szdu22xta0q57rqqr",)
    },
} // node test.js projects/terraport-classic/index.js
