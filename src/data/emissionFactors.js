const emissionFactorTable = {
  '50001': {
    CO2: { factor: 2.76203196, gwp: 1 },
    CH4: { factor: 0.00011304, gwp: 25 },
    N2O: { factor: 0.00002260, gwp: 298 }
  },
  '50004': {
    CO2: { factor: 2.83952460, gwp: 1 },
    CH4: { factor: 0.00013269, gwp: 25 },
    N2O: { factor: 0.00002650, gwp: 298 }
  },
  '170001': {
    CO2: { factor: 2.26313287, gwp: 1 },
    CH4: { factor: 0.00009800, gwp: 25 },
    N2O: { factor: 0.00001960, gwp: 298 }
  },
  '170002': {
    CO2: { factor: 2.19807000, gwp: 1 },
    CH4: { factor: 0.00009420, gwp: 25 },
    N2O: { factor: 0.00001880, gwp: 298 }
  },
  '170004': {
    CO2: { factor: 2.39484960, gwp: 1 },
    CH4: { factor: 0.00010048, gwp: 25 },
    N2O: { factor: 0.00002010, gwp: 298 }
  },
  '170005': {
    CO2: { factor: 2.55876282, gwp: 1 },
    CH4: { factor: 0.00010676, gwp: 25 },
    N2O: { factor: 0.00002140, gwp: 298 }
  },
  '170006': {
    CO2: { factor: 2.60603179, gwp: 1 },
    CH4: { factor: 0.00010551, gwp: 25 },
    N2O: { factor: 0.00002110, gwp: 298 }
  },
  '170008': {
    CO2: { factor: 3.11095987, gwp: 1 },
    CH4: { factor: 0.00012058, gwp: 25 },
    N2O: { factor: 0.00002410, gwp: 298 }
  },
  '170010': {
    CO2: { factor: 2.94616742, gwp: 1 },
    CH4: { factor: 0.00012058, gwp: 25 },
    N2O: { factor: 0.00002410, gwp: 298 }
  },
  '170011': {
    CO2: { factor: 2.39376103, gwp: 1 },
    CH4: { factor: 0.00009800, gwp: 25 },
    N2O: { factor: 0.00001960, gwp: 298 }
  },
  '170017': {
    CO2: { factor: 3.37874760, gwp: 1 },
    CH4: { factor: 0.00012560, gwp: 25 },
    N2O: { factor: 0.00002510, gwp: 298 }
  },
  '170019': {
    CO2: { factor: 3.11095987, gwp: 1 },
    CH4: { factor: 0.00012058, gwp: 25 },
    N2O: { factor: 0.00002410, gwp: 298 }
  },
  '170029': {
    CO2: { factor: 3.34734660, gwp: 1 },
    CH4: { factor: 0.00010300, gwp: 25 },
    N2O: { factor: 0.00002060, gwp: 298 }
  },
  '170036': {
    CO2: { factor: 2.39376103, gwp: 1 },
    CH4: { factor: 0.00009800, gwp: 25 },
    N2O: { factor: 0.00001960, gwp: 298 }
  },
  '350008': {
    CO2: { factor: 1.75288128, gwp: 1 },
    CH4: { factor: 0.00002780, gwp: 25 },
    N2O: { factor: 0.00000278, gwp: 298 }
  },
  'GG1702': {
    CO2: { factor: 2.11902740, gwp: 1 },
    CH4: { factor: 0.00008260, gwp: 25 },
    N2O: { factor: 0.00001650, gwp: 298 }
  },
  'GG1799': {
    CO2: { factor: 2.76203196, gwp: 1 },
    CH4: { factor: 0.00011304, gwp: 25 },
    N2O: { factor: 0.00002260, gwp: 298 }
  },
  '50002': {
    CO2: { factor: 1.87903584, gwp: 1 },
    CH4: { factor: 0.00003350, gwp: 25 },
    N2O: { factor: 0.00000335, gwp: 298 }
  },
  '180178': {
    CO2: { factor: 2.86018730, gwp: 1 },
    CH4: { factor: 0.00004640, gwp: 25 },
    N2O: { factor: 0.00000464, gwp: 298 }
  },
  '350014': {
    CO2: { factor: 0.78075446, gwp: 1 },
    CH4: { factor: 0.00001760, gwp: 25 },
    N2O: { factor: 0.00000176, gwp: 298 }
  },
  '350016': {
    CO2: { factor: 2.17043712, gwp: 1 },
    CH4: { factor: 0.00003770, gwp: 25 },
    N2O: { factor: 0.00000377, gwp: 298 }
  },
  '350017': {
    CO2: { factor: 0.84581734, gwp: 1 },
    CH4: { factor: 0.00000325, gwp: 25 },
    N2O: { factor: 0.00000033, gwp: 298 }
  },
  '70001': {
    CO2: { factor: 1.03538727, gwp: 1 },
    CH4: { factor: 0.00000977, gwp: 25 },
    N2O: { factor: 0.00001470, gwp: 298 }
  },
  '70002': {
    CO2: { factor: 1.20263318, gwp: 1 },
    CH4: { factor: 0.00001190, gwp: 25 },
    N2O: { factor: 0.00001790, gwp: 298 }
  },
  '70003': {
    CO2: { factor: 2.40811338, gwp: 1 },
    CH4: { factor: 0.00002550, gwp: 25 },
    N2O: { factor: 0.00003820, gwp: 298 }
  },
  '70004': {
    CO2: { factor: 2.25316829, gwp: 1 },
    CH4: { factor: 0.00002340, gwp: 25 },
    N2O: { factor: 0.00003820, gwp: 298 }
  },
  '70005': {
    CO2: { factor: 2.92209332, gwp: 1 },
    CH4: { factor: 0.00002970, gwp: 25 },
    N2O: { factor: 0.00004460, gwp: 298 }
  },
  '170028': {
    CO2: { factor: 3.13591320, gwp: 1 },
    CH4: { factor: 0.00002930, gwp: 25 },
    N2O: { factor: 0.00004400, gwp: 298 }
  },
  'GG0700': {
    CO2: { factor: 1.55120940, gwp: 1 },
    CH4: { factor: 0.00001590, gwp: 25 },
    N2O: { factor: 0.00002390, gwp: 298 }
  },
  'GG0701': {
    CO2: { factor: 0.95286963, gwp: 1 },
    CH4: { factor: 0.00000891, gwp: 25 },
    N2O: { factor: 0.00001340, gwp: 298 }
  },
  'GG0702': {
    CO2: { factor: 2.69328470, gwp: 1 },
    CH4: { factor: 0.00002850, gwp: 25 },
    N2O: { factor: 0.00004270, gwp: 298 }
  },
  'GG0703': {
    CO2: { factor: 2.69328470, gwp: 1 },
    CH4: { factor: 0.00002850, gwp: 25 },
    N2O: { factor: 0.00004270, gwp: 298 }
  },
  'GG0704': {
    CO2: { factor: 2.33285984, gwp: 1 },
    CH4: { factor: 0.00002470, gwp: 25 },
    N2O: { factor: 0.00003700, gwp: 298 }
  },
  '350099': {
    CO2: { factor: 0.49500000, gwp: 1 }
  },
  'GG3502': {
    CO2: { factor: 0.00000000, gwp: 1 }
  },
  'GG3505': {
    CO2: { factor: 0.00000000, gwp: 1 }
  },
  '60013': {
    CO2: { factor: 0.47666667, gwp: 1 }
  },
  '180139': {
    CO2: { factor: 0.41509434, gwp: 1 }
  },
  '180140': {
    CO2: { factor: 0.31884058, gwp: 1 }
  },
  '180143': {
    CO2: { factor: 0.22335025, gwp: 1 }
  },
  '180144': {
    CO2: { factor: 0.52200000, gwp: 1 }
  },
  '180146': {
    CO2: { factor: 0.52380952, gwp: 1 }
  },
  '180191': {
    CO2: { factor: 3.38461539, gwp: 1 }
  },
  '180365': {
    CO2: { factor: 0.73333333, gwp: 1 }
  },
  '230238': {
    CO2: { factor: 0.44000000, gwp: 1 }
  },
  '240024': {
    CO2: { factor: 3.66666667, gwp: 1 }
  },
  '180014': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  '180122': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  '180123': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  '180177': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1802': {
    N2O: { factor: 1.00000000, gwp: 298 },
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1803': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1804': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1808': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1809': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1813': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1813': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1813': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1814': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1815': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1816': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1819': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1821': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1829': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1835': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1838': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1839': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1840': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1841': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
  'GG1878': {
    CO2: { factor: 1.00000000, gwp: 1 }
  },
};

export default emissionFactorTable;
