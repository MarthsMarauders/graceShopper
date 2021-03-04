// The below scripts were used to scrape data from the hotwheels wiki
// DO NOT DELETE
// every 11th element  document.querySelectorAll('td')[1].lastElementChild.childNodes[0]; - name
// document.querySelectorAll('td')[10].lastElementChild.childNodes[0].src; - imageUrl
// obj with a name prop and it will contain first thing and imageUrl obj for second thing

// function f() {
//   let a = document.querySelectorAll('tr')[1].children[1].innerText
//   let imageUrl = document.querySelectorAll('tr')[1].lastElementChild.childNodes[0]
//     .href
// }

// for 1993!!
// Array.from(document.querySelectorAll('tr')).map(row => {
//   let obj = {}
//   try {
//     obj.name = row.children[1].innerText
//     obj.imageUrl = row.lastElementChild.childNodes[0].href
//     return obj
//   } catch (error) {
//     console.log(error)
//   }
// })
// // FOR 1995!!!
// Array.from(document.querySelectorAll('tr')).map(row => {
//   const obj = {}
//   try {
//     obj.name = row.children[2].innerText
//     obj.imageUrl = row.lastElementChild.childNodes[0].href.slice(0, -34)
//     obj.price = Math.round(Math.random() * 10000)
//     return obj
//   } catch (error) {
//     console.log(error)
//   }
// })

