const tests = [
  {
    "id": 1,
    "question": "Yetishtirilishi jihatidan O'zbekistonda eng ko'p tarqalgan donli ekin?",
    "options": [
      "arpa",
      "javdar",
      "bug'doy",
      "makkajo'xori"
    ],
    "answer": "bug'doy"
  },
  {
    "id": 2,
    "question": "Tovarshunoslik fanini fan sifatida rivojlanishiga turtki bo'lgan omil nima?",
    "options": [
      "tovarlarni sinflanish zarurati",
      "zamon talabi",
      "ishlab chiqarishni xajmiy ortishi",
      "kapitalistik manifakturani rivojlanishi"
    ],
    "answer": "kapitalistik manifakturani rivojlanishi"
  },
  {
    "id": 3,
    "question": "Boshogdoshlar oilasiga mansub ekinlarni aytib bering?",
    "options": [
      "yasmiq, nut, bug'doy, arpa, suli",
      "bug'doy, arpa, suli, javdar",
      "soya, zig'ir, tariq, sholi, bug'doy",
      "no'xat, arpa, tariq, makkajo'xori, sholi"
    ],
    "answer": "bug'doy, arpa, suli, javdar"
  },
  {
    "id": 4,
    "question": "Don ekinlari tuzilishi jihatidan necha guruhga bo'linadi?",
    "options": [
      "boshogli don ekinlari, g'alla ekinlari, moyli ekinlar",
      "moyli, sholisimon, g'alla, dukkakli ekinlar.",
      "boshogli, dukkakli, moyli don ekinlari.",
      "tariqsimon, haqiqiy don ekinlari va moyli ekinlar"
    ],
    "answer": "boshogli, dukkakli, moyli don ekinlari."
  },
  {
    "id": 5,
    "question": "Haqiqiy g'alla ekinlari qatorini ko'rsating:",
    "options": [
      "bug'doy, javdar, arpa, suli",
      "bug'doy, javdar, arpa, tariq, suli",
      "bug'doy, javdar, sholi, arpa",
      "javdar, tariq, bug'doy, arpa"
    ],
    "answer": "bug'doy, javdar, arpa, suli"
  },
  {
    "id": 6,
    "question": "Tariqsimonlar guruhiga kiruvchi ekinlar qatorini ko'rsating:",
    "options": [
      "makkajo'xori, oqjo'xori, tariq, sholi",
      "bug'doy, javdar, arpa, tariq, suli",
      "bug'doy, javdar, sholi, arpa",
      "makkajo'xori, tariq, sholi, arpa"
    ],
    "answer": "makkajo'xori, oqjo'xori, tariq, sholi"
  },
  {
    "id": 7,
    "question": "Tariqsimonlar guruhiga kiruvchi ekinlar mevasi asosan morfologik tuzilishiga ko'ra haqiqiy don ekinlaridan nimasi bilan farq qiladi:",
    "options": [
      "suvga ancha talabchan",
      "donning qorin tomonidan uzunasiga ketgan chuqur yo'l bo'ladi.",
      "donning qorin tomonidan uzunasiga ketgan chuqur yo'l bo'lmaydi",
      "uzun kun o'simligi bo'lgani uchun"
    ],
    "answer": "donning qorin tomonidan uzunasiga ketgan chuqur yo'l bo'lmaydi"
  },
  {
    "id": 8,
    "question": "Urug'ning unishiga asosan nimalar kuchli ta'sir etadi:",
    "options": [
      "muhit temperaturasiga, tuproq nordonligiga, urug' unuvchanligiga",
      "muhit temperaturasiga, xarorat va namlik",
      "muhit temperaturasiga, donning yirik-maydaligi, konsistensiyasiga, po'sti bor-yo'qligiga va tuproq",
      "don konsistensiyasiga, po'sti bor-yo'qligiga va tuproq"
    ],
    "answer": "muhit temperaturasiga, donning yirik-maydaligi, konsistensiyasiga, po'sti bor-yo'qligiga va tuproq"
  },
  {
    "id": 9,
    "question": "Donni yetilish necha fazadan iborat va ular qaysilar?",
    "options": [
      "2 faza, sut va to'la pishiqlik",
      "3 faza, suv, sut va mum pishiqlik",
      "2 faza, sut va mum pishiqlik",
      "3 faza, sut, mum va to'la pishiqlik"
    ],
    "answer": "3 faza, sut, mum va to'la pishiqlik"
  },
  {
    "id": 10,
    "question": "Donning namligi qaysi fazada 50% ni tashkil etadi?",
    "options": [
      "mum pishiqlik",
      "sut-mum pishiqlik",
      "to'la pishiqlik",
      "sut pishiqlik"
    ],
    "answer": "sut pishiqlik"
  },
  {
    "id": 11,
    "question": "Donning namligi qaysi fazada 25% ni tashkil etadi?",
    "options": [
      "sut pishiqlik",
      "mum pishiqlik",
      "to'la pishiqlik",
      "sut-mum pishiqlik"
    ],
    "answer": "mum pishiqlik"
  },
  {
    "id": 12,
    "question": "Donning namligi qaysi fazada 14-16% ni tashkil etadi?",
    "options": [
      "mum pishiqlik",
      "to'la pishiqlik",
      "sut pishiqlik",
      "sut-mum pishiqlik"
    ],
    "answer": "to'la pishiqlik"
  },
  {
    "id": 13,
    "question": "Donli ekinlar qanday ko'rinishga ega?",
    "options": [
      "siniq chiziqli, yumaloq, ovalsimon,",
      "aylana, doira, elliks, kvadrat",
      "uchburchak, tuxumsimon, cho'ziq, moshsimon,",
      "cho'ziq, yumaloq, tuxumsimon, yarimoysimon,"
    ],
    "answer": "cho'ziq, yumaloq, tuxumsimon, yarimoysimon,"
  },
  {
    "id": 14,
    "question": "Quruq mevalar deb hosilni o'rib olish vaqtida tarkibida o'rtacha qancha namlik bo'lgan mevalarga (donlarga) aytiladi",
    "options": [
      "25-40%",
      "20-25%",
      "10-18%",
      "22-25%"
    ],
    "answer": "10-18%"
  },
  {
    "id": 15,
    "question": "Quyidagilardan qaysi donda qobiqdorlik yuqori",
    "options": [
      "Javdar",
      "Bug'doy",
      "Suli",
      "Triticale"
    ],
    "answer": "Suli"
  },
  {
    "id": 16,
    "question": "Bug'doy donining murtak qismini foizlardagi miqdorini ko'rsating:",
    "options": [
      "6,5-9,5",
      "4-4,5",
      "4,5-6,5",
      "1,5-3,0"
    ],
    "answer": "1,5-3,0"
  },
  {
    "id": 17,
    "question": "Donning aleyron qatlami qaysi moddalarga boy?",
    "options": [
      "qand va moy",
      "uglevod va kletchatka",
      "qand va kletchatka",
      "oqsil va pentozalar"
    ],
    "answer": "oqsil va pentozalar"
  },
  {
    "id": 18,
    "question": "Bug'doy donida oqsil moddasining ko'p bo'lishi qanday omillarga bog'liq?",
    "options": [
      "tuproq-iqlim sharoitiga, don naviga, o'g'itlarga",
      "yog'ingarchilikka, qorga, suvga, kul moddasiga",
      "iqlim sharoitiga",
      "obi-havoga, agrotexnik ishlov berishga, suvga"
    ],
    "answer": "tuproq-iqlim sharoitiga, don naviga, o'g'itlarga"
  },
  {
    "id": 19,
    "question": "Bug'doy oqsilining asosiy qismini qanday modda tashkil etadi?",
    "options": [
      "uglevod",
      "kleykovina",
      "kuldorlik",
      "qand"
    ],
    "answer": "kleykovina"
  },
  {
    "id": 20,
    "question": "Bug'doy donining morfologik tuzilishini ko'rsating",
    "options": [
      "qobiq, urug' yo'li, popuk, murtak, endosperm",
      "qobiq, murtak, urug' yo'li (borozdka), popuk",
      "qobiq, endosperm, murtak",
      "urug', qobiq, murtak, urug' yo'li, popuk"
    ],
    "answer": "qobiq, murtak, urug' yo'li (borozdka), popuk"
  },
  {
    "id": 21,
    "question": "Bug'doy doni yuzasida joylashgan qobiq nima deb ataladi",
    "options": [
      "urug' qobig'i",
      "meva qobig'i",
      "gul qobiq",
      "endosperm"
    ],
    "answer": "meva qobig'i"
  },
  {
    "id": 22,
    "question": "Bug'doy donida aleyron qatlam qaysi qobiqqa yopishgan bo'ladi",
    "options": [
      "epidermis",
      "meva qobig'i",
      "perikarpiy",
      "urug' qobig'i"
    ],
    "answer": "urug' qobig'i"
  },
  {
    "id": 23,
    "question": "Donning fizik xususiyatiga kiruvchi xususiyatni belgilang.",
    "options": [
      "organoleptik",
      "kleykovina",
      "shaffoflik",
      "sorbsion"
    ],
    "answer": "sorbsion"
  },
  {
    "id": 24,
    "question": "Un, kepak va to'kiluvchan omixta yemlarda quyidagi fizik xususiyatlarning qaysi biri ko'proq tashkil etadi",
    "options": [
      "o'z-o'zidan saralanish",
      "ishqalanish",
      "oquvchanlik",
      "sorbsion"
    ],
    "answer": "sorbsion"
  },
  {
    "id": 25,
    "question": "Donning fiziologik xususiyatlarini ko'rsating.",
    "options": [
      "g'ovaklik, saralanish",
      "o'z-o'zidan saralanish, ishqalanish burchagi",
      "oquvchanlik, sorbsion",
      "nafas olish, yig'imdan so'ng etilishi"
    ],
    "answer": "nafas olish, yig'imdan so'ng etilishi"
  },
  {
    "id": 26,
    "question": "Don turkumidan olingan nuqtaviy namunalarning majmuasi ..... namuna deyiladi",
    "options": [
      "namunaviy",
      "umumlashgan",
      "nuqtali",
      "sutkali"
    ],
    "answer": "umumlashgan"
  },
  {
    "id": 27,
    "question": "Don mahsulotlarining sifat ko'rsatkichlarini tahlil qilish uchun umumiy namunadan ajratib olingan mahsulot qismi qanday nomlanadi",
    "options": [
      "o'rta namuna",
      "nuqtali",
      "sutkali",
      "namunaviy"
    ],
    "answer": "o'rta namuna"
  },
  {
    "id": 28,
    "question": "Umumlashgan, o'rta namuna, o'rta sutkaviy namunalar qaysi asbob yordamida ajratib olinadi?",
    "options": [
      "Wile-55",
      "A1-UP-2A",
      "PX-1",
      "BIS-1"
    ],
    "answer": "BIS-1"
  },
  {
    "id": 29,
    "question": "Quyidagilardan qaysi birida nuqtali namunalar olinmaydi",
    "options": [
      "mashina shupi",
      "vagon shupi",
      "qop shupi",
      "kichik belkurakcha"
    ],
    "answer": "kichik belkurakcha"
  },
  {
    "id": 30,
    "question": "Mashina borti 3,5 metrgacha bo'lganda nechta nuqtadan namuna olinadi",
    "options": [
      "3",
      "5",
      "2",
      "4"
    ],
    "answer": "4"
  },
  {
    "id": 31,
    "question": "Mashina borti 3,5-4,5 metrgacha bo'lganda nechta nuqtadan namuna olinadi",
    "options": [
      "2",
      "6",
      "5",
      "3"
    ],
    "answer": "6"
  },
  {
    "id": 32,
    "question": "Mashina borti 4,5m va undan yuqori bo'lganda nechta nuqtadan namuna olinadi",
    "options": [
      "3",
      "8",
      "5",
      "2"
    ],
    "answer": "8"
  },
  {
    "id": 33,
    "question": "O'rta namunaning massasi necha kg bo'lishi kerak.",
    "options": [
      "1,00,1 kg",
      "0,50,1 kg",
      "1,50,1 kg",
      "2,00,1 kg"
    ],
    "answer": "2,00,1 kg"
  },
  {
    "id": 34,
    "question": "Unning bazis namligi qancha bo'lishi kerak?",
    "options": [
      "13",
      "14,5",
      "10",
      "25"
    ],
    "answer": "14,5"
  },
  {
    "id": 35,
    "question": "Don massasiga nisbatan % ifodalanadigan gigroskopik suvga donning …. deb ataladi?",
    "options": [
      "namligi",
      "naturasi",
      "shaffofligi",
      "zichligi"
    ],
    "answer": "namligi"
  },
  {
    "id": 36,
    "question": "Qaysi turdagi don namligini kuydirib yoki kimyoviy moddalar ta'sir etib ajratib olish mumkin.",
    "options": [
      "fizik mexanik bog'langan",
      "Mexanik bog'langan",
      "kimyoviy bog'langan suv",
      "fizik kimyoviy bog'langan"
    ],
    "answer": "kimyoviy bog'langan suv"
  },
  {
    "id": 37,
    "question": "Namlik holati bo'yiga quruq bug'doy qatorini ko'rsating:",
    "options": [
      "15-16%",
      "14% gacha",
      "15,6-17%",
      "17 % dan yuqori"
    ],
    "answer": "14% gacha"
  },
  {
    "id": 38,
    "question": "Namlik holati bo'yiga quruq javdar qatorini ko'rsating:",
    "options": [
      "15,6-17%",
      "17 % dan yuqori",
      "14% gacha",
      "15-16%"
    ],
    "answer": "14% gacha"
  },
  {
    "id": 39,
    "question": "Namlik holati bo'yiga quruq arpa qatorini ko'rsating:",
    "options": [
      "15,6-17%",
      "15-16%",
      "17 % dan yuqori",
      "14% gacha"
    ],
    "answer": "14% gacha"
  },
  {
    "id": 40,
    "question": "Namlik holati bo'yiga o'rtacha namlikdagi bug'doy necha foizda bo'ladi",
    "options": [
      "14,1-15,5%",
      "14% gacha",
      "17 % dan yuqori",
      "7 % gacha"
    ],
    "answer": "14,1-15,5%"
  },
  {
    "id": 41,
    "question": "Namlik holati bo'yiga o'rtacha namlikdagi javdar necha foizda bo'ladi",
    "options": [
      "14,1-15,5%",
      "17 % dan yuqori",
      "7 % gacha",
      "14% gacha"
    ],
    "answer": "14,1-15,5%"
  },
  {
    "id": 42,
    "question": "Namlik holati bo'yiga o'rtacha namlikdagi arpa necha foizda bo'ladi",
    "options": [
      "14,1-15,5%",
      "17 % dan yuqori",
      "7 % gacha",
      "14% gacha"
    ],
    "answer": "14,1-15,5%"
  },
  {
    "id": 43,
    "question": "Donni namligi qaysi apparatda aniqlanadi?",
    "options": [
      "titratorda",
      "SESh quritish apparatida",
      "Eksikatorda",
      "Mufel pechida"
    ],
    "answer": "SESh quritish apparatida"
  },
  {
    "id": 44,
    "question": "Donni namligi tezkor usulda aniqlanganda tajribalar necha marta o'tkaziladi",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "answer": "3"
  },
  {
    "id": 45,
    "question": "Donni namligini standart usulda aniqlanganda tajribalar necha marta o'tkaziladi",
    "options": [
      "8",
      "4",
      "2",
      "6"
    ],
    "answer": "2"
  },
  {
    "id": 46,
    "question": "Erkin suv quyidagi namlikning 4 holatida eng ko'p uchr ayadigan qatorni belgilang- 1) nam 2) o'rta quruq 3) xo'l 4) quruq",
    "options": [
      "3",
      "4",
      "2",
      "1"
    ],
    "answer": "3"
  },
  {
    "id": 47,
    "question": "Begona o'tlarga qarshi qanday choratlar ko'riladi?",
    "options": [
      "begona o'tlardan tozalash turli zamonaviy gerbisidlardan foydalanish",
      "almashlab ekishni to'g'ri tashkil qilish",
      "begona o'tlardan tozalash turli zamonaviy gerbisidlardan foydalanish, agrotexnik tadbirlarni vaqtida amalga oshirish, almashlab ekishni to'g'ri tashkil qilish",
      "agrotexnik tadbirlarni vaqtida amalga oshirish"
    ],
    "answer": "begona o'tlardan tozalash turli zamonaviy gerbisidlardan foydalanish, agrotexnik tadbirlarni vaqtida amalga oshirish, almashlab ekishni to'g'ri tashkil qilish"
  },
  {
    "id": 48,
    "question": "Zararli aralashmalar qatorini ko'rsating:",
    "options": [
      "mikozalar, parazit zamburug'lar",
      "gorchak, germoksis; nematodlar, gelimotroklar; mikozalar, parazit zamburug'lar",
      "nematodlar, gelimotroklar",
      "gorchak, germoksis"
    ],
    "answer": "gorchak, germoksis; nematodlar, gelimotroklar; mikozalar, parazit zamburug'lar"
  },
  {
    "id": 49,
    "question": "Zaharli aralashmalarga quyidagilardan qaysi biri kiradi",
    "options": [
      "metall qirindilari",
      "yovvoyi ovsyug, suli urug'lari",
      "mastak",
      "madaniy o'simlik urug'lari"
    ],
    "answer": "mastak"
  },
  {
    "id": 50,
    "question": "Don partiyasining xashoratlar bilan zararlanishining nechta turi mavjud",
    "options": [
      "8",
      "2",
      "4",
      "6"
    ],
    "answer": "2"
  },
  {
    "id": 51,
    "question": "Don partiyasidagi barcha qattiq komponentlardan iborat don massasini ko'z bilan nechta guruhga ajratish mumkin",
    "options": [
      "6",
      "4",
      "8",
      "2"
    ],
    "answer": "2"
  },
  {
    "id": 52,
    "question": "Donning ombor xashoratlari bilan zararlanishi aniqlashda necha kg don taxlil qilinadi",
    "options": [
      "3",
      "6",
      "4",
      "1"
    ],
    "answer": "1"
  },
  {
    "id": 53,
    "question": "Don massasidagi tuproq, mayda tosh, qum va boshqalar qanday aralashma",
    "options": [
      "Donli aralashma",
      "Mineral aralashma",
      "Organik aralashma",
      "Metall aralashma"
    ],
    "answer": "Mineral aralashma"
  },
  {
    "id": 54,
    "question": "Don naturasi kamayishiga ta'sir etuvchi faktorlar.",
    "options": [
      "namlik ortishi",
      "yuqori zichlik",
      "mineral aralashmalar",
      "yirik bo'lgan donlar"
    ],
    "answer": "namlik ortishi"
  },
  {
    "id": 55,
    "question": "Bug'doy donining qaysi qismi eng yuqori zichlikka ega.",
    "options": [
      "Aleyron",
      "Qobiq",
      "Endosperm",
      "Murtak"
    ],
    "answer": "Endosperm"
  },
  {
    "id": 56,
    "question": "Quyidagi moddalarni qaysi biri donni zichligi yuqori bo'lishini belgilaydi.",
    "options": [
      "Oqsil, kraxmal",
      "Yog', fermentlar",
      "Shakar, yog'",
      "Spirt, oqsil"
    ],
    "answer": "Oqsil, kraxmal"
  },
  {
    "id": 57,
    "question": "Quyidagi jumlalardan qaysi biri to'g'ri ifodalangan?",
    "options": [
      "Naturasi past bug'doy naturasi yuqori bo'lgan bug'doydan ko'ra ko'p joyni egallaydi",
      "Zichligi yuqori bo'lgan don naturasi katta",
      "Endosperm to'laqonligi naturani kamaytiradi",
      "Don naturasiga don ta'mi va temperaturasining ta'siri bor"
    ],
    "answer": "Zichligi yuqori bo'lgan don naturasi katta"
  },
  {
    "id": 58,
    "question": "Quyidagi keltirilgan donlardan qaysi birining qobiqdorligi eng yuqori hisoblanadi.",
    "options": [
      "sholi",
      "tariq",
      "suli",
      "bug'doy"
    ],
    "answer": "sholi"
  },
  {
    "id": 59,
    "question": "Donning natura og'irligi deganda nimani tushunasiz?",
    "options": [
      "1 ta donning og'irligi",
      "donning sochiluvchanligi",
      "1 litr xajmdagi don og'irligining grammdagi ifodasi",
      "1000 dona donning og'irligi"
    ],
    "answer": "1 litr xajmdagi don og'irligining grammdagi ifodasi"
  },
  {
    "id": 60,
    "question": "Agar don massasini shaffofligi 60 %dan yuqori bo'lsa, u xolda ushbu don massasi qanday shaffoflikdagi don deb ataladi.",
    "options": [
      "O'rtachadan pastroq",
      "O'rtacha",
      "Yuqori",
      "Quyi"
    ],
    "answer": "Yuqori"
  },
  {
    "id": 61,
    "question": "Agar don massasini shaffofligi 40-60 % oralig'ida bo'lsa, u xolda ushbu don massasi qanday shaffoflikdagi don deb ataladi.",
    "options": [
      "Quyi",
      "Yuqori",
      "O'rtacha",
      "O'rtachadan pastroq"
    ],
    "answer": "O'rtacha"
  },
  {
    "id": 62,
    "question": "Agar don massasini shaffofligi 40 % quyi(past) bo'lsa, u xolda ushbu don massasi qanday shaffoflikdagi don deb ataladi.",
    "options": [
      "O'rtachadan yuqori",
      "O'rtacha",
      "Yuqori",
      "Quyi"
    ],
    "answer": "Quyi"
  },
  {
    "id": 63,
    "question": "Davlatga don topshirishda qaysi don ekinlari naturasi asosiy ko'rsatgichlardan biri sifatida hisob-kitob uchun e'tiborga olinadi.",
    "options": [
      "Oq jo'xori, makkajo'xori, mosh, loviya",
      "bug'doy, javdar, arpa, suli",
      "tariq, sholi, soya, mosh",
      "Makkajo'xori, mosh, loviya"
    ],
    "answer": "bug'doy, javdar, arpa, suli"
  },
  {
    "id": 64,
    "question": "Dondagi gul qobig'ining foizda ifodalangan miqdoriga nima deb aytiladi?",
    "options": [
      "namlik",
      "natura",
      "shaffoflik",
      "qobiqdorlik"
    ],
    "answer": "qobiqdorlik"
  },
  {
    "id": 65,
    "question": "Davlat standartlarida g'alla ekinlari uchun berilgan namlikning 4 holatini to'g'ri tartiblang- 1) nam 2) o'rta quruq 3) xo'l 4) quruq",
    "options": [
      "4,2,1,3",
      "1,3,2,4",
      "2,3,1,4",
      "1,2,3,4"
    ],
    "answer": "4,2,1,3"
  },
  {
    "id": 66,
    "question": "Don uchun standartlar necha bo'limdan iborat.",
    "options": [
      "3",
      "4",
      "2",
      "5"
    ],
    "answer": "5"
  },
  {
    "id": 67,
    "question": "1 kg unda necha mg metallmagnit aralashmalar ruxsat etilgan.",
    "options": [
      "1",
      "4",
      "2",
      "3"
    ],
    "answer": "3"
  },
  {
    "id": 68,
    "question": "Bug'doy donining bazis me'yori bo'yicha don naturasi necha bo'lishi kerak",
    "options": [
      "600",
      "550",
      "750",
      "660"
    ],
    "answer": "750"
  },
  {
    "id": 69,
    "question": "Bug'doy donining bazis me'yori bo'yicha don namligi necha foizdan ko'p bo'lmasligi kerak",
    "options": [
      "11",
      "14",
      "12",
      "10"
    ],
    "answer": "14"
  },
  {
    "id": 70,
    "question": "Bug'doy donining bazis me'yori bo'yicha don zaxira zararkunandalari bilan zararlanganlik qanday qayd etilgan",
    "options": [
      "yo'l qo'yilmaydi",
      "1-daraja",
      "2-daraja",
      "3-daraja"
    ],
    "answer": "yo'l qo'yilmaydi"
  },
  {
    "id": 71,
    "question": "Bug'doy donida oqsil moddasining ko'p bo'lishi qanday omillarga bog'liq?",
    "options": [
      "obi-havoga, agrotexnik ishlov berishga, suvga",
      "iqlim sharoitiga",
      "tuproq-iqlim sharoitiga, don naviga, o'g'itlarga",
      "yog'ingarchilikka, qorga, suvga, kul moddasiga"
    ],
    "answer": "tuproq-iqlim sharoitiga, don naviga, o'g'itlarga"
  },
  {
    "id": 72,
    "question": "Kuldorlik ko'rsatkichi eng katta don qatorini ko'rsating.",
    "options": [
      "Suli",
      "Javdar",
      "Bug'doy",
      "Sholi"
    ],
    "answer": "Sholi"
  },
  {
    "id": 73,
    "question": "Donning eng asosiy kraxmalga boy qismi?",
    "options": [
      "meva va urug' qobig'i",
      "aleyron qavat",
      "endosperm",
      "murtak"
    ],
    "answer": "endosperm"
  },
  {
    "id": 74,
    "question": "Kuldorlik ko'rsatkichi donning qaysi qismida ko'p?",
    "options": [
      "meva va urug' qobig'i",
      "aleyron qatlami va qobiqda",
      "urug' qobig'i, endosperm",
      "meva qobig'i, murtak"
    ],
    "answer": "aleyron qatlami va qobiqda"
  },
  {
    "id": 75,
    "question": "Bug'doy donidagi kleykovinani hosil qiluvchi oqsillar qatorini ko'rsating.",
    "options": [
      "gliadin, glyutenin",
      "Albumin, globulin",
      "Glyutelin, globulin",
      "Gordein, avenin"
    ],
    "answer": "gliadin, glyutenin"
  },
  {
    "id": 76,
    "question": "Bug'doy donidagi kraxmaldan tashkil topgan uglevod qatorini ko'rsating.",
    "options": [
      "Disaxaridlar",
      "polisaxaridlar",
      "Trisaxaridlar",
      "Monosaxarid"
    ],
    "answer": "polisaxaridlar"
  },
  {
    "id": 77,
    "question": "Kuldorligi eng kata qiymatga ega bo'lgan don ekinini ko'rsating.",
    "options": [
      "Suli doni",
      "Arpa doni",
      "Bug'doy doni",
      "sholi doni"
    ],
    "answer": "sholi doni"
  },
  {
    "id": 78,
    "question": "Pentosa uglevod qatorini ko'rsating.",
    "options": [
      "arabinOza, ksilOza, ribOza",
      "MannOza, ribOza, arabinOza",
      "GalaktOza, ribOza, mannOza",
      "GlyukOza, ksilOza, arabinOza"
    ],
    "answer": "arabinOza, ksilOza, ribOza"
  },
  {
    "id": 79,
    "question": "Bug'doy doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "kraxmalga boy donlar",
      "oqsilga boy donlar",
      "moyga boy",
      "efirga boy"
    ],
    "answer": "kraxmalga boy donlar"
  },
  {
    "id": 80,
    "question": "Bug'doy doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "oqsilga boy donlar",
      "moyga boy",
      "efirga boy",
      "kraxmalga boy donlar"
    ],
    "answer": "kraxmalga boy donlar"
  },
  {
    "id": 81,
    "question": "Javdar doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "efirga boy",
      "yog'ga boy donlar",
      "kraxmalga boy donlar",
      "moyga boy"
    ],
    "answer": "kraxmalga boy donlar"
  },
  {
    "id": 82,
    "question": "Arpa doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "moyga boy",
      "kraxmalga boy donlar",
      "yog'ga boy donlar",
      "efirga boy"
    ],
    "answer": "kraxmalga boy donlar"
  },
  {
    "id": 83,
    "question": "No'xat doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "Oqsilga boy",
      "efirga boy",
      "kraxmalga boy",
      "moyga boy"
    ],
    "answer": "Oqsilga boy"
  },
  {
    "id": 84,
    "question": "Loviya doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "kraxmalga boy",
      "moyga boy",
      "Oqsilga boy",
      "efirga boy"
    ],
    "answer": "Oqsilga boy"
  },
  {
    "id": 85,
    "question": "Mosh doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "moyga boy",
      "kraxmalga boy",
      "efirga boy",
      "Oqsilga boy"
    ],
    "answer": "Oqsilga boy"
  },
  {
    "id": 86,
    "question": "Yeryong'oq doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "efirga boy",
      "Oqsilga boy",
      "moyga boy",
      "kraxmalga boy"
    ],
    "answer": "Oqsilga boy"
  },
  {
    "id": 87,
    "question": "Kungaboqar doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "kraxmalga boy",
      "moyga boy",
      "oqsilga boy",
      "spirtga boy"
    ],
    "answer": "moyga boy"
  },
  {
    "id": 88,
    "question": "Kunjut doni kimyoviy tarkibiga ko'ra qaysi donlar guruhiga kiradi.",
    "options": [
      "kraxmalga boy",
      "spirtga boy",
      "moyga boy",
      "oqsilga boy"
    ],
    "answer": "moyga boy"
  },
  {
    "id": 89,
    "question": "Mineral aralashmalarga nimalar kiradi",
    "options": [
      "Asosiy don",
      "Tuproq, temir, tosh, qum",
      "yovvoyi o'simlik urug'lari",
      "Boshog, gul qobig'i va qiltiqlari"
    ],
    "answer": "Tuproq, temir, tosh, qum"
  },
  {
    "id": 90,
    "question": "Non pishirishda achitqilar bilan bijg'ish jarayonida ishtirok etadigan uglevodni ko'rsating.",
    "options": [
      "maltoza",
      "Saxaroza",
      "kraxmal",
      "fenoza"
    ],
    "answer": "Saxaroza"
  },
  {
    "id": 91,
    "question": "Kleysterlanish xususiyati bo'lgan uglevodni belgilang",
    "options": [
      "maltoza",
      "glyukoza",
      "kraxmal",
      "fenoza"
    ],
    "answer": "kraxmal"
  },
  {
    "id": 92,
    "question": "Dondagi xujayralar yopishqoqligini ta'minlovchi uglevod qanday nomlanadi .",
    "options": [
      "fenoza",
      "saxaroza",
      "kraxmal",
      "glyukoza"
    ],
    "answer": "kraxmal"
  },
  {
    "id": 93,
    "question": "Dondagi biologik katalizator vazifasini bajaruvchi moddani toping .",
    "options": [
      "Uglevodlar",
      "Lipidlar",
      "Oqsillar",
      "Fermentlar"
    ],
    "answer": "Fermentlar"
  },
  {
    "id": 94,
    "question": "Donga rang beruvchi moddani belgilang",
    "options": [
      "Peptidlar",
      "Pentozalar",
      "pigmentlar",
      "Pektinlar"
    ],
    "answer": "pigmentlar"
  },
  {
    "id": 95,
    "question": "Donga sariq, qizg'ish rang beruvchi pigmentni aniqlang",
    "options": [
      "Karotinoidlar",
      "Melaninlar",
      "Antosianlar",
      "Melanoidlar"
    ],
    "answer": "Karotinoidlar"
  },
  {
    "id": 96,
    "question": "Gekxoza uglevod qatorini ko'rsating:",
    "options": [
      "glyukoza, fruktoza, mannoza, galaktoza",
      "arabinOza, glyukoza, ribOza",
      "siloza, fuktoza, arabinOza, glyukoza",
      "saxaroza, maltoza, arabinOza, glyukoza"
    ],
    "answer": "glyukoza, fruktoza, mannoza, galaktoza"
  },
  {
    "id": 97,
    "question": "Proteinlar – oddiy oqsillar qatorini ko'rsating:",
    "options": [
      "glyutelinlar, nukleoproteinlar",
      "albuminlar, globulinlar, glyutelinlar, prolaminlar",
      "globulinlar, lipoproteinlar",
      "prolaminlar, nukleoproteinlar"
    ],
    "answer": "albuminlar, globulinlar, glyutelinlar, prolaminlar"
  },
  {
    "id": 98,
    "question": "Murakkab oqsillar qatorini ko'rsating:",
    "options": [
      "nukleoproteinlar, globulinlar",
      "lipoproteinlar, nukleoproteinlar",
      "glyutelinlar, lipoproteinlar",
      "prolaminlar, lipoproteinlar"
    ],
    "answer": "lipoproteinlar, nukleoproteinlar"
  },
  {
    "id": 99,
    "question": "Kleykovina moddasini hosil qiluvchi oqsil qatorini ko'rsating",
    "options": [
      "gliodin, prolamin",
      "glyutenin, globulin",
      "gliodin, glyutenin",
      "glyutenin, glyutelin"
    ],
    "answer": "gliodin, glyutenin"
  },
  {
    "id": 100,
    "question": "Birinchi navli bug'doy unining kuldorlik miqdori nechaga teng:",
    "options": [
      "1,15%",
      "0,60%",
      "0,55%",
      "0,75%"
    ],
    "answer": "0,75%"
  },
  {
    "id": 101,
    "question": "Bug'doy donida oqsil moddasi necha %ni tashkil qiladi?",
    "options": [
      "15-30",
      "25-32",
      "15-25",
      "20-40"
    ],
    "answer": "15-25"
  }
];

module.exports = tests;