// Konu anlatımı — Modül 6: Takas, Saklama ve Operasyon (blok biçimi için veri/ders/m01.js'e bak)
SPL.anlat("m06", {
  giris: "Borsada bir hisse aldığında işlem eşleşir, ama para ve hisse hemen el değiştirmez. Bu modül, eşleşmeden sonra olanları anlatır: takas, saklama, kaydi sistem, merkezi karşı taraf ve teminat yönetimi. Konuyu tek bir işlemin yolculuğu gibi düşünmek ezberi kolaylaştırır.",
  dersler: [
    { k: "6.1", t: "Takas, saklama ve operasyonun temel kavramları", dk: 12, b: [
      { p: "Bir alım satım işlemi iki aşamalıdır: **işlemin gerçekleşmesi** (emirlerin eşleşmesi) ve **takas** (tarafların yükümlülüklerini yerine getirmesi: alıcı parayı, satıcı menkul kıymeti teslim eder)." },
      { t: [["Kavram", "Anlamı"],
        ["Takas", "Nakit ve menkul kıymet yükümlülüklerinin karşılıklı yerine getirilmesi"],
        ["Saklama", "Varlıkların hak sahipleri adına korunması ve haklarının (kâr payı, bedelsiz, kupon) kullandırılması"],
        ["Teslim karşılığı ödeme (DVP)", "Menkul kıymet ve nakdin eş zamanlı el değiştirmesi"],
        ["Netleştirme", "Aynı üyenin alış ve satış yükümlülüklerinin mahsup edilmesi"],
        ["Valör", "Takasın yapılacağı gün"],
        ["Merkezi karşı taraf (MKT)", "Alıcıya karşı satıcı, satıcıya karşı alıcı olan kuruluş"]]},
      { h: "Takasta karşılaşılan riskler" },
      { l: [
        "**Anapara riski:** bir tarafın teslim edip karşılığını alamaması. DVP ile ortadan kalkar.",
        "**Yerine koyma maliyeti riski:** karşı taraf temerrüde düşerse işlemi piyasadan daha kötü fiyatla yenilemek zorunda kalmak.",
        "**Likidite riski:** yükümlülüğün zamanında değil, gecikmeli yerine getirilmesi.",
        "**Operasyonel risk:** sistem, insan ya da süreç hataları.",
        "**Sistemik risk:** bir üyenin temerrüdünün zincirleme olarak diğerlerini etkilemesi."
      ]},
      { o: "Bir üye aynı gün aynı hisseden 1.000 adet alıp 700 adet satmışsa, netleştirmeyle yalnızca 300 adetlik net alış takasa gönderilir. Bu, hem nakit hem kıymet ihtiyacını azaltır." }
    ], ak: [
      "İşlem (eşleşme) ≠ takas (teslim ve ödeme).",
      "DVP anapara riskini kaldırır.",
      "Netleştirme yükümlülükleri azaltır.",
      "MKT karşı taraf riskini üstlenir."
    ]},

    { k: "6.2", t: "Merkezi Kayıt Kuruluşu ve kaydileştirme", dk: 12, kap: ["6.2", "6.2.1", "6.2.2"], b: [
      { p: "**Kaydileştirme**, menkul kıymetlerin fiziki senet yerine elektronik kayıtla izlenmesidir. Halka açık şirketlerin payları kaydidir; yatırımcının hakları **Merkezi Kayıt Kuruluşu (MKK)** sisteminde **hak sahibi bazında** tutulur." },
      { h: "Sistemin yapısı" },
      { l: [
        "**Hesap kuruluşları:** yatırımcı hesaplarını açan aracı kurumlar ve bankalar. Yatırımcı varlıklarını hesap kuruluşu aracılığıyla MKK'da izletir.",
        "Her yatırımcının bir **sicil numarası** ve hesap kuruluşları nezdinde **hesap numaraları** vardır.",
        "Rehin, bloke, haciz gibi kısıtlamalar da MKK kayıtlarına işlenir.",
        "Payların devri, takasla birlikte kayıtlarda gerçekleşir; fiziki teslim yoktur."
      ]},
      { h: "MKK'nın yatırımcıya dönük hizmetleri" },
      { t: [["Hizmet", "İşlevi"],
        ["e-YATIRIMCI", "Yatırımcının tüm hesap kuruluşlarındaki varlıklarını görmesi"],
        ["e-GKS", "Elektronik genel kurul: uzaktan katılma ve oy kullanma"],
        ["KAP altyapısı", "Kamuyu aydınlatma bildirimlerinin yayınlanması"],
        ["e-YÖNET", "Kurumsal yönetim ve yatırımcı ilişkileri bilgileri"]]},
      { o: "Bir yatırımcının iki farklı aracı kurumda hesabı var. e-YATIRIMCI ile her iki kurumdaki paylarını tek ekranda görebilir; bir kurum yanlış bakiye gösterirse MKK kaydıyla karşılaştırabilir." },
      { d: "MKK hak sahiplerini **yatırımcı bazında** izler; Takasbank ise takas ve merkezi karşı taraf işlevini görür. İkisini karıştırma: kıymet kaydı MKK, nakit takası ve MKT Takasbank." }
    ], ak: [
      "Kaydi sistem: haklar MKK'da hak sahibi bazında.",
      "Hesap kuruluşu = aracı kurum ya da banka.",
      "e-YATIRIMCI, e-GKS, KAP altyapısı.",
      "Rehin ve haciz de MKK'da kayıtlı."
    ]},

    { k: "6.2.3", t: "Takasbank: merkezi takas ve merkezi karşı taraf", dk: 12, kap: ["6.2.3", "6.2.4", "6.2.5"], b: [
      { p: "İstanbul Takas ve Saklama Bankası (**Takasbank**), Borsa İstanbul piyasalarının **merkezi takas kuruluşu** ve **merkezi karşı tarafıdır**." },
      { h: "Merkezi takas ile merkezi karşı taraf arasındaki fark" },
      { t: [["", "Merkezi takas", "Merkezi karşı taraf (MKT)"],
        ["Rolü", "Yükümlülükleri hesaplar, netleştirir, takası yürütür", "İşlemin tarafı olur: alıcıya satıcı, satıcıya alıcı"],
        ["Karşı taraf riski", "Taraflarda kalır", "MKT üstlenir"],
        ["Risk yönetimi", "Takasın düzenli işlemesi", "Teminat, garanti fonu, temerrüt yönetimi"]]},
      { h: "MKT'nin risk yönetim araçları" },
      { l: [
        "**Üye kabul kriterleri:** yalnızca mali açıdan güçlü kuruluşlar üye olabilir.",
        "**Teminatlar:** üyeler pozisyonlarının riskine göre teminat yatırır.",
        "**Garanti fonu:** üyelerin katkılarıyla oluşan, temerrüt hâlinde kullanılan ortak fon.",
        "**Temerrüt yönetimi:** temerrüde düşen üyenin pozisyonları kapatılır, eksik yükümlülükler piyasadan tamamlanır."
      ]},
      { h: "Temerrüt hâlinde kaynak sıralaması" },
      { n: [
        "Temerrüde düşen üyenin teminatları",
        "Temerrüde düşen üyenin garanti fonu katkısı",
        "Takasbank'ın bu amaçla ayırdığı özkaynak",
        "Diğer üyelerin garanti fonu katkıları",
        "Takasbank'ın kalan özkaynağı"
      ]},
      { d: "Sıralamanın mantığı: önce **kusurlu olan öder**, sonra Takasbank kendi kaynağını koyar (teşvik uyumu için), en son diğer üyeler ve kalan sermaye devreye girer." }
    ], ak: [
      "Takasbank = merkezi takas + MKT.",
      "MKT karşı taraf riskini üstlenir.",
      "Araçlar: üye kriterleri, teminat, garanti fonu, temerrüt yönetimi.",
      "Kaynak sıralaması temerrüde düşen üyenin teminatıyla başlar."
    ]},

    { k: "6.2.6", t: "Portföy saklama hizmeti (III-56.1)", dk: 8, b: [
      { p: "Yatırım fonlarının ve yatırım ortaklıklarının portföyündeki varlıklar, portföyü yöneten kurucudan **bağımsız** bir **portföy saklayıcısında** tutulur. Saklayıcı Takasbank ya da SPK'nın uygun gördüğü bankalar olabilir." },
      { h: "Saklayıcının görevleri" },
      { l: [
        "Varlıkları fon bazında ayrı hesaplarda saklamak ve izlemek.",
        "Kurucunun portföy işlemlerinin mevzuata ve fon içtüzüğüne **uygunluğunu kontrol etmek**.",
        "Aykırılıkları SPK'ya bildirmek.",
        "Kâr payı, kupon gibi hakların fona ödenmesini sağlamak."
      ]},
      { o: "Bir hisse senedi fonunun kurucusu, içtüzükte yasak olmasına rağmen fon parasını grup şirketine borç olarak aktarmak istiyor. Saklayıcı bu talimatı mevzuata aykırı bulur, işlemi yapmaz ve SPK'ya bildirir." },
      { d: "Saklama hizmetinin amacı, fon varlıklarının kurucunun kendi varlıklarıyla karışmasını ve kötüye kullanılmasını önlemektir." }
    ], ak: [
      "Fon varlıkları kurucudan bağımsız saklayıcıda.",
      "Saklayıcı uygunluk kontrolü yapar, aykırılığı SPK'ya bildirir."
    ]},

    { k: "6.3", t: "Borsa İstanbul'da payların transfer, takas ve temerrüt işlemleri", dk: 12, b: [
      { p: "Pay Piyasası'nda bugün (T günü) yapılan işlemin takası **iki iş günü sonra (T+2)** gerçekleşir. Takas günü alıcının hesabına paylar, satıcının hesabına para geçer." },
      { h: "Bir hisse alımının yolculuğu" },
      { n: [
        "Yatırımcı aracı kuruma emir verir; emir borsada eşleşir (T günü).",
        "Takasbank, üyeler bazında net nakit ve kıymet yükümlülüklerini hesaplar.",
        "T+2 günü üyeler yükümlülüklerini yerine getirir: nakit Takasbank'ta, paylar MKK'da el değiştirir.",
        "Aracı kurum payları yatırımcının alt hesabına aktarır."
      ]},
      { h: "Temerrüt" },
      { l: [
        "Yükümlülüğünü zamanında yerine getirmeyen üye **temerrüde** düşer; temerrüt faizi ve cezası uygulanır.",
        "Takasbank, eksik payı ödünç alarak ya da piyasadan alarak takası tamamlayabilir; maliyet temerrüde düşen üyeye yansıtılır.",
        "Temerrüdün devamı hâlinde üyenin teminatları ve garanti fonu katkısı kullanılır."
      ]},
      { h: "Brüt takas" },
      { p: "Normalde netleştirme yapılır. Ancak olağan dışı fiyat ve miktar hareketleri görülen paylarda Borsa, **gözetim tedbiri** olarak **brüt takas** uygulayabilir: her işlem netleştirme yapılmadan ayrı ayrı takas edilir. Böylece gün içi al-sat yapılarak yapay hacim yaratılması zorlaşır." },
      { o: "Pazartesi alınan payların takası çarşamba günü yapılır. Arada resmî tatil varsa takas günü bir sonraki iş gününe kayar." }
    ], ak: [
      "Pay piyasasında takas T+2.",
      "Nakit Takasbank'ta, pay MKK'da el değiştirir.",
      "Temerrüt: faiz + ceza, Takasbank eksik payı tamamlar.",
      "Brüt takas bir gözetim tedbiridir; netleştirme yapılmaz."
    ]},

    { k: "6.4", t: "Borçlanma araçlarının transfer, takas ve temerrüt işlemleri", dk: 9, b: [
      { p: "Borsa İstanbul Borçlanma Araçları Piyasası'nda işlemler **valör gününe** göre takas edilir: aynı gün valörlü işlemler aynı gün, ileri valörlü işlemler belirlenen gün." },
      { h: "Kesin alım satım ve repo" },
      { l: [
        "**Kesin alım satım:** tahvil ya da bonunun sahipliği kesin olarak el değiştirir.",
        "**Repo:** menkul kıymet geri alma vaadiyle satılır; başlangıçta kıymet karşılığı nakit alınır, vadede tersine çevrilir. Repo işlemlerinde **başlangıç ve dönüş ayakları ayrı ayrı takas edilir**."
      ]},
      { h: "Kayıtlar nerede tutulur?" },
      { t: [["Araç", "Hesapların tutulduğu yer"],
        ["Devlet iç borçlanma senetleri (DİBS)", "TCMB"],
        ["Özel sektör borçlanma araçları", "MKK"]]},
      { d: "Pay piyasasındaki T+2 kuralını borçlanma araçlarına uygulama: burada belirleyici olan **işlemin valörüdür**." }
    ], ak: [
      "Borçlanma araçlarında takas valör gününde.",
      "Repoda iki ayak ayrı takas edilir.",
      "DİBS TCMB'de, özel sektör tahvilleri MKK'da izlenir."
    ]},

    { k: "6.5", t: "Türev araçlarda takas, uzlaşma ve teminat yönetimi", dk: 14, kap: ["6.5", "6.6"], b: [
      { p: "VİOP'ta açılan vadeli ve opsiyon pozisyonlarının takasını ve merkezi karşı taraf hizmetini Takasbank yürütür. Türev işlemlerde vade boyunca **günlük kâr/zarar** hesaplanır ve teminat hesaplarına yansıtılır." },
      { h: "Günlük uzlaşma" },
      { p: "Her gün sonunda pozisyonlar **günlük uzlaşma fiyatıyla** değerlenir. Fiyat lehine hareket eden tarafın teminat hesabına kâr eklenir, aleyhine hareket edenin hesabından zarar düşülür." },
      { o: "Yatırımcı 1 adet endeks vadeli sözleşmesini 10.000 puandan alıyor (çarpan 10 TL). Gün sonunda uzlaşma fiyatı 10.050 olursa hesabına 50 × 10 = 500 TL eklenir; 9.980 olursa 20 × 10 = 200 TL düşülür." },
      { h: "Teminat türleri" },
      { t: [["Kavram", "Anlamı"],
        ["Başlangıç teminatı", "Pozisyon açılırken yatırılması gereken teminat"],
        ["Sürdürme teminatı", "Hesapta korunması gereken asgari teminat"],
        ["Teminat tamamlama çağrısı", "Teminat sürdürme seviyesinin altına inince başlangıç seviyesine tamamlama istenmesi"],
        ["Değerleme katsayısı (haircut)", "Nakit dışı teminatların değerine uygulanan iskonto"]]},
      { l: [
        "Teminat olarak TL ve döviz nakit, devlet tahvili, pay gibi kıymetler değerleme katsayısıyla kabul edilir.",
        "Teminat tamamlama çağrısına süresinde uyulmazsa pozisyonlar **resen kapatılabilir**.",
        "Teminatlar portföy bazlı risk hesabıyla belirlenir; birbirini dengeleyen pozisyonlar daha az teminat gerektirir."
      ]},
      { h: "Vade sonunda uzlaşma" },
      { t: [["Yöntem", "Ne olur?", "Örnek"],
        ["Nakdi uzlaşma", "Dayanak teslim edilmez, yalnızca fiyat farkı ödenir", "Endeks vadeli"],
        ["Fiziki teslimat", "Dayanak varlık gerçekten teslim edilir", "Pay vadeli sözleşmeleri"]]},
      { d: "Sürdürme teminatının altına düşülünce çağrı **başlangıç teminatı seviyesine** tamamlamak içindir; yalnızca sürdürme seviyesine dönmek yetmez." }
    ], ak: [
      "VİOP'ta günlük uzlaşma fiyatıyla her gün kâr/zarar hesaplanır.",
      "Başlangıç teminatı → sürdürme teminatı → çağrı → resen kapatma.",
      "Nakit dışı teminatlara değerleme katsayısı uygulanır.",
      "Nakdi uzlaşma (endeks) / fiziki teslimat (pay vadeli)."
    ]}
  ]
});