const cars96 = [
  {
    name: 'Monte Carlo Stocker',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1c/Monte_Carlo_Stocker_RT7dpBlk.JPG',
    price: 35.34
  },

  {
    name: '1996 Mustang GT',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/8/8e/1996HotWheels001.JPG',
    price: 94.88
  },
  {
    name: 'Chevy 1500',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/ba/1996HotWheels002.JPG',
    price: 6.31
  },
  {
    name: '1970 Dodge Charger Daytona',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/61/1970_Daytona_RedLW.JPG',
    price: 37.45
  },
  {
    name: 'Street Cleaver',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/9d/Stcleavr.jpg',
    price: 77.83
  },
  {
    name: 'Rail Rodder',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/24/FE_Rail_Rodder.jpg',
    price: 88.25
  },
  {
    name: 'Volkswagen Drag Bus',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f1/Volkswagon.drag.bus.14912.a-l.jpg',
    price: 33.08
  },
  {
    name: 'Road Rocket',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/d/d4/Road_Rocket_GrnBluLW.JPG',
    price: 48
  },
  {
    name: 'Turbo Flame (Sizzlers)',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/7/7d/Turbo_Flame_Wht.JPG',
    price: 58.66
  },
  {
    name: 'Radio Flyer Wagon',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/36/Radio_Flyer_RedBW.JPG',
    price: 80.94
  },
  {
    name: 'Dogfighter',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/42/Dofighter_RedSB.JPG',
    price: 95.51
  },
  {
    name: 'Twang Thang',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/4a/Twang_Thang_SlvRed.JPG',
    price: 48.05
  },
  {
    name: 'Ferrari F50 Spider',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/39/Ferrari_F50_Spider_Red.JPG',
    price: 33.46
  },

  {
    name: 'Dodge Ram 1500 (1995)',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b0/Dodge_Ram_RTrkS.JPG',
    price: 6.53
  },
  {
    name: 'Kenworth T-600A',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a4/Kenworth_T-600_A_Slv.JPG',
    price: 40.79
  },
  {
    name: "'56 Flashsider",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/32/56_Flashsider_RcTrk.JPG',
    price: 88.83
  },
  {
    name: 'Nissan Truck',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/6d/Nissan_Hardbody_BluRT.JPG',
    price: 63.24
  },

  {
    name: "'57 T-Bird",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/7/7c/%2757_T-Bird_-_96_Flamethrower.jpg',
    price: 72.64
  },
  {
    name: 'Hydroplane',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/0/03/Hydroplane_Yel.JPG',
    price: 63.24
  },
  {
    name: 'Range Rover',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/0/0c/Range_Rover_FTh.JPG',
    price: 6.34
  },
  {
    name: 'Oshkosh Snow Plow',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/be/Oshkosh_Snowplow_BlkCT.JPG',
    price: 10.74
  },

  {
    name: 'Radar Ranger',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b8/Radar_Ranger_-_6012df.jpg',
    price: 58.59
  },
  {
    name: 'GM Lean Machine',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/5/55/GM_Lean_Machine_BluWht.JPG',
    price: 25.69
  },
  {
    name: 'Alien',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/8/80/Alien_SpcSer.JPG',
    price: 49.6
  },
  {
    name: 'Treadator',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b5/Treadator_LtBlu.JPG',
    price: 92.78
  },

  {
    name: 'Ramp Truck',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/cb/Ramp_Truck_-_96_Race_Team_Series_II.jpg',
    price: 24.7
  },
  {
    name: 'Baja Bug',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/4e/Baja_Bug_-_96_Race_Team_II.jpg',
    price: 11.29
  },
  {
    name: "'57 Chevy",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/95/%2757_Chevy_-_96_Race_Team_II.jpg',
    price: 56.84
  },
  {
    name: 'Bywayman',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a7/Bywayman_RTct.JPG',
    price: 65.96
  },

  {
    name: 'Hummer',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f8/Hummer_Pnk.JPG',
    price: 11.55
  },
  {
    name: 'School Bus',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f7/School_Bus_Prp.JPG',
    price: 91.23
  },
  {
    name: 'VW Bug',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/2a/VW_Bug_ModBod.JPG',
    price: 9.87
  },
  {
    name: "'67 Camaro",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/37/ModBod.jpg',
    price: 7.54
  },

  {
    name: 'Big Chill',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a3/Big_Chill_Blk.JPG',
    price: 40.58
  },
  {
    name: 'Street Beast',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/8/85/Street_Beast_MtBlk.JPG',
    price: 17.86
  },
  {
    name: 'Thunderstreak',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/8/88/Thunderstreak_Crm.JPG',
    price: 72.38
  },
  {
    name: 'Power Pistons',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/20/Power_Pistons_Crm.JPG',
    price: 68.36
  },

  {
    name: 'Porsche 930',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/67/Porsche_930_Silv.JPG',
    price: 45.44
  },
  {
    name: 'Custom Corvette Convertible',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/ba/Custom_Corvette_Prpl.JPG',
    price: 70.12
  },
  {
    name: 'Shelby Cobra 427 S/C',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/30/Classic_Cobra_SprtCr.JPG',
    price: 35.58
  },
  {
    name: "'59 Caddy",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b0/59_Caddy_BlkSC.JPG',
    price: 72.43
  },

  {
    name: 'Rescue Ranger',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/5/50/Rescue_Ranger_Org5sp.JPG',
    price: 76.32
  },
  {
    name: 'Probe Funny Car',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/c2/Probe_Funny_Car_SpltrPnt.JPG',
    price: 60.46
  },
  {
    name: "'55 Chevy",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/26/55_Chevy_YelSS.JPG',
    price: 70.06
  },
  {
    name: "'80s Camaro",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/c7/80s_Camaro_wht.JPG',
    price: 70.54
  },

  {
    name: 'Speed Machine',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/49/Speed_Machine_Grn.JPG',
    price: 7.64
  },
  {
    name: 'Silhouette II',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/fb/Silouette_II_PrplStrtEat.JPG',
    price: 77.35
  },
  {
    name: 'Propper Chopper',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/e/e2/Propper_Chopper_BluStrBst.JPG',
    price: 42.33
  },
  {
    name: 'Roll Patrol Jeep CJ',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/2b/Roll_Patrol_Jeep_CJ_StrtBst.JPG',
    price: 45.7
  },

  {
    name: 'Pizza Vette',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/27/Corvette_Stingray_Pza5sp.JPG',
    price: 55.98
  },
  {
    name: 'Pasta Pipes',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/ca/Power_Pipes_Pasta.JPG',
    price: 59.26
  },
  {
    name: 'Sweet Stocker',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/62/Sweet-Stocker.JPG',
    price: 3.15
  },
  {
    name: 'Crunch Chief',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/13/Crunch_Chief.JPG',
    price: 86.1
  },

  {
    name: 'CAT Dump Truck',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/67/CAT_Dump_Truck_Chrm.JPG',
    price: 58.13
  },
  {
    name: "'40's Woodie",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/39/Chrome_%2740%27s_Woodie_-_6403df.jpg',
    price: 98.24
  },
  {
    name: "'57 Chevy",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1f/1957_Chevy_Silver.jpg',
    price: 35.7
  },
  {
    name: 'Oscar Mayer Wienermobile',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/4f/Oscar_Mayer_Wienermobile_Crm.JPG',
    price: 52.8
  },

  {
    name: 'Ambulance',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/95/Ambulance_Grn7sp.JPG',
    price: 58.17
  },
  {
    name: 'Rescue Ranger',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/5/54/Rescue_Ranger_YelFR.JPG',
    price: 50.38
  },
  {
    name: 'Flame Stopper',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/d/d0/Flame_Stopper_YelFrRs.JPG',
    price: 48.62
  },
  {
    name: 'Fire Eater',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/5/54/Fire_Eater_FR.JPG',
    price: 3.41
  },

  {
    name: "'40's Woodie",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/98/40swoody_96TH.JPG',
    price: 76.25
  },
  {
    name: 'Auburn 852',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/7/70/Auburn852%24TH.jpg',
    price: 95.81
  },
  {
    name: 'Ferrari 250',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/8/85/430_Treasure_Hunt_Series_Ferrari_250.jpg',
    price: 50.85
  },
  {
    name: 'Jaguar XJ220',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/41/431_Treasure_Hunt_Series_Jaguar_XJ220.jpg',
    price: 94.64
  },
  {
    name: "'59 Caddy",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/5/59/432_Treasure_Hunt_Series_%2759_Caddy.jpg',
    price: 44.77
  },
  {
    name: 'Dodge Viper RT/10',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/ce/Viper_RT10_-_96TH_White.JPG',
    price: 42.45
  },
  {
    name: "'57 Chevy",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/c4/%2757Chevy%24TH.jpg',
    price: 4.96
  },
  {
    name: 'Ferrari 355',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/af/1996THFerrari355.jpg',
    price: 65.73
  },
  {
    name: "'58 Corvette",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/af/436_Treasure_Hunt_Series_%2758_Corvette.jpg',
    price: 14.85
  },
  {
    name: 'Lamborghini Countach',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/c7/10_Trea%24ure_Hunt_1996_-_Lamborghini_Countach.jpg',
    price: 20.78
  },
  {
    name: 'Dodge Ram 1500',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/9b/Hotwheels_016.jpg',
    price: 50.82
  },
  {
    name: "'37 Bugatti",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/3e/37BUGATTI.jpg',
    price: 77.43
  },

  {
    name: 'BMW 850i',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/c7/BMW_850_MtBlu3sp.JPG',
    price: 30.99
  },
  {
    name: 'BMW 850i',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1e/BMW_850_MtBluLW1.JPG',
    price: 85.37
  },
  {
    name: 'BMW 850i',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/2d/BMW_850_MtBlu5sp2.JPG',
    price: 0.96
  },
  {
    name: 'Chevy Stocker',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/48/Chevy_Stocker_Blk17sp.JPG',
    price: 6.72
  },
  {
    name: 'Ferrari F40',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b2/Ferrari_F40_Wht7sp.JPG',
    price: 21.5
  },
  {
    name: 'Ferrari 348',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/ba/Ferrari_348_Blk7sp.JPG',
    price: 56.59
  },
  {
    name: 'Aeroflash',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/e/ee/Aeroflash_Wht7sp.JPG',
    price: 19.01
  },
  {
    name: 'Jaguar XJ220',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/7/7a/Jaguar_220_grn5sp.JPG',
    price: 34.82
  },
  {
    name: "'32 Ford Delivery",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/28/32_Ford_Delivery_DkBlu3sp.JPG',
    price: 36.71
  },
  {
    name: "'63 Split Window Corvette",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/9d/Th_63corvette023.jpg',
    price: 37.07
  },
  {
    name: "'67 Camaro",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/5/5a/448camaro.jpg',
    price: 56.94
  },
  {
    name: 'Camaro Z-28',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/9b/Camaro_Z28_BrtOrg5sp.JPG',
    price: 67.29
  },
  {
    name: 'Corvette Stingray (1976)',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/63/Corvette_Stingray_Wht5SP.JPG',
    price: 29.43
  },
  {
    name: "3-Window '34",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a7/3_Window_34_Pnk3SP.JPG',
    price: 90.88
  },
  {
    name: 'Ferrari 250',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/68/Ferrari_250_Grn7SP.JPG',
    price: 96.15
  },
  {
    name: 'Avus Quattro',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/98/Avus_Quatro_red5sp.JPG',
    price: 96.76
  },
  {
    name: 'Zender Fact 4',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/26/Zender_Fact_4_Wht5spTmp.JPG',
    price: 92.6
  },
  {
    name: "'65 Mustang Convertible",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1f/Blue455.jpg',
    price: 76.26
  },
  {
    name: 'Pontiac Banshee',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/7/78/Pontiac_Banshee_Purp5SP.JPG',
    price: 8.07
  },
  {
    name: 'Speed Shark',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/2a/Speed_Shark_Prp.JPG',
    price: 28.9
  },
  {
    name: 'Zombot',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/4b/Zombot_Blk.JPG',
    price: 64.47
  },
  {
    name: 'Enforcer',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/6c/Super_Cannon_Prpl.JPG',
    price: 4.68
  },
  {
    name: "'80s Firebird",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/92/80s_Firebird_Blu5SP.JPG',
    price: 75.34
  },
  {
    name: 'Fiero 2M4',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/43/Fiero_Yel5sp.JPG',
    price: 63.44
  },
  {
    name: 'Blazer 4x4',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/7/74/Blazer_4x4_464.JPG',
    price: 70.63
  },
  {
    name: 'Peugeot 405',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1d/Peugeot_405_Grn.JPG',
    price: 28.2
  },
  {
    name: 'GT Racer',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a0/GT_Racer_Flored2.JPG',
    price: 79.21
  },
  {
    name: 'Hot Bird',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a5/Hot_Bird_-_96_5sp_no-bird.jpg',
    price: 26.93
  },
  {
    name: 'Turbo Streak',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1b/Turbo_Streak_MtBlu.JPG',
    price: 72.36
  },
  {
    name: 'Velocitor',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/d/d4/T_Velocitor_BluTmpo.JPG',
    price: 86.35
  },
  {
    name: 'Buick Stocker',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f4/Buick_Stocker_YelTamp5SP.JPG',
    price: 54.38
  },
  {
    name: 'BMW M1',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a8/BMW_M1_Gry.JPG',
    price: 72.45
  },
  {
    name: 'Street Beast Error card, should be "BMW M1"',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b9/BMW_M1_Aqua.JPG',
    price: 87.25
  },
  {
    name: 'VW Golf',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/8/8d/VW_Golf_Blk.JPG',
    price: 65.46
  },
  {
    name: 'CAT Forklift',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/31/CAT_Forklift_Ye5sp.JPG',
    price: 99.03
  },
  {
    name: 'Double Demon',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/e/eb/Double_Demon_Grn5sp.JPG',
    price: 2.3
  },
  {
    name: 'Dragon Wagon',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/8/8a/Fangster_DW.JPG',
    price: 8.51
  },
  {
    name: 'Computer Warrior',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/c8/Phantomachine_CW.JPG',
    price: 3.63
  },
  {
    name: 'Tall Ryder',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/66/Rocky_Mountain_Rescue_Tall_Ryder_-_6412df.jpg',
    price: 43.14
  },
  {
    name: 'CAT Earth Mover',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b4/Earthmover_orct.JPG',
    price: 39.13
  },
  {
    name: 'Thunder Roller',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f8/Thunder_Roller_Burgundy.jpg',
    price: 65.68
  },
  {
    name: 'Grizzlor',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/7/7e/Cargoyle_Wht.JPG',
    price: 45.66
  },
  {
    name: 'Evil Weevil',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/e/e1/Eevil_Weevil_Org.JPG',
    price: 88.27
  },
  {
    name: 'Command Tank',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/90/486_Command_Tank.jpg',
    price: 16.4
  },
  {
    name: 'Troop Convoy',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f1/Troop_Convoy_greyOrg.JPG',
    price: 45.37
  },
  {
    name: 'Sting Rod',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1b/Stingrod_greyorange.JPG',
    price: 54.85
  },
  {
    name: 'Big Bertha',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f0/489_Big_Bertha.jpg',
    price: 97.77
  },
  {
    name: 'Rocket Shot',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/93/Rocket_Tank_GryNorg.JPG',
    price: 7.64
  },
  {
    name: 'Rocket Shot',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/ca/Rocketank_purple.JPG',
    price: 52.41
  },
  {
    name: 'Swingfire',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/9/95/White_Swingfire_-_B6420df.jpg',
    price: 95.71
  },
  {
    name: 'Porsche Targa',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/4/4e/493_Porsche_911_Targa.jpg',
    price: 78.28
  },
  {
    name: 'Mercedes-Benz SL',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/62/494_Mercedes_500SL.jpg',
    price: 4.81
  },
  {
    name: 'Ferrari 308 GTS',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/bb/SA400113.JPG',
    price: 6.76
  },
  {
    name: 'Ferrari Testarossa',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/36/CorgiTestarossa.jpg',
    price: 51.44
  },
  {
    name: 'BMW 850i',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/b/b8/498_BMW_850i.jpg',
    price: 76.34
  },
  {
    name: 'Corvette Coupe',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1e/80corvette.green.jpg',
    price: 28.99
  },
  {
    name: 'Chevy Nomad',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/3/3f/753px-Nomad_cropd.jpg',
    price: 78.23
  },
  {
    name: "'80's Corvette",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/f/f1/80sVette_RedSBR.JPG',
    price: 50.35
  },
  {
    name: 'Camaro Z28',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/c/c5/Camaro_Z-28_Wht3SP.JPG',
    price: 46.79
  },
  {
    name: "'93 Camaro",
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/a/a2/505_%2793_Camaro_SB.jpg',
    price: 57.38
  },
  {
    name: 'Nissan 300ZX',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/e/e4/Nissan_300ZX_Prpl.JPG',
    price: 92.45
  },
  {
    name: 'Peugeot 205 Rallye',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/2/22/Peugeot_205_Rallye_PrpBlk.JPG',
    price: 9.04
  },

  {
    name: 'Deora',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/1/1f/Deora_-_96_Bonus_Car.jpg',
    price: 61.43
  },
  {
    name: 'Custom Mustang',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/69/MustangMailAway96.jpg',
    price: 50.55
  },
  {
    name: 'Twin Mill',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/6/64/Twin_Mill_YelBons_L.JPG',
    price: 76.34
  },
  {
    name: 'Classic Nomad',
    imageUrl:
      'https://static.wikia.nocookie.net/hotwheels/images/0/0f/Nomad_Bonus.jpg',
    price: 65.81
  }
]
const universities = [
  '25 Blood Drive',
  'Abandoned House',
  'Acid River',
  'Ant Nation',
  "Ash's house",
  'Astral Plane (location)',
  'Back-To-Nature Island',
  'Bad Lands',
  "Banana Man's house",
  'Barf Kingdom',
  'Baskets & Boots',
  'Beautopia (location)',
  'Beneathaverse',
  'Better Reality Island',
  'BGCCTV Surveillance Depot',
  'Big Butt Rock',
  'Black ice cave',
  'Ble Headquarters',
  'Boneyard Kingdom',
  "Bounce House Princess' house",
  'Box Kingdom',
  'Box Kingdom Arena',
  'Breakfast Kingdom',
  'Broke-up Dimension',
  'Candy Convenience Store',
  'Candy Drugstore',
  'Candy Dungeon',
  'Candy Kingdom',
  'Candy Kingdom Hospital',
  'Category:Candy Kingdom Locations',
  'Candy Kingdom Mental Hospital',
  'Candy Kingdom Preschool',
  'Candy Kingdom Subway',
  'Candy Orphanage',
  'Candy Tavern',
  'Carnival Kingdom',
  'Castle',
  'Castle Lemongrab',
  'Category:Castles and Houses',
  'Caves',
  'Cemetery',
  "Charlie's Apartment",
  'Cheese Kingdom',
  'Chipmunk Cave',
  'Chocolate Bridge',
  'City of Thieves (location)',
  "Clarence's mausoleum",
  'Cloud House',
  'Cloud Kingdom',
  "Colonel Candy Corn's House",
  'Category:Comic Book Locations',
  'Coolest Hotel',
  'Cotton Candy Forest',
  'Crater',
  'Crudtown',
  'Crystal Citadel',
  'Crystal Dimension',
  'Cube Village',
  'Dead Goat Gulch',
  'Dead Mountain',
  'Dead Worlds',
  "Death's Castle",
  'Desert Kingdom',
  'Desert Lands',
  'Desert of Doom',
  'Desert of Wonder',
  'Dewpia',
  'Category:Dimensions',
  'Drive-in theater',
  'Duchy of Nuts',
  'Dungeon (location)',
  'Dungeon Train (location)',
  'Earth',
  "Elise's Trailer Home",
  'Eskimo House',
  'Evil Forest',
  "Farmer's Market",
  'Farming Village',
  'Farmworld',
  "Fight King's arena",
  'Fire Kingdom',
  'Fire Palace',
  'Fire Pit',
  "Flame Princess's house",
  'Flower Path',
  'Flying Troll Cave',
  'Forest',
  'Forest of Trees',
  'Category:Forests',
  "Founders' Island",
  'Freak City (location)',
  'Gauntlet dock',
  'Ghost Ship Vortex',
  'Giant Mushroom Fields',
  'Giant Shell',
  'Glass Kingdom',
  'Glob World',
  'Goblin Birthing Pits',
  'Goblin Kingdom',
  'Grass Lands',
  'Grave yard',
  'Grocery Kingdom',
  'Guardians of Sunshine (game)',
  "Gumbald's Cabin",
  'Gumbaldia (location)',
  'Hall of Just Ice',
  'Hobo Camp',
  "Home Of Zeldron's Armor",
  'Horse City',
  'Hot Dog Kingdom',
  'Hub Island',
  'Huge Kingdom',
  'Humantown',
  "Hunson Abadeer's Kitchen",
  "Huntress Wizard's House",
  'Ice Caverns',
  'Ice Kingdom',
  'Iceberg Lake',
  'Imagination Zone',
  'Institute of So Und',
  'Island Lady',
  'Islands (location)',
  'Jakeseum',
  "James's apartment",
  "James's Tent",
  "Jenny's Diner",
  "Jermaine's House (Abstract)",
  'Jiggler Den',
  "Joshua and Margaret's house",
  "Joshua and Margaret's Old Office",
  "Joshua's dungeon",
  'Junktown',
  "Kim Kil Whan's House",
  "King Man's house",
  'Category:Kingdoms and Villages',
  'La Femme Du La Mer',
  'Labyrinth',
  "Lady Rainicorn's house",
  'Lake Butterscotch',
  'Lake Szelezon',
  'Land of Aaa',
  'Land of Ooo',
  'Land of the Dead',
  'Lemongrab (Earldom)',
  'Library',
  'Lich Land',
  'Littleland',
  'Lizard Kingdom',
  'Template:Location',
  'Template:Location/New',
  'Loch of Phantoms',
  'Lollipop Park Estates',
  'Love Tree Point',
  'Lumpy Space',
  "Maja's house",
  'Marauder Village',
  "Marceline's cave",
  "Marceline's Hobo Camp",
  "Marceline's house",
  'Mars',
  'Marshmallowy Mweadows',
  'Martian city',
  'Maryville',
  'Memory Core',
  'Mind Maze',
  'Mini Elf Kingdom',
  'MO Co.',
  "Moldos' Secret Lair",
  'Moose Bone Clearing',
  "Morty Rogers' House",
  'Mount Cragdor',
  'Mountain (Abstract)',
  'Mountain Kingdom',
  'Mountain Man',
  'Mountain of Matthew',
  'Mountains',
  "Mr. Fox's House",
  'Muffin Top Theater',
  'Multiverse',
  "Muscle Princess's castle",
  'Museum of Natural History',
  'Mushroom Village',
  'Music Shop',
  'Mystery Cave',
  'Mystery Dungeon (location)',
  'Mystery Mountains',
  'Nameless Kingdom',
  "Ni'Rah",
  'Nice Castle',
  'Nightmare Castle',
  'Nightosphere',
  'Nightosphere Jail',
  "Nightosphere's Nightmareosphere",
  "Nutty's Diner",
  'Obstacle course',
  'Ocean',
  'Old Industrial Park',
  'Old Lady Village',
  'Ooo Junkyard',
  'Pantheon of Savings',
  'Park',
  'Pillow World',
  "Pizza Sassy's",
  'Category:Planets',
  'Pond Kingdom',
  "Princess Bubblegum's castle",
  "Pudding's Hardware",
  'Pup Kingdom',
  'Pyramid',
  'Reconditioning chamber',
  'Red Rock Pass',
  'River of Forgetfulness',
  'River of Junk',
  'Rock Candy Mines',
  'Rock Candy Mountains',
  'Room 303',
  "Root Beer Guy's workplace",
  'Royal Candy Vault',
  'Royal Congressional Hall',
  'Royal Tart Path',
  'Rump Town',
  'Sand City',
  'Sewer',
  'Skull Castle',
  'Sky Castle',
  'Slime Kingdom',
  'Soft Village',
  'South Woobeewoo',
  'Spa',
  'Spell Palace',
  'Spider Web',
  'Spiky Rock Fields',
  'Spiky Village',
  'Spirit World',
  'Spooky Forest',
  'Squeez-E-Mart',
  "Starchy's House",
  'Stock Woods',
  'Super Porp Factory',
  'Surveillance Room',
  'Swamp of Embarrassment',
  'Swampy Planet',
  'Swimming Hole',
  'Tartorium',
  'The Anti-verse',
  'The Drift',
  'The Garden of the Living Fountains',
  'The Grotto of the Water Nymphs',
  'The Hall of Egress (location)',
  "The Lich's lair",
  'The Royal Bathroom',
  'The Royal Bedroom',
  'The Royal Dragon Stables',
  'The Royal Game Archive',
  'The Sun',
  'The Wasteland',
  'Thrashland',
  'Time Room',
  'Tiny Mammal Kingdom',
  'Toadstool Fields',
  'Town (His Hero)',
  'Traveling Mini Circus',
  'Tree (Up a Tree)',
  'Tree House',
  'Tree House Walls',
  "Tree Trunks' house",
  'Underground Cave',
  'Underwater City',
  'Universal Source Code',
  'Unknown Burning City',
  'Vanishing Point',
  'Vapor Swamps',
  'Vault of Bones (location)',
  'Veggie Village',
  'Village (The Monster)',
  'Vitamin Telemarketing Industries',
  'Volcano',
  'Water Lily Pad Castle',
  'Wet Pipes Water Park',
  'Wild Trap Mountain',
  'Wildberry Kingdom',
  "Witch's Garden (location)",
  'Wizard Battle Arena',
  'Wizard City',
  'Wizard Prison',
  'Wizard Village',
  'Worm College',
  'Yellow Forest'
]

