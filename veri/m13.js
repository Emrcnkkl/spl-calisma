SPL.ekle("m13", {
  ozet: [
    { b: "Temel kavramlar", t: [
      "Türev araç: değeri bir dayanak varlığa (pay, endeks, döviz, faiz, emtia vb.) bağlı sözleşme.",
      "Kullanım amaçları: riskten korunma (hedging), spekülasyon (yön beklentisi) ve arbitraj (fiyat farkından risksiz kazanç).",
      "Uzun (long) pozisyon: dayanağı ileride alma hakkı/yükümlülüğü; kısa (short) pozisyon: satma.",
      "Kaldıraç: küçük teminatla büyük pozisyon açılır; kâr da zarar da büyür.",
      "Sıfır toplamlı oyun: (maliyetler hariç) bir tarafın kazancı diğer tarafın kaybıdır."
    ]},
    { b: "Forward ve vadeli işlem (futures)", t: [
      "Forward: tezgahüstü, iki taraf arasında, standart olmayan sözleşme; karşı taraf riski vardır, vadede uzlaşılır.",
      "Futures: borsada işlem gören, standart sözleşme; merkezi karşı taraf (Türkiye'de Takasbank) karşı taraf riskini üstlenir.",
      "Günlük uzlaşma (marking to market): her gün kâr/zarar teminat hesabına yansıtılır.",
      "Başlangıç teminatı pozisyon açarken, sürdürme teminatı pozisyonu korumak için gerekir. Teminat sürdürmenin altına inerse teminat tamamlama çağrısı (marjin çağrısı) yapılır ve başlangıç seviyesine tamamlanır.",
      "Baz = spot fiyat − vadeli fiyat. Vade yaklaştıkça baz sıfıra yakınsar.",
      "Contango: vadeli fiyat > spot (taşıma maliyeti pozitif). Backwardation: vadeli fiyat < spot."
    ]},
    { b: "Vadeli fiyatlama", t: [
      "Taşıma maliyeti modeli: F = S × (1 + r)^T ya da sürekli bileşikte F = S × e^(rT).",
      "Temettü/getiri (q) varsa: F = S × e^((r − q)T). Döviz için: F = S × (1 + r_yerel) / (1 + r_yabancı) (faiz paritesi).",
      "Gerçek vadeli fiyat teorik fiyattan yüksekse: spotu al + vadeliyi sat (cash and carry arbitrajı).",
      "Düşükse: spotu açığa sat + vadeliyi al (ters cash and carry)."
    ]},
    { b: "Opsiyonlar", t: [
      "Alım (call) opsiyonu: dayanağı kullanım fiyatından (K) alma hakkı. Satım (put): satma hakkı. Hak alıcıdadır, yükümlülük satıcıdadır.",
      "Opsiyon alıcısı prim öder; zararı primle sınırlıdır. Opsiyon satıcısı primi alır; call satıcısının zararı teorik olarak sınırsızdır.",
      "Avrupa tipi yalnızca vade sonunda, Amerikan tipi vade boyunca kullanılabilir.",
      "Call için: S > K ise kârda (ITM), S = K başa baş (ATM), S < K zararda (OTM). Put için tersi.",
      "Opsiyon primi = içsel değer + zaman değeri. Call içsel değeri = max(S − K, 0); put = max(K − S, 0).",
      "Alım-satım paritesi (Avrupa): C − P = S − K × e^(−rT).",
      "Primi etkileyenler: dayanak fiyatı, kullanım fiyatı, vade, oynaklık, faiz, temettü. Oynaklık ve vade artınca hem call hem put primi artar.",
      "Duyarlılıklar (Yunanlar): delta (dayanak fiyatına), gama (deltanın değişimi), theta (zamana), vega (oynaklığa), rho (faize)."
    ]},
    { b: "Swaplar ve diğer türevler", t: [
      "Faiz swapı: sabit faizli ödemeler ile değişken faizli ödemelerin değişimi; anapara değişmez (nominal tutar üzerinden hesaplanır).",
      "Döviz swapı: farklı para birimlerinde anapara ve faiz ödemelerinin değişimi; başta ve sonda anapara değişimi olur.",
      "Kredi temerrüt swapı (CDS): koruma alıcısı düzenli prim öder, kredi olayı (temerrüt) olursa koruma satıcısı zararı karşılar.",
      "Varantlar ihraççı tarafından çıkarılan opsiyon benzeri menkul kıymetlerdir; aracı kurum veya banka ihraç eder, piyasa yapıcı vardır."
    ]},
    { b: "Risk yönetimi ve stratejiler", t: [
      "Uzun hedge: ileride dayanak alacak olan vadeli alır. Kısa hedge: elinde dayanak olan vadeli satar.",
      "Optimal hedge oranı (minimum varyans): h = ρ × σ_spot / σ_vadeli. Endeks hedgede sözleşme sayısı ≈ β × portföy değeri / sözleşme değeri.",
      "Korumalı alım (covered call): pay sahibi call satar; ek gelir, sınırlı yukarı kazanç.",
      "Koruyucu satım (protective put): pay sahibi put alır; aşağı yönlü zarar sınırlanır (sigorta).",
      "Straddle: aynı K ve vadeli call + put alımı; yüksek oynaklık beklentisi. Strangle: farklı K'lı call + put, daha ucuz.",
      "Boğa yayılımı (bull spread): düşük K'lı call al + yüksek K'lı call sat. Ayı yayılımı tersi.",
      "Riske maruz değer (RMD/VaR): belirli güven düzeyi ve sürede beklenen en yüksek kayıp. Yöntemler: tarihsel benzetim, varyans-kovaryans (parametrik), Monte Carlo."
    ]}
  ],
  kartlar: [
    ["Forward ile futures'ın temel farkı", "Forward tezgahüstü ve standart değil (karşı taraf riski var); futures borsada, standart, merkezi karşı taraf ve günlük uzlaşma var."],
    ["Günlük uzlaşma nedir?", "Vadeli pozisyonların her gün uzlaşma fiyatına göre değerlenip kâr/zararın teminat hesabına yansıtılması."],
    ["Teminat tamamlama çağrısı ne zaman gelir, hangi seviyeye tamamlanır?", "Teminat sürdürme seviyesinin altına inince; başlangıç teminatı seviyesine tamamlanır."],
    ["Baz", "Spot fiyat − vadeli fiyat; vade sonunda sıfıra yakınsar."],
    ["Contango", "Vadeli fiyatın spottan yüksek olduğu durum."],
    ["Taşıma maliyeti modeli", "F = S × e^((r − q)T)"],
    ["Call opsiyonunun içsel değeri", "max(S − K, 0)"],
    ["Put opsiyonunun içsel değeri", "max(K − S, 0)"],
    ["Alım-satım paritesi", "C − P = S − K·e^(−rT)"],
    ["Opsiyon primi bileşenleri", "İçsel değer + zaman değeri"],
    ["Delta", "Opsiyon priminin dayanak fiyatındaki 1 birimlik değişime duyarlılığı. Call: 0 ile 1, put: −1 ile 0."],
    ["Vega", "Opsiyon priminin oynaklığa duyarlılığı."],
    ["Theta", "Opsiyon priminin zamanın geçmesine duyarlılığı (zaman erimesi)."],
    ["Faiz swapında anapara değişimi olur mu?", "Hayır; ödemeler nominal tutar üzerinden hesaplanır, yalnızca net faiz farkı ödenir."],
    ["Koruyucu satım (protective put)", "Dayanağa sahipken put almak; aşağı yönlü zararı sınırlar."],
    ["Straddle", "Aynı kullanım fiyatı ve vadeli call + put alımı; yön değil yüksek oynaklık beklentisi."],
    ["Uzun hedge kimin içindir?", "İleride dayanak varlığı satın alacak olan ve fiyat artışından korunmak isteyen (vadeli alır)."]
  ],
  sorular: [
    { s: "Aşağıdakilerden hangisi vadeli işlem (futures) sözleşmelerini forward sözleşmelerden ayıran özelliktir?", c: ["Dayanak varlığa sahip olunması", "Standart olması ve borsada işlem görmesi", "Vade sonunda uzlaşılması", "Karşı taraf riskinin yüksek olması"], d: 1, a: "Futures standart sözleşmedir, borsada işlem görür; merkezi karşı taraf ve günlük uzlaşma vardır." },
    { s: "Spot fiyatı 100 TL, yıllık risksiz faiz %20 olan, temettü dağıtmayan bir varlığın 6 ay vadeli teorik fiyatı (basit faizle) kaçtır?", c: ["100 TL", "110 TL", "120 TL", "105 TL"], d: 1, a: "F = 100 × (1 + 0,20 × 0,5) = 110 TL." },
    { s: "Vadeli fiyat teorik değerinin üzerindeyse hangi arbitraj stratejisi uygulanır?", c: ["Spotu sat, vadeliyi al", "Spotu al, vadeliyi sat", "Hem spotu hem vadeliyi al", "Hiçbir işlem yapılmaz"], d: 1, a: "Pahalı olan vadeli satılır, ucuz olan spot alınıp vadeye kadar taşınır (cash and carry)." },
    { s: "Kullanım fiyatı 50 TL olan bir call opsiyonunun primi 8 TL, dayanak fiyatı 55 TL ise zaman değeri kaçtır?", c: ["3 TL", "5 TL", "8 TL", "13 TL"], d: 0, a: "İçsel değer = 55 − 50 = 5 TL; zaman değeri = 8 − 5 = 3 TL." },
    { s: "Dayanak fiyatı 40 TL iken kullanım fiyatı 45 TL olan put opsiyonu için hangisi doğrudur?", c: ["Zararda (OTM)", "Başa baş (ATM)", "Kârda (ITM)", "İçsel değeri sıfırdır"], d: 2, a: "Put'ta K > S ise opsiyon kârdadır; içsel değer = 45 − 40 = 5 TL." },
    { s: "Dayanak varlığın oynaklığı artarsa opsiyon primleri nasıl etkilenir (diğer her şey sabitken)?", c: ["Call artar, put azalır", "Call azalır, put artar", "İkisi de artar", "İkisi de azalır"], d: 2, a: "Oynaklık hem call hem put sahibinin kazanç ihtimalini artırır; iki prim de yükselir." },
    { s: "Call opsiyonu satan yatırımcının (çıplak pozisyon) en yüksek zararı nedir?", c: ["Alınan prim kadar", "Kullanım fiyatı kadar", "Teorik olarak sınırsız", "Sıfır"], d: 2, a: "Dayanak fiyatı sınırsız yükselebileceği için çıplak call satıcısının zararı teorik olarak sınırsızdır." },
    { s: "Elinde hisse senedi portföyü bulunan ve piyasanın düşmesinden korunmak isteyen yatırımcı ne yapmalıdır?", c: ["Endeks vadeli işlem sözleşmesi almalı", "Endeks vadeli işlem sözleşmesi satmalı", "Call opsiyonu almalı", "Put opsiyonu satmalı"], d: 1, a: "Elde dayanak varken düşüşten korunmak için kısa hedge yapılır: vadeli satılır (ya da put alınır)." },
    { s: "Aynı kullanım fiyatı ve vadeli bir call ve bir put opsiyonunun birlikte alındığı strateji hangisidir?", c: ["Strangle", "Straddle", "Boğa yayılımı", "Kelebek"], d: 1, a: "Straddle; yön değil, büyük fiyat hareketi (yüksek oynaklık) beklentisini yansıtır." },
    { s: "Vadeli işlem pozisyonunda teminat sürdürme seviyesinin altına inerse hangisi olur?", c: ["Pozisyon hemen kapatılır, başka işlem yapılmaz", "Teminat başlangıç seviyesine tamamlanmalıdır", "Teminat sürdürme seviyesine tamamlanmalıdır", "Teminat iade edilir"], d: 1, a: "Teminat tamamlama çağrısında hesap başlangıç teminatı seviyesine tamamlanır; yapılmazsa pozisyon kapatılabilir." },
    { s: "Sabit faiz ödemelerinin değişken faiz ödemeleriyle değiştirildiği sözleşme hangisidir?", c: ["Döviz swapı", "Faiz swapı", "Kredi temerrüt swapı", "Forward faiz anlaşması"], d: 1, a: "Faiz swapında aynı para biriminde sabit ve değişken faiz ödemeleri değiştirilir." },
    { s: "Riske maruz değer (RMD/VaR) hesaplama yöntemlerinden hangisi rastgele senaryo üretimine dayanır?", c: ["Tarihsel benzetim", "Varyans-kovaryans", "Monte Carlo benzetimi", "Duyarlılık analizi"], d: 2, a: "Monte Carlo yöntemi, varsayılan dağılımlardan çok sayıda rastgele senaryo üreterek kayıp dağılımını tahmin eder." }
  ]
});
