# CLAUDE.md — SPL Çalışma

Emir ve 3 arkadaşının SPL **Düzey 3 + Türev Araçlar** sınavlarına çalıştığı statik site. Kullanıcıyla iletişim ve tüm metinler **Türkçe**.
Site: https://emrcnkkl.github.io/spl-calisma/ (GitHub Pages, kaynak: GitHub Actions — `.github/workflows/pages.yml`, push'ta yayınlar). Depo herkese açık.

## Yapı
- `index.html` — tek sayfa uygulama (inline CSS/JS, kütüphane yok). Tasarım kişisel panelden bilerek farklı: solda 92px koyu simge şeridi (simge + kısa ad), ortada ~1040px sütun,
  taş grisi zemin + mürekkep + kobalt vurgu (yeşil yalnızca başarı durumları), Fraunces başlıklar; her modülün kendi rengi/simgesi (`.hu` + `--h`), ana sayfada mum grafikli karşılama alanı ve istatistik kutuları; telefonda alt menü. Rotalar: `#ana #moduller #m01…#m13 #kartlar #deneme #sinavlar #grup #rehber`.
- `veri/moduller.js` — `SPL_MODULLER` (13 modül, SPL resmî alt başlıkları; m13 = Türev Araçlar Lisansı'nın 7. konusu, 13.x numaralı) ve `SPL_LISANSLAR` (d1, d2, d3, tv → modül listeleri).
- `veri/mXX.js` — `SPL.ekle("mXX", { uyari?, ozet:[{b, t:[…]}], kartlar:[[ön, arka]], sorular:[{s, c:[şıklar], d:doğruIndex, a:açıklama}] })`. Şıklar ekranda karıştırılır.
- `veri/detay.js` — `SPL_DETAY.mXX`: renk tonu `h`, simge `i`, `giris`, `sekil[]` (index.html → `SEKIL`: SVG grafikler / akış şemaları), `ipucu[]`, `formul[[ad, ifade]]`, `link[{t,u,n,en}]`, `yt` (YouTube arama sorgusu); `SPL_GENEL_LINK` Rehber'de. Modül sayfası "Genel bakış" sekmesiyle açılır.
  Bağlantılar yalnızca resmî kurum ana sayfaları, mevzuat.gov.tr metinleri ve Investopedia terim sayfaları (uydurma alt sayfa adresi yazma).
- `config.js` — `window.SPL_FIREBASE` (null ise Grup kapalı). Firestore koleksiyonu `spl_profiller/{uid}` (anonim giriş; kurallar README'de).
- Kişisel durum `localStorage "spl.v1"`: `ad, konu{"mXX:alt":tarih}, kart{"mXX:i":{k,t}}, deneme[], sinav{mXX:{puan,tarih}}, plan{mXX:tarih}, paylas`. Tema `spl.tema`.

## Kaynaklar ve kurallar
- Konu başlıkları: spl.com.tr/sinav-konulari-ve-alt-konu-basliklari (Kasım 2026). e-LS kılavuzu 2026: 25 soru/45 dk, her modül ≥50 ve ortalama ≥60,
  30 gün tekrar kuralı, notlar 3 yıl, öğrenci ücreti 548 ₺/modül (25 yaş altı), Ocak/Temmuz ilk 15 gün sınav yok.
- **Gerçek SPL sorularını asla ekleme** (telifli, paylaşımı yasak). Sorular özgün çalışma sorularıdır.
- Vergi oranları ve asgari sermaye gibi sık değişen sayılar yerine kavram yaz ya da "güncel oranı kontrol et" notu düş.
- İçerik ekleme: ilgili `veri/mXX.js` dosyasına özet/kart/soru ekle; `node` ile dosyanın yüklendiğini ve `d` indekslerinin geçerli olduğunu sına.