const descriptionWords = [
  'amazing',
  'awesome',
  'fascinating',
  'incredible',
  'marvelous',
  'prodigious',
  'shocking',
  'stunning',
  'surprising',
  'unbelievable',
  'wonderful',
  'bad',
  'believable',
  'credible',
  'insignificant',
  'ordinary',
  'plausible',
  'poor',
  'unamazing'
]

const names = [
  '8-Head Ted',
  'Abraham Lincoln',
  'Acoustics Princess',
  'Adventure Tim',
  'Agent Princess',
  'Alien Children',
  'Alistair Blacktide',
  'Baby Spiders',
  'Banana Guards',
  'Banana Man',
  'Bandit Princess',
  'Basketball Wizard',
  'Bazooka Goblin',
  'Beautiful Lady',
  'Bee Princess',
  'Bella Noche',
  'Bellamy Bug',
  'Big Destiny',
  'Big Guy',
  'Bikini Babes',
  'Bird Woman',
  'Blanket Dragon',
  'Blindfolded Mantis',
  'Blue Nose',
  'Blue Snail',
  'Blueberry Cops',
  'Bob Rainicorn',
  'Gentleman Spider',
  'Giant Ant',
  'Giant Mouse',
  'Giant Turtle',
  'Goo Skulls',
  'Grand Prix',
  'Guardian Angel',
  'Gummy Fish',
  'Hunson Abadeer',
  'Ice Queen'
]

