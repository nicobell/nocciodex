import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCardsStore = defineStore('cards', () => {
  /* const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  } */

  const cards = {
    0: [
      //bulbasaur
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_001_R_EN_LG.png",
      "https://images.pokemontcg.io/base6/47_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PGO/PGO_003_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_003_R_EN_LG.png"],
      //charmander   
      "https://images.pokemontcg.io/base4/69_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_008_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpc/SP/SP_143_R_JP_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_066_R_EN_LG.png"],
      //squirtle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_024_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_024_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_025_R_EN_LG.png",

      //chikorita
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_005_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_007_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_003_R_EN_LG.png",
      //cyndaquil
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_018_R_EN_LG.png", "https://images.pokemontcg.io/ex2/59_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_024_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_019_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_185_R_EN_LG.png",
      //totodile
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_055_R_EN_LG.png",
      "https://images.pokemontcg.io/ex10/38_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_020_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_057_R_EN_LG.png"],

      //treecko
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_006_R_EN_LG.png",
      "https://images.pokemontcg.io/pl4/38_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_010a_R_EN_LG.png",
      //torchic
      "https://images.pokemontcg.io/pl1/99_hires.png",
      ["https://images.pokemontcg.io/pl1/45_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_027_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ex13/20_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_024_R_EN_LG.png"],
      //mudkip
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XYP/XYP_038_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_063_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_064_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_035_R_EN_LG.png"],

      //turtwig
      "https://images.pokemontcg.io/pop9/17_hires.png",
      ["https://images.pokemontcg.io/dp5/37_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_011_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_009_R_EN_LG.png",
      //chimchar
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_018_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_116_R_EN_LG.png",
      //piplup
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_035_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_036_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_037_R_EN_LG.png",

      //snivy
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_005_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_006_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_007_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_006_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_007_R_EN_LG.png",
      //tepig
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_031_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_024_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_032_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_033_R_EN_LG.png",
      //oshawott
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_037_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_033_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_034_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_032_R_EN_LG.png",

      //chespin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_010_R_EN_LG.png",
      "https://www.darkfoxtcg.com/cdn/shop/products/7d504440-ed34-4939-8201-cd9f141ff448.jpg?v=1710522703",
      //fennekin
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_015_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_025_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_027_R_EN_LG.png",
      //froakie
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_039_R_EN_SM.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_038_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_040_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XYP/XYP_162_R_EN_LG.png",

      //rowlet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_011_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_007_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_012_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_008_R_EN_LG.png",
      //litten
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_025_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_026_R_EN_LG.png",
      //popplio
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_003_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_040_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_041_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_067_R_EN_LG.png"],

      //grookey
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_015_R_EN_LG.png",
      //scrobunny
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_027_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_034_R_EN_LG.png",
      //sobble
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_055_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_042_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_279_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_043_R_EN_LG.png"],

      //sprigatito
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_013_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_015_R_EN_LG.png",
      //fuecoco
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_029_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_036_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_038_R_EN_LG.png",
      //quaxly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_003_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_051_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_005_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_054_R_EN_LG.png"],
    ],
    1: [
      //bulbasaur
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_001_R_EN_LG.png",
      "https://images.pokemontcg.io/base6/47_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PGO/PGO_003_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_003_R_EN_LG.png"],
      //charmander   
      "https://images.pokemontcg.io/base4/69_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_008_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpc/SP/SP_143_R_JP_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_066_R_EN_LG.png"],
      //squirtle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_024_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_024_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_025_R_EN_LG.png",
      //caterpie      
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_001_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_011_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_003_R_EN_LG.png",
      //weedle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CPA/CPA_002_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_005_R_EN_LG.png",
      //pidgey
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_121_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TM/TM_047_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_017_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_124_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLF/FLF_077_R_EN_LG.png"],
      //rattata
      "https://images.pokemontcg.io/ex7/72_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_088_R_EN_LG.png", "https://images.pokemontcg.io/base5/51_hires.png"],
      "",
      //* alolan rattata
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PGO/PGO_041_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_082_R_EN_LG.png",
      "",
      //spearow
      ["https://images.pokemontcg.io/ex14/61_hires.png", "https://images.pokemontcg.io/ecard1/130_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_079_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_098_R_EN_LG.png"],
      "",
      //ekans
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_047_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_048_R_EN_LG.png", "https://images.pokemontcg.io/ex7/29_hires.png"],
      "",
      //pichu
      "https://images.pokemontcg.io/ex2/20_hires.png",
      "https://images.pokemontcg.io/ex9/60_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_019_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_064_R_EN_LG.png"],
      //sandshrew
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_075_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HS/HS_079_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_028_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_098_R_EN_LG.png"],
      "",
      //* alolan sandshrew
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_019_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_029_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_138_R_EN_LG.png"],
      "",
      //cleffa
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEL/CEL_CC9_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpc/SV4a/SV4a_77_R_JP_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_097_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_063_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ex10/36_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_079_R_EN_LG.png"],
      //nidorina
      ["https://images.pokemontcg.io/gym2/75_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_040_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ecard3/83_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_067_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_031_R_EN_LG.png",
      //nidorino
      ["https://images.pokemontcg.io/gym2/76_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_043_R_EN_LG.png"],
      ["https://images.pokemontcg.io/base6/56_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_044_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_034_R_EN_LG.png",
      //vulpix
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CPA/CPA_006_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_022_R_EN_LG.png"],
      ["https://www.cardtrader.com/uploads/blueprints/image/266883/show_ninetales-unnumbered-my-first-battle.jpg", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_016_R_EN_LG.png"],
      "",
      //* alolan vulpix
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_053_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_028_R_EN_LG.png",
      "",
      //jigglypuff
      ["https://images.pokemontcg.io/ex5/37_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_168_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ex5/63_hires.png", "https://images.pokemontcg.io/dp4/72_hires.png"],
      "https://images.pokemontcg.io/neo4/54_hires.png",
      //zubat
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UL/UL_070_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UL/UL_030_R_EN_LG.png",
      "https://images.pokemontcg.io/dp2/23_hires.png",
      //oddish
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_001_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_001_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_007_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_003_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_006_R_EN_LG.png"],
      //paras
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_006_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HS/HS_048_R_EN_LG.png", "https://images.pokemontcg.io/neo3/35_hires.png"],
      "",
      //venonat
      ["https://images.pokemontcg.io/gym1/96_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TM/TM_081_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_002_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_049_R_EN_LG.png"],
      "",
      //diglet
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_092_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_085_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GEN/GEN_039_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_086_R_EN_LG.png"],
      "",
      //* alolan diglet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_078_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_087_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_123_R_EN_LG.png"],
      "",
      //meowth
      "https://images.pokemontcg.io/ex6/69_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_049_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HS/HS_027_R_EN_LG.png"],
      "",
      //* alolan meowth
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_043_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_079_R_EN_LG.png",
      "",
      //* galarian meowth
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_112_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_127_R_EN_LG.png",
      "",
      //psyduck
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_054_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_017_R_EN_LG.png", "https://images.pokemontcg.io/base5/37_hires.png"],
      "",
      //mankey
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_071_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_066_R_EN_LG.png"],
      ["https://images.pokemontcg.io/dp4/27_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_107_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_100_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_171_R_EN_LG.png"],
      //growlithe
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_024_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_031_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_033_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_022_R_EN_LG.png"],
      "",
      //* hisuian growlithe
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_070_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_100_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_071_R_EN_LG.png"],
      "",
      //polywag
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_041_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_042_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_043_R_EN_LG.png",
      //abra
      ["https://images.pokemontcg.io/ecard3/46_hires.png", "https://images.pokemontcg.io/gym2/94_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_064_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_081_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_082_R_EN_LG.png",
      //machop
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVO/EVO_057_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_066_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_048_R_EN_LG.png", "https://images.pokemontcg.io/ex5/41_hires.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_243_R_EN_LG.png",
      //bellsprout
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_001_R_EN_LG.png",
      ["https://images.pokemontcg.io/base4/64_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_002_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_003_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_071_R_EN_LG.png"],
      //tentacool
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_072_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_023_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_061_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_027_R_EN_LG.png"],
      "",
      //geodude
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_135_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_068_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_075_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_137_R_EN_LG.png",
      //* alolan geodude
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_041_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_042_R_EN_LG.png",
      //ponyta
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_026_R_EN_LG.png",
      ["https://images.pokemontcg.io/pl4/28_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_022_R_EN_LG.png"],
      "",
      //* galarian ponyta
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_081_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_082_R_EN_LG.png",
      "",
      //slowpoke
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_085_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_080_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_048_R_EN_LG.png",
      //* galarian slowpoke
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_054_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_092_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_098_R_EN_LG.png",
      //magnemite
      ["https://images.pokemontcg.io/ex3/62_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_052_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ex3/17_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_059_R_EN_LG.png"],
      ["https://images.pokemontcg.io/dpp/DP44_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_107_R_EN_LG.png"],
      //farfetch'd
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HIF/HIF_045_R_EN_LG.png",
      "",
      "",
      //* galarian farfetch'd
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_094_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_098_R_EN_LG.png",
      "",
      //doduo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_150_R_EN_LG.png",
      ["https://images.pokemontcg.io/dp2/46_hires.png", "https://images.pokemontcg.io/pl3/25_hires.png"],
      "",
      //seel
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_033_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_034_R_EN_LG.png",
      "",
      //grimer
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_088_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_045_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_089_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_063_R_EN_LG.png"],
      "",
      //* alolan grimer
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_057_R_EN_SM.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_130_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_058_R_EN_LG.png",
      "",
      //shellder
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_050_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GEN/GEN_020_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_051_R_EN_LG.png"],
      "",
      //gastly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_067_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_084_R_EN_LG.png", "https://images.pokemontcg.io/dp1/50_hires.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_066_R_EN_LG.png",
      //onix
      ["https://images.pokemontcg.io/ex2/71.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_138_R_EN_SM.png"],
      ["https://images.pokemontcg.io/pl2/51_hires.png", "https://images.pokemontcg.io/dp7/28_hires.png"],
      "",
      //drowzee
      ["https://images.pokemontcg.io/gym2/95_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_060_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_017_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_097_R_EN_LG.png"],
      "",
      //krabby
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_043_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_013_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_014_R_EN_LG.png",
      "",
      //voltorb
      "https://images.pokemontcg.io/ex12/68_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_101_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_067_R_EN_LG.png"],
      "",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_002_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_003_R_EN_LG.png",
      "",
      //exeggcute
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ROS/ROS_001_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ROS/ROS_002_R_EN_LG.png",
      //* alolan exeggutor
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_095_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_002_R_EN_LG.png"],
      
      //cubone
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_104_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_073_R_EN_LG.png",
      //* alolan marowak
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_012_R_EN_LG.png",
      
      //tyrogue
      "",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_100_R_EN_LG.png",
      "",
      //hitmonlee hitmonchan hitmontop
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_106_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_107_R_EN_LG.png",
      "https://images.pokemontcg.io/dp6/101_hires.png",
      //lickitung
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_161_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_124_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_125_R_EN_LG.png",
      "",
      
      //koffing
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HS/HS_070_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HIF/HIF_028_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_074_R_EN_LG.png",
      //* galarian weezing
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_096_R_EN_LG.png",
      
      //rhyhorn
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_111_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_066_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_098_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_076_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_076_R_EN_LG.png"],
      //happiny
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_161_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_080_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_145_R_EN_LG.png",
      //tangela
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_016_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_005_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_008_R_EN_LG.png"],
      "",
      //"kangaskhan"
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_133_R_EN_LG.png",
      "",
      "",
      //horsea
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_010_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRM/DRM_016_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ecard2/58_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_117_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_037_R_EN_LG.png", "https://images.pokemontcg.io/ex13/10_hires.png"],
      //goldeen
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_046_R_EN_LG.png", "https://images.pokemontcg.io/dp1/84.png"],
      ["https://images.pokemontcg.io/base4/60_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_119_R_EN_LG.png"],
      "",
      //staryu
      ["https://images.pokemontcg.io/ex11/84_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_052_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_065_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_053_R_EN_LG.png"],
      "",
      //mrmime
      ["https://images.pokemontcg.io/dpp/DP22_hires.png", "https://i.ebayimg.com/images/g/YfkAAOSwwYZhEUEK/s-l1200.jpg"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_067_R_EN_LG.png",
      "",
      //* galarian mrmime
      "",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_034_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_036_R_EN_LG.png",
      //scyther
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_004_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_126_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_086_R_EN_LG.png"],
      "",
      //smoochum
      "https://images.pokemontcg.io/dp3/67_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HIF/HIF_030_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_068_R_EN_LG.png"],
      "",
      //elekid
      ["https://images.pokemontcg.io/ex2/36_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TM/TM_021_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_042_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_125_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_047_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_054_R_EN_LG.png"],
      //magby
      "https://images.pokemontcg.io/neo1/23_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HIF/HIF_010_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CL/CL_062_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_030_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_019_R_EN_LG.png"],
      
      //pinsir
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_009_R_EN_LG.png",
      "", //"https://images.pokemontcg.io/pl3/75_hires.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_003_R_EN_LG.png",
      
      //tauros
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_164_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_115_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UL/UL_041_R_EN_LG.png",
      
      //* paldean tauros
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_028_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_039_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_101_R_EN_LG.png",
      //magikarp
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_042_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/AOR/AOR_019_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_030_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_130_R_EN_LG.png"],
      "",

      //lapras
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_045_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_048_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_054_R_EN_LG.png",
      
      //eevee
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_125_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_133_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_030_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_134_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_135_R_EN_LG.png",
      //eevee
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_136_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_174_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_129_R_EN_LG.png",
      //eevee
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_011_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_054_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_087_R_EN_LG.png",
      //ditto
      "https://images.pokemontcg.io/ecard3/51_hires.png",
      "",
      "",
      //porygon
      ["https://images.pokemontcg.io/ecard2/103_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_072_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_073_R_EN_LG.png", "https://images.pokemontcg.io/dp4/49_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_074_R_EN_LG.png", "https://images.pokemontcg.io/dp4/6_hires.png"],
      //omanyte
      ["https://images.pokemontcg.io/dp5/69_hires.png", "https://images.pokemontcg.io/pl4/70_hires.png"],
      ["https://images.pokemontcg.io/dp5/26_hires.png", "https://images.pokemontcg.io/pl4/23_hires.png"],
      "",
      //kabuto
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_077_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_078_R_EN_LG.png",
      "",
      //aerodactyl
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_053_R_EN_LG.png",
      "",
      "",
      //munchlax
      ["https://images.pokemontcg.io/pl2/70_hires.png", "https://images.pokemontcg.io/pl2/69_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_140_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_119_R_EN_LG.png"],
      "",
      //articuno zapdos moltres
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_144_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_048_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_021_R_EN_LG.png",
      //* galarian articuno zapdos moltres
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_063_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_082_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_093_R_EN_LG.png",
      //dratini
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_094_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/MEW/MEW_148_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_150_R_EN_SM.png"],
      "https://images.pokemontcg.io/ex7/15_hires.png",
      //mewtwo mew
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_059_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEL/CEL_011_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_059_R_EN_LG.png"

      "",
      "",
      "",

      "",
      "",
      "",
    ],
    2: [
      //chikorita
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_005_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_007_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_003_R_EN_LG.png",
      //cyndaquil
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_018_R_EN_LG.png", "https://images.pokemontcg.io/ex2/59_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_024_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_019_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_185_R_EN_LG.png",
      //totodile
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_055_R_EN_LG.png",
      "https://images.pokemontcg.io/ex10/38_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_020_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_057_R_EN_LG.png"],
      //sentret
      ["https://images.pokemontcg.io/dp3/104_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_135_R_EN_LG.png"],
      ["https://images.pokemontcg.io/neo1/35_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_136_R_EN_LG.png"],
      "",
      //hoothoot
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_143_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_121_R_EN_LG.png", "https://images.pokemontcg.io/dp1/34_hires.png"],
      "",
      //ledyba
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_004_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_002_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ex7/23_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_007_R_EN_LG.png"],
      "",
      //spinarak
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/AOR/AOR_005_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_005_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_103_R_EN_LG.png"],
      "",
      //chinchou
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_067_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_053_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_052_R_EN_LG.png"],
      "",
      //togepi
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_102_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_103_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_104_R_EN_LG.png",
      //natu
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_078_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_026_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PGO/PGO_033_R_EN_LG.png"],
      "",
      //mareep
      ["https://images.pokemontcg.io/ex7/67_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_055_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_108_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_077_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_109_R_EN_LG.png",
      //bellossom
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_004_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_002_R_EN_LG.png"], 
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_005_R_EN_LG.png", "https://images.pokemontcg.io/neo1/36_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_003_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BCR/BCR_004_R_EN_LG.png"],
      //azurill
      "https://images.pokemontcg.io/ex2/31_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_044_R_EN_LG.png", "https://images.pokemontcg.io/ex2/68_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_136_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_045_R_EN_LG.png"],
      //bonsly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_110_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_094_R_EN_LG.png", "https://images.pokemontcg.io/dp5/48_hires.png"],
      "",
      //politoed
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UL/UL_058_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_016_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_032_R_EN_LG.png",
      //hoppip
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_003_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_002_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_003_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_004_R_EN_LG.png",
      //aipom
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_145_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_145_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PGO/PGO_057_R_EN_LG.png"],
      "",
      //sunkern
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_005_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_006_R_EN_LG.png",
      "",
      //yanma
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_002_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_006_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_002_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_009_R_EN_LG.png"],
      "",
      //wooper
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_096_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/AOR/AOR_039_R_EN_LG.png", "https://images.pokemontcg.io/ex10/44.png"],
      "",
      //* paldean wooper
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_127_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_129_R_EN_LG.png",
      "",
      //murkrow
      ["https://images.pokemontcg.io/dp3/95_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UD/UD_058_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_079_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_132_R_EN_LG.png"],
      "",
      //misdreavus
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_058_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_063_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_040_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_088_R_EN_LG.png"],
      "",
      //unown
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/AOR/AOR_030_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_090_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_092_R_EN_LG.png",
      //wynaut
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_077_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_049_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_066_R_EN_LG.png"],
      "",
      //girafarig
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_154_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_065_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_084_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_155_R_EN_LG.png"],
      "",
      //pineco
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLF/FLF_004_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_061_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_124_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_139_R_EN_LG.png"],
      "",
      //dunsparce
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_137_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_156_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_129_R_EN_LG.png",
      "",
      //gligar
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_067_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_141_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_092_R_EN_LG.png"],
      "",
      //snubbull
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_068_R_EN_LG.png", "https://images.pokemontcg.io/ex10/74_hires.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_138_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CL/CL_026_R_EN_LG.png"],
      "",
      //qwilfish
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_060_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_088_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_090_R_EN_LG.png",
      //shuckle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_005_R_EN_LG.png",
      "",
      "",
      //heracross
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_002_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_006_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_006_R_EN_LG.png",
      
      //sneasel
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_013_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_014_R_EN_LG.png",
      "",
      //* hisuian sneasel
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_092_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_093_R_EN_LG.png",
      "",
      //teddiursa
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_075_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_123_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_124_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_025_R_EN_LG.png"],
      //slugma
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_021_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_043_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_028_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_029_R_EN_LG.png"],
      "",
      //swinub
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_033_R_EN_LG.png",
      //corsola
      ["https://images.pokemontcg.io/ex5/32.png", "https://images.pokemontcg.io/ex10/37.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_117_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_079_R_EN_LG.png",
      //remoraid
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_022_R_EN_SM.png", "https://images.pokemontcg.io/dp2/95.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_037_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_023_R_EN_LG.png"],
      "",
      //delibird
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_032_R_EN_LG.png",
      "",
      "",
      //mantyke
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_039_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/HS/HS_045_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_052_R_EN_LG.png"],
      "",
      //skarmory
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_098_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BCR/BCR_096_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_182_R_EN_LG.png",
      //houndour
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_131_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_059_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_096_R_EN_LG.png"],
      "",
      //phanpy
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_091_R_EN_SM.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_072_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_092_R_EN_LG.png"],
      "",
      //stantler
      "https://images.pokemontcg.io/dp3/113_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_069_R_EN_LG.png",
      "",
      //smeargle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_128_R_EN_LG.png",
      "",
      "",
      //miltank
      "https://images.pokemontcg.io/dp7/44_hires.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_147_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_126_R_EN_LG.png",
      //raikou entei suicuine
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_055_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_021_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_037_R_EN_LG.png",
      //larvitar
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_041_R_EN_LG.png",
      ["https://images.pokemontcg.io/dp7/47_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_106_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PGO/PGO_043_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_135_R_EN_LG.png"],
      //lugia celebi ho-oh
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_140_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_003_R_EN_LG.png",
      "https://images.pokemontcg.io/ex10/27_hires.png"
    ],
    3: [
      //treecko
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_006_R_EN_LG.png",
      "https://images.pokemontcg.io/pl4/38_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_010a_R_EN_LG.png",
      //torchic
      "https://images.pokemontcg.io/pl1/99_hires.png",
      ["https://images.pokemontcg.io/pl1/45_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_027_R_EN_LG.png"],
      ["https://images.pokemontcg.io/ex13/20_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_024_R_EN_LG.png"],
      //mudkip
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XYP/XYP_038_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_063_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_064_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_035_R_EN_LG.png"],
      //poochyena
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_103_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_054_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/KSS/KSS_017_R_EN_LG.png",
      //zigzagoon
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_111_R_EN_LG.png",
      "https://images.pokemontcg.io/dp4/43_hires.png",
      "",
      //galarian zigzagoon
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_159_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_160_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_161_R_EN_LG.png",
      //wurmple silcoon
      "https://images.pokemontcg.io/ex8/82_hires.png",
      "https://images.pokemontcg.io/ex8/46_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_026_R_EN_LG.png",
      //wurmple cascoon
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ROS/ROS_003_R_EN_LG.png",
      "https://images.pokemontcg.io/ex1/26_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_010_R_EN_LG.png",
      //lotad
      "https://images.pokemontcg.io/dp3/92_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_030_R_EN_LG.png",
      "https://images.pokemontcg.io/ex8/19_hires.png",
      //seedot
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NXD/NXD_002_R_EN_LG.png",
      ["https://images.pokemontcg.io/dp1/57_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_012_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_005_R_EN_LG.png",
      //taillow
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ROS/ROS_070_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_103_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_134_R_EN_LG.png",
      //wingull
      "https://images.pokemontcg.io/pl4/81_hires.png",
      "https://images.pokemontcg.io/pl4/45_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_159_R_EN_LG.png",
      //gardevoir
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_059_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_068_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_061_R_EN_LG.png",
      //gallade
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_027_R_EN_LG.png",
      "https://images.pokemontcg.io/pl1/51_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_081_R_EN_LG.png",
      //surskit
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_001_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_008_R_EN_LG.png",
      "",
      //shroomish
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_006_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_004_R_EN_LG.png",
      "https://images.pokemontcg.io/ex9/22_hires.png",
      //slakoth
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_145_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_161_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_162_R_EN_LG.png",
      //nincada
      "https://images.pokemontcg.io/ex8/67_hires.png",
      "https://images.pokemontcg.io/ex3/18_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_066_R_EN_LG.png",
      //whismur
      "https://images.pokemontcg.io/dp4/94_hires.png",
      "https://images.pokemontcg.io/ex9/35_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_150_R_EN_LG.png",
      //makuhita
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_051_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_113_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_143_R_EN_LG.png",
      //nosepass
      ["https://images.pokemontcg.io/pl4/69_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_069_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_095_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_146_R_EN_LG.png",
      //skitty
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_130_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_131_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_121_R_EN_LG.png",
      //sableye
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_070_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_107_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_067_R_EN_LG.png",
      //mawile
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_064_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_100_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_112_R_EN_LG.png",
      //aron
      "https://images.pokemontcg.io/pl2/57_hires.png",
      ["https://images.pokemontcg.io/ex14/36_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TM/TM_037_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_123_R_EN_LG.png",
      //meditite
      "https://images.pokemontcg.io/dp1/89_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_100_R_EN_LG.png",
      "https://images.pokemontcg.io/pl3/34_hires.png",
      //electrike
      "https://images.pokemontcg.io/ex8/59_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ROS/ROS_025_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_055_R_EN_LG.png",
      //plulse minun
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_060_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_033_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_061_R_EN_LG.png",
      //volbeat illumise
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_009_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_010_R_EN_LG.png",
      "",
      //gulpin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_037_R_EN_LG.png",
      "https://images.pokemontcg.io/dp6/72_hires.png",
      "",
      //carvanha
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_132_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_036_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_163_R_EN_LG.png",
      //wailmer
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_031_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_032_R_EN_LG.png",
      //numel
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_031_R_EN_LG.png",
      "https://images.pokemontcg.io/ex9/23_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_032_R_EN_LG.png",
      //torkoal
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_023_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_023_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_011_R_EN_LG.png",
      //spoink
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_090_R_EN_LG.png",
      "https://images.pokemontcg.io/dp6/56_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_091_R_EN_LG.png",
      //spinda kecleon tropius
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_151_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_094_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_007_R_EN_LG.png",
      //trapinch
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_074_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_105_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_091_R_EN_LG.png",
      //cacnea
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_004_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_006_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_006_R_EN_LG.png",
      //swablu
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_169_R_EN_LG.png",
      "https://images.pokemontcg.io/pl1/18_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_134_R_EN_LG.png",
      //zangoose
      "https://images.pokemontcg.io/ex9/21_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_146_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_120_R_EN_LG.png",
      //seviper
      "https://images.pokemontcg.io/dp4/52_hires.png",
      "https://images.pokemontcg.io/ex9/20_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_128_R_EN_LG.png",
      //Lunatone solrock
      "https://images.pokemontcg.io/pl3/32_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_083_R_EN_LG.png",
      "",
      //barboach
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_108_R_EN_LG.png",
      "https://images.pokemontcg.io/pl2/54_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_040_R_EN_LG.png",
      //corphish
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_048_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PRC/PRC_092_R_EN_LG.png",
      //baltoy
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_101_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_094_R_EN_LG.png",
      "https://images.pokemontcg.io/pl3/22_hires.png",
      //lileep
      "https://images.pokemontcg.io/dp6/105_hires.png",
      "https://images.pokemontcg.io/dp6/21_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_011_R_EN_LG.png",
      //anorith
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_056_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_057_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_096_R_EN_LG.png",
      //feebas
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_037_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_040_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_039_R_EN_LG.png",
      //shuppet
      "https://images.pokemontcg.io/dp3/110_hires.png",
      "https://images.pokemontcg.io/dp3/23_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_068_R_EN_LG.png",
      //duskull
      "https://images.pokemontcg.io/ex8/58_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_063_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_020_R_EN_LG.png",
      //chingling
      "https://images.pokemontcg.io/dp2/42_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_085_R_EN_LG.png",
      "",
      //absol
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_113_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_164_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CPA/CPA_038_R_EN_LG.png",
      //snorunt
      "https://images.pokemontcg.io/ex5/73_hires.png",
      "https://images.pokemontcg.io/pl4/18_hires.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_036_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_038_R_EN_LG.png"],
      //spheal
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_043_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_038_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_039_R_EN_LG.png",
      //clamperl
      "https://images.pokemontcg.io/ex5/58_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_067_R_EN_LG.png",
      "https://images.pokemontcg.io/ex5/19_hires.png",
      //bagon
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_104_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_108_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_109_R_EN_LG.png",
      //beldum
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_092_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_090_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_115_R_EN_LG.png",
      //castform relicanth luvdisc
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_116_R_EN_LG.png",
      "https://images.pokemontcg.io/pl3/79_hires.png",
      "https://images.pokemontcg.io/ex9/53_hires.png",
      //regi
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_089_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_028_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_125_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_051_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_247_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_118_R_EN_LG.png",

      "",
      "",
      "",
      //jurachi latios latias
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_126_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_073_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_153_R_EN_LG.png",
      //groudon rayquaza kiogre
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_093_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_029_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_053_R_EN_LG.png",
      //deoxys
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_067_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_074_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CES/CES_068_R_EN_LG.png",
    ],
    4: [
      //turtwig
      "https://images.pokemontcg.io/pop9/17_hires.png",
      ["https://images.pokemontcg.io/dp5/37_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_011_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_009_R_EN_LG.png",
      //chimchar
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_018_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_116_R_EN_LG.png",
      //piplup
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_035_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_036_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_037_R_EN_LG.png",
      //starly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_145_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_146_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_147_R_EN_LG.png",
      //bidoof
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_111_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_121_R_EN_LG.png",
      "",
      //kricketot
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_005_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_014_R_EN_LG.png",
      "",
      //shinx
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_040_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_042_R_EN_LG.png", "https://images.pokemontcg.io/dp6/62_hires.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_033_R_EN_LG.png",
      //budew
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpc/SV8a/SV8a_1_R_JP_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_003_R_EN_LG.png",
      "https://images.pokemontcg.io/dp7/23_hires.png",
      //cranidos
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_274_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_077_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_065_R_EN_LG.png",
      //shieldon
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_084_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_110_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_070_R_EN_LG.png",
      //burmy
      "https://images.pokemontcg.io/dp3/79_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_044_R_EN_LG.png",
      "https://images.pokemontcg.io/dp5/42_hires.png",
      //combee
      "https://images.pokemontcg.io/dp5/59_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_009_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/AOR/AOR_010_R_EN_LG.png",
      //pachirisu
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_049_R_EN_LG.png",
      "https://images.pokemontcg.io/pl3/118_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_068_R_EN_LG.png",
      //buizel
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_022_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_039_R_EN_LG.png",
      "",
      //cherubi
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_012_R_EN_LG.png",
      "https://images.pokemontcg.io/pl4/15_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_007_R_EN_LG.png",
      //shellos
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_039_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_102_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_107_R_EN_LG.png",
      //drifloon
      "https://images.pokemontcg.io/pop6/6_hires.png",
      "https://images.pokemontcg.io/pl3/57_hires.png",
      "https://images.pokemontcg.io/dp7/16_hires.png",
      //buneary
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_144_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_213_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BCR/BCR_117_R_EN_LG.png",
      //glameow
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_127_R_EN_LG.png",
      "https://images.pokemontcg.io/dp1/36_hires.png",
      "",
      //stunky
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UD/UD_069_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_115_R_EN_LG.png",
      "https://images.pokemontcg.io/dp1/15_hires.png",
      //bronzor
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_111_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_126_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_102_R_EN_LG.png",
      //chatot
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_139_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_129_R_EN_LG.png",
      "",
      //spiritomb
      "https://images.pokemontcg.io/pl4/32_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TM/TM_010_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_087_R_EN_LG.png",
      //gible
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_068_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_113_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_109_R_EN_LG.png",
      //riolu
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_078_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_047_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_186_R_EN_LG.png",
      //hippopotas
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_079_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_069_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_094_R_EN_LG.png",
      //skorupi
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_121_R_EN_LG.png",
      "https://images.pokemontcg.io/dp7/15_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_065_R_EN_LG.png",
      //croagunk
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_054_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_057_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_059_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_115_R_EN_LG.png"],
      //carnivine
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_006_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_007_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_009_R_EN_LG.png",
      //finneon
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_040_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_040_R_EN_LG.png",
      "",
      //snover
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_041_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_038_R_EN_LG.png",
      "",

      "",
      "",
      "",
      "",
      "",
      "",

      //rotom manaphy phione
      "https://images.pokemontcg.io/pl3/82_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_034_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRM/DRM_030_R_EN_LG.png",
      //palkia arceus dialga
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_136_R_EN_LG.png",
      ["https://images.pokemontcg.io/dpp/DP50_hires.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XYP/XYP_197_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_121_R_EN_LG.png",
      //uxie mesprit azelf
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_083_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_066_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_043_R_EN_LG.png",
      //heatran cresselia darkrai
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_100_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_064_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_167_R_EN_LG.png",
      //giratina
      "https://images.pokemontcg.io/pl1/27_hires.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_062_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_086_R_EN_LG.png",
      //shaymin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BCR/BCR_010_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_123_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_010_R_EN_LG.png",
    ],
    5: [
      //snivy
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_005_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_006_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_007_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_006_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_007_R_EN_LG.png",
      //tepig
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_031_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_024_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_032_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_033_R_EN_LG.png",
      //oshawott
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_037_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_033_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_034_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_032_R_EN_LG.png",
      //patrat      
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_111_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BCR/BCR_119_R_EN_LG.png",
      "",
      //lillipup
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BLW/BLW_080_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_087_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_135_R_EN_LG.png",
      //purrloin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_048_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_115_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_091_R_EN_LG.png",
      //pansage
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_006_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_006_R_EN_LG.png",
      "",
      //pansear
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_022_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_021_R_EN_LG.png",
      "",
      //panpour
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NXD/NXD_028_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BLW/BLW_034_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_042_R_EN_LG.png"],
      "",
      //munna
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_039_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_122_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_082_R_EN_LG.png",
      //pidove
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ROS/ROS_078_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_175_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BCR/BCR_125_R_EN_LG.png",
      //blitzle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_062_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_054_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NXD/NXD_048_R_EN_LG.png",
      //roggenrola
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_048_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_087_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_071_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NVI/NVI_061_R_EN_LG.png"],
      //woobat
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BCR/BCR_070_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_065_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_033_R_EN_LG.png",
      //drilbur
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_085_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_056_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_109_R_EN_LG.png",
      //timburr
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_058_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BLW/BLW_060_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_081_R_EN_LG.png",
      //tympole
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_042_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_051_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_052_R_EN_LG.png",
      //throh + sawk
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BLW/BLW_061_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_081_R_EN_LG.png",
      "",
      //sewaddle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_008_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_006_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_011_R_EN_LG.png",
      //venipede
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BLW/BLW_052_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_039_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_053_R_EN_LG.png",
      //cottonee
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_075_R_EN_SM.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_006_R_EN_LG.png",
      "",
      //petilil
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_007_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_010_R_EN_LG.png",
      //basculin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BLW/BLW_035_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_205_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_045_R_EN_LG.png",
      //sandile
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_083_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLF/FLF_057_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_116_R_EN_LG.png",
      //dwebble
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_006_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_012_R_EN_LG.png",
      "",
      //darumaka      
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_020_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_035_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NXD/NXD_060_R_EN_LG.png",
      //* galarian darumaka
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_047_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_072_R_EN_LG.png",
      "", //"https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_028_R_EN_LG.png",
      //scraggy
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_098_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_050_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NXD/NXD_074_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLF/FLF_059_R_EN_LG.png",
      //yamask
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_054_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_083_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_100_R_EN_LG.png",
      //* galarian yamask
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_101_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_102_R_EN_LG.png",
      "",
      //tirtouga
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NVI/NVI_025_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NVI/NVI_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_038_R_EN_LG.png",
      //archen
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NVI/NVI_066_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_272_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_054_R_EN_LG.png",
      //trubbish
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_168_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_118_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_111_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_051_R_EN_LG.png",
      //zorua
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_170_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_171_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_071_R_EN_LG.png",
      //* hisuian zorua
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_075_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_076_R_EN_LG.png",
      "",
      //minccino
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_145_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_137_R_EN_LG.png",
      "",
      //gothita
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRX/DRX_055_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_091_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_054_R_EN_LG.png",
      //solosis
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_042_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_077_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_072_R_EN_LG.png",
      //ducklett
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_029_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_140_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_149_R_EN_LG.png",
      //vanillite
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_045_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_044_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_047_R_EN_LG.png",
      //deerling
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FCO/FCO_008_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BLW/BLW_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_016_R_EN_LG.png",
      //karrablast
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLB/PLB_006_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_064_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_101_R_EN_LG.png",
      //foongus
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NVI/NVI_010_R_EN_LG.png",
      "",
      //frillish
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NVI/NVI_030_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NXD/NXD_035_R_EN_LG.png",
      "",
      //joltik
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_050_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_051_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_048_R_EN_LG.png",
      //ferroseed
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NXD/NXD_077_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_073_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_122_R_EN_LG.png",
      //klink
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_125_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_124_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_101_R_EN_LG.png",
      //tynamo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_063_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_048_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_059_R_EN_LG.png",
      //elgyem
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_069_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_074_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_080_R_EN_LG.png",
      //litwiick
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_041_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PHF/PHF_042_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_103_R_EN_LG.png",
      //axew
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_044_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_111_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_155_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_156_R_EN_LG.png",
      //cubchoo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_048_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_030_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLS/PLS_041_R_EN_LG.png",
      //shelmet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/NVI/NVI_011_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_009_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_009_R_EN_LG.png",
      //stunfisk
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_056_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_132_R_EN_LG.png",
      "",
      //mienfoo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_103_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_097_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_077_R_EN_LG.png",
      //golett
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/AOR/AOR_034_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_083_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_043_R_EN_LG.png",
      //pawniard
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_091_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_134_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_150_R_EN_LG.png",
      //heatmor
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_041_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DEX/DEX_019_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_024_R_EN_LG.png",
      //rufflet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRX/DRX_111_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_130_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_132_R_EN_LG.png",
      //vullaby
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_092_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_120_R_EN_LG.png",
      "",
      //durant
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_132_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRX/DRX_083_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_009_R_EN_LG.png",
      //deino
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_097_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_118_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_110_R_EN_LG.png",
      //larvesta
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SLG/SLG_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_025_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_030_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_173_R_EN_LG.png", //audino
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLF/FLF_010_R_EN_LG.png", //maractus
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_080_R_EN_LG.png", //sigilyph

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EPO/EPO_032_R_EN_LG.png", //emolga
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_048_R_EN_LG.png", //alomomola
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_047_R_EN_LG.png", //cryogonal

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_118_R_EN_LG.png", //bouffalant
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLF/FLF_070_R_EN_LG.png", //druddigon
      "",

      //cobalion terrakion virizion
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_132_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_071_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_019_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_129_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_097_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/AOR/AOR_012_R_EN_LG.png",
      //tornadus thundurus landorus
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_086_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_052_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_103_R_EN_LG.png",
      //reshiram kyurem zekrom
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_039_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_047_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PLF/PLF_017_R_EN_LG.png",
      //keldeo meloetta
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_045_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LTR/LTR_078_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_085_R_EN_LG.png",

      "",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_127_R_EN_LG.png", //genesect
      "",

      "",
      "",
      ""
    ],
    6: [
      //chespin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XY/XY_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_010_R_EN_LG.png",
      "https://www.darkfoxtcg.com/cdn/shop/products/7d504440-ed34-4939-8201-cd9f141ff448.jpg?v=1710522703",
      //fennekin
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_015_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_025_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_027_R_EN_LG.png",
      //froakie
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_039_R_EN_SM.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_038_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_040_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XYP/XYP_162_R_EN_LG.png",
      //bunnelby
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_097_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_147_R_EN_LG.png",
      "",
      //fletchling
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GEN/GEN_RC25_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_163_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_031_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_032_R_EN_LG.png",
      //scatterbug
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_005_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_015_R_EN_LG.png",
      //litleo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_036_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_051_R_EN_LG.png",
      //flabebe
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_149_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_092_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_088_R_EN_LG.png",
      //skiddo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_010_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_010_R_EN_LG.png",
      //pancham
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_085_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_082_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_075_R_EN_LG.png",
      //espurr
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_060_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_060_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_082_R_EN_LG.png",
      //honedge
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_130_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_131_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_132_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_134_R_EN_LG.png",
      //spritzee
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKT/BKT_105_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_085_R_EN_LG.png",
      "",
      //swirlix
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_089_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_084_R_EN_LG.png",
      "",
      //inkay
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_033_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CPA/CPA_045_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_117_R_EN_LG.png",
      //binacle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_106_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_107_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_104_R_EN_LG.png",
      //skrelp
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_052_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_081_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BKP/BKP_086_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_082_R_EN_LG.png",
      //clauncher
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_074_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/XYP/XYP_146_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_026_R_EN_LG.png",
      //helioptile
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_049_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_071_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_155_R_EN_LG.png",
      //tyrunt
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_068_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_062_R_EN_LG.png",
      "",
      //amaura
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_027_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FFI/FFI_026_R_EN_LG.png",
      "",
      //hawlucha
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_118_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BRS/BRS_127_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_007_R_EN_LG.png",

      //goomy
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_132_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_095_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_096_R_EN_LG.png",
      //phantump
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_013_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_015_R_EN_LG.png",
      //pumpkaboo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_077_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_078_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_077_R_EN_LG.png",
      //bergmite
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_044_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/STS/STS_037_R_EN_LG.png",
      "",
      //noibat
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_100_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_101_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_133_R_EN_LG.png",

      //furfrou dedenne
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SFA/SFA_051_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_087_R_EN_LG.png",
      "",
      //carbink klefki
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_128_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_117_R_EN_LG.png",
      "",
      //diancie hoopa volcanion
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_086_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_122_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_026_R_EN_LG.png",

      //xerneas zygarde
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_073_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_071_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_088_R_EN_LG.png",
      "",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_100_R_EN_LG.png",
      "",
      //yveltal zygarde
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_175_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_072_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEU/TEU_095_R_EN_LG.png",
    ],
    7: [
      //rowlet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_011_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_007_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_012_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_008_R_EN_LG.png",
      //litten
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNB/UNB_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_025_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_026_R_EN_LG.png",
      //popplio
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_003_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_040_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_041_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_067_R_EN_LG.png"],
      //pikipek
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_143_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_144_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_145_R_EN_LG.png",
      //yungoos
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_176_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_113_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_177_R_EN_LG.png",
      //grubbin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_016_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_051_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_101_R_EN_LG.png",
      //crabrawler
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_087_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_122_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_042_R_EN_LG.png",
      //cutiefly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_075_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_093_R_EN_LG.png",
      "",
      //wishiwashi
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRM/DRM_031_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_062_R_EN_LG.png",
      "",
      //rockruff
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_073_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CPA/CPA_030_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_076_R_EN_LG.png",
      //---
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_067_R_EN_LG.png",
      "",
      //oricorio
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_075_R_EN_LG.png",
      //---
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_089_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_210_R_EN_LG.png",
      //mareanie
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_062_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_063_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOT/LOT_069_R_EN_LG.png",
      //mudbray
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_075_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_092_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_078_R_EN_LG.png",
      //dewpider
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FLI/FLI_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_046_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_017_R_EN_LG.png",
      //formantis
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_025_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_015_R_EN_LG.png",
      //morelull
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_097_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_098_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_009_R_EN_LG.png",
      //salandit
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_023_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_028_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_099_R_EN_LG.png",
      //stufful
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_111_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_182_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_150_R_EN_LG.png",
      //bounsweet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_017_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_017_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_018_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_016_R_EN_LG.png"],
      //oranguru
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_114_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SUM/SUM_113_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CIN/CIN_048_R_EN_LG.png",
      //passimian
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_111_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UPR/UPR_070_R_EN_LG.png",
      //wimpod
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_048_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PGO/PGO_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_049_R_EN_LG.png",
      //sandygast
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_125_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_092_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_082_R_EN_LG.png",
      //jangmo-o
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_160_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CEC/CEC_162_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DRM/DRM_054_R_EN_LG.png",
      //silvally
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_183_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_064_R_EN_LG.png",
      "",
      //meltan
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_129_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_117_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_189_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_063_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_169_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_077_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/UNM/UNM_185_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_027_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BUS/BUS_047_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SMP/SMP_029_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_051_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_097_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/GRI/GRI_059_R_EN_LG.png",
      "",

      "",
      "",
      "",
      "",

    ],
    8: [
      //grookey
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_015_R_EN_LG.png",
      //scrobunny
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_027_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_034_R_EN_LG.png",
      //sobble
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_055_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_042_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_279_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_043_R_EN_LG.png"],
      //skwovet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_152_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_153_R_EN_LG.png",
      "",
      //rookidee
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_150_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_151_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_190_R_EN_LG.png",
      //blipbug
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_017_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_010_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_011_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_019_R_EN_LG.png",
      //nickit
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/ASR/ASR_103_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_105_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_120_R_EN_LG.png",
      //gossifleur
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_015_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SHF/SHF_015_R_EN_LG.png",
      "",
      //wooloo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_124_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_125_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_122_R_EN_LG.png",
      //chewtle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_060_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_081_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_044_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_047_R_EN_LG.png",
      //yamper
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_073_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_053_R_EN_LG.png",
      "",
      //rolycoly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_093_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_079_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_095_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_080_R_EN_LG.png"],
      //applin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_126_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_139_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/EVS/EVS_121_R_EN_LG.png",
      //silicobra
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_108_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_120_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_110_R_EN_LG.png",
      //arrowkuda
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_093_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_042_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_083_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_053_R_EN_LG.png",
      //toxel
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_209_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_071_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_069_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_063_R_EN_LG.png",
      //sizzlipede
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_027_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_037_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SP/SP_048_R_EN_LG.png",
      //clobbopus
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_100_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_111_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_113_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/VIV/VIV_101_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_153_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_089_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_090_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_083_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_098_R_EN_LG.png",
      //hatenna
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_071_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CPA/CPA_018_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CPA/CPA_019_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_073_R_EN_LG.png",
      //impidimp
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_094_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_095_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_125_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_096_R_EN_LG.png"],
      //milcery
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_086_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_065_R_EN_LG.png",
      "",
      //falinks
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_110_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_155_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_109_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_083_R_EN_LG.png",
      //snom
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSH/SSH_063_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_046_R_EN_LG.png",
      "",
      //morpeko
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_072_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_121_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/BST/BST_098_R_EN_LG.png"],
      "",
      //cufant
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_149_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/DAA/DAA_132_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_192_R_EN_LG.png",
      //duralodon
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_106_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_107_R_EN_LG.png",
      "",
      //dreepy
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_128_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_088_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_091_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SIT/SIT_089_R_EN_LG.png"],

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_093_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_044_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRE/CRE_108_R_EN_LG.png",

      "",
      "",
      "",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_051_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/CRZ/CRZ_017_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/LOR/LOR_081_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/RCL/RCL_140_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_141_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_136_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/FST/FST_027_R_EN_LG.png",
      "",
      ""
    ],
    9: [
      //sprigatito
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_013_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_014_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_015_R_EN_LG.png",
      //fuecoco
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_029_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_036_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_038_R_EN_LG.png",
      //quaxly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_003_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_051_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_005_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_054_R_EN_LG.png"],
      //lechonk
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_155_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_183_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_184_R_EN_LG.png",
      //tarountula
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_016_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_017_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_018_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_009_R_EN_LG.png",
      //nymble
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_019_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_122_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_016_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_021_R_EN_LG.png",
      //pawmi
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_074_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_075_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_076_R_EN_LG.png",
      //tandemaus
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_153_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_073_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_074_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_158_R_EN_LG.png"],
      "",
      //fidough
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_066_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_039_R_EN_LG.png",
      "",
      //smoliv
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_020_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_023_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_020_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_021_R_EN_LG.png",
      //nacli
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_102_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_122_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_123_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_104_R_EN_LG.png"],
      //charcadet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_032_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_015_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_040_R_EN_LG.png",
      //tadbulb
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_077_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_077_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_094_R_EN_LG.png",
      //wattrel
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_081_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_066_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_082_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_076_R_EN_LG.png",
      //maschiff
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_142_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_143_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_137_R_EN_LG.png",
      //shroodle
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_145_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_146_R_EN_LG.png",
      "",
      //bramblin
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_020_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_021_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_024_R_EN_LG.png"],
      "",
      //toedscool
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_025_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_017_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_026_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_119_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_018_R_EN_LG.png",
      //capsakid
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_012_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_029_R_EN_LG.png",
      "",
      //rellor
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_026_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_099_R_EN_LG.png",
      "",
      //flittle
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_101_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_041_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_069_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_095_R_EN_LG.png",
      //tinkatink
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_102_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_082_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_084_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_085_R_EN_LG.png",
      //wiglett
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_047_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_053_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_059_R_EN_LG.png"],
      "",
      //finizen
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_059_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TEF/TEF_049_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_062_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_060_R_EN_LG.png",
      //varoom
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_108_R_EN_LG.png",
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_142_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_121_R_EN_LG.png"],
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_125_R_EN_LG.png",
      //glimmet
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_122_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_115_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_126_R_EN_LG.png",
      //greavard
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/OBF/OBF_100_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_042_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_043_R_EN_LG.png",
      //cetoddle
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_058_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_053_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_060_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_055_R_EN_LG.png"],
      ["https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_063_R_EN_LG.png", "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_054_R_EN_LG.png"],
      //tatsugiri dondozo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_131_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_061_R_EN_LG.png",
      "",
      //gimmighoul
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_087_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAF/PAF_067_R_EN_LG.png",
      "",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_058_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_059_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_060_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_021_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_022_R_EN_LG.png",
      "",
      //cyclizar
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SCR/SCR_127_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_116_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_069_R_EN_LG.png",

      //squawkabilly
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVI/SVI_162_R_EN_LG.png",
      //klawf
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_105_R_EN_LG.png",
      //bombirdier
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_147_R_EN_LG.png",

      //orthworm
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_151_R_EN_LG.png",
      //flamigo
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_170_R_EN_LG.png",
      //veluza
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAL/PAL_056_R_EN_LG.png",

      "",
      "",
      "",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_015_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_056_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SSP/SSP_161_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/PAR/PAR_109_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_057_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/SVP/SVP_123_R_EN_LG.png",

      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_111_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_095_R_EN_LG.png",
      "https://limitlesstcg.nyc3.cdn.digitaloceanspaces.com/tpci/TWM/TWM_096_R_EN_LG.png"
    ],
  }

  return { cards }
})
