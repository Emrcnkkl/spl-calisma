SPL.ekle("m05", {
  ozet: [
    { b: "Borsa İstanbul ve düzenlemeler", t: [
      "Borsa İstanbul A.Ş., 6362 sayılı Kanun'a göre kurulan ve SPK gözetiminde faaliyet gösteren borsadır; borsacılık faaliyetleri yönetmelikle düzenlenir.",
      "Ana piyasaları: Pay Piyasası, Borçlanma Araçları Piyasası (BAP), Vadeli İşlem ve Opsiyon Piyasası (VİOP), Kıymetli Madenler ve Kıymetli Taşlar Piyasası.",
      "Borsa üyeleri: aracı kurumlar ve (izin verilen piyasalarda) bankalar.",
      "Piyasa gözetimi: borsa ve SPK olağan dışı fiyat ve miktar hareketlerini izler; tedbirler (brüt takas, kredili işlem yasağı, tek fiyat vb.) uygulanabilir."
    ]},
    { b: "Pay Piyasası", t: [
      "Pazarlar: Yıldız Pazar, Ana Pazar, Alt Pazar, Yakın İzleme Pazarı, Piyasa Öncesi İşlem Platformu; ayrıca yapılandırılmış ürün ve fon pazarı, nitelikli yatırımcı işlem pazarı.",
      "İşlem yöntemleri: sürekli müzayede (emirler fiyat ve zaman önceliğine göre eşleşir) ve tek fiyat (açılış ve kapanış seansları, gün içi tek fiyat).",
      "Emir türleri: piyasa emri, limit emir, piyasadan limite emir; geçerlilik süreleri (günlük, iptale kadar vb.).",
      "Fiyat adımı: fiyat seviyesine göre değişen en küçük fiyat değişim birimi. Fiyat marjı: baz fiyata göre günlük fiyat değişim sınırı (genelde ±%10).",
      "Devre kesici: fiyat belirli eşiği aşınca işlemler kısa süre durdurulur.",
      "Pay piyasası takası T+2'de gerçekleşir (işlemden 2 iş günü sonra)."
    ]},
    { b: "Borçlanma Araçları Piyasası", t: [
      "Kesin alım-satım pazarı: DİBS, özel sektör borçlanma araçları, kira sertifikalarının alım satımı.",
      "Repo – ters repo pazarı: geri alım/satım vaadiyle işlemler. Repo yapan menkul kıymeti satıp nakit borçlanır; ters repo yapan nakit verir (borç verir).",
      "Diğer pazarlar: menkul kıymet tercihli repo, nitelikli yatırımcıya ihraç edilen borçlanma araçları pazarı, gelecek valörlü işlemler.",
      "Fiyatlar genellikle 100 nominal üzerinden kote edilir."
    ]},
    { b: "Vadeli İşlem ve Opsiyon Piyasası (VİOP)", t: [
      "Pay, endeks, döviz, kıymetli maden, emtia ve faize dayalı vadeli işlem ve opsiyon sözleşmeleri işlem görür.",
      "Takasbank merkezi karşı taraftır; pozisyonlar günlük uzlaşma fiyatına göre değerlenir (günlük kâr/zarar teminat hesabına yansır).",
      "Başlangıç teminatı, sürdürme teminatı ve teminat tamamlama çağrısı uygulanır.",
      "Vade sonunda nakdi uzlaşma veya fiziki teslimat yapılır (sözleşmeye göre)."
    ]},
    { b: "Tezgahüstü piyasalar ve para piyasaları", t: [
      "Tezgahüstü (OTC) piyasa: işlemlerin borsa dışında, taraflar arasında yapıldığı piyasa; standart olmayan sözleşmeler (forward, swap) burada işlem görür.",
      "TCMB piyasaları: açık piyasa işlemleri (repo/ters repo ihaleleri), bankalararası para piyasası, döviz ve efektif piyasaları; TCMB likiditeyi buralardan yönetir.",
      "Takasbank Para Piyasası (TPP): aracı kurumlar ve bankaların teminat karşılığı borç alıp verdiği piyasa.",
      "Borsa Para Piyasası (BPP), swap piyasası ve ödünç pay piyasası Takasbank bünyesinde işler."
    ]},
    { b: "TEFAS ve BEFAS", t: [
      "TEFAS (Türkiye Elektronik Fon Alım Satım Platformu): yatırımcıların farklı kurucuların yatırım fonlarını tek bir hesaptan alıp satabildiği platform; Takasbank işletir.",
      "BEFAS (Bireysel Emeklilik Fon Alım Satım Platformu): emeklilik şirketlerinin, başka şirketlerin kurucusu olduğu emeklilik fonlarını da sunabildiği platform.",
      "Bu platformlar fon dağıtımını yaygınlaştırarak rekabeti artırır."
    ]}
  ],
  kartlar: [
    ["Borsa İstanbul'un ana piyasaları", "Pay Piyasası, BAP, VİOP, Kıymetli Madenler ve Kıymetli Taşlar Piyasası"],
    ["Sürekli müzayedede eşleşme önceliği", "Önce fiyat, sonra zaman önceliği"],
    ["Fiyat marjı", "Baz fiyata göre günlük fiyat değişim sınırı (genelde ±%10)"],
    ["Pay piyasasında takas günü", "T+2"],
    ["Repo yapan taraf", "Menkul kıymeti satıp nakit borçlanır."],
    ["Ters repo yapan taraf", "Nakit verir (borç verir), menkul kıymeti geçici alır."],
    ["VİOP'ta merkezi karşı taraf", "Takasbank"],
    ["Tezgahüstü piyasa", "Borsa dışında, taraflar arasında yapılan işlemler; standart olmayan sözleşmeler"],
    ["TEFAS", "Farklı kurucuların fonlarını tek hesaptan alıp satma platformu; Takasbank işletir."],
    ["BEFAS", "Bireysel emeklilik fonlarının şirketler arası dağıtım platformu"],
    ["TPP", "Takasbank Para Piyasası: teminat karşılığı borç alma-verme"],
    ["Yakın İzleme Pazarı", "Olağan dışı durumları nedeniyle yakın izlemeye alınan şirketlerin payları"]
  ],
  sorular: [
    { s: "Borsa İstanbul Pay Piyasası'nda sürekli müzayede yönteminde emirler hangi önceliğe göre eşleşir?", c: ["Önce zaman, sonra fiyat", "Önce fiyat, sonra zaman", "Önce miktar, sonra fiyat", "Rastgele"], d: 1, a: "Fiyat önceliği, ardından zaman önceliği uygulanır." },
    { s: "Pay piyasasında bugün yapılan bir işlemin takası ne zaman gerçekleşir?", c: ["Aynı gün (T+0)", "T+1", "T+2", "T+3"], d: 2, a: "Pay piyasasında takas T+2'dir." },
    { s: "Elindeki tahvili geri alma vaadiyle satarak kısa süreli nakit borçlanan taraf hangi işlemi yapmıştır?", c: ["Ters repo", "Repo", "Kesin alım", "Açığa satış"], d: 1, a: "Repo yapan menkul kıymeti satıp nakit borçlanır." },
    { s: "VİOP'ta işlemlerin merkezi karşı tarafı hangi kurumdur?", c: ["Borsa İstanbul", "Merkezi Kayıt Kuruluşu", "Takasbank", "TCMB"], d: 2, a: "Takasbank merkezi karşı taraf olarak hizmet verir." },
    { s: "Yatırımcının farklı portföy yönetim şirketlerinin fonlarını tek hesaptan alıp satabildiği platform hangisidir?", c: ["BEFAS", "TEFAS", "KAP", "TPP"], d: 1, a: "TEFAS (Türkiye Elektronik Fon Alım Satım Platformu)." },
    { s: "Standart olmayan forward ve swap sözleşmeleri genellikle nerede işlem görür?", c: ["VİOP", "Tezgahüstü piyasada", "Pay Piyasası'nda", "TEFAS'ta"], d: 1, a: "Standart olmayan sözleşmeler taraflar arasında tezgahüstü piyasada yapılır." },
    { s: "Açılış ve kapanış seanslarında uygulanan işlem yöntemi hangisidir?", c: ["Sürekli müzayede", "Tek fiyat yöntemi", "Piyasa yapıcılı sistem", "Talep toplama"], d: 1, a: "Açılış ve kapanışta tek fiyat yöntemi kullanılır." },
    { s: "TCMB'nin bankacılık sistemine likidite verip çekmek için yaptığı repo ve ters repo ihaleleri hangi kapsamda yer alır?", c: ["Açık piyasa işlemleri", "Maliye politikası", "Halka arz", "Kitle fonlaması"], d: 0, a: "Açık piyasa işlemleri TCMB'nin likidite yönetim aracıdır." }
  ]
});