const places = [
  'Ant Nation',
  'Beneathaverse',
  'Boneyard Kingdom',
  'Box Kingdom',
  'Breakfast Kingdom',
  'Candy Kingdom',
  'City of Thieves (location)',
  'Cloud Kingdom',
  'Crudtown',
  'Cube Village',
  'Dead Goat Gulch',
  'Desert Kingdom',
  'Dewpia',
  'Duchy of Nuts',
  'Farming Village',
  'Fire Kingdom',
  'Glass Kingdom',
  'Goblin Kingdom',
  'Grocery Kingdom',
  'Gumbaldia (location)',
  'Hot Dog Kingdom',
  'Huge Kingdom',
  'Humantown',
  'Ice Kingdom',
  'Land of the Dead',
  'Lemongrab (Earldom)',
  'Littleland',
  'Lizard Kingdom',
  'Lollipop Park Estates',
  'Lumpy Space',
  'Marauder Village',
  'Mars',
  'Mini Elf Kingdom',
  'Mountain Kingdom',
  'Mushroom Village',
  'Nameless Kingdom',
  'Nightosphere',
  'Old Lady Village',
  'Ooo Junkyard',
  'Pond Kingdom',
  'Pup Kingdom',
  'Rump Town',
  'Sky Castle',
  'Slime Kingdom',
  'Soft Village',
  'South Woobeewoo',
  'Spiky Village',
  'Tiny Mammal Kingdom',
  'Town (His Hero)',
  'Unknown Burning City',
  'Veggie Village',
  'Village (The Monster)',
  'Wildberry Kingdom',
  'Wizard City',
  'Wizard Village'
]

