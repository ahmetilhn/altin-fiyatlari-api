# Altın Fiyatları API ([Gramvey](https://www.gramvey.com/))

Toplamda **38.5 milyonun** üzerinde geçmişe yönelik altın fiyat verisine ücretsiz bir şekilde erişebilirsiniz. Borsanın açık olduğu günlerde her 1 saniyede bir veri miktarı artmaktadır.

Hem **canlı (socket)** hem de **geçmişe yönelik** altın fiyatları için kullanabileceğiniz Gramvey tarafından sunulan ücretsiz bir hizmettir.

### Önizleyin

**Verilerin işlenmiş halini [Gramvey](https://www.gramvey.com/) üzerinden görebilirsiniz**

## Performans

> `Response time` ve `down time` sonuçlarını [bu sayfa](https://stats.uptimerobot.com/McWylIuLFO) üzerinden takip edebilirsiniz.

## Socket (Canlı Bağlantı)

Tüm altın tiplerinin **anlık fiyatlarını her 2 saniyede bir** almak için aşağıdaki socket bağlantısını kullanabilirsiniz.

- **Bağlantı**: `wss://goldpricesocket.gramvey.com`
- **Frekans**: Her 2 saniyede bir

### Kullanım

```js
const startSocket = async () => {
  const socket = new WebSocket("wss://goldpricesocket.gramvey.com");
  socket.onmessage = onMessage;
};

const onMessage = (message) => {
  try {
    const socketMessage = JSON.parse(message.data);
    console.log(socketMessage);
  } catch (error) {
    console.error("Veri ayrıştırılamadı:", error);
  }
};

// Sayfa yüklendiğinde bu kodu çalıştırmanız yeterlidir
document.addEventListener("DOMContentLoaded", startSocket);
```

> Örnek kodu `examples/socket/connection.js` içerisinde bulabilirsiniz.

---

## REST API (Altın Veri İşlemleri)

Altın fiyatlarına yönelik şu işlemleri REST uç noktasından yapabilirsiniz:

- Altın tipleri
- Altın tipi detayı
- Altın fiyat değişimi
- Altın fiyat geçmişi
- Altın minimum / maksimum değerleri

> Örnek kodu `examples/rest-api/requests.js` içerisinde bulabilirsiniz.

### Tarih Aralığı

```js
const DATE_RANGE = {
  LAST_HOUR: 50001,
  LAST_DAY: 50002,
  LAST_WEEK: 50003,
  LAST_MONTH: 50004,
};
```

### Axios Client Tanımı

> Axios kullanmak zorunda değilsiniz. Dilerseniz her isteği `fetch` ile de yapabilirsiniz.

```ts
import axios from "axios";

const goldApiClient = axios.create({
  baseURL: "https://goldapi.gramvey.com",
  timeout: 5000,
});
```

### API Fonksiyonları

```ts
// Altın tiplerini getirir
const getGolds = async () => {
  return goldApiClient.get("/golds");
};

// Belirli bir altın tipinin detayları
const getGoldById = async (goldId) => {
  return goldApiClient.get(`/golds/${goldId}`);
};

// Altın fiyat değişim oranı
const getChangeRate = async ({ goldId, dateRange }) => {
  return goldApiClient.get("/gold-price/change-rate", {
    params: {
      gold_id: goldId,
      date_range: dateRange,
    },
  });
};

// Altın minimum ve maksimum fiyat bilgisi
const getMinAndMax = async ({ goldId, dateRange }) => {
  return goldApiClient.get("/gold-price/min-max", {
    params: {
      gold_id: goldId,
      date_range: dateRange,
    },
  });
};

// Altın fiyat geçmişi
const getHistory = async ({ goldId, dateRange }) => {
  return goldApiClient.get("/gold-price/history", {
    params: {
      gold_id: goldId,
      date_range: dateRange,
    },
  });
};
```

---

## Hata ve Sorular

Hatalar veya sorular için GitHub üzerinden `issue` oluşturabilirsiniz.
