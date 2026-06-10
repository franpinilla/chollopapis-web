// Actualizado: 2026-06-10 19:08
const OFERTAS = [
  {
    "asin": "B0DZCKKWQF",
    "titulo": "Portátil e Inflable Asiento, con Bandeja de Juego Extraíble, Uso Interior y Exterior, Azul",
    "imagen": "https://m.media-amazon.com/images/I/71fKNLH5tnL._AC_SL1500_.jpg",
    "precio_oferta": 21.47,
    "precio_original": 27.99,
    "descuento": 23,
    "valoracion": 4.2,
    "num_reseñas": 224,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0DZCKKWQF?tag=chollopapis-21"
  },
  {
    "asin": "B07WKN8NQQ",
    "titulo": "Termómetro digital Philips Avent (modelo SCH480/00)",
    "imagen": "https://m.media-amazon.com/images/I/61CoWxy00zL._SL1500_.jpg",
    "precio_oferta": 15.99,
    "precio_original": 20.5,
    "descuento": 22,
    "valoracion": 4.7,
    "num_reseñas": 13362,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B07WKN8NQQ?tag=chollopapis-21"
  },
  {
    "asin": "B01891LZBY",
    "titulo": "Rowenta Turbo Silence Extreme, Ventilador de Pie 40 cm, Extremadamente silencioso, Modo Silent Night y Turbo Boost, Oscilación y orientación automática, Altura ajustable, Moderno, Color Blanco VU5640",
    "imagen": "https://m.media-amazon.com/images/I/71RJzu5-U2L._AC_SL1500_.jpg",
    "precio_oferta": 79.79,
    "precio_original": 139.99,
    "descuento": 43,
    "valoracion": 4.5,
    "num_reseñas": 20036,
    "categoria": "HomeGarden",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B01891LZBY?tag=chollopapis-21"
  },
  {
    "asin": "B0CQM171MK",
    "titulo": "Mochila Viaje Cabina Avion 40x20x25 para Ryanair 20L Equipaje de Mano Bolsa de Viaje Hombre Mujer Maletas de Viaje Cabina Mochila Portatil 14 Pulgadas con Puerto USB para Trabajo,Escuelas Negro",
    "imagen": "https://m.media-amazon.com/images/I/81n2tCyC5lL._AC_SL1500_.jpg",
    "precio_oferta": 16.83,
    "precio_original": 22.89,
    "descuento": 26,
    "valoracion": 4.6,
    "num_reseñas": 6590,
    "categoria": "HomeGarden",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0CQM171MK?tag=chollopapis-21"
  },
  {
    "asin": "B0DM6HQHJB",
    "titulo": "tectake® Silla de Coche Infantil i-Size, Homologada ECE R129, con ISOFIX y Top Tether, Arnés 5 Puntos, Reposacabezas Ajustable, para Niños desde 15 Meses, Altura 76-150 cm, Capacidad hasta 36 Kg",
    "imagen": "https://m.media-amazon.com/images/I/61nGYO+N0zL._AC_SL1350_.jpg",
    "precio_oferta": 73.79,
    "precio_original": 89.9,
    "descuento": 18,
    "valoracion": 4.3,
    "num_reseñas": 98,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0DM6HQHJB?tag=chollopapis-21"
  },
  {
    "asin": "B0CF65NYQR",
    "titulo": "Philips Avent Natural Response: 3 Biberones de 120 ml y 2 de 240 ml, 2 Chupetes Ultra Soft 0-6 Meses, Cepillo, Sin BPA (SCD879/11)",
    "imagen": "https://m.media-amazon.com/images/I/71BHMUUioIL._AC_SL1500_.jpg",
    "precio_oferta": 49.99,
    "precio_original": 74.99,
    "descuento": 33,
    "valoracion": 4.7,
    "num_reseñas": 5096,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0CF65NYQR?tag=chollopapis-21"
  },
  {
    "asin": "B0CF674JN9",
    "titulo": "Philips Avent Vigilabebés con Vídeo: Certificado DEKRA, Privado y Seguro con Cámara y Audio, con Pantalla de 2,8\", Zoom 2X, Visión Nocturna, Audio Bidireccional y Nanas, SCD881/26",
    "imagen": "https://m.media-amazon.com/images/I/71kwtTb4hLL._AC_SL1500_.jpg",
    "precio_oferta": 119.99,
    "precio_original": 149.99,
    "descuento": 20,
    "valoracion": 4.1,
    "num_reseñas": 965,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0CF674JN9?tag=chollopapis-21"
  },
  {
    "asin": "B0FQ685GBZ",
    "titulo": "Dyson V8 Cyclone - Aspiradora sin Cable – 150 AW, 60 min de autonomía, Cepillo Motorbar con tecnología antienredos, Accesorio multifunción rinconera",
    "imagen": "https://m.media-amazon.com/images/I/41KdWKX8w6L._AC_SL1088_.jpg",
    "precio_oferta": 279.0,
    "precio_original": 399.0,
    "descuento": 30,
    "valoracion": 4.5,
    "num_reseñas": 365,
    "categoria": "HomeGarden",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0FQ685GBZ?tag=chollopapis-21"
  },
  {
    "asin": "B0FFSQK3DD",
    "titulo": "Proyector 4K【1400 ANSI/Netflix Incluido/Dolby】 Smart Proyector 4K Portátil",
    "imagen": "https://m.media-amazon.com/images/I/81IdYIIyiAL._AC_SL1500_.jpg",
    "precio_oferta": 254.79,
    "precio_original": 429.0,
    "descuento": 41,
    "valoracion": 4.7,
    "num_reseñas": 3433,
    "categoria": "Electronics",
    "es_estrella": true,
    "enlace": "https://www.amazon.es/dp/B0FFSQK3DD?tag=chollopapis-21"
  },
  {
    "asin": "B0DQPSZZZQ",
    "titulo": "roborock Robot Aspirador QV 35A, 8000Pa de succión, Dos mopas giratorias elevables, cepillos antienredos, tecnología reactiva para Evitar obstáculos, navegación y mapeo,Blanco",
    "imagen": "https://m.media-amazon.com/images/I/61M8glOLVyL._AC_SL1500_.jpg",
    "precio_oferta": 329.99,
    "precio_original": 589.99,
    "descuento": 44,
    "valoracion": 4.5,
    "num_reseñas": 1535,
    "categoria": "LargeAppliances",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0DQPSZZZQ?tag=chollopapis-21"
  },
  {
    "asin": "B08H99BPJN",
    "titulo": "Playstation 5 - Mando inalámbrico DualSense",
    "imagen": "https://m.media-amazon.com/images/I/61tpbGZhxBL._AC_SL1500_.jpg",
    "precio_oferta": 54.9,
    "precio_original": 74.99,
    "descuento": 27,
    "valoracion": 4.3,
    "num_reseñas": 51865,
    "categoria": "VideoGames",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B08H99BPJN?tag=chollopapis-21"
  },
  {
    "asin": "B0GD7B5B14",
    "titulo": "Proyector 4K【Google TV/Official Apps/Auto Focus/Keystone】Proyector Portatil App Integrada Control del lenguaje 1080P FHD Nativo,WiFi 6 & Bluetooth SmartProyector para Movil/Exterior/Cine en Casa/Techo",
    "imagen": "https://m.media-amazon.com/images/I/81pBNDxkvlL._AC_SL1500_.jpg",
    "precio_oferta": 180.49,
    "precio_original": 299.0,
    "descuento": 40,
    "valoracion": 4.6,
    "num_reseñas": 330,
    "categoria": "Electronics",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0GD7B5B14?tag=chollopapis-21"
  },
  {
    "asin": "B0G81B3RRR",
    "titulo": "Dodot Toallitas Pure Aqua Para Bebé, 864 Toallitas (18 Packs de 48 Unidades), Ayuda A Restaurar El PH Natural De La Piel, 99% Agua, Sin plástico (Paquete de 2)",
    "imagen": "https://m.media-amazon.com/images/I/81jh1DU1c9L._AC_SL1500_.jpg",
    "precio_oferta": 34.06,
    "precio_original": 42.42,
    "descuento": 20,
    "valoracion": 4.8,
    "num_reseñas": 20,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0G81B3RRR?tag=chollopapis-21"
  },
  {
    "asin": "B092ZJDK8C",
    "titulo": "Mellerware - Ventilador de Techo con Mando a Distancia Brizy Bright | 30 W | 6 Velocidades | Ultra silencioso | 3 Aspas 132 de Diámetro | Función Verano-Invierno | Temporizador | LED | Lightwood",
    "imagen": "https://m.media-amazon.com/images/I/5189iPFK6iL._AC_SL1500_.jpg",
    "precio_oferta": 94.99,
    "precio_original": 139.99,
    "descuento": 32,
    "valoracion": 4.5,
    "num_reseñas": 2954,
    "categoria": "HomeGarden",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B092ZJDK8C?tag=chollopapis-21"
  },
  {
    "asin": "B0D5CZ1XGQ",
    "titulo": "Tommee Tippee Contenedor para pañales Twist & Click con 2 Recambios, Protección contra malos olores y gérmenes",
    "imagen": "https://m.media-amazon.com/images/I/710xm8i1+vL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 14.0,
    "precio_original": 34.99,
    "descuento": 60,
    "valoracion": 4.5,
    "num_reseñas": 2814,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0D5CZ1XGQ?tag=chollopapis-21"
  },
  {
    "asin": "B003P9WSVC",
    "titulo": "Philips Avent SCF281/02 Esterilizador a Vapor de Microondas",
    "imagen": "https://m.media-amazon.com/images/I/61xYM8wSRiL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 19.0,
    "precio_original": 37.99,
    "descuento": 50,
    "valoracion": 4.6,
    "num_reseñas": 5388,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B003P9WSVC?tag=chollopapis-21"
  },
  {
    "asin": "B0FDK7CCXF",
    "titulo": "Vicloon Protector de Cabeza Bebé con Rodilleras Anti-Caídas, Almohadilla Seguridad para Gatear y Caminar — Abeja",
    "imagen": "https://m.media-amazon.com/images/I/51Elm1GG2sL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 8.0,
    "precio_original": 15.59,
    "descuento": 49,
    "valoracion": 4.5,
    "num_reseñas": 509,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0FDK7CCXF?tag=chollopapis-21"
  },
  {
    "asin": "B07YYWRNF3",
    "titulo": "Tommee Tippee Contenedor de Pañales Avanzado Twist & Click, Sistema Ecológico con 12 Recambios GREENFILM",
    "imagen": "https://m.media-amazon.com/images/I/81GQ9pi3jRL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 52.0,
    "precio_original": 89.99,
    "descuento": 42,
    "valoracion": 4.4,
    "num_reseñas": 6924,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B07YYWRNF3?tag=chollopapis-21"
  },
  {
    "asin": "B00FZXNOKU",
    "titulo": "Sebamed Baby Leche Corporal Hidratante para la Piel Sensible del Bebé, Uso Diario, 400ml",
    "imagen": "https://m.media-amazon.com/images/I/31BU+okA0vL._SX342_SY445_QL70_ML2_.jpg",
    "precio_oferta": 8.0,
    "precio_original": 13.36,
    "descuento": 40,
    "valoracion": 4.7,
    "num_reseñas": 767,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B00FZXNOKU?tag=chollopapis-21"
  },
  {
    "asin": "B099RWZHV4",
    "titulo": "NUK Magic Cup Vaso Antiderrame Bebé 360°, +8 Meses, Sin BPA, 230ml — Pack 2 Unidades",
    "imagen": "https://m.media-amazon.com/images/I/81UNsIEOeYL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 13.0,
    "precio_original": 20.99,
    "descuento": 38,
    "valoracion": 4.7,
    "num_reseñas": 7564,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B099RWZHV4?tag=chollopapis-21"
  },
  {
    "asin": "B08DPMMG4G",
    "titulo": "Philips Avent Esterilizador Eléctrico a Vapor para hasta 6 Biberones y Accesorios SCF291/00",
    "imagen": "https://m.media-amazon.com/images/I/71xUum5OEGL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 47.0,
    "precio_original": 74.99,
    "descuento": 37,
    "valoracion": 4.6,
    "num_reseñas": 4562,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B08DPMMG4G?tag=chollopapis-21"
  },
  {
    "asin": "B0D5CZWVJX",
    "titulo": "Tommee Tippee Cartuchos de Recambio para Contenedor de Pañales Twist & Click, Pack 8 cartuchos 10,5m",
    "imagen": "https://m.media-amazon.com/images/I/712KcpIiUNL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 35.0,
    "precio_original": 54.99,
    "descuento": 36,
    "valoracion": 4.6,
    "num_reseñas": 3668,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0D5CZWVJX?tag=chollopapis-21"
  },
  {
    "asin": "B0CF65NYQR",
    "titulo": "Philips Avent Natural Response — 3 Biberones 120ml + 2 de 240ml, 2 Chupetes Ultra Soft 0-6M (SCD879/11)",
    "imagen": "https://m.media-amazon.com/images/I/71BHMUUioIL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 49.0,
    "precio_original": 74.99,
    "descuento": 35,
    "valoracion": 4.7,
    "num_reseñas": 5095,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0CF65NYQR?tag=chollopapis-21"
  },
  {
    "asin": "B0BVMKSY4K",
    "titulo": "Tommee Tippee Pack 18 Bolsas Recambio Twist & Click — Láminas Antibacterianas GREENFILM 10,5m",
    "imagen": "https://m.media-amazon.com/images/I/71tgo-V3iLL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 56.0,
    "precio_original": 84.99,
    "descuento": 34,
    "valoracion": 4.4,
    "num_reseñas": 492,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0BVMKSY4K?tag=chollopapis-21"
  },
  {
    "asin": "B0D45P2BPW",
    "titulo": "Philips Avent Natural Response Set Regalo — 4 Biberones 260ml con Tetinas T3 (SCY903/61)",
    "imagen": "https://m.media-amazon.com/images/I/71I7ITZeeqL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 20.0,
    "precio_original": 29.99,
    "descuento": 33,
    "valoracion": 4.8,
    "num_reseñas": 1076,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0D45P2BPW?tag=chollopapis-21"
  },
  {
    "asin": "B0CLRSBQ64",
    "titulo": "NUK Perfect Match Set — 3 Biberones Anticólico + Chupete Space Winnie the Pooh Disney, 0-6M",
    "imagen": "https://m.media-amazon.com/images/I/81oWUYU2whL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 18.0,
    "precio_original": 25.9,
    "descuento": 31,
    "valoracion": 4.4,
    "num_reseñas": 578,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0CLRSBQ64?tag=chollopapis-21"
  },
  {
    "asin": "B0DYP5SWXX",
    "titulo": "tectake® Carrito de Bebé Plegable 0-36 Meses, Arnés 5 Puntos, Respaldo Ajustable, Protección Solar UV",
    "imagen": "https://m.media-amazon.com/images/I/71Zgl3sS3OL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 69.0,
    "precio_original": 96.9,
    "descuento": 29,
    "valoracion": 4.3,
    "num_reseñas": 168,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0DYP5SWXX?tag=chollopapis-21"
  },
  {
    "asin": "B0DM9K55XD",
    "titulo": "LOBENSWERK Asiento Inodoro Familiar con Reductor Infantil Integrado, Antibacteriano y Resistente UV",
    "imagen": "https://m.media-amazon.com/images/I/71WoszufWfL._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 48.0,
    "precio_original": 64.95,
    "descuento": 26,
    "valoracion": 4.5,
    "num_reseñas": 141,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0DM9K55XD?tag=chollopapis-21"
  },
  {
    "asin": "B0FBWV9MS4",
    "titulo": "Philips Avent Chupetes Ultra Air Día y Noche — Brilla en la Oscuridad, 6-18M, Sin BPA, Pack 4",
    "imagen": "https://m.media-amazon.com/images/I/71iPtG9q78L._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 12.0,
    "precio_original": 15.99,
    "descuento": 25,
    "valoracion": 4.7,
    "num_reseñas": 136,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0FBWV9MS4?tag=chollopapis-21"
  },
  {
    "asin": "B0B59MMNKS",
    "titulo": "Mobiclinic Trona Portátil de Viaje 6-36 Meses, Hasta 15kg, Plegable, Arnés Ajustable 5 Puntos",
    "imagen": "https://m.media-amazon.com/images/I/61gRfjruK-L._AC_SY300_SX300_QL70_ML2_.jpg",
    "precio_oferta": 26.0,
    "precio_original": 32.95,
    "descuento": 21,
    "valoracion": 4.4,
    "num_reseñas": 667,
    "categoria": "Baby",
    "es_estrella": false,
    "enlace": "https://www.amazon.es/dp/B0B59MMNKS?tag=chollopapis-21"
  }
];