const finalArrayOfUsers = []
function usersCreator(givenNames) {
  // const universityLength = universities.length
  givenNames.forEach(name => {
    let addObj = {}
    let wordCount = name.split(' ')
    if (wordCount.length === 1) {
      addObj.firstName = wordCount[0]
      addObj.lastName = wordCount[0]
    }
    if (wordCount.length > 1) {
      addObj.firstName = wordCount.shift()
      if (wordCount.length > 1) {
        addObj.lastName = wordCount.join(' ')
      } else {
        addObj.lastName = wordCount.join('')
      }
    }
    // addObj.email =
    //   addObj.firstName.replace(/['\(\):\/\-/.]/, '') +
    //   addObj.lastName.replace(/['\(\):\/\-/.]/, '') +
    //   '@gmail.com'
    addObj.email =
      addObj.firstName.replace(/['\(\):\/\-/.]/, '') +
      addObj.lastName.replace(/['\(\):\/\-/.]/, '') +
      213 +
      '@gmail.com'
    addObj.address =
      Math.round(Math.random() * 1000).toString() +
      ' ' +
      places[Math.round(Math.random() * places.length)]
    addObj.password = '123'
    finalArrayOfUsers.push(addObj)
  })
}

const finalArrayOfCars = []
function carCreator(carArray) {
  const descriptionLength = descriptionWords.length - 1
  carArray.forEach(singleCar => {
    singleCar.description =
      descriptionWords[Math.round(Math.random() * descriptionLength)] +
      ' ' +
      descriptionWords[Math.round(Math.random() * descriptionLength)]
    singleCar.price = Math.round(Math.random() * 10000)
    singleCar.price =
      singleCar.price.toString()[0] + singleCar.price.toString()[1] + '99'
    singleCar.price = parseInt(singleCar.price)
    finalArrayOfCars.push(singleCar)
  })
}

function seeder() {
  carCreator(cars96)
  usersCreator(names)
  return {cars: finalArrayOfCars, users: finalArrayOfUsers}
}

module.exports = {seeder}
