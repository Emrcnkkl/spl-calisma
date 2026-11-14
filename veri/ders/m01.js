// Konu anlatımı — Modül 1: Sermaye Piyasası Mevzuatı ve Meslek Kuralları
// Bloklar: {h} ara başlık · {p} paragraf · {l} madde listesi · {n} numaralı liste · {d} dikkat kutusu · {o} örnek kutusu · {t} tablo (ilk satır başlık)
// **kalın** yazım desteklenir. kap: dersin işaretleyeceği SPL alt başlıkları.
SPL.anlat("m01", {
  giris: "Bu modül sermaye piyasasının kurallarını anlatır: kim, neyi, hangi şartlarla yapabilir ve kurallara uyulmazsa ne olur. Önce Kanun'un genel yapısını, sonra halka açık şirketlerin yükümlülüklerini, fonları ve son olarak meslek etiğini göreceğiz. Mevzuat sık değiştiği için sınavdan önce SPL'nin mevzuat kesim tarihindeki metinleri kontrol et.",
  dersler: [
    { k: "1.1", t: "Sermaye Piyasası Kanunu (6362)", dk: 15, kap: ["1.1"], b: [
      { p: "6362 sayılı Sermaye Piyasası Kanunu (SPKn) 2012'de yürürlüğe girdi ve sermaye piyasasının anayasası gibidir. Amacı, piyasanın **güvenilir, şeffaf, etkin, istikrarlı, adil ve rekabetçi** bir ortamda işlemesini sağlamak ve **yatırımcıların hak ve yararlarını korumaktır**." },
      { h: "Temel kavramlar" },
      { l: [
        "**Sermaye piyasası aracı:** menkul kıymetler (pay, borçlanma aracı vb.), türev araçlar ve yatırım sözleşmeleri.",
        "**İhraççı:** sermaye piyasası aracı ihraç eden, ihraç için başvuran ya da araçları borsada işlem gören tüzel kişi.",
        "**Halka arz:** sermaye piyasası araçlarının satın alınması için genel bir çağrıda bulunulması. Halka arz edilmeyen satışlar tahsisli ya da nitelikli yatırımcıya satış yoluyla olur.",
        "**Halka açık ortaklık:** payları halka arz edilmiş ya da halka arz edilmiş sayılan anonim şirket. **Pay sahibi sayısı 500'ü aşan** anonim şirketler halka arz edilmiş sayılır.",
        "**Nitelikli yatırımcı:** belirli büyüklükte varlığa ya da profesyonel bilgiye sahip yatırımcı; bazı ürünler yalnızca bunlara satılabilir."
      ]},
      { h: "İzahname ve sorumluluk" },
      { p: "Halka arzda SPK'nın onayladığı bir **izahname** yayımlanır; halka arz edilmeyen satışlarda ise **ihraç belgesi** onaylanır. İzahname, yatırımcının karar vermesi için gereken bilgileri içerir." },
      { p: "İzahnamedeki yanlış, yanıltıcı ya da eksik bilgilerden doğan zarardan **önce ihraççı** sorumludur. İhraççıdan karşılanamayan zarardan; halka arz eden, halka arza aracılık eden kurum, varsa garantör ve ihraççının yönetim kurulu üyeleri kusurlarına ve durumun gereklerine göre sorumlu tutulur." },
      { d: "İzahname sorumluluğunda sıralamayı karıştırma: ilk muhatap her zaman ihraççıdır; diğerleri ihraççıdan tazmin edilemeyen kısım için ve kusurlarına göre sorumludur." },
      { h: "Sermaye Piyasası Kurulu (SPK)" },
      { p: "SPK, piyasayı düzenleyen ve denetleyen, **kamu tüzel kişiliğine** ve idari ve mali özerkliğe sahip kurumdur. Karar organı **yedi üyeden** oluşan Kurul Karar Organı'dır." },
      { l: [
        "Tebliğ çıkararak ikincil düzenleme yapar (ör. Özel Durumlar Tebliği II-15.1).",
        "İzahname ve ihraç belgelerini onaylar, piyasa kurumlarına faaliyet izni verir.",
        "Denetim yapar; aykırılıklarda idari para cezası verir, işlem yasağı gibi tedbirler alır, gerekirse suç duyurusunda bulunur."
      ]},
      { h: "Piyasa kurumları" },
      { t: [["Kurum", "Görev"],
        ["Borsa İstanbul A.Ş.", "Sermaye piyasası araçlarının alım satımı için organize piyasa"],
        ["Takasbank", "Merkezi takas kuruluşu ve merkezi karşı taraf"],
        ["Merkezi Kayıt Kuruluşu (MKK)", "Kaydi sermaye piyasası araçlarının hak sahibi bazında kaydı"],
        ["Yatırımcı Tazmin Merkezi (YTM)", "Yatırım kuruluşu yükümlülüklerini yerine getiremezse yatırımcıya belirli tutara kadar ödeme"],
        ["TSPB", "Yatırım kuruluşlarının üye olmak zorunda olduğu, kamu kurumu niteliğinde meslek kuruluşu"]]},
      { h: "Yasaklanan eylemler ve yaptırımlar" },
      { p: "Kanun, piyasanın güvenilirliğini bozan eylemleri iki kademede ele alır:" },
      { l: [
        "**Suçlar (hapis ve adli para cezası):** piyasa dolandırıcılığı ve içsel bilginin kötüye kullanılması. Piyasa dolandırıcılığı **işlem bazlı** (yapay fiyat ya da yanlış izlenim yaratmak için alım satım) ya da **bilgi bazlı** (yalan, yanlış, yanıltıcı bilgi veya söylenti yayma) olabilir.",
        "**Piyasa bozucu eylemler:** suç oluşturmayan ama piyasanın güven ve istikrarını bozan eylemler; idari para cezası ve işlem yasağı uygulanır.",
        "**Örtülü kazanç aktarımı yasağı:** ihraççının ilişkili taraflarla emsallere aykırı işlemlerle kazancını ya da malvarlığını azaltması yasaktır."
      ]},
      { o: "Bir yatırımcı, henüz açıklanmamış bir birleşme haberini şirkette çalışan arkadaşından öğrenip hisse alıyor. Bu, **içsel bilginin kötüye kullanılması** suçudur. Aynı yatırımcı sosyal medyada şirket hakkında asılsız olumlu haber yayıp fiyat yükselince satsaydı, **bilgi bazlı piyasa dolandırıcılığı** olurdu." }
    ], ak: [
      "Pay sahibi sayısı 500'ü aşan anonim şirket halka açık sayılır.",
      "Halka arz → izahname; halka arz olmayan satış → ihraç belgesi.",
      "İzahname zararında ilk sorumlu ihraççıdır.",
      "SPK kamu tüzel kişiliğine sahiptir; karar organı 7 üyedir.",
      "Suçlar: piyasa dolandırıcılığı (işlem/bilgi bazlı) ve içsel bilginin kötüye kullanılması. Piyasa bozucu eylemler idari yaptırımla karşılanır."
    ]},

    { k: "1.2", t: "Kamunun aydınlatılması ve özel durumlar (II-15.1)", dk: 14, kap: ["1.2", "1.2.1"], b: [
      { p: "Kamuyu aydınlatma, yatırımcıların karar verirken aynı bilgiye aynı anda ulaşmasını sağlar. Halka açık şirketler ve borsada işlem gören ihraççılar açıklamalarını **Kamuyu Aydınlatma Platformu'nda (KAP)** yapar." },
      { h: "Ne açıklanır?" },
      { l: [
        "**Finansal raporlar** (II-14.1): ara dönem ve yıllık finansal tablolar ile faaliyet raporları, belirli sürelerde KAP'ta yayımlanır.",
        "**İçsel bilgi:** ihraççının sermaye piyasası araçlarının değerini ya da yatırımcı kararlarını etkileyebilecek, henüz açıklanmamış bilgi (ör. önemli bir ihale kazanmak, büyük bir dava, birleşme görüşmesi).",
        "**Sürekli bilgi:** ihraççının sermaye yapısı, yönetimi, faaliyetleri gibi konulardaki değişiklikler.",
        "**Pay sahipliği değişiklikleri** ve **yönetim sorumluluğu bulunan kişilerin işlemleri**."
      ]},
      { h: "İçsel bilginin açıklanması ve ertelenmesi" },
      { p: "İçsel bilgi **gecikmeksizin** kamuya açıklanır. Ancak ihraççı, aşağıdaki şartların hepsi sağlanıyorsa açıklamayı kendi sorumluluğunda erteleyebilir:" },
      { n: ["Ertelemenin ihraççının **meşru çıkarlarını** korumak için gerekli olması,", "Ertelemenin yatırımcıları **yanıltmaması**,", "Bilginin **gizliliğinin** sağlanabilmesi."] },
      { d: "Erteleme için SPK'dan izin alınmaz; karar ihraççınındır. Gizlilik bozulursa (ör. bilgi basına sızarsa) erteleme sona erer ve bilgi hemen açıklanır." },
      { p: "İhraççı, içsel bilgiye erişimi olan kişilerin listesini (içeriden öğrenenler listesi) tutar. Basın ya da sosyal medyada çıkan, ihraççı hakkındaki haberler fiyatı etkileyebilecek nitelikteyse ihraççı bu haberleri doğrulamak ya da yalanlamak için açıklama yapar." },
      { h: "Pay sahipliği bildirimleri" },
      { p: "Bir kişinin halka açık ortaklıktaki doğrudan ya da dolaylı payı veya oy hakkı aşağıdaki eşiklere ulaştığında, bunları aştığında ya da altına düştüğünde kamuya açıklama yapılır:" },
      { t: [["Eşikler"], ["%5 · %10 · %15 · %20 · %25 · %33 · %50 · %67 · %95"]] },
      { o: "Bir yatırım fonu bir şirketin payının %4,8'ine sahipken yeni alımla %5,3'e çıkıyor. %5 eşiği aşıldığı için açıklama yapılması gerekir. Daha sonra %4,9'a düşerse yine açıklama gerekir (eşiğin altına düşüş)." },
      { h: "Yönetim sorumluluğu bulunan kişiler" },
      { p: "Yönetim kurulu üyeleri ve üst düzey yöneticiler ile bunlarla yakın ilişkili kişilerin ortaklık payları üzerindeki işlemleri kamuya açıklanır. Amaç, şirketi en iyi tanıyan kişilerin işlemlerini yatırımcıların görebilmesidir." }
    ], ak: [
      "Açıklamalar KAP'ta yapılır; içsel bilgi gecikmeksizin açıklanır.",
      "Erteleme şartları: meşru çıkar + yanıltmama + gizlilik. SPK izni gerekmez.",
      "Eşikler: 5, 10, 15, 20, 25, 33, 50, 67, 95.",
      "Yöneticilerin ve yakınlarının pay işlemleri de açıklanır."
    ]},

    { k: "1.3", t: "Halka açık ortaklıklar ve kurumsal yönetim (II-17.1)", dk: 18, kap: ["1.3", "1.3.1"], b: [
      { p: "Halka açık ortaklıklar, Türk Ticaret Kanunu'nun yanında SPKn ve SPK tebliğlerine de uyar. Bu derste yatırımcıyı doğrudan etkileyen kuralları ve kurumsal yönetim ilkelerini göreceğiz." },
      { h: "Kayıtlı sermaye ve kâr payı" },
      { l: [
        "**Kayıtlı sermaye sistemi:** genel kurul, yönetim kuruluna belirli bir tavana kadar (kayıtlı sermaye tavanı) sermaye artırma yetkisi verir. Yetki en fazla **5 yıl** için verilir.",
        "**Kâr payı (II-19.1):** ortaklık bir kâr dağıtım politikası belirler, genel kurulun onayına sunar ve KAP'ta açıklar. Kâr payı nakit ya da bedelsiz pay olarak dağıtılabilir; belirli şartlarla kâr payı avansı da verilebilir."
      ]},
      { h: "Önemli nitelikteki işlemler ve ayrılma hakkı" },
      { p: "Birleşme, bölünme, tür değiştirme, malvarlığının tamamının ya da önemli bir kısmının devri, faaliyet konusunun tamamen değiştirilmesi, imtiyaz oluşturulması gibi işlemler **önemli nitelikteki işlem** sayılır (II-23.3) ve genel kurulun onayına sunulur." },
      { p: "Bu işleme genel kurulda **olumsuz oy veren ve muhalefet şerhini tutanağa geçirten** pay sahipleri, paylarını ortaklığa satarak ortaklıktan ayrılabilir. Buna **ayrılma hakkı** denir." },
      { h: "Pay alım teklifi ve geri alım" },
      { l: [
        "**Pay alım teklifi zorunluluğu (II-26.1):** bir ortaklığın **yönetim kontrolünü** kazanan kişi, diğer pay sahiplerine de paylarını satın almayı teklif etmek zorundadır. Yönetim kontrolü: oy haklarının %50'sinden fazlasına sahip olmak ya da yönetim kurulu üyelerinin çoğunluğunu seçme imtiyazı.",
        "**Ortaklıktan çıkarma ve satma hakları (II-27.2):** pay alım teklifi gibi işlemler sonucunda oy haklarının %98'ine ulaşan hâkim ortak, kalan azınlığı ortaklıktan çıkarma hakkına; azınlık da paylarını hâkim ortağa satma hakkına sahip olur.",
        "**Geri alınan paylar (II-22.1):** ortaklık kendi paylarını geri alabilir; geri alınan payların nominal değeri **çıkarılmış sermayenin %10'unu** aşamaz. Bu paylar oy ve kâr payı hakkı vermez."
      ]},
      { h: "Kurumsal yönetim ilkeleri" },
      { p: "Kurumsal yönetimin dört temel kavramı: **eşitlik, şeffaflık, hesap verebilirlik ve sorumluluk**. İlkeler dört bölümdedir: pay sahipleri, kamuyu aydınlatma ve şeffaflık, menfaat sahipleri ve yönetim kurulu." },
      { p: "İlkelerin bir kısmı **zorunludur**, diğerleri için **uygula ya da açıkla** yaklaşımı geçerlidir: şirket uygulamıyorsa nedenini açıklar." },
      { t: [["Zorunlu ilke", "Özeti"],
        ["Bağımsız üyeler", "Yönetim kurulu üye sayısının en az üçte biri, en az iki kişi"],
        ["Komiteler", "Denetimden sorumlu komite, riskin erken saptanması komitesi, kurumsal yönetim komitesi (aday gösterme ve ücret işlevleri bu komitede toplanabilir)"],
        ["İlişkili taraf işlemleri", "Önemli işlemler için bağımsız üyelerin çoğunluğunun onayı aranır"],
        ["Yatırımcı ilişkileri bölümü", "Yöneticisinin ileri düzey (Düzey 3) ve kurumsal yönetim derecelendirme lisanslarına sahip olması"]]},
      { p: "**Denetimden sorumlu komitenin** üyelerinin tamamı bağımsız üyelerden oluşur. Diğer komitelerin başkanları bağımsız üyeler arasından seçilir." },
      { p: "Bağımsız üye adayında aranan bazı şartlar: son beş yılda şirketle önemli bir istihdam ya da ticari ilişkisinin olmaması, Türkiye'de yerleşik olması, son on yıl içinde altı yıldan fazla yönetim kurulu üyeliği yapmamış olması." },
      { d: "Kurumsal yönetim sorularında sayılar sık sorulur: bağımsız üye en az 1/3 ve en az 2 kişi; kayıtlı sermaye yetkisi en fazla 5 yıl; geri alım sınırı %10; çıkarma/satma hakkı %98." }
    ], ak: [
      "Önemli işlemlere olumsuz oy + muhalefet şerhi → ayrılma hakkı.",
      "Yönetim kontrolü (%50'den fazla oy) → pay alım teklifi zorunluluğu.",
      "Geri alım ≤ çıkarılmış sermayenin %10'u.",
      "Kurumsal yönetim: eşitlik, şeffaflık, hesap verebilirlik, sorumluluk; uygula ya da açıkla.",
      "Denetim komitesinin tamamı bağımsız üyelerden oluşur."
    ]},

    { k: "1.4", t: "Kolektif yatırım kuruluşları, portföy yönetim şirketleri ve yatırım fonları", dk: 16, kap: ["1.4", "1.4.3", "1.4.4"], b: [
      { p: "Kolektif yatırım kuruluşları, birçok yatırımcının parasını bir araya getirip profesyonelce yöneten yapılardır. İki ana türü vardır: **yatırım fonları** (sözleşmeye dayalı mal varlığı) ve **yatırım ortaklıkları** (anonim şirket)." },
      { t: [["", "Yatırım fonu", "Yatırım ortaklığı"],
        ["Hukuki yapı", "İçtüzükle kurulan, tüzel kişiliği olmayan mal varlığı", "Anonim şirket (tüzel kişi)"],
        ["Yatırımcının sahip olduğu", "Katılma payı", "Ortaklık payı (hisse)"],
        ["Kurucu / yönetim", "Portföy yönetim şirketi", "Kendi yönetim kurulu"],
        ["Örnek", "Para piyasası fonu, hisse senedi fonu", "GYO, MKYO, GSYO"]]},
      { h: "Portföy yönetim şirketleri (III-55.1)" },
      { p: "Portföy yönetim şirketleri (PYŞ) anonim şirket şeklinde kurulur ve SPK'dan faaliyet izni alır. Yapabildikleri işler: **kolektif portföy yöneticiliği** (fon ve ortaklık portföylerini yönetmek), **bireysel portföy yöneticiliği** ve **yatırım danışmanlığı**. Yatırım fonlarının kurucusu PYŞ'lerdir." },
      { h: "Yatırım fonları (III-52.1)" },
      { p: "Bir fonun işleyişinde dört taraf vardır:" },
      { l: [
        "**Kurucu:** fonu kuran ve yöneten PYŞ.",
        "**Portföy saklayıcısı:** fon varlıklarını kurucudan bağımsız olarak saklayan ve işlemleri denetleyen kuruluş (Takasbank ya da uygun bankalar).",
        "**Dağıtım kuruluşları:** fon paylarını yatırımcılara satan banka ve aracı kurumlar; TEFAS üzerinden de alım satım yapılır.",
        "**Yatırımcılar:** katılma payı sahipleri."
      ]},
      { p: "Fonun temel belgeleri **içtüzük**, **izahname** ve **yatırımcı bilgi formudur**. Fon pay fiyatı her işlem günü hesaplanır:" },
      { o: "Fon toplam değeri = portföy değeri + alacaklar − borçlar. Pay fiyatı = fon toplam değeri / dolaşımdaki pay sayısı. Toplam değeri 10 milyon TL olan ve dolaşımda 4 milyon payı bulunan fonun pay fiyatı 2,5 TL'dir." },
      { p: "Fon alım satım talimatları çoğunlukla **ileri fiyatlama** ile gerçekleşir: talimat verildiği an fiyat bilinmez, sonradan hesaplanacak fiyattan işlem yapılır." },
      { h: "Fon türleri (ad, portföy dağılımına göre verilir)" },
      { t: [["Fon türü", "Portföy kuralı"],
        ["Para piyasası fonu", "Vadesi en fazla 184 gün olan likit araçlar; ağırlıklı ortalama vade en fazla 45 gün"],
        ["Hisse senedi fonu", "Portföyün en az %80'i (yerli) ortaklık payları"],
        ["Borçlanma araçları fonu", "Portföyün en az %80'i borçlanma araçları"],
        ["Fon sepeti fonu", "Portföyün ağırlıklı olarak başka fonların paylarından oluşması"],
        ["Katılım fonu", "Faizsiz finans ilkelerine uygun araçlar"],
        ["Serbest fon", "Yalnızca nitelikli yatırımcılara; yatırım sınırlamaları gevşek"]]},
      { d: "Fonun tüzel kişiliği yoktur; fon varlıkları kurucunun malvarlığından ayrıdır ve kurucunun alacaklıları bu varlıklara başvuramaz." }
    ], ak: [
      "Fon = tüzel kişiliği olmayan mal varlığı; ortaklık = anonim şirket.",
      "Fon kurucusu PYŞ; varlıklar bağımsız saklayıcıda.",
      "Pay fiyatı = fon toplam değeri / dolaşımdaki pay.",
      "Hisse senedi fonu ≥ %80 pay; para piyasası fonu 184 gün / 45 gün."
    ]},

    { k: "1.4.1", t: "Yatırım ortaklıkları: GYO, MKYO, GSYO", dk: 10, kap: ["1.4.1", "1.4.2", "1.4.8"], b: [
      { p: "Yatırım ortaklıkları, portföy işletmek amacıyla kurulan ve payları genellikle borsada işlem gören anonim şirketlerdir. Yatırımcı, ortaklığın payını alarak portföyün performansına ortak olur." },
      { h: "Gayrimenkul yatırım ortaklığı (GYO, III-48.1)" },
      { l: [
        "Gayrimenkul, gayrimenkul projeleri ve gayrimenkule dayalı haklardan oluşan portföy işletir; kira geliri ve değer artışından kazanır.",
        "Kayıtlı sermaye sistemine tabi anonim şirkettir.",
        "Aktif toplamının **en az %51'i** gayrimenkul, gayrimenkul projesi ve gayrimenkule dayalı haklardan oluşmalıdır.",
        "İnşaat işlerini kendi personeli ve makineleriyle yapamaz; müteahhitlere yaptırır. Ticari ve sınai faaliyetle uğraşamaz."
      ]},
      { h: "Menkul kıymet yatırım ortaklığı (MKYO, III-48.5)" },
      { p: "Sermaye piyasası araçlarından (pay, borçlanma aracı vb.) oluşan portföy işletir. Yatırımcı açısından bir fona benzer, ancak hukuken anonim şirkettir ve payları borsada işlem görür." },
      { h: "Girişim sermayesi yatırım ortaklığı (GSYO, III-48.3)" },
      { p: "Gelişme potansiyeli taşıyan, kaynak ihtiyacı olan **girişim şirketlerine** uzun vadeli yatırım yapar. Aktiflerinin önemli bir kısmının girişim sermayesi yatırımlarından oluşması gerekir." },
      { o: "Bir GYO'nun toplam aktifi 1 milyar TL ise en az 510 milyon TL'lik kısmı gayrimenkul, proje ve gayrimenkule dayalı haklardan oluşmalıdır." }
    ], ak: [
      "GYO, MKYO, GSYO → anonim şirket; payları borsada.",
      "GYO aktifinin en az %51'i gayrimenkul ve gayrimenkule dayalı varlık.",
      "GYO inşaatı kendisi yapmaz, müteahhide yaptırır.",
      "GSYO girişim şirketlerine uzun vadeli kaynak sağlar."
    ]},

    { k: "1.4.5", t: "Özel fonlar: borsa yatırım fonu, gayrimenkul ve girişim sermayesi fonları", dk: 10, kap: ["1.4.5", "1.4.6", "1.4.7"], b: [
      { h: "Borsa yatırım fonu (BYF, III-52.2)" },
      { p: "BYF'lerin katılma payları **borsada hisse gibi işlem görür**. Çoğu bir endeksi (ör. BIST 30, altın) izler. Yatırımcılar gün içinde borsa fiyatından alıp satabilir." },
      { l: [
        "**Yetkili katılımcı:** kurucuyla sözleşme yapan ve büyük miktarlarda pay oluşturma (yaratma) ve geri alma işlemi yapabilen aracı kurum. Bu işlemler genellikle dayanak sepet karşılığında yapılır.",
        "**Piyasa yapıcı:** borsada sürekli alım ve satım fiyatı vererek likidite sağlar.",
        "**Takip farkı:** fon getirisinin izlediği endeksin getirisinden sapması; iyi bir BYF'de düşük olmalıdır."
      ]},
      { o: "BYF'nin borsa fiyatı birim pay değerinin üzerine çıkarsa yetkili katılımcı sepeti teslim edip yeni pay oluşturur ve borsada satar; böylece fiyat yeniden pay değerine yaklaşır. Bu arbitraj, BYF fiyatlarının dayanak değerden çok sapmamasını sağlar." },
      { h: "Gayrimenkul yatırım fonu (III-52.3) ve girişim sermayesi yatırım fonu (III-52.4)" },
      { p: "Bu fonların katılma payları **yalnızca nitelikli yatırımcılara** satılabilir. Gayrimenkul fonları gayrimenkul ve gayrimenkule dayalı varlıklara, girişim sermayesi fonları girişim şirketlerine yatırım yapar. Likiditeleri düşük olduğu için katılma payı alım satımı sınırlı zamanlarda yapılabilir." },
      { d: "Ayrım sorusu sık çıkar: GYO ve GSYO **anonim şirket**, gayrimenkul fonu ve girişim sermayesi fonu ise **fon** (tüzel kişiliği yok). Fonlar nitelikli yatırımcıya, ortaklık payları borsada herkese satılabilir." }
    ], ak: [
      "BYF payları borsada işlem görür; pay oluşturma/geri alma yetkili katılımcılarla.",
      "Piyasa yapıcı likidite sağlar; takip farkı düşük olmalı.",
      "Gayrimenkul ve girişim sermayesi fonları → yalnızca nitelikli yatırımcı."
    ]},

    { k: "1.5", t: "TSPB meslek kuralları ve etik ilkeler", dk: 10, kap: ["1.5", "1.5.1", "1.5.2"], b: [
      { p: "Türkiye Sermaye Piyasaları Birliği (TSPB), aracı kurumlar ve portföy yönetim şirketleri gibi yatırım kuruluşlarının **üye olmak zorunda olduğu**, kamu kurumu niteliğinde bir meslek kuruluşudur. Üyelerin uyacağı meslek kurallarını belirler ve uygulanmasını gözetir." },
      { h: "Meslek kurallarının ana başlıkları" },
      { l: [
        "**Müşteri yararını önde tutma:** müşterinin çıkarı kurumun ve çalışanın çıkarından önce gelir.",
        "**Dürüstlük ve mesleki özen:** işler bilgili, dikkatli ve özenli yapılır.",
        "**Sır saklama:** müşteri bilgileri izinsiz paylaşılmaz.",
        "**Haksız rekabet yasağı ve reklam ilkeleri:** yanıltıcı reklam, kesin getiri vaadi yapılmaz.",
        "**Çıkar çatışmasından kaçınma:** kaçınılamıyorsa müşteriye açıklanır ve yönetilir."
      ]},
      { h: "Etik dışı davranış örnekleri" },
      { t: [["Davranış", "Anlamı"],
        ["Front running (önden işlem)", "Müşterinin büyük emrini öğrenip ondan önce kendi hesabına işlem yapmak"],
        ["Churning", "Komisyon için müşteri hesabında gereksiz sıklıkta işlem yapmak"],
        ["Kesin getiri vaadi", "Piyasa riskini yok sayarak garanti kazanç sözü vermek"],
        ["Bilgiyi kötüye kullanma", "Müşteri ya da şirket hakkındaki gizli bilgiyle kişisel kazanç sağlamak"]]},
      { o: "Bir çalışan, emeklilik fonunun bir hisseye büyük alım emri vereceğini öğrenip önce kendi hesabına aynı hisseden alıyor. Bu **front running**'dir ve hem etik ilkelere hem mevzuata aykırıdır." },
      { p: "Sermaye piyasası çalışanları belirli görevler için SPL lisansına sahip olmak ve lisanslarını yenileme eğitimleriyle güncel tutmak zorundadır. Bu sınavlara da bu yüzden hazırlanıyoruz." }
    ], ak: [
      "TSPB'ye üyelik yatırım kuruluşları için zorunlu.",
      "Müşteri yararı önce gelir; çıkar çatışması açıklanır.",
      "Front running ve churning etik dışı ve yasaktır.",
      "Kesin getiri vaadi ve yanıltıcı reklam yapılmaz."
    ]}
  ]
});
