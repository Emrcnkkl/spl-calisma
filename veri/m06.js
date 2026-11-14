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
    ]},
    { b: "MKK kayıtları ve hesap yapısı", t: [
      "Kaydi sistemde haklar hesap kuruluşları (aracı kurumlar, bankalar) üzerinden MKK'da hak sahibi bazında izlenir; her yatırımcının sicil numarası ve hesap numaraları vardır.",
      "Rehin, bloke ve haciz gibi kısıtlamalar da MKK kayıtları üzerinden işlenir.",
      "MKK'nın sunduğu hizmetler: e-YATIRIMCI (hesap izleme), Elektronik Genel Kurul Sistemi (e-GKS), Kamuyu Aydınlatma Platformu altyapısı, e-YÖNET (kurumsal yönetim ve yatırımcı ilişkileri).",
      "Kaydi payların devri, alım satım sonucunda takasla birlikte MKK kayıtlarında gerçekleşir; fiziki senet teslimi yoktur."
    ]},
    { b: "Portföy saklama ve borçlanma araçları takası", t: [
      "Portföy saklama hizmeti (III-56.1): fon ve ortaklık portföyündeki varlıklar kurucudan bağımsız bir saklayıcıda (Takasbank ya da uygun görülen bankalar) tutulur.",
      "Saklayıcı, varlıkları müşteri bazında ayrı izler, kurucunun portföy işlemlerinin mevzuata ve içtüzüğe uygunluğunu kontrol eder, aykırılıkları SPK'ya bildirir.",
      "Borçlanma Araçları Piyasası'nda işlemler valör gününde takas edilir (aynı gün ya da ileri valör). Repo işlemlerinde başlangıç ve dönüş ayağı ayrı ayrı takas edilir.",
      "Devlet iç borçlanma senetleri hesapları TCMB nezdinde, diğer kaydi borçlanma araçları MKK nezdinde izlenir."
    ]},
    { b: "Temerrüt yönetimi ve teminat", t: [
      "Takas yükümlülüğünü zamanında yerine getirmeyen üyeye temerrüt faizi ve cezası uygulanır; Takasbank eksik kıymeti ya da nakdi piyasadan alarak (alım/satım yoluyla temerrüt yönetimi) takası tamamlayabilir.",
      "Merkezi karşı tarafın kaynak sıralaması: temerrüde düşen üyenin teminatları → bu üyenin garanti fonu katkısı → Takasbank'ın ayırdığı özkaynak → diğer üyelerin garanti fonu katkıları → Takasbank'ın kalan özkaynağı.",
      "Başlangıç teminatı: pozisyon açılırken yatırılan teminat. Sürdürme teminatı: hesapta korunması gereken asgari tutar; altına düşülürse teminat tamamlama çağrısı yapılır.",
      "VİOP'ta teminatlar portföy bazlı risk hesabıyla (SPAN benzeri yöntem) belirlenir; birbirini dengeleyen pozisyonlar daha az teminat gerektirir."
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
    ["Nakdi uzlaşma", "Vade sonunda dayanak yerine fiyat farkının nakden ödenmesi"],
    ["Hesap kuruluşu", "Yatırımcı hesaplarını açıp MKK'ya bildiren aracı kurum ya da banka"],
    ["e-GKS", "MKK'nın elektronik genel kurul sistemi"],
    ["Portföy saklayıcısı", "Fon varlıklarını kurucudan bağımsız saklayan ve işlemleri denetleyen kuruluş (III-56.1)"],
    ["DİBS hesapları nerede izlenir?", "TCMB nezdinde"],
    ["Başlangıç teminatı", "Pozisyon açılırken yatırılması gereken teminat"],
    ["Sürdürme teminatı", "Hesapta korunması gereken asgari teminat; altına inilirse tamamlama çağrısı"],
    ["Temerrüt kaynak sıralaması (ilk adım)", "Önce temerrüde düşen üyenin kendi teminatları kullanılır"],
    ["Valör", "Takasın gerçekleşeceği gün"],
    ["Fiziki teslimat", "Vade sonunda dayanak varlığın gerçekten teslim edilmesi"],
    ["Anapara riski", "Bir tarafın teslim edip karşılığını alamama riski; DVP ile giderilir"]
  ],
  sorular: [
    { s: "Menkul kıymet teslimi ile nakit ödemesinin eş zamanlı yapılmasını sağlayan ilke hangisidir?", c: ["Netleştirme", "Teslim karşılığı ödeme (DVP)", "Brüt takas", "Kaydileştirme"], d: 1, a: "DVP, bir tarafın teslim edip karşılığını alamama (anapara) riskini ortadan kaldırır." },
    { s: "Kaydi sermaye piyasası araçlarını hak sahibi bazında izleyen kuruluş hangisidir?", c: ["Takasbank", "Merkezi Kayıt Kuruluşu", "Borsa İstanbul", "SPK"], d: 1, a: "MKK kaydi araçları yatırımcı bazında izler." },
    { s: "Borsa İstanbul piyasalarında merkezi karşı taraf hizmeti veren kurum hangisidir?", c: ["MKK", "Takasbank", "TCMB", "Yatırımcı Tazmin Merkezi"], d: 1, a: "Takasbank merkezi takas kuruluşu ve merkezi karşı taraftır." },
    { s: "Bir üyenin aynı paydaki 1.000 adet alış ve 700 adet satış yükümlülüğünün mahsup edilip 300 adetlik net alışın takasa gönderilmesine ne denir?", c: ["Brüt takas", "Netleştirme", "Temerrüt", "Repo"], d: 1, a: "Netleştirme." },
    { s: "Merkezi karşı tarafın temerrüt durumunda kullandığı, üyelerin katkılarıyla oluşan fon hangisidir?", c: ["Garanti fonu", "Yatırım fonu", "Emeklilik fonu", "Konut finansmanı fonu"], d: 0, a: "Garanti fonu." },
    { s: "VİOP'ta vade sonunda dayanak varlık yerine fiyat farkının ödenmesine ne denir?", c: ["Fiziki teslimat", "Nakdi uzlaşma", "Brüt takas", "Ödünç"], d: 1, a: "Nakdi uzlaşma." },
    { s: "Teminat olarak kabul edilen kıymetlerin değerine uygulanan iskontoya ne ad verilir?", c: ["Prim", "Değerleme katsayısı (haircut)", "Komisyon", "Baz"], d: 1, a: "Değerleme katsayısı, teminatın değerindeki olası düşüşe karşı tampon sağlar." },
    { s: "Belirli paylarda gözetim tedbiri olarak netleştirme yapılmadan her işlemin ayrı ayrı takasının istenmesi hangisidir?", c: ["Brüt takas", "Netleştirme", "DVP", "Saklama"], d: 0, a: "Brüt takas tedbiri." },
    { s: "Kaydi sistemde yatırımcı hesaplarını açan ve MKK'ya bildiren kuruluşlara ne ad verilir?", c: ["Saklayıcı", "Hesap kuruluşu", "Merkezi karşı taraf", "İhraççı"], d: 1, a: "Aracı kurumlar ve bankalar hesap kuruluşu olarak çalışır." },
    { s: "Kaydi paylar üzerindeki rehin ve haciz gibi kısıtlamalar nerede kayıt altına alınır?", c: ["Ticaret sicili", "MKK", "Tapu", "SPK"], d: 1, a: "Kısıtlamalar MKK kayıtlarına işlenir." },
    { s: "Elektronik ortamda genel kurula katılım ve oy kullanma imkânı sağlayan MKK sistemi hangisidir?", c: ["e-YATIRIMCI", "e-GKS", "TEFAS", "e-Devlet"], d: 1, a: "Elektronik Genel Kurul Sistemi (e-GKS)." },
    { s: "Yatırım fonu portföyündeki varlıkların saklanmasıyla ilgili hangisi doğrudur?", c: ["Kurucu portföy yönetim şirketi saklar", "Kurucudan bağımsız bir portföy saklayıcısında saklanır", "Yatırımcılar kendi hesaplarında saklar", "SPK saklar"], d: 1, a: "III-56.1'e göre fon varlıkları bağımsız saklayıcıda tutulur." },
    { s: "Portföy saklayıcısının görevlerinden biri hangisidir?", c: ["Fonun yatırım kararlarını almak", "Kurucunun işlemlerinin mevzuata ve içtüzüğe uygunluğunu kontrol etmek", "Fon payı satışına aracılık etmek", "Fon fiyatını belirlemek için talep toplamak"], d: 1, a: "Saklayıcı uygunluk kontrolü yapar ve aykırılıkları SPK'ya bildirir." },
    { s: "Devlet iç borçlanma senetlerinin hesapları nerede tutulur?", c: ["MKK", "TCMB", "Borsa İstanbul", "Hazine"], d: 1, a: "DİBS hesapları TCMB nezdinde izlenir." },
    { s: "Repo işleminin takası için hangisi doğrudur?", c: ["Yalnızca dönüş ayağı takas edilir", "Başlangıç ve dönüş ayakları ayrı ayrı takas edilir", "Takas yapılmaz", "Yalnızca nakit takas edilir"], d: 1, a: "Repoda başlangıçta menkul kıymet karşılığı nakit alınır, vadede tersine çevrilir." },
    { s: "Takas yükümlülüğünü yerine getirmeyen üye için ilk olarak hangisi uygulanır?", c: ["Üyelikten kalıcı çıkarma", "Temerrüt faizi ve temerrüt yönetimi işlemleri", "Borsanın kapatılması", "SPK'nın tazminatı"], d: 1, a: "Temerrüt faizi ve cezası uygulanır, Takasbank eksik yükümlülüğü tamamlamak için işlem yapabilir." },
    { s: "Merkezi karşı tarafın temerrüt yönetiminde ilk kullanılan kaynak hangisidir?", c: ["Diğer üyelerin garanti fonu katkıları", "Temerrüde düşen üyenin teminatları", "Takasbank'ın özkaynağı", "Yatırımcı Tazmin Merkezi"], d: 1, a: "Önce temerrüde düşen üyenin kendi teminatları kullanılır." },
    { s: "Teminat hesabındaki tutarın altına inilmesi hâlinde teminat tamamlama çağrısına neden olan seviye hangisidir?", c: ["Başlangıç teminatı", "Sürdürme teminatı", "Garanti fonu", "Uzlaşma fiyatı"], d: 1, a: "Sürdürme teminatının altına inilirse çağrı yapılır." },
    { s: "VİOP'ta birbirini dengeleyen pozisyonların daha az teminat gerektirmesini sağlayan yaklaşım hangisidir?", c: ["Brüt teminat", "Portföy bazlı risk hesaplaması", "Sabit teminat", "Teminatsız işlem"], d: 1, a: "Portföy bazlı yöntem pozisyonların birlikte riskini ölçer." },
    { s: "Vade sonunda dayanak varlığın gerçekten el değiştirdiği uzlaşma şekli hangisidir?", c: ["Nakdi uzlaşma", "Fiziki teslimat", "Netleştirme", "Brüt takas"], d: 1, a: "Fiziki teslimatta dayanak teslim edilir; nakdi uzlaşmada yalnızca fark ödenir." },
    { s: "Bir tarafın yükümlülüğünü yerine getirip karşılığını alamama riskine ne denir?", c: ["Piyasa riski", "Anapara riski", "Likidite riski", "Faiz riski"], d: 1, a: "Anapara riski DVP ile ortadan kaldırılır." },
    { s: "Kaydileştirme ile ilgili hangisi doğrudur?", c: ["Halka açık ortaklık payları fiziki senetle dolaşır", "Haklar elektronik kayıtla izlenir, fiziki senet basılmaz", "Yalnızca devlet tahvilleri kaydidir", "Yatırımcılar kayıtlarını göremez"], d: 1, a: "Kaydi sistemde haklar MKK'da elektronik olarak izlenir; yatırımcı e-YATIRIMCI ile görebilir." },
    { s: "Takasbank'ın merkezi karşı taraf olarak üstlendiği temel risk hangisidir?", c: ["Kur riski", "Karşı taraf riski", "Enflasyon riski", "Politik risk"], d: 1, a: "Merkezi karşı taraf, alıcı ve satıcı arasına girerek karşı taraf riskini üstlenir." },
    { s: "Borçlanma Araçları Piyasası'nda takasın gerçekleşeceği gün nasıl belirlenir?", c: ["Her zaman T+2", "İşlemin valörüne göre", "Her zaman ay sonu", "Yatırımcının talebine göre sonradan"], d: 1, a: "Borçlanma araçlarında takas valör gününde yapılır (aynı gün ya da ileri valör)." },
    { s: "Temerrüt hâlinde merkezi karşı tarafın kaynak sıralamasında son kaynak hangisidir?", c: ["Temerrüde düşen üyenin teminatları", "Temerrüde düşen üyenin garanti fonu katkısı", "Diğer üyelerin garanti fonu katkıları", "Takasbank'ın kalan özkaynağı"], d: 3, a: "Sıralamanın sonunda Takasbank'ın kalan özkaynağı gelir." },
    { s: "Teminat olarak hangi varlıkların kabul edileceği ve değerlerinin nasıl hesaplanacağı için hangisi doğrudur?", c: ["Her varlık tam değeriyle kabul edilir", "Kabul edilen varlıklar değerleme katsayısıyla dikkate alınır", "Yalnızca TL nakit kabul edilir", "Üye kendisi belirler"], d: 1, a: "Takasbank kabul ettiği varlıkları değerleme katsayısı (haircut) uygulayarak hesaba katar." }
  ]
});
