# NavigationApp

Api kullanımı için NavigationApp projesinin localhost:3000 portunda çalışıyor olması gerek.
Menü source u JSON olarak c:\db\navigation-json-schema.json içerisinde oluşturulmalı. örnek dosya NavigationApp\DB içerisinde bulunmakta.

NavigationApp host edildikten sonra, navigation-app angular uygulaması 2000 portunda npm üzerinden serve edilmeli.

Uygulama dinamik menü üzerinden ekran içerisinde dinamik komponentleri render etmek için yazılmıştır.
Özetle komponentler classFactory ile instanceları alınıp bir view içerisinde document üzerinde belirtilen alana yazılmaktadır.

Menü ve komponent mappingi hard coded olarak tanımlanmıştır bu mapping istenirse DB tarafından alınacak bir config ile yönetilip dynamic bir yapı oluşturulabilir.
