// ============================================
// CAR DETAIL DATA
// ============================================

const carDetails = {
  "tata-sierra": {
    name: "Tata Sierra",
    price: "Rs 11.49 - 21.29 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Sierra/12271/1765181428462/front-left-side-47.jpg?tr=w-300",
    category: "SUV",
    desc: "The Tata Sierra is a mid-size SUV that blends bold design with modern features. Available in petrol and diesel options with both manual and automatic transmissions.",
    specs: { engine: "1498 cc", mileage: "20-23 kmpl", seats: "5", fuel: "Petrol / Diesel" },
    variants: [
      { variant: "Smart Plus", price: "Rs 11.49 Lakh", engine: "1498 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "Smart Plus Diesel", price: "Rs 12.99 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "Pure", price: "Rs 12.99 Lakh", engine: "1498 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "Pure Plus", price: "Rs 14.49 Lakh", engine: "1498 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "Pure DCA", price: "Rs 14.49 Lakh", engine: "1498 cc", transmission: "AT", fuel: "Petrol" },
      { variant: "Pure Diesel", price: "Rs 14.49 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "Adventure", price: "Rs 15.29 Lakh", engine: "1498 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "Adventure Plus", price: "Rs 15.99 Lakh", engine: "1498 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "Adventure Diesel", price: "Rs 16.49 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "Accomplished", price: "Rs 17.99 Lakh", engine: "1498 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "Accomplished Diesel", price: "Rs 18.99 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "Accomplished Turbo", price: "Rs 19.99 Lakh", engine: "1498 cc", transmission: "AT", fuel: "Petrol" },
      { variant: "Accomplished Plus Diesel AT", price: "Rs 21.29 Lakh", engine: "1497 cc", transmission: "AT", fuel: "Diesel" }
    ]
  },
  "hyundai-creta": {
    name: "Hyundai Creta",
    price: "Rs 10.79 - 20.20 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1755765115423/front-left-side-47.jpg?tr=w-300",
    category: "SUV",
    desc: "The Hyundai Creta is one of India's best-selling SUVs, offering a premium cabin, feature-rich trims, and multiple engine options including turbo petrol and diesel.",
    specs: { engine: "1497 cc", mileage: "17-21 kmpl", seats: "5", fuel: "Petrol / Diesel / Turbo" },
    variants: [
      { variant: "E", price: "Rs 10.79 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "EX", price: "Rs 12.06 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "E Diesel", price: "Rs 12.40 Lakh", engine: "1493 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "SX", price: "Rs 15.04 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "SX Premium iVT", price: "Rs 17.78 Lakh", engine: "1497 cc", transmission: "AT", fuel: "Petrol" },
      { variant: "SX (O) Diesel", price: "Rs 18.39 Lakh", engine: "1493 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "SX (O) Diesel AT", price: "Rs 19.31 Lakh", engine: "1493 cc", transmission: "AT", fuel: "Diesel" },
      { variant: "SX (O) Turbo DCT", price: "Rs 19.49 Lakh", engine: "1482 cc", transmission: "AT", fuel: "Turbo Petrol" }
    ]
  },
  "maruti-suzuki-swift": {
    name: "Maruti Suzuki Swift",
    price: "Rs 5.79 - 8.80 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg?tr=w-300",
    category: "Hatchback",
    desc: "The Maruti Suzuki Swift is India's most popular hatchback, known for its peppy performance, great fuel efficiency, and fun-to-drive character. Available in petrol and CNG options.",
    specs: { engine: "1197 cc", mileage: "24-32 kmpl", seats: "5", fuel: "Petrol / CNG" },
    variants: [
      { variant: "LXi", price: "Rs 5.79 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "VXi", price: "Rs 6.59 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "VXi AMT", price: "Rs 7.04 Lakh", engine: "1197 cc", transmission: "AMT", fuel: "Petrol" },
      { variant: "VXi CNG", price: "Rs 7.45 Lakh", engine: "1197 cc", transmission: "MT", fuel: "CNG" },
      { variant: "ZXi", price: "Rs 7.53 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "ZXi AMT", price: "Rs 7.98 Lakh", engine: "1197 cc", transmission: "AMT", fuel: "Petrol" },
      { variant: "ZXi Plus", price: "Rs 8.20 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "ZXi Plus AMT DT", price: "Rs 8.80 Lakh", engine: "1197 cc", transmission: "AMT", fuel: "Petrol" }
    ]
  },
  "mahindra-thar": {
    name: "Mahindra Thar",
    price: "Rs 9.99 - 17.62 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/12264/1776055307473/front-left-side-47.jpg?tr=w-300",
    category: "SUV",
    desc: "The Mahindra Thar is an iconic off-road SUV built for adventure. With 4WD capability, powerful engine options, and rugged design, it's India's favourite lifestyle SUV.",
    specs: { engine: "1497-2184 cc", mileage: "15-19 kmpl", seats: "4", fuel: "Petrol / Diesel" },
    variants: [
      { variant: "AXT RWD Diesel", price: "Rs 9.99 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "LXT RWD Diesel", price: "Rs 12.70 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "LXT RWD AT", price: "Rs 14.49 Lakh", engine: "1997 cc", transmission: "AT", fuel: "Petrol" },
      { variant: "LXT 4WD", price: "Rs 15.27 Lakh", engine: "1997 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "LXT 4WD Diesel", price: "Rs 16.09 Lakh", engine: "1497 cc", transmission: "MT", fuel: "Diesel" },
      { variant: "LXT 4WD AT", price: "Rs 16.86 Lakh", engine: "1997 cc", transmission: "AT", fuel: "Petrol" },
      { variant: "LXT 4WD Diesel AT", price: "Rs 17.62 Lakh", engine: "2184 cc", transmission: "AT", fuel: "Diesel" }
    ]
  },
  "maruti-suzuki-dzire": {
    name: "Maruti Suzuki Dzire",
    price: "Rs 6.26 - 9.31 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg?tr=w-300",
    category: "Sedan",
    desc: "The Maruti Suzuki Dzire is India's best-selling compact sedan, offering class-leading mileage, a spacious cabin, and the reliability that Maruti is known for.",
    specs: { engine: "1197 cc", mileage: "23-31 kmpl", seats: "5", fuel: "Petrol / CNG" },
    variants: [
      { variant: "LXI", price: "Rs 6.26 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "VXI", price: "Rs 7.17 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "VXI AMT", price: "Rs 7.62 Lakh", engine: "1197 cc", transmission: "AMT", fuel: "Petrol" },
      { variant: "VXI CNG", price: "Rs 8.03 Lakh", engine: "1197 cc", transmission: "MT", fuel: "CNG" },
      { variant: "ZXI", price: "Rs 8.18 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "ZXI AMT", price: "Rs 8.63 Lakh", engine: "1197 cc", transmission: "AMT", fuel: "Petrol" },
      { variant: "ZXI Plus", price: "Rs 8.86 Lakh", engine: "1197 cc", transmission: "MT", fuel: "Petrol" },
      { variant: "ZXI CNG", price: "Rs 9.04 Lakh", engine: "1197 cc", transmission: "MT", fuel: "CNG" }
    ]
  },
  "maruti-suzuki-e-vitara": {
    name: "Maruti Suzuki e Vitara",
    price: "Rs 15.99 - 20.01 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/e-Vitara/13326/1771560398854/front-left-side-47.jpg?tr=w-300",
    category: "Electric SUV",
    desc: "The Maruti Suzuki e Vitara is Maruti's first electric SUV, built on the 27PL platform. It offers up to 543 km range, fast charging, and a premium cabin with modern tech.",
    specs: { engine: "Electric", mileage: "440-543 km range", seats: "5", fuel: "Electric" },
    variants: [
      { variant: "Delta", price: "Rs 15.99 Lakh", engine: "49 kWh", transmission: "AT", fuel: "440 km range" },
      { variant: "Zeta", price: "Rs 17.49 Lakh", engine: "61 kWh", transmission: "AT", fuel: "543 km range" },
      { variant: "Alpha", price: "Rs 19.79 Lakh", engine: "61 kWh", transmission: "AT", fuel: "543 km range" },
      { variant: "Alpha Dual Tone", price: "Rs 20.01 Lakh", engine: "61 kWh", transmission: "AT", fuel: "543 km range" }
    ]
  },
  "mahindra-be-6": {
    name: "Mahindra BE 6",
    price: "Rs 18.90 - 28.49 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1762423834412/front-left-side-47.jpg?tr=w-300",
    category: "Electric SUV",
    desc: "The Mahindra BE 6 is a born-electric SUV with futuristic design, up to 683 km range, and rapid charging. It's built on Mahindra's INGLO platform with two battery options.",
    specs: { engine: "Electric", mileage: "557-683 km range", seats: "5", fuel: "Electric" },
    variants: [
      { variant: "Pack One", price: "Rs 18.90 Lakh", engine: "59 kWh", transmission: "AT", fuel: "557 km range" },
      { variant: "Pack One Above", price: "Rs 20.50 Lakh", engine: "59 kWh", transmission: "AT", fuel: "557 km range" },
      { variant: "Pack Two", price: "Rs 21.90 Lakh", engine: "59 kWh", transmission: "AT", fuel: "557 km range" },
      { variant: "Pack Two 79kWh", price: "Rs 23.50 Lakh", engine: "79 kWh", transmission: "AT", fuel: "683 km range" },
      { variant: "FE2", price: "Rs 23.69 Lakh", engine: "79 kWh", transmission: "AT", fuel: "683 km range" },
      { variant: "FE3", price: "Rs 24.49 Lakh", engine: "79 kWh", transmission: "AT", fuel: "683 km range" },
      { variant: "Pack Three Select", price: "Rs 24.50 Lakh", engine: "59 kWh", transmission: "AT", fuel: "557 km range" },
      { variant: "Pack Three", price: "Rs 26.90 Lakh", engine: "79 kWh", transmission: "AT", fuel: "683 km range" }
    ]
  },
  "tata-punch-ev": {
    name: "Tata Punch EV",
    price: "Rs 9.69 - 12.59 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch-EV/13330/1772693950592/front-left-side-47.jpg?tr=w-300",
    category: "Electric SUV",
    desc: "The Tata Punch EV is an affordable electric micro-SUV with two battery options, up to 350 km range, and the fun driving character of the regular Punch in a zero-emission package.",
    specs: { engine: "Electric", mileage: "260-350 km range", seats: "5", fuel: "Electric" },
    variants: [
      { variant: "Smart 30kWh", price: "Rs 9.69 Lakh", engine: "30 kWh", transmission: "AT", fuel: "260-275 km range" },
      { variant: "Smart Plus 30kWh", price: "Rs 10.29 Lakh", engine: "30 kWh", transmission: "AT", fuel: "260-275 km range" },
      { variant: "Smart Plus 40kWh", price: "Rs 10.89 Lakh", engine: "40 kWh", transmission: "AT", fuel: "335-350 km range" },
      { variant: "Adventure 40kWh", price: "Rs 11.59 Lakh", engine: "40 kWh", transmission: "AT", fuel: "335-350 km range" },
      { variant: "Empowered 40kWh", price: "Rs 12.29 Lakh", engine: "40 kWh", transmission: "AT", fuel: "335-350 km range" },
      { variant: "Empowered Plus S 40kWh", price: "Rs 12.59 Lakh", engine: "40 kWh", transmission: "AT", fuel: "335-350 km range" }
    ]
  }
};


// ============================================
// PAGE LOGIC
// ============================================

let currentCar = null;
let activeFilters = { fuel: "all", transmission: "all" };

function getCarSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('car');
}

function renderDetailPage() {
  const slug = getCarSlug();
  currentCar = carDetails[slug];

  if (!currentCar) {
    document.querySelector('.detail-page').innerHTML = `
      <div style="text-align:center;padding:80px 20px;">
        <h2>Car not found</h2>
        <p style="margin:12px 0;color:#888;">The car you're looking for doesn't exist in our mock data.</p>
        <a href="index.html" class="back-btn">&larr; Back to home</a>
      </div>`;
    return;
  }

  document.title = `${currentCar.name} - Price, Variants | CarDekho`;

  // Breadcrumb
  document.getElementById('breadcrumbCar').textContent = currentCar.name;

  // Hero
  document.getElementById('detailHero').innerHTML = `
    <img src="${currentCar.image}" alt="${currentCar.name}">
    <div class="detail-info">
      <h1>${currentCar.name}</h1>
      <div class="detail-price">${currentCar.price} *</div>
      <p class="detail-desc">${currentCar.desc}</p>
      <div class="detail-tags">
        <span class="detail-tag">${currentCar.category}</span>
        <span class="detail-tag">${currentCar.specs.fuel}</span>
        <span class="detail-tag">${currentCar.specs.seats} Seater</span>
      </div>
    </div>
  `;

  // Specs bar
  document.getElementById('specsBar').innerHTML = `
    <div class="spec-item">
      <div class="spec-label">Engine</div>
      <div class="spec-value">${currentCar.specs.engine}</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Mileage</div>
      <div class="spec-value">${currentCar.specs.mileage}</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Seats</div>
      <div class="spec-value">${currentCar.specs.seats}</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Fuel Options</div>
      <div class="spec-value">${currentCar.specs.fuel}</div>
    </div>
    <div class="spec-item">
      <div class="spec-label">Variants</div>
      <div class="spec-value">${currentCar.variants.length}</div>
    </div>
  `;

  // Filter buttons
  renderFilters();

  // Variants table
  renderVariants();
}

function isEV() {
  return currentCar.specs.fuel === 'Electric';
}

function renderFilters() {
  const fuels = [...new Set(currentCar.variants.map(v => v.fuel))];
  const trans = [...new Set(currentCar.variants.map(v => v.transmission))];

  const fuelLabel = isEV() ? 'All Range' : 'All Fuel';
  const transLabel = 'All Trans.';

  // Only show filter groups if there's more than one option
  const fuelFilters = fuels.length > 1 ? `
    <button class="filter-btn active" onclick="setFilter('fuel','all',this)">${fuelLabel}</button>
    ${fuels.map(f => `<button class="filter-btn" onclick="setFilter('fuel','${f}',this)">${f}</button>`).join('')}
    <span style="width:8px"></span>
  ` : '';

  const transFilters = trans.length > 1 ? `
    <button class="filter-btn active" onclick="setFilter('transmission','all',this)">${transLabel}</button>
    ${trans.map(t => `<button class="filter-btn" onclick="setFilter('transmission','${t}',this)">${t}</button>`).join('')}
  ` : '';

  document.getElementById('filterRow').innerHTML = fuelFilters + transFilters;
}

function setFilter(type, value, btn) {
  activeFilters[type] = value;

  // Update button states within the same group
  const allBtns = document.getElementById('filterRow').querySelectorAll('.filter-btn');
  allBtns.forEach(b => {
    const isFuelBtn = !['MT', 'AT', 'AMT', 'All Trans.'].includes(b.textContent);
    if (type === 'fuel' && isFuelBtn) b.classList.remove('active');
    if (type === 'transmission' && !isFuelBtn) b.classList.remove('active');
  });
  btn.classList.add('active');

  renderVariants();
}

function renderVariants() {
  let filtered = currentCar.variants;

  if (activeFilters.fuel !== 'all') {
    filtered = filtered.filter(v => v.fuel === activeFilters.fuel);
  }
  if (activeFilters.transmission !== 'all') {
    filtered = filtered.filter(v => v.transmission === activeFilters.transmission);
  }

  const ev = isEV();

  // Dynamic table headers
  document.getElementById('variantsHead').innerHTML = `<tr>
    <th>Variant</th>
    <th>Price</th>
    <th>${ev ? 'Battery' : 'Engine'}</th>
    <th>${ev ? 'Range' : 'Fuel'}</th>
    <th>Transmission</th>
  </tr>`;

  const tbody = document.getElementById('variantsBody');
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#888;padding:24px;">No variants match these filters</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(v => `
    <tr>
      <td><strong>${v.variant}</strong></td>
      <td>${v.price}</td>
      <td>${v.engine}</td>
      <td>${v.fuel}</td>
      <td>${v.transmission}</td>
    </tr>
  `).join('');
}


// ============================================
// DARK MODE (shared with main page)
// ============================================

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const icon = document.querySelector('.dark-toggle-icon');
  if (document.body.classList.contains('dark')) {
    icon.innerHTML = '&#9788;';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.innerHTML = '&#9790;';
    localStorage.setItem('theme', 'light');
  }
}

function loadTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.dark-toggle-icon').innerHTML = '&#9788;';
  }
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}


// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  renderDetailPage();
});
