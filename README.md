1. 

Breakpoint Seçimi 
Projede mobil cihazlar için varsayılan (0-639px), tabletler için 640px ve masaüstü monitörler için 1024px olmak üzere 3 ana kırılım noktası (breakpoint) belirlenmiştir. 

Bu değerler, yaygın kabul görmüş standartlar olmasının yanı sıra içeriğin ekran genişliğine göre bozulmaya başladığı noktalar dikkate alınarak seçilmiştir. 


2. 

Layout Tercihleri 
Flexbox: Navigasyon çubuğu ve toolbar gibi tek boyutlu hizalama gerektiren bölümlerde, öğeleri yatay bir eksen boyunca kolayca dağıtmak için Flexbox kullanılmıştır. 

CSS Grid: Proje kartları gibi hem satır hem de sütun kontrolü gerektiren iki boyutlu düzenlerde CSS Grid tercih edilmiştir. 


auto-fit: Kart düzeninde auto-fit kullanılarak, boş kalan alanın mevcut kartlar tarafından doldurulması ve ekran boyutuna göre sütun sayısının otomatik ayarlanması sağlanmıştır. 


3. 

Design Tokens 
Tutarlılık: Renk paleti, boşluk (spacing) skalası ve köşe yuvarlatma (radius) değerleri :root altında tanımlanarak tüm projede görsel bir bütünlük sağlanmıştır. 


Fluid Typography: Yazı boyutlarında clamp() fonksiyonu kullanılarak, yazıların farklı ekran genişliklerinde keskin adımlar yerine akıcı ve kademesiz bir şekilde ölçeklenmesi sağlanmıştır. 


4. 

Responsive Stratejiler 
Mobile-First: Tasarım süreci önce en küçük ekranlar için kodlanmış, daha büyük ekranlar için min-width media query'leri kullanılarak kademeli zenginleştirme (progressive enhancement) yapılmıştır. 


Görsel Yönetimi: Resimlerin kapsayıcı dışına taşmasını önlemek için max-width: 100% ve boyut tutarlılığı sağlamak için object-fit: cover özellikleri uygulanmıştır. 