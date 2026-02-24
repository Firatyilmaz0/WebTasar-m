import vesikalik from './assets/vesikalik.jpg';
import flower from './assets/Flower.png';

function App() {
  return (
    /* <> (Fragment) kullanımı: React'te birden fazla ana elemanı döndürmek için şarttır */
    <>
      {/* 6.2: Klavye kullanıcıları için İçeriğe Atla bağlantısı */}
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        {/* 6.1: ARIA etiketi navigasyonun amacını belirtir */}
        <nav aria-label="Ana Navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* 3: Sayfada tek bir ana içerik alanı olmalıdır */}
      <main id="main-content">
        {/* 5.1: Heading hiyerarşisi h1 ile başlar */}
        <h1 style={{ textAlign: 'center', color: '#111827', marginBottom: '2rem' }}>
          Mehmet Fırat Yılmaz Portfolyosu
        </h1> 
        
        <section id="hakkimda">
          <h2>Hakkımda</h2> 
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <figure style={{ margin: 0 }}>
              {/* 5.2: Görsellerde açıklayıcı alt metin zorunludur */}
              <img 
                src={vesikalik} 
                alt="Mehmet Fırat Yılmaz'ın profesyonel profil fotoğrafı"
                style={{ 
                  borderRadius: '50%', 
                  border: '4px solid #e5e7eb', 
                  width: '120px', 
                  height: '120px', 
                  objectFit: 'cover', 
                  float: 'left',
                  marginRight: '2rem' 
                }}
              />
              <figcaption style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                Yazılım Mühendisi Adayı
              </figcaption>
            </figure>
            <p style={{ flex: 1, minWidth: '300px' }}>
              Merhaba! Ben Mehmet Fırat Yılmaz. Modern web teknolojileriyle erişilebilir ve 
              kullanıcı dostu arayüzler geliştirmeye odaklanıyorum.
            </p>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <article style={{ borderLeft: '4px solid #2563eb', paddingLeft: '1rem', flex: '1 1 350px', maxWidth: '420px', background: '#f9fafb', borderRadius: '12px', boxShadow: '0 2px 8px #0001' }}>
              <img src={flower} alt="Animasyonlu çiçek görseli" style={{ width: '100%', maxWidth: '380px', height: '260px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', marginTop: '1rem' }} />
              <h3>Anismasyonlu Çiçek</h3> 
              <p>HTML CSS VE JavaScript kullanarak geliştirdiğim bir çiçek animasyonu.</p>
            </article>
            <article style={{ borderLeft: '4px solid #2563eb', paddingLeft: '1rem', flex: '1 1 350px', maxWidth: '420px', background: '#f9fafb', borderRadius: '12px', boxShadow: '0 2px 8px #0001' }}>
              <img src={flower} alt="Web site Anasayfa" style={{ width: '100%', maxWidth: '380px', height: '260px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', marginTop: '1rem' }} />
              <h3>Burada.com</h3> 
              <p>Next.js ve Tailwind CSS kullanarak geliştirdiğim bir web sitesi.</p>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <p>Benimle iletişime geçmek için aşağıdaki formu kullanabilirsiniz.</p>
          {/* 8: Form doğrulaması için HTML5 öznitelikleri */}
          <form noValidate>
            <div style={{ marginBottom: '1rem' }}>
              {/* 7.1: Label ve Input id üzerinden bağlanmalıdır */}
              <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Ad Soyad</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                minLength={2} 
                placeholder="Örn: Ahmet Yılmaz" 
                style={{ width: '100%', padding: '0.5rem' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>E-posta</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="ornek@mail.com" 
                style={{ width: '100%', padding: '0.5rem' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}>Mesajınız</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                placeholder="Mesajınızı buraya yazın..."
                style={{ width: '100%', padding: '0.5rem' }}
              ></textarea>
            </div>

            <button type="submit" style={{ padding: '0.7rem 1.5rem', cursor: 'pointer' }}>Mesaj Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p style={{ textAlign: 'center' }}>&copy; 2026 Mehmet Fırat Yılmaz. Tüm hakları saklıdır.</p>
      </footer>
    </>
  );
}

export default App;