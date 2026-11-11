SPL.ekle("m07", {
  ozet: [
    { b: "Finansal yönetimin amacı ve planlama", t: [
      "Temel amaç: hissedar (pay sahibi) değerini, yani firma değerini en yükseğe çıkarmak. Kâr maksimizasyonu riski ve zamanlamayı göz ardı ettiği için yetersizdir.",
      "Vekâlet (temsil) sorunu: yöneticiler ile pay sahiplerinin çıkarlarının ayrışması; vekâlet maliyetleri doğurur.",
      "Finansal planlama: nakit bütçesi (kısa vade), proforma tablolar ve satışlara yüzde yöntemi (dış finansman ihtiyacı).",
      "Sürdürülebilir büyüme oranı = ÖSK (ROE) × kârın şirkette tutulma oranı (1 − temettü dağıtım oranı)."
    ]},
    { b: "Sermaye maliyeti ve sermaye yapısı", t: [
      "Ağırlıklı ortalama sermaye maliyeti: AOSM = (E/V)·Ke + (D/V)·Kd·(1 − t). Borç maliyetinde vergi kalkanı vardır.",
      "Özkaynak maliyeti CAPM ile (Ke = Rf + β(Rm − Rf)) ya da Gordon modeliyle (Ke = D₁/P₀ + g) bulunur.",
      "Modigliani-Miller (vergisiz): sermaye yapısı firma değerini etkilemez. Vergili: borç, vergi kalkanı kadar değeri artırır.",
      "Dengeleme (trade-off) teorisi: borcun vergi avantajı ile finansal sıkıntı maliyeti dengelenir.",
      "Finansman hiyerarşisi (pecking order): önce iç kaynak, sonra borç, en son pay ihracı.",
      "Faaliyet kaldıracı: satışlardaki değişimin FVÖK'e etkisi (sabit faaliyet giderlerinden doğar). Finansal kaldıraç: FVÖK değişiminin hisse başına kâra etkisi (faiz giderinden doğar)."
    ]},
    { b: "İşletme sermayesi yönetimi", t: [
      "Brüt işletme sermayesi = dönen varlıklar. Net işletme sermayesi = dönen varlıklar − kısa vadeli yabancı kaynaklar.",
      "Nakit dönüşüm süresi = stok devir süresi + alacak tahsil süresi − borç ödeme süresi.",
      "Ekonomik sipariş miktarı (EOQ) = √(2 × yıllık talep × sipariş maliyeti / birim stok tutma maliyeti).",
      "Nakit iskontosu örneği '2/10, net 30': 10 gün içinde ödenirse %2 indirim, aksi hâlde 30 günde tam ödeme."
    ]},
    { b: "Yatırım projelerinin değerlemesi", t: [
      "Net bugünkü değer (NBD/NPV): nakit girişlerinin bugünkü değeri − yatırım tutarı. NBD > 0 ise proje kabul edilir.",
      "İç verim oranı (İVO/IRR): NBD'yi sıfır yapan iskonto oranı; İVO > sermaye maliyeti ise kabul.",
      "Çakışan (birbirini dışlayan) projelerde NBD ile İVO farklı sonuç verirse NBD tercih edilir.",
      "Karlılık endeksi = nakit girişlerinin BD / yatırım tutarı; 1'den büyükse kabul.",
      "Geri ödeme süresi paranın zaman değerini dikkate almaz; iskontolu geri ödeme süresi alır ama geri ödeme sonrası akışları yine yok sayar."
    ]},
    { b: "Birleşme ve devirler", t: [
      "Yatay birleşme: aynı sektör ve aynı üretim aşamasındaki şirketler. Dikey: tedarik zincirinin farklı aşamaları. Çapraz (konglomera): ilgisiz sektörler.",
      "Sinerji: birleşik değerin, ayrı değerlerin toplamından büyük olması (maliyet ve gelir sinerjisi).",
      "Düşmanca devralmaya karşı savunmalar: zehir hapı, beyaz şövalye, altın paraşüt."
    ]},
    { b: "Finansal analiz (oranlar)", t: [
      "Likidite: cari oran = dönen varlıklar / KVYK; asit-test oranı = (dönen varlıklar − stoklar) / KVYK; nakit oran = (hazır değerler + menkul kıymetler) / KVYK.",
      "Finansal yapı: borç oranı = toplam borç / toplam aktif; borç/özkaynak oranı; faiz karşılama oranı = FVÖK / faiz gideri.",
      "Faaliyet: stok devir hızı = satışların maliyeti / ortalama stok; alacak devir hızı = net satışlar / ortalama ticari alacak; aktif devir hızı = net satışlar / toplam aktif.",
      "Karlılık: net kâr marjı = net kâr / net satışlar; aktif kârlılığı (ROA) = net kâr / toplam aktif; özkaynak kârlılığı (ROE) = net kâr / özkaynak.",
      "DuPont: ROE = net kâr marjı × aktif devir hızı × özkaynak çarpanı (toplam aktif / özkaynak).",
      "Analiz yöntemleri: karşılaştırmalı (yatay), dikey (yüzde yöntemi), trend analizi ve oran analizi."
    ]},
    { b: "Leasing, faktoring, forfaiting", t: [
      "Finansal kiralama (leasing): kiracı varlığı kullanır, mülkiyet kiralayanda kalır; süre sonunda devir seçeneği olabilir.",
      "Faktoring: işletmenin vadeli alacaklarını faktoring şirketine devretmesi. Rücu'lu faktoringde tahsil edilemezse risk satıcıya döner; rücu'suzda faktöre aittir.",
      "Forfaiting: genelde ihracat alacaklarının (poliçe, bono) rücu'suz ve iskontolu satın alınması; orta vadeli ve tek seferlik işlemlerde kullanılır."
    ]}
  ],
  kartlar: [
    ["AOSM (WACC) formülü", "(E/V)·Ke + (D/V)·Kd·(1 − t)"],
    ["Sürdürülebilir büyüme oranı", "ROE × (1 − temettü dağıtım oranı)"],
    ["Net işletme sermayesi", "Dönen varlıklar − kısa vadeli yabancı kaynaklar"],
    ["Nakit dönüşüm süresi", "Stok devir süresi + alacak tahsil süresi − borç ödeme süresi"],
    ["NBD kabul kuralı", "NBD > 0 ise proje kabul edilir."],
    ["İVO nedir?", "Projenin NBD'sini sıfır yapan iskonto oranı."],
    ["Çakışan projelerde NBD ve İVO çelişirse?", "NBD tercih edilir."],
    ["Asit-test oranı", "(Dönen varlıklar − stoklar) / KVYK"],
    ["DuPont özdeşliği", "ROE = net kâr marjı × aktif devir hızı × özkaynak çarpanı"],
    ["Faaliyet kaldıracının kaynağı", "Sabit faaliyet giderleri"],
    ["Finansal kaldıracın kaynağı", "Faiz giderleri (borç kullanımı)"],
    ["Rücu'suz faktoring", "Alacak tahsil edilemezse risk faktoring şirketinde kalır."],
    ["Forfaiting", "İhracat alacaklarının rücu'suz ve iskontolu satın alınması."],
    ["Yatay birleşme", "Aynı sektörde, aynı üretim aşamasındaki şirketlerin birleşmesi."],
    ["Finansman hiyerarşisi (pecking order)", "İç kaynak → borç → pay ihracı"]
  ],
  sorular: [
    { s: "Özkaynak maliyeti %30, vergi öncesi borç maliyeti %20, vergi oranı %25, sermaye yapısı %60 özkaynak / %40 borç ise AOSM kaçtır?", c: ["%22", "%24", "%26", "%28"], d: 1, a: "AOSM = 0,6 × 30 + 0,4 × 20 × (1 − 0,25) = 18 + 6 = %24." },
    { s: "Bir projenin NBD'si sıfırın altındaysa hangisi doğrudur?", c: ["İVO sermaye maliyetinden yüksektir", "İVO sermaye maliyetinden düşüktür", "Karlılık endeksi 1'den büyüktür", "Geri ödeme süresi kısadır"], d: 1, a: "NBD < 0 olması, projenin getirisi olan İVO'nun sermaye maliyetinin altında kaldığını gösterir." },
    { s: "ROE %20, temettü dağıtım oranı %40 ise sürdürülebilir büyüme oranı kaçtır?", c: ["%8", "%12", "%20", "%28"], d: 1, a: "g = 0,20 × (1 − 0,40) = %12." },
    { s: "Stok devir süresi 60 gün, alacak tahsil süresi 45 gün, borç ödeme süresi 30 gün ise nakit dönüşüm süresi kaç gündür?", c: ["45", "75", "105", "135"], d: 1, a: "60 + 45 − 30 = 75 gün." },
    { s: "Dönen varlıkları 500, stokları 200, kısa vadeli yabancı kaynakları 250 olan şirketin asit-test oranı kaçtır?", c: ["0,8", "1,2", "2,0", "2,8"], d: 1, a: "(500 − 200) / 250 = 1,2." },
    { s: "DuPont analizine göre net kâr marjı %10, aktif devir hızı 1,5 ve özkaynak çarpanı 2 olan şirketin ROE'si kaçtır?", c: ["%15", "%20", "%30", "%35"], d: 2, a: "ROE = 0,10 × 1,5 × 2 = %30." },
    { s: "Aşağıdaki yöntemlerden hangisi paranın zaman değerini dikkate almaz?", c: ["Net bugünkü değer", "İç verim oranı", "Karlılık endeksi", "Basit geri ödeme süresi"], d: 3, a: "Basit geri ödeme süresi nakit akışlarını iskonto etmez." },
    { s: "Vergili Modigliani-Miller yaklaşımına göre borç kullanımı firma değerini nasıl etkiler?", c: ["Etkilemez", "Borcun vergi kalkanı kadar artırır", "Her zaman azaltır", "Yalnızca temettüyü etkiler"], d: 1, a: "Faiz giderleri vergiden düşüldüğü için borç, vergi kalkanının bugünkü değeri kadar firma değerini artırır." },
    { s: "Bir otomobil üreticisinin lastik üreticisini satın alması hangi tür birleşmedir?", c: ["Yatay", "Dikey", "Çapraz (konglomera)", "Ters birleşme"], d: 1, a: "Tedarik zincirinin farklı aşamalarındaki şirketlerin birleşmesi dikey birleşmedir." },
    { s: "Alacakların tahsil edilememesi riskinin faktoring şirketine geçtiği işlem hangisidir?", c: ["Rücu'lu faktoring", "Rücu'suz faktoring", "Operasyonel leasing", "Finansal leasing"], d: 1, a: "Rücu'suz faktoringde tahsil riski faktoring şirketine aittir." },
    { s: "Faiz karşılama oranı nasıl hesaplanır?", c: ["Net kâr / faiz gideri", "FVÖK / faiz gideri", "Faiz gideri / toplam borç", "Özkaynak / faiz gideri"], d: 1, a: "Faiz karşılama oranı = faiz ve vergi öncesi kâr (FVÖK) / faiz gideri." }
  ]
});
