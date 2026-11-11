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
    ["RSI aşırı alım / aşırı satım eşikleri", "70 üstü aşırı alım, 30 altı aşırı satım"]
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
    { s: "Nominal faiz %40, enflasyon %30 ise Fisher denklemine göre reel faiz yaklaşık kaçtır?", c: ["%7,7", "%10,0", "%13,3", "%70,0"], d: 0, a: "1,40 / 1,30 − 1 ≈ %7,7. Yaklaşık formül (%10) yüksek oranlarda yanıltıcıdır." }
  ]
});