// ── Helpers ──────────────────────────────────────────────────────────────────
const CAT_EMOJI  = { Baby:"👶", Toys:"🧸", HomeGarden:"🏠", Kitchen:"🍳", LargeAppliances:"🫧", Electronics:"🔌", VideoGames:"🎮" };
const CAT_NOMBRE = { Baby:"Bebés", Toys:"Juguetes", HomeGarden:"Hogar", Kitchen:"Cocina", LargeAppliances:"Electrodomésticos", Electronics:"Electrónica", VideoGames:"Videoconsolas" };

function estrellas(val) {
  const l = Math.floor(val), m = (val-l)>=0.5?1:0;
  return "★".repeat(l)+(m?"½":"")+"☆".repeat(5-l-m);
}

function renderOfertas() {
  const grid = document.getElementById('grid');
  if (!OFERTAS || OFERTAS.length === 0) {
    grid.innerHTML = '<div class="empty"><span>🔍</span>Pronto habrá chollos aquí.<br>Únete al canal de Telegram para no perderte ninguno.</div>';
    return;
  }
  grid.innerHTML = OFERTAS.map(o => {
    const emoji = CAT_EMOJI[o.categoria]||'🛒', nombre = CAT_NOMBRE[o.categoria]||o.categoria;
    const img = o.imagen
      ? `<div class="card-img-wrap"><img class="card-img" src="${o.imagen}" alt="${o.titulo}" loading="lazy"></div>`
      : `<div class="card-img-wrap"><div class="card-img-placeholder">${emoji}</div></div>`;
    const precioOrig = (o.precio_original&&o.precio_original>o.precio_oferta)
      ? `<span class="price-was">${o.precio_original.toFixed(2)}€</span>` : '';
    const badge = o.descuento>0 ? `<span class="discount-badge">-${o.descuento}%</span>` : '';
    const reseñas = o.num_reseñas ? `<span class="reviews">(${o.num_reseñas.toLocaleString('es-ES')})</span>` : '';
    return `
    <article class="card${o.es_estrella?' premium':''}" data-cat="${o.categoria}">
      <a href="${o.enlace}" target="_blank" rel="noopener sponsored">${img}</a>
      <div class="card-body">
        <span class="cat-tag">${emoji} ${nombre}</span>
        <p class="card-title">${o.titulo}</p>
        <div class="price-row">
          <span class="price-now">${o.precio_oferta.toFixed(2)}€</span>
          ${precioOrig}${badge}
        </div>
        <div class="stars-row">
          <span class="stars">${estrellas(o.valoracion)}</span>
          <span class="rating-val">${o.valoracion}</span>
          ${reseñas}
        </div>
      </div>
      <div class="card-footer">
        <a href="${o.enlace}" target="_blank" rel="noopener sponsored" class="buy-btn">Ver oferta en Amazon →</a>
      </div>
    </article>`;
  }).join('');
}
renderOfertas();
