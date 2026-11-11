SPL.ekle("m02", {
  ozet: [
    { b: "Paylar ve pay benzeri menkul kıymetler", t: [
      "Pay (hisse senedi), anonim şirket sermayesinin bir parçasını temsil eden ve ortaklık hakkı veren menkul kıymettir.",
      "Paylar nama veya hamiline yazılı olabilir; halka açık şirketlerde paylar kaydi (MKK'da elektronik kayıtlı) olarak izlenir.",
      "İmtiyazlı paylar: oyda, kâr payında, tasfiye payında veya yönetim kuruluna aday göstermede üstünlük sağlar.",
      "Pay Tebliği (VII-128.1): halka açık ortaklıkların pay ihracı, sermaye artırımları, bedelsiz paylar, rüçhan hakkı kullanımı ve pay geri alımı.",
      "Sermaye artırımı: bedelli (yeni para girişi) veya bedelsiz (iç kaynaklardan, yedeklerin sermayeye eklenmesi). Bedelsiz artırım şirketin değerini değiştirmez, pay sayısı artar, pay fiyatı teorik olarak düşer.",
      "Bölünme sonrası teorik fiyat (bedelli artırımda): (eski fiyat + yeni pay oranı × ihraç fiyatı) / (1 + yeni pay oranı)."
    ]},
    { b: "Borçlanma araçları", t: [
      "Borçlanma aracı: ihraççının yatırımcıya borçlandığını gösteren menkul kıymet (tahvil, bono, finansman bonosu, VDMK, kira sertifikası vb.).",
      "Vadesine göre: bono/finansman bonosu kısa vadeli (genellikle 1 yıla kadar), tahvil uzun vadelidir.",
      "Getiri yapısı: kuponlu (periyodik faiz), iskontolu (kuponsuz, nominalin altında satılır), sabit veya değişken faizli (gösterge faize endeksli).",
      "Paya dönüştürülebilir tahvil: ihraççının kendi paylarına dönüştürülebilir. Değiştirilebilir tahvil: ihraççının elindeki başka şirket paylarıyla değiştirilebilir.",
      "Sermaye benzeri borçlanma araçları bankaların sermaye yeterliliğine katkı sağlayan, diğer borçlardan sonra ödenen (sırası geride) araçlardır.",
      "Borçlanma Aracı Sahipleri Kurulu (II-31/A.1): borçlanma aracı sahiplerinin ortak menfaatlerini korumak için toplanır; ihraç şartlarının değiştirilmesi gibi konularda karar alır."
    ]},
    { b: "Yatırım fonu katılma payları", t: [
      "Yatırım fonu: yatırımcılardan toplanan parayla, riskin dağıtılması ilkesine göre portföy işletmek amacıyla kurulan malvarlığı; tüzel kişiliği yoktur.",
      "Fonun kurucusu portföy yönetim şirketidir; fon varlıkları portföy saklayıcısında (banka veya Takasbank) saklanır.",
      "Birim pay değeri = fon toplam değeri / dolaşımdaki pay sayısı. Alım satım bu değer üzerinden yapılır.",
      "Fon türleri: para piyasası, borçlanma araçları, hisse senedi (yoğun), değişken, karma, katılım, fon sepeti, kıymetli madenler, serbest (nitelikli yatırımcıya) fonlar vb.",
      "Fonun içtüzüğü ve izahnamesi/yatırımcı bilgi formu vardır; fon payları TEFAS'ta da işlem görebilir."
    ]},
    { b: "Türev araçlar (temel)", t: [
      "Vadeli işlem sözleşmesi (futures): dayanağın ileri tarihte belirlenen fiyattan alınıp satılması yükümlülüğü; borsada işlem görür.",
      "Forward: tezgahüstü ve standart olmayan vadeli sözleşme.",
      "Opsiyon: alıcısına, belirli bir fiyattan alma (call) veya satma (put) hakkı verir; satıcısı yükümlülük altındadır ve prim alır.",
      "Swap: iki tarafın nakit akışlarını değiştirmesi (faiz, döviz).",
      "Türkiye'de borsa türevleri Borsa İstanbul VİOP'ta işlem görür; takas ve merkezi karşı taraf Takasbank'tır."
    ]},
    { b: "Kamu borçlanma araçları", t: [
      "Devlet iç borçlanma senetleri (DİBS): Hazine ve Maliye Bakanlığınca ihraç edilir. Hazine bonosu vadesi 1 yıla kadar, devlet tahvili 1 yıldan uzundur.",
      "Türleri: sabit kuponlu, değişken faizli, TÜFE'ye endeksli, iskontolu (kuponsuz), altına dayalı ve kira sertifikası (sukuk) şeklinde ihraçlar.",
      "İhraç yöntemleri: ihale (rekabetçi ve rekabetçi olmayan teklifler), doğrudan satış, halka arz.",
      "Eurobond: Hazinenin yurt dışında yabancı para cinsinden ihraç ettiği tahviller.",
      "Hazine ihalelerinde birincil piyasa yapıcı bankalar aktif rol oynar."
    ]}
  ],
  kartlar: [
    ["Bedelsiz sermaye artırımının şirket değerine etkisi", "Değiştirmez; pay sayısı artar, pay başına değer düşer."],
    ["İmtiyazlı pay türleri", "Oyda, kâr payında, tasfiye payında, yönetim kuruluna aday göstermede imtiyaz"],
    ["Paya dönüştürülebilir tahvil", "İhraççının kendi paylarına dönüştürülebilen tahvil"],
    ["Değiştirilebilir tahvil", "İhraççının elindeki başka şirket paylarıyla değiştirilebilen tahvil"],
    ["İskontolu tahvil", "Kuponu yoktur; nominal değerin altında satılır, vadede nominal ödenir."],
    ["Yatırım fonunun tüzel kişiliği var mı?", "Hayır; fon bir malvarlığıdır, kurucusu portföy yönetim şirketidir."],
    ["Birim pay değeri", "Fon toplam değeri / dolaşımdaki pay sayısı"],
    ["Hazine bonosu ile devlet tahvili farkı", "Bono 1 yıla kadar, tahvil 1 yıldan uzun vadeli"],
    ["Borçlanma Aracı Sahipleri Kurulu", "Borçlanma aracı sahiplerinin ortak menfaatini korumak için toplanan kurul (II-31/A.1)"],
    ["Türkiye'de borsa türevleri nerede işlem görür?", "Borsa İstanbul Vadeli İşlem ve Opsiyon Piyasası (VİOP)"],
    ["Opsiyonda hak ve yükümlülük", "Hak alıcıda, yükümlülük satıcıda; alıcı prim öder."],
    ["Sermaye benzeri borçlanma aracı", "Ödeme sırası diğer borçlardan sonra gelen, sermayeye katkı sağlayan araç"]
  ],
  sorular: [
    { s: "Bedelsiz sermaye artırımı için hangisi doğrudur?", c: ["Şirkete yeni nakit girer", "İç kaynaklar sermayeye eklenir, şirket değeri değişmez", "Ortakların payları azalır", "Yalnızca yeni yatırımcılara pay verilir"], d: 1, a: "Bedelsiz artırımda yedekler/kâr sermayeye eklenir; şirkete para girmez, toplam değer değişmez." },
    { s: "Pay fiyatı 20 TL olan bir şirket %100 bedelsiz sermaye artırımı yapıyor. Teorik fiyat kaç TL olur?", c: ["5 TL", "10 TL", "20 TL", "40 TL"], d: 1, a: "Pay sayısı iki katına çıkar: 20 / (1 + 1) = 10 TL." },
    { s: "Kuponu olmayan, nominal değerinin altında satılıp vadede nominal değeri ödenen borçlanma aracı hangisidir?", c: ["Değişken faizli tahvil", "İskontolu tahvil", "TÜFE'ye endeksli tahvil", "Paya dönüştürülebilir tahvil"], d: 1, a: "İskontolu (kuponsuz) tahvil." },
    { s: "Tahvil sahibine, ihraççının portföyündeki başka bir şirketin paylarıyla değiştirme hakkı veren araç hangisidir?", c: ["Paya dönüştürülebilir tahvil", "Değiştirilebilir tahvil", "Sermaye benzeri tahvil", "Gelir ortaklığı senedi"], d: 1, a: "Değiştirilebilir tahvil başka şirket paylarıyla; dönüştürülebilir tahvil ihraççının kendi paylarıyla ilgilidir." },
    { s: "Yatırım fonlarının kurucusu hangisidir?", c: ["Aracı kurum", "Portföy yönetim şirketi", "Takasbank", "Merkezi Kayıt Kuruluşu"], d: 1, a: "Yatırım fonlarını portföy yönetim şirketleri kurar." },
    { s: "Toplam değeri 10 milyon TL olan ve dolaşımda 4 milyon payı bulunan fonun birim pay değeri kaçtır?", c: ["0,4 TL", "2,5 TL", "4 TL", "6 TL"], d: 1, a: "10.000.000 / 4.000.000 = 2,5 TL." },
    { s: "Hazine bonosunun vadesi en fazla ne kadardır?", c: ["3 ay", "6 ay", "1 yıl", "2 yıl"], d: 2, a: "Hazine bonosu 1 yıla kadar, devlet tahvili 1 yıldan uzun vadelidir." },
    { s: "Opsiyon sözleşmesinde prim ödeyen taraf hangisidir?", c: ["Opsiyon satıcısı", "Opsiyon alıcısı", "Takas kurumu", "Borsa"], d: 1, a: "Hakkı satın alan opsiyon alıcısı prim öder." },
    { s: "Yatırım fonuyla ilgili hangisi yanlıştır?", c: ["Riskin dağıtılması ilkesine göre yönetilir", "Tüzel kişiliği vardır", "Varlıkları saklayıcıda tutulur", "İçtüzüğü bulunur"], d: 1, a: "Yatırım fonlarının tüzel kişiliği yoktur." },
    { s: "Türkiye'de devlet iç borçlanma senetlerini ihraç eden kurum hangisidir?", c: ["TCMB", "SPK", "Hazine ve Maliye Bakanlığı", "Borsa İstanbul"], d: 2, a: "DİBS'leri Hazine ve Maliye Bakanlığı ihraç eder; TCMB ihalelerde aracılık yapar." }
  ]
});
