SPL.ekle("m06", {
  ozet: [
    { b: "Temel kavramlar", t: [
      "Takas: alım satım işlemi sonucunda tarafların nakit ve menkul kıymet yükümlülüklerinin yerine getirilmesi (karşılıklı teslim).",
      "Saklama: sermaye piyasası araçlarının hak sahipleri adına korunması ve haklarının (temettü, bedelsiz, kupon) kullandırılması.",
      "Teslim karşılığı ödeme (DVP): menkul kıymet teslimi ile nakit ödemesinin eş zamanlı yapılması; anapara riskini ortadan kaldırır.",
      "Netleştirme: aynı üyenin alış ve satış yükümlülüklerinin mahsup edilerek tek net tutarın takasa gönderilmesi.",
      "Takas riskleri: karşı taraf riski (anapara ve yerine koyma maliyeti), likidite riski, operasyonel risk, sistemik risk."
    ]},
    { b: "Merkezi Kayıt Kuruluşu (MKK) ve kaydileştirme", t: [
      "MKK: kaydileştirilen sermaye piyasası araçlarını ve haklarını hak sahibi (yatırımcı) bazında elektronik ortamda izleyen merkezi kayıt kuruluşu.",
      "Kaydileştirme: menkul kıymetlerin fiziki senet yerine elektronik kayıtla izlenmesi; halka açık şirket payları kaydidir.",
      "Yatırımcılar e-YATIRIMCI hizmetiyle hesaplarındaki varlıkları izleyebilir.",
      "Hesaplar aracı kurum ve bankalar (hesap kuruluşları) üzerinden açılır; MKK hak sahiplerini ayrı ayrı kaydeder.",
      "Kitle fonlaması fonları ve genel kurul elektronik sistemi (e-GKS) de MKK altyapısını kullanır."
    ]},
    { b: "Takasbank, merkezi takas ve merkezi karşı taraf", t: [
      "İstanbul Takas ve Saklama Bankası (Takasbank): Borsa İstanbul piyasalarında merkezi takas kuruluşu ve merkezi karşı taraf (MKT).",
      "Merkezi karşı taraf: alıcıya karşı satıcı, satıcıya karşı alıcı rolünü üstlenerek karşı taraf riskini yönetir.",
      "Risk yönetimi araçları: üye kabul kriterleri, teminatlar (başlangıç ve değişim), garanti fonu, temerrüt yönetimi ve Takasbank'ın kendi kaynakları (temerrüt yönetim kademeleri).",
      "Garanti fonu: üyelerin katkılarıyla oluşturulan ve temerrüt hâlinde kullanılan fon.",
      "Portföy saklama hizmeti (III-56.1): yatırım fonları ve ortaklıkların portföyündeki varlıklar SPK'nın uygun gördüğü saklayıcılarda (Takasbank, bankalar) saklanır."
    ]},
    { b: "Borsa İstanbul'da takas işlemleri", t: [
      "Pay piyasası işlemleri T+2'de takas edilir; menkul kıymetler MKK'da, nakit Takasbank'ta el değiştirir.",
      "Borçlanma araçları piyasasında işlemler valörüne göre (aynı gün veya ileri valörlü) takas edilir.",
      "Takas yükümlülüğünü yerine getirmeyen üye temerrüde düşer; temerrüt faizi uygulanır, teminatlar ve garanti fonu kullanılır.",
      "Brüt takas tedbiri: belirli paylarda netleştirme yapılmadan her işlemin ayrı ayrı takası istenir (gözetim tedbiri)."
    ]},
    { b: "Türev araçlarda takas ve teminat yönetimi", t: [
      "VİOP pozisyonları günlük uzlaşma fiyatıyla değerlenir; kâr/zarar her gün teminat hesaplarına yansıtılır.",
      "Vade sonunda nakdi uzlaşma (fark ödenir) veya fiziki teslimat (dayanak teslim edilir) yapılır.",
      "Teminat olarak nakit (TL, döviz), DİBS, paylar ve diğer kabul edilen kıymetler, değerleme katsayılarıyla (haircut) kabul edilir.",
      "Teminat tamamlama çağrısına zamanında uyulmazsa pozisyonlar resen kapatılabilir."
    ]}
  ],
  kartlar: [
    ["Takas nedir?", "Alım satım sonrası nakit ve menkul kıymet yükümlülüklerinin karşılıklı yerine getirilmesi"],
    ["DVP", "Teslim karşılığı ödeme: menkul kıymet ve nakdin eş zamanlı el değiştirmesi"],
    ["Netleştirme", "Alış ve satış yükümlülüklerinin mahsup edilip net tutarın takasa gönderilmesi"],
    ["MKK'nın görevi", "Kaydi sermaye piyasası araçlarını hak sahibi bazında elektronik olarak izlemek"],
    ["Merkezi karşı taraf", "Alıcıya karşı satıcı, satıcıya karşı alıcı olarak karşı taraf riskini üstlenen kurum"],
    ["Borsa İstanbul'da MKT", "Takasbank"],
    ["Garanti fonu", "Üye katkılarıyla oluşturulan, temerrüt hâlinde kullanılan fon"],
    ["Brüt takas", "Netleştirme yapılmadan her işlemin ayrı takası; gözetim tedbiri"],
    ["Haircut (değerleme katsayısı)", "Teminat olarak kabul edilen kıymetin değerine uygulanan iskonto"],
    ["Fon varlıkları nerede saklanır?", "Portföy saklayıcısında (Takasbank veya yetkili bankalar)"],
    ["e-YATIRIMCI", "MKK'nın yatırımcıların hesaplarını izlemesini sağlayan hizmeti"],
    ["Nakdi uzlaşma", "Vade sonunda dayanak yerine fiyat farkının nakden ödenmesi"]
  ],
  sorular: [
    { s: "Menkul kıymet teslimi ile nakit ödemesinin eş zamanlı yapılmasını sağlayan ilke hangisidir?", c: ["Netleştirme", "Teslim karşılığı ödeme (DVP)", "Brüt takas", "Kaydileştirme"], d: 1, a: "DVP, bir tarafın teslim edip karşılığını alamama (anapara) riskini ortadan kaldırır." },
    { s: "Kaydi sermaye piyasası araçlarını hak sahibi bazında izleyen kuruluş hangisidir?", c: ["Takasbank", "Merkezi Kayıt Kuruluşu", "Borsa İstanbul", "SPK"], d: 1, a: "MKK kaydi araçları yatırımcı bazında izler." },
    { s: "Borsa İstanbul piyasalarında merkezi karşı taraf hizmeti veren kurum hangisidir?", c: ["MKK", "Takasbank", "TCMB", "Yatırımcı Tazmin Merkezi"], d: 1, a: "Takasbank merkezi takas kuruluşu ve merkezi karşı taraftır." },
    { s: "Bir üyenin aynı paydaki 1.000 adet alış ve 700 adet satış yükümlülüğünün mahsup edilip 300 adetlik net alışın takasa gönderilmesine ne denir?", c: ["Brüt takas", "Netleştirme", "Temerrüt", "Repo"], d: 1, a: "Netleştirme." },
    { s: "Merkezi karşı tarafın temerrüt durumunda kullandığı, üyelerin katkılarıyla oluşan fon hangisidir?", c: ["Garanti fonu", "Yatırım fonu", "Emeklilik fonu", "Konut finansmanı fonu"], d: 0, a: "Garanti fonu." },
    { s: "VİOP'ta vade sonunda dayanak varlık yerine fiyat farkının ödenmesine ne denir?", c: ["Fiziki teslimat", "Nakdi uzlaşma", "Brüt takas", "Ödünç"], d: 1, a: "Nakdi uzlaşma." },
    { s: "Teminat olarak kabul edilen kıymetlerin değerine uygulanan iskontoya ne ad verilir?", c: ["Prim", "Değerleme katsayısı (haircut)", "Komisyon", "Baz"], d: 1, a: "Değerleme katsayısı, teminatın değerindeki olası düşüşe karşı tampon sağlar." },
    { s: "Belirli paylarda gözetim tedbiri olarak netleştirme yapılmadan her işlemin ayrı ayrı takasının istenmesi hangisidir?", c: ["Brüt takas", "Netleştirme", "DVP", "Saklama"], d: 0, a: "Brüt takas tedbiri." }
  ]
});
