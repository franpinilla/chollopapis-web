// Actualizado: 2025-06-09 — 17 ofertas reales de bebés
const OFERTAS = [
  {"asin":"B0D5CZ1XGQ","titulo":"Tommee Tippee Contenedor para pañales Twist & Click con 2 Recambios, Protección contra malos olores y gérmenes","imagen":"https://m.media-amazon.com/images/I/710xm8i1+vL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":14.0,"precio_original":34.99,"descuento":60,"valoracion":4.5,"num_reseñas":2814,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0D5CZ1XGQ?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:00:00"},
  {"asin":"B003P9WSVC","titulo":"Philips Avent SCF281/02 Esterilizador a Vapor de Microondas","imagen":"https://m.media-amazon.com/images/I/61xYM8wSRiL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":19.0,"precio_original":37.99,"descuento":50,"valoracion":4.6,"num_reseñas":5388,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B003P9WSVC?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:02:00"},
  {"asin":"B0FDK7CCXF","titulo":"Vicloon Protector de Cabeza Bebé con Rodilleras Anti-Caídas, Almohadilla Seguridad para Gatear y Caminar — Abeja","imagen":"https://m.media-amazon.com/images/I/51Elm1GG2sL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":8.0,"precio_original":15.59,"descuento":49,"valoracion":4.5,"num_reseñas":509,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0FDK7CCXF?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:04:00"},
  {"asin":"B07YYWRNF3","titulo":"Tommee Tippee Contenedor de Pañales Avanzado Twist & Click, Sistema Ecológico con 12 Recambios GREENFILM","imagen":"https://m.media-amazon.com/images/I/81GQ9pi3jRL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":52.0,"precio_original":89.99,"descuento":42,"valoracion":4.4,"num_reseñas":6924,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B07YYWRNF3?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:06:00"},
  {"asin":"B00FZXNOKU","titulo":"Sebamed Baby Leche Corporal Hidratante para la Piel Sensible del Bebé, Uso Diario, 400ml","imagen":"https://m.media-amazon.com/images/I/31BU+okA0vL._SX342_SY445_QL70_ML2_.jpg","precio_oferta":8.0,"precio_original":13.36,"descuento":40,"valoracion":4.7,"num_reseñas":767,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B00FZXNOKU?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:08:00"},
  {"asin":"B099RWZHV4","titulo":"NUK Magic Cup Vaso Antiderrame Bebé 360°, +8 Meses, Sin BPA, 230ml — Pack 2 Unidades","imagen":"https://m.media-amazon.com/images/I/81UNsIEOeYL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":13.0,"precio_original":20.99,"descuento":38,"valoracion":4.7,"num_reseñas":7564,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B099RWZHV4?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:10:00"},
  {"asin":"B08DPMMG4G","titulo":"Philips Avent Esterilizador Eléctrico a Vapor para hasta 6 Biberones y Accesorios SCF291/00","imagen":"https://m.media-amazon.com/images/I/71xUum5OEGL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":47.0,"precio_original":74.99,"descuento":37,"valoracion":4.6,"num_reseñas":4562,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B08DPMMG4G?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:12:00"},
  {"asin":"B0D5CZWVJX","titulo":"Tommee Tippee Cartuchos de Recambio para Contenedor de Pañales Twist & Click, Pack 8 cartuchos 10,5m","imagen":"https://m.media-amazon.com/images/I/712KcpIiUNL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":35.0,"precio_original":54.99,"descuento":36,"valoracion":4.6,"num_reseñas":3668,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0D5CZWVJX?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:14:00"},
  {"asin":"B0CF65NYQR","titulo":"Philips Avent Natural Response — 3 Biberones 120ml + 2 de 240ml, 2 Chupetes Ultra Soft 0-6M (SCD879/11)","imagen":"https://m.media-amazon.com/images/I/71BHMUUioIL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":49.0,"precio_original":74.99,"descuento":35,"valoracion":4.7,"num_reseñas":5095,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0CF65NYQR?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:16:00"},
  {"asin":"B0BVMKSY4K","titulo":"Tommee Tippee Pack 18 Bolsas Recambio Twist & Click — Láminas Antibacterianas GREENFILM 10,5m","imagen":"https://m.media-amazon.com/images/I/71tgo-V3iLL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":56.0,"precio_original":84.99,"descuento":34,"valoracion":4.4,"num_reseñas":492,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0BVMKSY4K?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:18:00"},
  {"asin":"B0D45P2BPW","titulo":"Philips Avent Natural Response Set Regalo — 4 Biberones 260ml con Tetinas T3 (SCY903/61)","imagen":"https://m.media-amazon.com/images/I/71I7ITZeeqL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":20.0,"precio_original":29.99,"descuento":33,"valoracion":4.8,"num_reseñas":1076,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0D45P2BPW?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:20:00"},
  {"asin":"B0CLRSBQ64","titulo":"NUK Perfect Match Set — 3 Biberones Anticólico + Chupete Space Winnie the Pooh Disney, 0-6M","imagen":"https://m.media-amazon.com/images/I/81oWUYU2whL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":18.0,"precio_original":25.9,"descuento":31,"valoracion":4.4,"num_reseñas":578,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0CLRSBQ64?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:22:00"},
  {"asin":"B0DYP5SWXX","titulo":"tectake® Carrito de Bebé Plegable 0-36 Meses, Arnés 5 Puntos, Respaldo Ajustable, Protección Solar UV","imagen":"https://m.media-amazon.com/images/I/71Zgl3sS3OL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":69.0,"precio_original":96.9,"descuento":29,"valoracion":4.3,"num_reseñas":168,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0DYP5SWXX?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:24:00"},
  {"asin":"B0DM9K55XD","titulo":"LOBENSWERK Asiento Inodoro Familiar con Reductor Infantil Integrado, Antibacteriano y Resistente UV","imagen":"https://m.media-amazon.com/images/I/71WoszufWfL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":48.0,"precio_original":64.95,"descuento":26,"valoracion":4.5,"num_reseñas":141,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0DM9K55XD?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:26:00"},
  {"asin":"B0FBWV9MS4","titulo":"Philips Avent Chupetes Ultra Air Día y Noche — Brilla en la Oscuridad, 6-18M, Sin BPA, Pack 4","imagen":"https://m.media-amazon.com/images/I/71iPtG9q78L._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":12.0,"precio_original":15.99,"descuento":25,"valoracion":4.7,"num_reseñas":136,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0FBWV9MS4?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:28:00"},
  {"asin":"B0B59MMNKS","titulo":"Mobiclinic Trona Portátil de Viaje 6-36 Meses, Hasta 15kg, Plegable, Arnés Ajustable 5 Puntos","imagen":"https://m.media-amazon.com/images/I/61gRfjruK-L._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":26.0,"precio_original":32.95,"descuento":21,"valoracion":4.4,"num_reseñas":667,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0B59MMNKS?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:30:00"},
  {"asin":"B0FLX1DNKN","titulo":"Dodot Sensitive Kit Recién Nacido — 136 Pañales Talla 2+3 + 48 Toallitas Pure Aqua 99% Agua","imagen":"https://m.media-amazon.com/images/I/81SBEl8JjPL._AC_SY300_SX300_QL70_ML2_.jpg","precio_oferta":41.0,"precio_original":51.49,"descuento":20,"valoracion":4.4,"num_reseñas":26,"categoria":"Baby","es_estrella":false,"enlace":"https://www.amazon.es/dp/B0FLX1DNKN?tag=chollopapis-21","fecha_publicacion":"2025-06-09T09:32:00"}
];

// ── Helpers ───────────────────────────────────────────────────────────────────
const CAT_EMOJI  = {Baby:"👶",Toys:"🧸",HomeGarden:"🏠",Kitchen:"🍳",LargeAppliances:"🫧",Electronics:"🔌",VideoGames:"🎮"};
const CAT_NOMBRE = {Baby:"Bebés",Toys:"Juguetes",HomeGarden:"Hogar",Kitchen:"Cocina",LargeAppliances:"Electrodomésticos",Electronics:"Electrónica",VideoGames:"Videoconsolas"};

function estrellas(v) {
  const l=Math.floor(v), m=(v-l)>=.5?1:0;
  return "★".repeat(l)+(m?"½":"")+"☆".repeat(5-l-m);
}

function tiempoRelativo(fechaISO) {
  if (!fechaISO) return "Publicado hoy";
  const diff = Math.floor((new Date() - new Date(fechaISO)) / 60000);
  if (diff < 2)    return "Ahora mismo";
  if (diff < 60)   return `Hace ${diff} min`;
  if (diff < 1440) return `Hace ${Math.floor(diff/60)} h`;
  const d = Math.floor(diff/1440);
  if (d === 0) return "Publicado hoy";
  if (d === 1) return "Ayer";
  return `Hace ${d} días`;
}

// ── Renderizado ───────────────────────────────────────────────────────────────
function renderOfertas() {
  const grid = document.getElementById('grid');
  if (!grid) return;
  if (!OFERTAS || OFERTAS.length === 0) {
    grid.innerHTML = '<div class="empty"><span>🔍</span>Pronto habrá chollos aquí.<br>Únete al canal de Telegram para no perderte ninguno.</div>';
    return;
  }

  grid.innerHTML = OFERTAS.map(o => {
    const emoji  = CAT_EMOJI[o.categoria]  || '🛒';
    const nombre = CAT_NOMBRE[o.categoria] || o.categoria;
    const img    = o.imagen
      ? `<div class="card-img-wrap"><img class="card-img" src="${o.imagen}" alt="${o.titulo}" loading="lazy"></div>`
      : `<div class="card-img-wrap"><div class="card-img-placeholder">${emoji}</div></div>`;
    const precioOrig = (o.precio_original && o.precio_original > o.precio_oferta)
      ? `<span class="price-was">${o.precio_original.toFixed(2)}€</span>` : '';
    const badge   = o.descuento > 0 ? `<span class="discount-badge">-${o.descuento}%</span>` : '';
    const reseñas = o.num_reseñas ? `<span class="reviews">(${o.num_reseñas.toLocaleString('es-ES')})</span>` : '';
    const fecha   = `<div class="card-date">${tiempoRelativo(o.fecha_publicacion || null)}</div>`;

    return `
    <article class="card${o.es_estrella ? ' premium' : ''}" data-cat="${o.categoria}">
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
        ${fecha}
      </div>
      <div class="card-footer">
        <a href="${o.enlace}" target="_blank" rel="noopener sponsored" class="buy-btn">Ver oferta en Amazon →</a>
      </div>
    </article>`;
  }).join('');
}

renderOfertas();
