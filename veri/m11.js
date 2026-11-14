SPL.ekle("m11", {
  ozet: [
    { b: "Paranın zaman değeri", t: [
      "Basit faiz: FV = PV × (1 + r × n). Faiz yalnızca anaparaya işler.",
      "Bileşik faiz: FV = PV × (1 + r)^n. Faiz faize de işler.",
      "Yılda m kez bileşik: FV = PV × (1 + r/m)^(m×n). Sürekli bileşik: FV = PV × e^(r×n).",
      "Efektif yıllık faiz: (1 + r/m)^m − 1. Nominal faiz aynıyken bileşik sıklığı arttıkça efektif faiz artar.",
      "Bugünkü değer (iskonto): PV = FV / (1 + r)^n. İskonto oranı arttıkça bugünkü değer düşer.",
      "Anüite (eşit taksit) bugünkü değeri: PV = C × [1 − (1 + r)^−n] / r. Sonsuz anüite (perpetüite): PV = C / r.",
      "Büyüyen perpetüite: PV = C₁ / (r − g), r > g olmalı.",
      "Reel faiz (Fisher): (1 + nominal) = (1 + reel) × (1 + enflasyon); yaklaşık reel ≈ nominal − enflasyon."
    ]},
    { b: "Getiri ve risk", t: [
      "Dönemsel getiri: (P₁ − P₀ + D) / P₀. Temettü/kupon dahil edilir.",
      "Aritmetik ortalama getiri geometrik ortalamadan büyük veya eşittir; çok dönemli birikimli performansı geometrik ortalama doğru ölçer.",
      "Varyans ve standart sapma (σ) toplam riski ölçer. Değişim katsayısı = σ / beklenen getiri (birim getiri başına risk).",
      "Kovaryans iki varlığın birlikte hareketini, korelasyon (ρ = Kov / (σA×σB)) bunun −1 ile +1 arasına ölçeklenmiş hâlini gösterir.",
      "Toplam risk = sistematik (piyasa, çeşitlendirilemez) + sistematik olmayan (firmaya özgü, çeşitlendirilebilir) risk."
    ]},
    { b: "Portföy teorisi", t: [
      "İki varlıklı portföy varyansı: σp² = wA²σA² + wB²σB² + 2·wA·wB·ρAB·σA·σB.",
      "Korelasyon +1'den küçük oldukça çeşitlendirme riski azaltır; ρ = −1 ise risksiz portföy kurulabilir.",
      "Markowitz etkin sınırı: aynı risk için en yüksek getiriyi sunan portföyler kümesi.",
      "Sermaye Piyasası Doğrusu (CML): risksiz varlık ile piyasa portföyünü birleştiren etkin portföyler; eksen toplam risktir (σ).",
      "Menkul Kıymet Piyasası Doğrusu (SML): tek tek varlıklar için; eksen sistematik risktir (β)."
    ]},
    { b: "Varlık fiyatlama modelleri", t: [
      "CAPM: E(Ri) = Rf + βi × [E(Rm) − Rf]. E(Rm) − Rf piyasa risk primidir.",
      "Beta: βi = Kov(Ri, Rm) / σm². Piyasa betası 1'dir; β > 1 piyasadan daha oynak demektir.",
      "SML'nin üstünde kalan varlık beklenenden fazla getiri sunar (ucuz, alınmalı); altında kalan pahalıdır.",
      "Arbitraj Fiyatlama Modeli (APT): getiriyi birden fazla makroekonomik faktöre bağlar; piyasa portföyü varsayımı gerekmez.",
      "Fama-French üç faktör modeli: piyasa, büyüklük (SMB) ve defter/piyasa değeri (HML) faktörleri."
    ]},
    { b: "Temel ve teknik analiz", t: [
      "Temel analiz yukarıdan aşağı: ekonomi → sektör → şirket. Amaç gerçek (içsel) değeri bulmaktır.",
      "Gordon büyüme modeli: P₀ = D₁ / (r − g). D₁ gelecek yılın temettüsüdür (D₀ × (1 + g)).",
      "Çarpanlar: F/K = fiyat / hisse başına kâr; PD/DD = piyasa değeri / defter değeri; FD/FAVÖK = firma değeri / faiz, amortisman, vergi öncesi kâr.",
      "Firma değeri = piyasa değeri + net borç (toplam finansal borç − nakit).",
      "Teknik analiz fiyat ve hacim geçmişine dayanır; Dow teorisi: ana, ikincil ve küçük trendler.",
      "RSI 70 üstü aşırı alım, 30 altı aşırı satım bölgesi kabul edilir. MACD iki üssel hareketli ortalamanın farkıdır.",
      "Formasyonlar: omuz-baş-omuz (dönüş), üçgenler ve bayraklar (devam), ikili tepe/dip (dönüş)."
    ]},
    { b: "Tahvil değerleme ve durasyon", t: [
      "Tahvil fiyatı = kuponların ve anaparanın bugünkü değerleri toplamı. Faiz artınca tahvil fiyatı düşer.",
      "Kupon oranı > piyasa faizi ise tahvil primli (nominal değerin üstünde), küçükse iskontolu işlem görür.",
      "Macaulay durasyonu: nakit akışlarının ağırlıklı ortalama vadesi. Kuponsuz tahvilin durasyonu vadesine eşittir.",
      "Düzeltilmiş (modified) durasyon = Macaulay / (1 + y). Fiyat değişimi ≈ −MD × Δy.",
      "Vade uzadıkça ve kupon düştükçe durasyon (faiz riski) artar. Konveksite, durasyonun doğrusal tahminindeki hatayı düzeltir."
    ]},
    { b: "Portföy performans ölçümü", t: [
      "Sharpe oranı = (Rp − Rf) / σp: toplam risk başına fazla getiri.",
      "Treynor oranı = (Rp − Rf) / βp: sistematik risk başına fazla getiri; iyi çeşitlendirilmiş portföyler için uygundur.",
      "Jensen alfası = Rp − [Rf + βp(Rm − Rf)]: CAPM'in beklediğinin üstündeki getiri. Pozitif alfa üstün performans demektir.",
      "Sortino oranı yalnızca aşağı yönlü oynaklığı kullanır. Bilgi oranı = aktif getiri / izleme hatası.",
      "M² ölçüsü, portföyü piyasanın riskine eşitleyerek getiriyi yüzde olarak karşılaştırır."
    ]},
    { b: "Anüiteler ve tahvil getirileri", t: [
      "Anüite bugünkü değeri = A × [1 − (1 + r)^−n] / r. Dönem başında ödenen anüitede sonuç (1 + r) ile çarpılır.",
      "Sabit büyüyen sonsuz nakit akışı (büyüyen perpetuite): BD = C₁ / (r − g), r > g olmalıdır.",
      "Cari getiri = yıllık kupon / tahvil fiyatı. Vadeye kadar getiri: tahvilin nakit akışlarını bugünkü fiyata eşitleyen iskonto oranı.",
      "Fiyat nominal değerin altındaysa (iskontolu) vadeye kadar getiri > cari getiri > kupon oranı.",
      "Durasyon arttıkça faiz değişimine duyarlılık artar. Kuponsuz tahvilin Macaulay durasyonu vadesine eşittir."
    ]},
    { b: "APT, etkin piyasalar ve analiz yaklaşımları", t: [
      "Arbitraj Fiyatlama Modeli (APT): beklenen getiriyi birden çok makroekonomik faktöre duyarlılıklarla açıklar; tek faktörlü CAPM'den daha geneldir.",
      "Fama-French üç faktör modeli: piyasa, büyüklük (küçük şirket primi) ve değer (yüksek PD/DD primi) faktörleri.",
      "Etkin piyasalar hipotezi: zayıf formda geçmiş fiyatlar, yarı güçlü formda tüm kamuya açık bilgi, güçlü formda içsel bilgi de dâhil tüm bilgi fiyata yansımıştır.",
      "Zayıf form etkinse teknik analizle sürekli aşırı getiri elde edilemez; yarı güçlü form etkinse temel analiz de aşırı getiri sağlamaz.",
      "Temel analizde yukarıdan aşağıya yaklaşım: ekonomi → sektör → şirket. Çarpanlar: F/K, PD/DD, FD/FAVÖK.",
      "Teknik analiz göstergeleri: hareketli ortalamalar, RSI (70 üstü aşırı alım, 30 altı aşırı satım), MACD, destek ve direnç seviyeleri, işlem hacmi."
    ]},
    { b: "Performans ölçütleri (devamı)", t: [
      "Jensen alfası = Rp − [Rf + βp × (Rm − Rf)]. Pozitif alfa, CAPM'in öngördüğünden fazla getiri demektir.",
      "İzleme hatası: portföy getirisi ile karşılaştırma ölçütü getirisi arasındaki farkın standart sapması.",
      "Bilgi oranı = (portföy getirisi − ölçüt getirisi) / izleme hatası.",
      "Beta = kovaryans(varlık, piyasa) / piyasa varyansı."
    ]}
  ],
  kartlar: [
    ["Efektif yıllık faiz formülü", "(1 + r/m)^m − 1"],
    ["Perpetüitenin bugünkü değeri", "PV = C / r"],
    ["Fisher denklemi", "(1 + nominal) = (1 + reel) × (1 + enflasyon)"],
    ["CAPM formülü", "E(R) = Rf + β × [E(Rm) − Rf]"],
    ["Beta nasıl hesaplanır?", "Kov(Ri, Rm) / Var(Rm)"],
    ["CML ile SML'nin farkı", "CML: etkin portföyler, eksen σ (toplam risk). SML: tüm varlıklar, eksen β (sistematik risk)."],
    ["Gordon büyüme modeli", "P₀ = D₁ / (r − g)"],
    ["Firma değeri (FD)", "Piyasa değeri + net borç"],
    ["Kuponsuz tahvilin durasyonu", "Vadesine eşittir."],
    ["Düzeltilmiş durasyon", "MD = Macaulay durasyonu / (1 + y); fiyat değişimi ≈ −MD × Δy"],
    ["Sharpe oranı", "(Rp − Rf) / σp"],
    ["Treynor oranı", "(Rp − Rf) / βp"],
    ["Jensen alfası", "Rp − [Rf + βp(Rm − Rf)]"],
    ["Çeşitlendirmeyle yok edilebilen risk", "Sistematik olmayan (firmaya özgü) risk"],
    ["RSI aşırı alım / aşırı satım eşikleri", "70 üstü aşırı alım, 30 altı aşırı satım"],
    ["Anüitenin bugünkü değeri", "A × [1 − (1 + r)^−n] / r"],
    ["Büyüyen perpetuite", "C₁ / (r − g)"],
    ["Cari getiri", "Yıllık kupon / tahvil fiyatı"],
    ["APT", "Getiriyi birden çok faktöre duyarlılıkla açıklayan model"],
    ["Zayıf form etkinlik", "Geçmiş fiyat bilgisi fiyatlara yansımış; teknik analiz aşırı getiri sağlamaz"],
    ["Yarı güçlü form etkinlik", "Kamuya açık tüm bilgi fiyatlara yansımış"],
    ["Bilgi oranı", "(Rp − R ölçüt) / izleme hatası"],
    ["Beta", "Kov(varlık, piyasa) / Var(piyasa)"],
    ["RSI 70'in üstü", "Aşırı alım bölgesi"]
  ],
  sorular: [
    { s: "Yıllık %12 nominal faiz aylık bileşik uygulanıyor. Efektif yıllık faiz yaklaşık kaçtır?", c: ["%12,00", "%12,36", "%12,55", "%12,68"], d: 3, a: "(1 + 0,12/12)^12 − 1 = 1,01^12 − 1 ≈ %12,68." },
    { s: "Her yıl sonsuza kadar 500 TL ödeme yapan bir varlığın, %10 iskonto oranıyla bugünkü değeri kaçtır?", c: ["500 TL", "4.545 TL", "5.000 TL", "5.500 TL"], d: 2, a: "Perpetüite: PV = C / r = 500 / 0,10 = 5.000 TL." },
    { s: "Risksiz faiz %20, piyasa getirisi %30, hissenin betası 1,5 ise CAPM'e göre beklenen getiri kaçtır?", c: ["%30", "%35", "%40", "%45"], d: 1, a: "E(R) = 20 + 1,5 × (30 − 20) = %35." },
    { s: "Gelecek yıl hisse başına 6 TL temettü bekleniyor, temettü sürekli %5 büyüyor ve beklenen getiri %15. Gordon modeline göre hisse değeri kaçtır?", c: ["40 TL", "60 TL", "63 TL", "120 TL"], d: 1, a: "P₀ = D₁ / (r − g) = 6 / (0,15 − 0,05) = 60 TL." },
    { s: "Aşağıdakilerden hangisi çeşitlendirme ile azaltılamaz?", c: ["Firmaya özgü risk", "Sektöre özgü yönetim riski", "Sistematik (piyasa) risk", "Tek bir şirketin iflas riski"], d: 2, a: "Sistematik risk tüm piyasayı etkiler, çeşitlendirmeyle yok edilemez." },
    { s: "İki varlık arasındaki korelasyon −1 ise aşağıdakilerden hangisi doğrudur?", c: ["Çeşitlendirmenin faydası yoktur", "Uygun ağırlıklarla risksiz portföy kurulabilir", "Portföy riski her zaman artar", "Portföy getirisi sıfır olur"], d: 1, a: "Tam negatif korelasyonda uygun ağırlıklarla portföy standart sapması sıfıra indirilebilir." },
    { s: "Kupon oranı piyasa faizinden yüksek olan bir tahvil nasıl işlem görür?", c: ["Nominal değerinin üzerinde (primli)", "Nominal değerinin altında (iskontolu)", "Tam nominal değerinden", "Vadeye kadar işlem göremez"], d: 0, a: "Yüksek kupon, yatırımcıya piyasadan fazla getiri sağladığı için fiyat nominalin üstüne çıkar." },
    { s: "Macaulay durasyonu 5,5, getirisi %10 olan tahvilin düzeltilmiş durasyonu yaklaşık kaçtır?", c: ["4,5", "5,0", "5,5", "6,05"], d: 1, a: "MD = 5,5 / 1,10 = 5,0. Faiz 1 puan artarsa fiyat yaklaşık %5 düşer." },
    { s: "Portföy getirisi %25, risksiz faiz %15, standart sapma %20, beta 0,8 ise Sharpe oranı kaçtır?", c: ["0,40", "0,50", "1,25", "12,5"], d: 1, a: "Sharpe = (25 − 15) / 20 = 0,50. (Treynor = 10 / 0,8 = 12,5.)" },
    { s: "Aşağıdaki performans ölçütlerinden hangisi CAPM'e göre beklenen getirinin üstündeki getiriyi ölçer?", c: ["Sharpe oranı", "Treynor oranı", "Jensen alfası", "Bilgi oranı"], d: 2, a: "Jensen alfası = gerçekleşen getiri − CAPM'in öngördüğü getiri." },
    { s: "Bir varlık SML'nin üzerinde konumlanıyorsa ne söylenebilir?", c: ["Pahalıdır, satılmalıdır", "Ucuzdur, riskine göre fazla getiri sunar", "Betası sıfırdır", "Risksiz varlıktır"], d: 1, a: "SML üzerindeki varlık, sistematik riskine göre beklenenden yüksek getiri sunar; fiyatı düşük kalmıştır." },
    { s: "Nominal faiz %40, enflasyon %30 ise Fisher denklemine göre reel faiz yaklaşık kaçtır?", c: ["%7,7", "%10,0", "%13,3", "%70,0"], d: 0, a: "1,40 / 1,30 − 1 ≈ %7,7. Yaklaşık formül (%10) yüksek oranlarda yanıltıcıdır." },
    { s: "Yıllık %10 faizle 3 yıl boyunca her yıl sonunda 1.000 TL ödeyen anüitenin bugünkü değeri yaklaşık kaç TL'dir?", c: ["2.487", "2.727", "3.000", "3.310"], d: 0, a: "1.000 × [1 − 1,1^−3] / 0,1 ≈ 2.487 TL." },
    { s: "Gelecek yıl 10 TL temettü bekleniyor, temettüler yılda %5 büyüyecek, iskonto oranı %15'tir. Hissenin değeri kaç TL'dir?", c: ["66,7", "100", "105", "200"], d: 1, a: "10 / (0,15 − 0,05) = 100 TL." },
    { s: "Nominali 100 TL, yıllık kuponu 8 TL olan tahvilin fiyatı 80 TL'dir. Cari getiri yüzde kaçtır?", c: ["%8", "%9", "%10", "%12"], d: 2, a: "8 / 80 = %10." },
    { s: "İskontolu (nominalin altında) işlem gören bir tahvil için doğru sıralama hangisidir?", c: ["Kupon oranı > cari getiri > vadeye kadar getiri", "Vadeye kadar getiri > cari getiri > kupon oranı", "Hepsi eşittir", "Cari getiri > kupon oranı > vadeye kadar getiri"], d: 1, a: "İskontolu tahvilde VKG > cari getiri > kupon oranı." },
    { s: "5 yıl vadeli kuponsuz bir tahvilin Macaulay durasyonu kaç yıldır?", c: ["2,5", "4", "5", "Hesaplanamaz"], d: 2, a: "Kuponsuz tahvilin durasyonu vadesine eşittir." },
    { s: "Beklenen getiriyi birden çok makroekonomik faktöre duyarlılıkla açıklayan model hangisidir?", c: ["CAPM", "Arbitraj Fiyatlama Modeli", "Gordon modeli", "Markowitz modeli"], d: 1, a: "APT çok faktörlü bir modeldir." },
    { s: "Etkin piyasalar hipotezinin zayıf formu geçerliyse aşağıdakilerden hangisiyle sürekli aşırı getiri elde edilemez?", c: ["İçsel bilgi", "Teknik analiz", "Temel analiz", "Hiçbiri"], d: 1, a: "Zayıf formda geçmiş fiyatlar fiyatlara yansıdığı için teknik analiz işe yaramaz." },
    { s: "Kamuya açık tüm bilginin fiyatlara yansıdığını öne süren etkinlik formu hangisidir?", c: ["Zayıf form", "Yarı güçlü form", "Güçlü form", "Teknik form"], d: 1, a: "Yarı güçlü formda temel analiz de aşırı getiri sağlamaz." },
    { s: "Portföy getirisi %18, risksiz faiz %10, piyasa getirisi %16, beta 1,2 ise Jensen alfası yüzde kaçtır?", c: ["%0,8", "%1,2", "%2", "%8"], d: 0, a: "Beklenen = 10 + 1,2 × 6 = 17,2; alfa = 18 − 17,2 = %0,8." },
    { s: "Bir hissenin piyasa ile kovaryansı 0,03, piyasa varyansı 0,02 ise betası kaçtır?", c: ["0,67", "1", "1,5", "6"], d: 2, a: "β = 0,03 / 0,02 = 1,5." },
    { s: "Portföy ölçütü %2 geçmiş, izleme hatası %4 ise bilgi oranı kaçtır?", c: ["0,5", "2", "4", "8"], d: 0, a: "Bilgi oranı = 2 / 4 = 0,5." },
    { s: "Temel analizde yukarıdan aşağıya yaklaşımın doğru sırası hangisidir?", c: ["Şirket → sektör → ekonomi", "Ekonomi → sektör → şirket", "Sektör → ekonomi → şirket", "Şirket → ekonomi → sektör"], d: 1, a: "Önce genel ekonomi, sonra sektör, en son şirket incelenir." },
    { s: "RSI göstergesinin 75 olması teknik analizde genellikle nasıl yorumlanır?", c: ["Aşırı satım", "Aşırı alım", "Trend yok", "Hacim düşük"], d: 1, a: "RSI 70'in üstü aşırı alım bölgesi kabul edilir." },
    { s: "Piyasa değeri 2.000, net kârı 200 olan şirketin F/K oranı kaçtır?", c: ["0,1", "5", "10", "20"], d: 2, a: "F/K = 2.000 / 200 = 10." },
    { s: "Aylık %2 bileşik faizin yıllık efektif karşılığı yaklaşık yüzde kaçtır?", c: ["%24", "%24,6", "%26,8", "%28,5"], d: 2, a: "1,02¹² − 1 ≈ %26,8." },
    { s: "Fama-French üç faktör modelinde piyasa faktörüne ek olarak hangi iki faktör yer alır?", c: ["Faiz ve kur", "Büyüklük ve değer", "Enflasyon ve büyüme", "Momentum ve likidite"], d: 1, a: "Küçük şirket (büyüklük) ve değer (yüksek PD/DD) faktörleri." }
  ]
});
