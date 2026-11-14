// Konu anlatımı — Modül 4: Yatırım Kuruluşları (blok biçimi için veri/ders/m01.js'e bak)
SPL.anlat("m04", {
  giris: "Yatırım kuruluşları (aracı kurumlar ve yatırım hizmeti veren bankalar) yatırımcı ile piyasa arasındaki köprüdür. Bu modülde hangi hizmetleri verebildiklerini, nasıl kurulduklarını, müşteriye karşı yükümlülüklerini ve kredili işlem, açığa satış, kitle fonlaması gibi özel işlemleri öğreneceğiz.",
  dersler: [
    { k: "4.1", t: "Yatırım hizmetleri, faaliyetleri ve yan hizmetler (III-37.1)", dk: 16, b: [
      { h: "Yatırım hizmet ve faaliyetleri" },
      { t: [["Hizmet", "Ne yapılır?"],
        ["Emir iletimine aracılık", "Müşteri emrini alıp işlemi gerçekleştirecek başka bir kuruluşa iletmek"],
        ["İşlem aracılığı", "Müşteri adına ve hesabına alım satım yapmak"],
        ["Portföy aracılığı", "Kurumun kendi hesabına alım satım yapması (müşterinin karşı tarafı olabilir)"],
        ["Bireysel portföy yöneticiliği", "Müşterinin verdiği yetkiyle, müşteri adına portföy yönetmek"],
        ["Yatırım danışmanlığı", "Müşteriye kişiye özel yatırım tavsiyesi vermek"],
        ["Halka arza aracılık", "Yüklenimli (satılmayanı alma taahhüdü) ya da en iyi gayret (taahhütsüz) yöntemiyle satış"],
        ["Çok taraflı alım satım sistemi", "Alıcı ve satıcı emirlerini bir sistemde buluşturmak"]]},
      { h: "Yan hizmetler" },
      { p: "Yatırım hizmetlerini destekleyen işlerdir: **saklama hizmeti**, **kredili işlem**, **ödünç alma ve verme**, yatırım araştırmaları ve finansal analiz gibi." },
      { d: "İşlem aracılığı **müşteri hesabına**, portföy aracılığı **kurumun kendi hesabına** yapılır. Saklama bir yatırım hizmeti değil, **yan hizmettir**." },
      { h: "Müşteri sınıflandırması" },
      { p: "Yatırım kuruluşları müşterilerini **genel** ve **profesyonel** olarak ayırır. Profesyonel müşteriler (bankalar, kurumsal yatırımcılar, belirli büyüklükteki kişiler) daha az korumadan yararlanır. Genel müşteriler en yüksek korumayı alır; profesyonel müşteri isterse genel müşteri muamelesi görebilir." },
      { h: "Uygunluk ve yerindelik testleri" },
      { t: [["Test", "Ne zaman?", "Neyi ölçer?"],
        ["Uygunluk testi", "Karmaşık ürünlerde işlem aracılığı", "Müşterinin ürünü anlayacak bilgi ve tecrübesi"],
        ["Yerindelik testi", "Portföy yöneticiliği ve yatırım danışmanlığı", "Mali durum, yatırım amaçları, risk tercihi, bilgi ve tecrübe"]]},
      { o: "VİOP'ta işlem yapmak isteyen bir müşteriye uygunluk testi yapılır; test sonucu ürünün ona uygun olmadığını gösterirse kurum müşteriyi uyarır. Müşteri yine de isterse bu uyarı kayıt altına alınır." },
      { h: "Çıkar çatışması ve en iyi gerçekleştirme" },
      { l: [
        "Kurum, müşteri emirlerini **fiyat, maliyet, hız ve gerçekleşme olasılığı** gibi unsurları gözeterek en iyi sonuçla gerçekleştirmelidir.",
        "Emirler alınış sırasına göre işlenir; müşteri emrinin önüne geçip kendi hesabına işlem yapmak yasaktır.",
        "Araştırma ve kurumsal finansman gibi birimler arasında **bilgi duvarları (Çin seddi)** kurulur."
      ]}
    ], ak: [
      "İşlem aracılığı = müşteri hesabına; portföy aracılığı = kendi hesabına.",
      "Saklama, kredi ve ödünç yan hizmettir.",
      "Uygunluk → bilgi/tecrübe; yerindelik → mali durum + amaçlar (portföy yönetimi, danışmanlık).",
      "Genel müşteri en yüksek korumayı alır."
    ]},

    { k: "4.2", t: "Yatırım kuruluşlarının kuruluş ve faaliyet esasları (III-39.1)", dk: 12, b: [
      { p: "Yatırım kuruluşu; **aracı kurumlar** ve yatırım hizmeti sunan **bankalardır**. Aracı kurumlar anonim şirket olarak kurulur, SPK'dan **kuruluş izni** ve faaliyet göstereceği her hizmet için **faaliyet izni** alır." },
      { h: "Kuruluş şartları (genel çerçeve)" },
      { l: [
        "Anonim şirket olmak ve payların tamamının nama yazılı olması.",
        "Kurucuların mali güç, dürüstlük ve itibar şartlarını taşıması.",
        "Asgari özsermaye şartını sağlamak (tutarlar SPK tarafından güncellenir; güncel tutarı kontrol et).",
        "Yeterli personel, teknik donanım, iç kontrol, risk yönetimi ve teftiş sistemlerine sahip olmak."
      ]},
      { h: "Aracı kurum türleri" },
      { t: [["Tür", "Genel olarak"],
        ["Dar yetkili", "Emir iletimi ve işlem aracılığı gibi sınırlı hizmetler; müşteri varlıklarını kendisi saklamaz"],
        ["Kısmi yetkili", "Daha geniş hizmetler; en iyi gayret aracılığıyla halka arz, saklama"],
        ["Geniş yetkili", "Kısmi yetkilinin yapabildiklerine ek olarak yüklenimli halka arz aracılığı"]]},
      { d: "**Yüklenimli halka arz aracılığı** yalnızca geniş yetkili aracı kurumlarca (ve yetkili bankalarca) yapılabilir; çünkü satılamayan payları satın alma riski yüksek sermaye gerektirir." },
      { h: "Faaliyet esasları" },
      { l: [
        "Müşteri varlıkları kurumun kendi varlıklarından **ayrı** izlenir; kurumun alacaklıları bu varlıklara başvuramaz.",
        "Kurum, sermaye yeterliliğini sürekli korur ve SPK'ya raporlar.",
        "Şube, irtibat bürosu ve acenteler aracılığıyla hizmet verilebilir.",
        "Belirli görevlerde çalışacak personelin SPL lisansı olması gerekir."
      ]}
    ], ak: [
      "Yatırım kuruluşu = aracı kurum + yatırım hizmeti veren banka.",
      "Kuruluş izni + her hizmet için faaliyet izni.",
      "Dar / kısmi / geniş yetkili; yüklenimli halka arz → geniş yetkili.",
      "Müşteri varlıkları kurumunkinden ayrıdır."
    ]},

    { k: "4.3", t: "Belge ve kayıt düzeni (III-45.1)", dk: 10, b: [
      { p: "Kayıt düzeni, yaşanabilecek bir anlaşmazlıkta neyin ne zaman yapıldığının kanıtlanabilmesi için vardır. Yatırımcıyı ve kurumu birlikte korur." },
      { h: "Müşteriyle ilişkinin başlangıcı" },
      { l: [
        "**Kimlik tespiti** ve müşteri bilgilerinin alınması.",
        "**Çerçeve sözleşme:** hizmetin şartlarını, ücretleri, tarafların hak ve yükümlülüklerini içeren temel sözleşme.",
        "**Risk bildirim formu:** işlemlerin risklerini anlatan, müşterinin okuyup imzaladığı belge.",
        "Gerekli hâllerde uygunluk ya da yerindelik testi."
      ]},
      { h: "Emir ve işlem kayıtları" },
      { l: [
        "Her emir alındığı anda **zaman damgasıyla** kaydedilir: müşteri, araç, miktar, fiyat, emir türü, geçerlilik süresi.",
        "Telefonla alınan emirler için **ses kaydı** tutulur.",
        "Gerçekleşen işlemler için müşteriye işlem sonuç bildirimi gönderilir; düzenli aralıklarla **hesap ekstresi** iletilir.",
        "Kayıtlar mevzuatta öngörülen süre boyunca saklanır ve SPK denetiminde ibraz edilir."
      ]},
      { o: "Müşteri, telefonda 1.000 adet hisse alımı için emir verdiğini, ama hesabına 10.000 adet alındığını söylüyor. Kurum, o saatteki ses kaydı ve zaman damgalı emir kaydıyla hangi emrin verildiğini kanıtlayabilir." }
    ], ak: [
      "Çerçeve sözleşme + risk bildirim formu işlemden önce.",
      "Emirler zaman damgalı; telefon emirleri ses kayıtlı.",
      "Müşteriye işlem bildirimi ve hesap ekstresi gönderilir."
    ]},

    { k: "4.4", t: "Kredili işlem, açığa satış, ödünç alma ve verme (Seri V, No: 65)", dk: 15, b: [
      { h: "Kredili işlem" },
      { p: "Yatırımcının aracı kurumdan kredi kullanarak menkul kıymet almasıdır. Böylece kendi parasından daha büyük pozisyon açar (kaldıraç). Alınan menkul kıymetler krediye **teminat** olur." },
      { t: [["Kavram", "Tanım"],
        ["Özkaynak", "Kredili hesaptaki varlıkların değeri − kredi borcu"],
        ["Özkaynak oranı", "Özkaynak / varlıkların değeri"],
        ["Başlangıç özkaynak oranı", "İşleme başlarken sağlanması gereken asgari oran"],
        ["Sürdürme özkaynak oranı", "Hesapta korunması gereken asgari oran; altına inilirse teminat tamamlama çağrısı"]]},
      { o: "Yatırımcının 50.000 TL'si var, aracı kurum 50.000 TL kredi veriyor ve 100.000 TL'lik pay alınıyor. Özkaynak oranı = 50.000 / 100.000 = %50. Paylar 70.000 TL'ye düşerse özkaynak 70.000 − 50.000 = 20.000 TL, oran 20.000 / 70.000 ≈ %28,6 olur. Sürdürme oranı bunun üzerindeyse yatırımcıdan teminat tamamlaması istenir; yapılmazsa paylar satılarak kredi kapatılır." },
      { d: "Oranları ezberlemekten çok formülü öğren: özkaynak = varlık − borç; oran = özkaynak / varlık. Sınavda oranlar genellikle soruda verilir." },
      { h: "Açığa satış" },
      { p: "Yatırımcının sahip olmadığı bir payı satmasıdır. Satılan pay **ödünç alınarak** teslim edilir; yatırımcı fiyat düşünce payı ucuza geri alıp ödünç verene iade eder. Beklentisi **fiyat düşüşüdür**." },
      { l: [
        "Fiyat yükselirse zarar edilir; teorik olarak zarar sınırsızdır.",
        "Açığa satış emirleri sistemde ayrıca işaretlenir.",
        "SPK ve Borsa, piyasa koşullarına göre bazı paylarda açığa satışı ve kredili işlemi sınırlayabilir ya da yasaklayabilir."
      ]},
      { h: "Ödünç alma ve verme" },
      { p: "Elinde pay bulunan yatırımcılar, bunları bir ücret karşılığında ödünç verebilir. Ödünç işlemleri organize olarak Takasbank'ın merkezi karşı taraf olduğu **Ödünç Pay Piyasası**'nda yapılır; ödünç alan teminat yatırır." }
    ], ak: [
      "Özkaynak = varlık − kredi; oran = özkaynak / varlık.",
      "Sürdürme oranının altında → teminat tamamlama çağrısı; yapılmazsa resen satış.",
      "Açığa satış = ödünç payla satış; beklenti düşüş; zarar sınırsız.",
      "Ödünç Pay Piyasası'nı Takasbank işletir."
    ]},

    { k: "4.5", t: "Kitle fonlaması (III-35/A.2)", dk: 9, b: [
      { p: "Kitle fonlaması, girişimlerin ya da şirketlerin projeleri için **çok sayıda yatırımcıdan küçük tutarlarda** para toplamasıdır. SPK'dan izin almış **kitle fonlaması platformları** üzerinden yapılır." },
      { t: [["Tür", "Yatırımcı ne alır?"],
        ["Paya dayalı kitle fonlaması", "Girişim şirketinin payı; yatırımcı ortak olur"],
        ["Borca dayalı kitle fonlaması", "Borçlanma aracı; yatırımcı alacaklı olur ve faiz/anapara alır"]]},
      { h: "Kampanya süreci" },
      { n: [
        "Girişim, platforma başvurur; platform girişimi inceler.",
        "Belirli süreli bir **kampanya** başlatılır ve hedeflenen fon tutarı açıklanır.",
        "Yatırımcıların ödemeleri kampanya bitene kadar **bloke** tutulur.",
        "Hedefe ulaşılırsa fon girişime aktarılır; ulaşılamazsa para yatırımcılara **iade edilir**."
      ]},
      { d: "Nitelikli olmayan yatırımcıların kitle fonlamasına yatırabileceği tutarlar sınırlıdır; bu sınırlar güncellendiği için güncel tutarı kontrol et. Kitle fonlaması yüksek risklidir: girişimlerin önemli kısmı başarısız olabilir ve paylar kolay satılamaz." }
    ], ak: [
      "Platformlar SPK izniyle çalışır.",
      "Paya dayalı → ortaklık; borca dayalı → alacak.",
      "Hedefe ulaşmayan kampanyada para iade edilir."
    ]},

    { k: "4.6", t: "Uzaktan kimlik tespiti ve elektronik sözleşme (III-42.1)", dk: 7, b: [
      { p: "Bu tebliğ, aracı kurumların ve portföy yönetim şirketlerinin müşterileri **şubeye gelmeden**, uzaktan kimlik tespitiyle edinmesine ve sözleşmeleri elektronik ortamda kurmasına izin verir." },
      { h: "Süreç nasıl işler?" },
      { l: [
        "Müşteri temsilcisiyle **görüntülü görüşme** yapılır; görüşme kaydedilir.",
        "Kimlik kartı güvenlik unsurlarıyla ve mümkünse **çipli kimliğin elektronik doğrulamasıyla** kontrol edilir.",
        "Müşterinin gerçekten o kişi olduğu ve canlı olduğu teyit edilir.",
        "Çerçeve sözleşme ve diğer belgeler elektronik ortamda onaylanır; kayıtlar saklanır."
      ]},
      { d: "Uzaktan kimlik tespiti, suç gelirlerinin aklanmasının önlenmesine ilişkin yükümlülükleri ortadan kaldırmaz; kurum müşteriyi tanıma kurallarına uymaya devam eder." }
    ], ak: [
      "Şubeye gelmeden, görüntülü görüşme ve kimlik doğrulamasıyla müşteri edinimi.",
      "Sözleşmeler elektronik ortamda kurulabilir; kayıtlar saklanır."
    ]}
  ]
});
