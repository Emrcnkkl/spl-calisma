# SPL Çalışma

SPL **Düzey 3** ve **Türev Araçlar** lisans sınavlarına arkadaş grubuyla çalışmak için hazırlanmış site.

**Adres:** https://emrcnkkl.github.io/spl-calisma/

## İçinde neler var
- **13 modül**, SPL'nin resmî konu başlıklarıyla (Düzey 3'ün 12 modülü + Türev Araçlar modülü). Konuları çalıştıkça işaretlersin.
- Her modül için **özet**, **tekrar kartları** (aralıklı tekrar: 1, 3, 7, 14, 30 gün) ve **açıklamalı sorular**.
- **Deneme sınavı:** gerçek format (25 soru / 45 dakika, geçme notu 50), şıklar her seferinde karışır.
- **Sınavlarım:** her modüle sınav tarihi planla, aldığın SPL puanını gir; Düzey 1, 2, 3 ve Türev Araçlar lisans durumu otomatik hesaplanır (her modül ≥ 50, ortalama ≥ 60).
- **Grup:** isteyen ilerlemesini paylaşır, paylaşanlar listede görünür.

İlerleme her kişinin **kendi tarayıcısında** saklanır (giriş yok). Rehber sayfasından yedek alıp başka cihaza taşınabilir.

> Sorular ve özetler çalışma amaçlıdır; SPL'nin gerçek sınav sorularını içermez (gerçek sorular telifli ve paylaşımı yasak). Sınav öncesi SPL'nin ilan ettiği mevzuat kesim tarihine göre güncel mevzuatı kontrol edin.

## Grup paylaşımını açmak (bir kerelik, ~5 dk)
1. https://console.firebase.google.com → **Proje ekle** (ör. `spl-calisma`). Google Analytics gerekmez.
2. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable.**
3. **Build → Firestore Database → Create database** (bölge: `eur3` ya da yakın bir bölge, *production mode*).
4. Firestore → **Rules** sekmesine şunu yapıştırıp **Publish**:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /spl_profiller/{uid} {
         allow read: if request.auth != null;
         allow create, update, delete: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```
5. **Project settings → General → Your apps → Web (</>)** ile uygulama ekle; çıkan `firebaseConfig` değerlerini `config.js` içindeki `window.SPL_FIREBASE`'e yaz.
6. **Authentication → Settings → Authorized domains** listesine `emrcnkkl.github.io` ekle.

## Yayın
GitHub → **Settings → Pages → Source: Deploy from a branch → main / (root)**.
