// Konu anlatımı — Modül 2: Sermaye Piyasası Araçları 1 (blok biçimi için veri/ders/m01.js'e bak)
SPL.anlat("m02", {
  giris: "Bu modülde yatırımcının alıp satabileceği temel araçları tanıyacağız: paylar, borçlanma araçları, fon katılma payları, türev araçlar ve kamu borçlanma araçları. Her araçta üç soruyu sor: kim çıkarır, yatırımcıya hangi hakkı verir, riski nedir?",
  dersler: [
    { k: "2.1", t: "Paylar ve pay benzeri menkul kıymetler (VII-128.1)", dk: 16, b: [
      { p: "**Pay (hisse senedi)**, anonim şirketin sermayesinin bir parçasını temsil eder. Pay sahibi şirkete **ortak** olur: şirket büyürse payın değeri artar, kâr dağıtılırsa kâr payı alır; şirket batarsa yatırdığı parayla sınırlı olarak zarar eder." },
      { h: "Pay sahipliğinin sağladığı haklar" },
      { t: [["Hak türü", "Örnekler"],
        ["Mali haklar", "Kâr payı, tasfiye payı, yeni pay alma (rüçhan) hakkı, bedelsiz pay edinme"],
        ["Yönetimsel haklar", "Genel kurula katılma, oy kullanma, bilgi alma ve inceleme, iptal davası açma"]]},
      { h: "Pay türleri" },
      { l: [
        "**Nama yazılı pay:** sahibinin adı şirket pay defterinde kayıtlıdır. **Hamiline pay:** taşıyana ait sayılır.",
        "**İmtiyazlı pay:** oy hakkı, kâr payı, tasfiye payı ya da yönetim kuruluna aday göstermede diğer paylardan üstün haklar verir.",
        "**Kayıtlı ve esas sermaye:** halka açık şirketler çoğunlukla kayıtlı sermaye sistemini kullanır; yönetim kurulu tavana kadar sermaye artırabilir.",
        "Borsada işlem gören paylar MKK'da **kaydi** olarak izlenir; fiziki senet basılmaz."
      ]},
      { h: "Sermaye artırımları ve fiyat düzeltmesi" },
      { p: "Şirket iki şekilde sermaye artırabilir:" },
      { l: [
        "**Bedelli artırım:** yatırımcı yeni paylar için para öder; şirkete taze kaynak girer. Mevcut ortaklar rüçhan hakkıyla yeni payları öncelikli alabilir.",
        "**Bedelsiz artırım:** şirket iç kaynaklarını (yedek akçeler, geçmiş yıl kârları) sermayeye ekler; yatırımcıya ücretsiz pay verilir. Şirketin toplam değeri değişmez, sadece pay sayısı artar."
      ]},
      { t: [["İşlem", "Teorik fiyat"],
        ["Bedelsiz artırım", "Eski fiyat / (1 + bedelsiz oranı)"],
        ["Bedelli artırım", "(Eski fiyat + bedelli oranı × ödenecek tutar) / (1 + bedelli oranı)"],
        ["Kâr payı", "Eski fiyat − pay başına brüt kâr payı"]]},
      { o: "Fiyatı 20 TL olan pay için %100 bedelsiz: 20 / 2 = 10 TL. Fiyatı 10 TL olan pay için %50 bedelli (1 TL'den): (10 + 0,5 × 1) / 1,5 = 7 TL. Elinde 100 pay olan yatırımcı bedelsizden sonra 200 pay × 10 TL = 2.000 TL'ye sahiptir; serveti değişmemiştir." },
      { d: "Bedelsiz artırım yatırımcıyı zenginleştirmez; pay sayısı artar, fiyat aynı oranda düşer. Bedelli artırımda ise şirkete yeni para girer." },
      { h: "Pay benzeri menkul kıymetler" },
      { p: "Paya benzer haklar sağlayan diğer araçlar da vardır: örneğin **depo sertifikaları** yabancı payları temsil eder, **paya dönüştürülebilir tahviller** ileride paya dönüşebilir. Bu araçların ayrıntısı Modül 3'te." }
    ], ak: [
      "Pay = ortaklık; mali ve yönetimsel haklar verir.",
      "Bedelsiz: fiyat / (1 + oran). Bedelli: (fiyat + oran × bedel) / (1 + oran).",
      "Bedelsiz artırım servet yaratmaz; bedelli artırımda şirkete para girer.",
      "İmtiyaz: oy, kâr payı, tasfiye payı, aday gösterme."
    ]},

    { k: "2.2", t: "Borçlanma araçları (VII-128.8, II-31/A.1)", dk: 16, b: [
      { p: "Borçlanma aracı alan yatırımcı, ihraççıya **borç vermiş** olur. Karşılığında belirli zamanlarda faiz (kupon) ve vadede anaparayı alır. Pay sahibinden farklı olarak ortak değil **alacaklıdır**; şirket batarsa ortaklardan önce ödeme alır." },
      { h: "Temel türler" },
      { t: [["Araç", "Özelliği"],
        ["Tahvil", "Vadesi bir yıldan uzun"],
        ["Finansman bonosu", "Vadesi bir yıldan kısa"],
        ["Kuponsuz (iskontolu) tahvil", "Ara ödeme yok; nominalin altında satılır, vadede nominal ödenir"],
        ["Değişken faizli tahvil", "Kuponu bir göstergeye (ör. TLREF) göre her dönem yeniden belirlenir"],
        ["Paya dönüştürülebilir tahvil", "İhraççının kendi paylarına dönüşebilir"],
        ["Değiştirilebilir tahvil", "İhraççının portföyündeki başka bir şirketin payıyla değiştirilebilir"]]},
      { d: "Dönüştürülebilir ile değiştirilebiliri karıştırma: **dönüştürülebilir** → ihraççının kendi payı; **değiştirilebilir** → başka şirketin payı." },
      { h: "Borçlanma aracının riskleri" },
      { l: [
        "**Kredi (temerrüt) riski:** ihraççının ödeme yapamaması. Kredi derecelendirme notları bu riski ölçer; teminatlı araçların riski daha düşüktür.",
        "**Faiz riski:** piyasa faizleri artarsa sabit kuponlu tahvilin fiyatı düşer.",
        "**Likidite riski:** aracın vadeden önce makul fiyattan satılamaması.",
        "**Enflasyon riski:** sabit getirinin enflasyon karşısında erimesi."
      ]},
      { o: "Nominali 100 TL, kupon oranı %10 olan tahvil piyasa faizleri %15'e çıkınca 100 TL'den satılamaz; çünkü yatırımcı aynı parayla %15 getirili yeni tahvil alabilir. Bu yüzden fiyat 100 TL'nin altına düşer." },
      { h: "Borçlanma Aracı Sahipleri Kurulu (II-31/A.1)" },
      { p: "Aynı ihraçtaki borçlanma aracı sahipleri, ortak menfaatlerini korumak için bir kurul olarak toplanabilir. Örneğin ihraççı ödeme güçlüğüne düşüp vadenin uzatılmasını ya da faizin düşürülmesini isterse, bu değişiklikler kurulda görüşülüp karara bağlanır." }
    ], ak: [
      "Borçlanma aracı = alacak hakkı; pay = ortaklık hakkı.",
      "Tahvil > 1 yıl, finansman bonosu < 1 yıl.",
      "Faiz artarsa sabit kuponlu tahvilin fiyatı düşer.",
      "Dönüştürülebilir → kendi payı; değiştirilebilir → başka şirketin payı."
    ]},

    { k: "2.3", t: "Yatırım fonu katılma payları (III-52.1)", dk: 12, b: [
      { p: "Yatırım fonu katılma payı alan yatırımcı, fon portföyünün bir parçasına sahip olur. Küçük tutarlarla çeşitlendirilmiş ve profesyonelce yönetilen bir portföye erişmenin en kolay yoludur." },
      { h: "Fon fiyatı nasıl oluşur?" },
      { p: "Fon payının fiyatı arz-talep ile değil, **portföyün değerine** göre hesaplanır:" },
      { t: [["Adım", "Hesap"],
        ["Fon toplam değeri", "Portföy değeri + alacaklar − borçlar"],
        ["Birim pay değeri (fiyat)", "Fon toplam değeri / dolaşımdaki pay sayısı"]]},
      { o: "Portföy değeri 50 milyon TL, alacakları 2 milyon TL, borçları 1 milyon TL olan fonun toplam değeri 51 milyon TL'dir. Dolaşımda 17 milyon pay varsa birim fiyat 3 TL olur." },
      { h: "Fonun tarafları ve belgeleri" },
      { l: [
        "Kurucu ve yönetici: portföy yönetim şirketi.",
        "Portföy saklayıcısı: varlıkları bağımsız olarak saklar.",
        "Belgeler: içtüzük, izahname, yatırımcı bilgi formu.",
        "Alım satım: dağıtım kuruluşları ve TEFAS üzerinden; çoğunlukla ileri fiyatlamayla."
      ]},
      { h: "Fon türlerine kısa bakış" },
      { p: "Fonun adı portföyünün ağırlıklı olarak neye yatırım yaptığını gösterir: para piyasası, borçlanma araçları, hisse senedi, kıymetli madenler, katılım, fon sepeti, değişken, endeks fonları ve nitelikli yatırımcılara yönelik serbest fonlar. Ayrıntılı oranlar Modül 1'deki 1.4 dersinde." },
      { d: "Fonların performansı geçmişe dayanır ve geleceği garanti etmez; fon toplam gider oranı (yönetim ücreti vb.) getiriyi doğrudan azaltır." }
    ], ak: [
      "Fon fiyatı = (portföy + alacaklar − borçlar) / dolaşımdaki pay.",
      "Kurucu PYŞ, varlıklar saklayıcıda.",
      "İçtüzük, izahname, yatırımcı bilgi formu."
    ]},

    { k: "2.4", t: "Türev araçlar (temel kavramlar)", dk: 12, b: [
      { p: "Türev araçların değeri başka bir varlığın (**dayanak varlık**) fiyatından türer: pay, endeks, döviz, faiz, altın, emtia gibi. Riskten korunma (hedging), fiyat tahminiyle kazanç arama (spekülasyon) ve fiyat farklarından risksiz kazanç (arbitraj) için kullanılır." },
      { t: [["Araç", "Tanım", "Nerede işlem görür?"],
        ["Forward", "İki tarafın ileri tarihte belirli fiyattan alım satım sözleşmesi; şartlar taraflara özel", "Tezgahüstü"],
        ["Vadeli işlem (futures)", "Standart forward; günlük kâr/zarar hesaplanır, teminat yatırılır", "Borsa (VİOP)"],
        ["Opsiyon", "Alıcıya prim karşılığında alma (call) ya da satma (put) hakkı verir", "Borsa ya da tezgahüstü"],
        ["Swap", "Tarafların nakit akışlarını (faiz, döviz) değiştirmesi", "Tezgahüstü"]]},
      { h: "Opsiyonda haklar ve yükümlülükler" },
      { l: [
        "**Alıcı (uzun pozisyon)** prim öder ve **hak** sahibidir; kullanmak zorunda değildir.",
        "**Satıcı (kısa pozisyon)** primi alır ve alıcı hakkını kullanırsa **yükümlüdür**.",
        "**Avrupa tipi** opsiyon yalnızca vade sonunda, **Amerikan tipi** vade boyunca her an kullanılabilir."
      ]},
      { o: "Bir yatırımcı 100 TL kullanım fiyatlı call opsiyonunu 5 TL prim ödeyerek alıyor. Vadede hisse 120 TL olursa hakkını kullanır: 120 − 100 − 5 = 15 TL kâr. Hisse 90 TL olursa kullanmaz; zararı ödediği 5 TL primle sınırlıdır." },
      { d: "Vadeli işlemde iki taraf da yükümlüdür; opsiyonda yalnızca satıcı yükümlüdür. Türev araçlar kaldıraçlıdır: küçük teminatla büyük pozisyon açılır, bu nedenle kayıplar hızla büyüyebilir." }
    ], ak: [
      "Türev değeri dayanak varlıktan türer.",
      "Forward ve swap tezgahüstü; futures borsada.",
      "Opsiyon alıcısı prim öder, hak sahibidir; satıcı yükümlüdür.",
      "Avrupa tipi vadede, Amerikan tipi her an kullanılır."
    ]},

    { k: "2.5", t: "Kamu borçlanma araçları", dk: 10, b: [
      { p: "Devlet, bütçe açığını finanse etmek ve borçlarını çevirmek için borçlanma araçları ihraç eder. Türkiye'de ihraççı **Hazine ve Maliye Bakanlığı**'dır; **TCMB** Hazine'nin mali ajanı olarak ihaleleri yürütür." },
      { t: [["Araç", "Özelliği"],
        ["Hazine bonosu", "Vadesi bir yıla kadar; genellikle iskontolu"],
        ["Devlet tahvili", "Vadesi bir yıldan uzun; kuponlu ya da kuponsuz"],
        ["TÜFE'ye endeksli tahvil", "Anaparası enflasyona göre artar; reel getiri sağlar"],
        ["Kira sertifikası (sukuk)", "Hazine'nin varlık kiralama şirketi aracılığıyla ihraç ettiği faizsiz araç"],
        ["Altına dayalı senetler", "Getirisi altın fiyatına bağlı"],
        ["Eurobond", "Yurt dışında yabancı para cinsinden ihraç edilen tahvil"]]},
      { h: "İhale yöntemleri" },
      { l: [
        "**Çok fiyatlı ihale:** her kazanan, kendi teklif ettiği fiyattan alır.",
        "**Tek fiyatlı ihale:** tüm kazananlar aynı fiyattan alır.",
        "İhalelerin yanında doğrudan satış ve halka arz yöntemleri de kullanılabilir."
      ]},
      { o: "Nominal değeri 100 TL olan 1 yıl vadeli iskontolu Hazine bonosu 80 TL'ye alınırsa, vadede 100 TL ödenir: getiri = 20 / 80 = %25." },
      { d: "Devlet borçlanma araçlarının kredi riski genellikle en düşük kabul edilir, ama faiz riski ve enflasyon riski taşırlar." }
    ], ak: [
      "İhraççı Hazine ve Maliye Bakanlığı; TCMB mali ajan.",
      "Bono ≤ 1 yıl, tahvil > 1 yıl.",
      "Çok fiyatlı ihalede herkes kendi teklifinden alır.",
      "Eurobond yurt dışında döviz cinsinden."
    ]}
  ]
});
