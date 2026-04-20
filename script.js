// ============================================
// CAR DATA — Our 5 mock cars
// ============================================
const cars = [
  {
    name: "Tata Sierra",
    slug: "tata-sierra",
    price: "Rs 11.49 - 21.29 Lakh",
    category: "suv",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Sierra/12271/1765181428462/front-left-side-47.jpg?tr=w-300"
  },
  {
    name: "Hyundai Creta",
    slug: "hyundai-creta",
    price: "Rs 10.79 - 20.20 Lakh",
    category: "suv",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1755765115423/front-left-side-47.jpg?tr=w-300"
  },
  {
    name: "Maruti Suzuki Swift",
    slug: "maruti-suzuki-swift",
    price: "Rs 5.79 - 8.80 Lakh",
    category: "hatchback",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg?tr=w-300"
  },
  {
    name: "Mahindra Thar",
    slug: "mahindra-thar",
    price: "Rs 9.99 - 17.62 Lakh",
    category: "suv",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/12264/1776055307473/front-left-side-47.jpg?tr=w-300"
  },
  {
    name: "Maruti Suzuki Dzire",
    slug: "maruti-suzuki-dzire",
    price: "Rs 6.26 - 9.31 Lakh",
    category: "sedan",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg?tr=w-300"
  }
];

// Electric cars
const evCars = [
  {
    name: "Maruti Suzuki e Vitara",
    price: "Rs 15.99 - 20.01 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/e-Vitara/13326/1771560398854/front-left-side-47.jpg?tr=w-300"
  },
  {
    name: "Mahindra BE 6",
    price: "Rs 18.90 - 28.49 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1762423834412/front-left-side-47.jpg?tr=w-300"
  },
  {
    name: "Tata Punch EV",
    price: "Rs 9.69 - 12.59 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch-EV/13330/1772693950592/front-left-side-47.jpg?tr=w-300"
  }
];

// Used cars
const usedCars = [
  {
    name: "Tata Sierra",
    price: "Rs 8.75 Lakh",
    year: 2023,
    mileage: "18,500 km",
    location: "Mumbai",
    image: cars[0].image,
    category: "suv"
  },
  {
    name: "Hyundai Creta",
    price: "Rs 9.20 Lakh",
    year: 2022,
    mileage: "32,000 km",
    location: "Delhi NCR",
    image: cars[1].image,
    category: "suv"
  },
  {
    name: "Maruti Suzuki Swift",
    price: "Rs 4.10 Lakh",
    year: 2021,
    mileage: "45,200 km",
    location: "Bangalore",
    image: cars[2].image,
    category: "hatchback"
  },
  {
    name: "Mahindra Thar",
    price: "Rs 7.50 Lakh",
    year: 2022,
    mileage: "27,800 km",
    location: "Pune",
    image: cars[3].image,
    category: "suv"
  },
  {
    name: "Maruti Suzuki Dzire",
    price: "Rs 4.85 Lakh",
    year: 2023,
    mileage: "15,600 km",
    location: "Chennai",
    image: cars[4].image,
    category: "sedan"
  }
];

// Brands
const brands = [
  { name: "Maruti Suzuki", letter: "M" },
  { name: "Tata", letter: "T" },
  { name: "Hyundai", letter: "H" },
  { name: "Mahindra", letter: "Ma" },
  { name: "Kia", letter: "K" },
  { name: "Toyota", letter: "To" },
  { name: "Honda", letter: "Ho" },
  { name: "MG Motor", letter: "MG" }
];

// Comparison pairs
const comparisons = [
  {
    car1: { name: "Tata Sierra", price: "Rs 11.49 - 21.29 L", image: cars[0].image },
    car2: { name: "Hyundai Creta", price: "Rs 10.79 - 20.20 L", image: cars[1].image }
  },
  {
    car1: { name: "Maruti Swift", price: "Rs 5.79 - 8.80 L", image: cars[2].image },
    car2: { name: "Maruti Dzire", price: "Rs 6.26 - 9.31 L", image: cars[4].image }
  }
];

// Cities
const cities = [
  "Delhi NCR", "Mumbai", "Bangalore", "Chennai",
  "Hyderabad", "Pune", "Kolkata", "Jaipur"
];


// ============================================
// PRICE PARSER & BUDGET RANGES
// ============================================

function parsePrice(priceStr) {
  const match = priceStr.match(/Rs\s+([\d.]+)/);
  return match ? parseFloat(match[1]) : NaN;
}

const budgetRanges = {
  under5:  { min: 0,  max: 5,       label: "Cars Under 5 Lakh" },
  '5to10':   { min: 5,  max: 10,      label: "Cars 5 - 10 Lakh" },
  '10to15':  { min: 10, max: 15,      label: "Cars 10 - 15 Lakh" },
  '15to25':  { min: 15, max: 25,      label: "Cars 15 - 25 Lakh" },
  above25: { min: 25, max: Infinity, label: "Cars Above 25 Lakh" }
};


// ============================================
// RENDER FUNCTIONS
// ============================================

function createCarCard(car) {
  const category = car.category || 'electric';
  const slug = car.slug || car.name.toLowerCase().replace(/\s+/g, '-');
  return `
    <div class="car-card" data-category="${category}">
      <img src="${car.image}" alt="${car.name}" loading="lazy">
      <div class="car-card-body">
        <span class="tag tag-${category}">${category.toUpperCase()}</span>
        <h3>${car.name}</h3>
        <div class="price">${car.price}</div>
        <a href="detail.html?car=${slug}" class="offer-btn">View Offers</a>
      </div>
    </div>
  `;
}

function createUsedCarCard(car) {
  const slug = car.name.toLowerCase().replace(/\s+/g, '-');
  return `
    <div class="used-car-card" data-category="${car.category}">
      <div class="car-card-img">
        <img src="${car.image}" alt="${car.name}" loading="lazy">
        <span class="used-badge">USED</span>
      </div>
      <div class="car-card-body">
        <span class="tag tag-${car.category}">${car.category.toUpperCase()}</span>
        <h3>${car.name}</h3>
        <div class="used-car-meta">
          <span>${car.year}</span>
          <span>${car.mileage}</span>
          <span>${car.location}</span>
        </div>
        <div class="price">${car.price}</div>
        <a href="detail.html?car=${slug}" class="offer-btn">View Details</a>
      </div>
    </div>
  `;
}

function renderCars(filter = 'all') {
  const grid = document.getElementById('carGrid');
  const filtered = filter === 'all' ? cars : cars.filter(c => c.category === filter);
  grid.innerHTML = filtered.map(createCarCard).join('');
}

function renderUsedCars() {
  document.getElementById('usedCarGrid').innerHTML = usedCars.map(createUsedCarCard).join('');
}

function renderEVs() {
  document.getElementById('evRow').innerHTML = evCars.map(createCarCard).join('');
}

function renderBrands() {
  document.getElementById('brandsGrid').innerHTML = brands.map(b => `
    <div class="brand-card" onclick="filterByBrand('${b.name}')">
      <div class="brand-icon">${b.letter}</div>
      <div class="brand-name">${b.name}</div>
    </div>
  `).join('');
}

function renderComparisons() {
  document.getElementById('compareGrid').innerHTML = comparisons.map(c => `
    <div class="compare-card">
      <div class="compare-car">
        <img src="${c.car1.image}" alt="${c.car1.name}" loading="lazy">
        <h4>${c.car1.name}</h4>
        <div class="price">${c.car1.price}</div>
      </div>
      <div class="vs-badge">VS</div>
      <div class="compare-car">
        <img src="${c.car2.image}" alt="${c.car2.name}" loading="lazy">
        <h4>${c.car2.name}</h4>
        <div class="price">${c.car2.price}</div>
      </div>
    </div>
  `).join('');
}

function renderCities() {
  document.getElementById('cityGrid').innerHTML = cities.map(city => `
    <div class="city-card" onclick="alert('Showing used cars in ${city}')">
      <div class="city-icon">&#127961;</div>
      Used Cars in ${city}
    </div>
  `).join('');
}


// ============================================
// SEARCH — Budget & Brand
// ============================================

let currentSearchMode = 'budget';

function renderSearchInputs(type) {
  const container = document.getElementById('searchInputs');

  if (type === 'budget') {
    container.innerHTML = `
      <select id="searchSelect">
        <option value="">Select Budget</option>
        <option value="under5">Under 5 Lakh</option>
        <option value="5to10">5 - 10 Lakh</option>
        <option value="10to15">10 - 15 Lakh</option>
        <option value="15to25">15 - 25 Lakh</option>
        <option value="above25">Above 25 Lakh</option>
      </select>
      <button class="search-btn" onclick="handleSearch()">Search Cars</button>
    `;
  } else {
    container.innerHTML = `
      <select id="searchSelect">
        <option value="">Select Brand</option>
        ${brands.map(b => `<option value="${b.name}">${b.name}</option>`).join('')}
      </select>
      <button class="search-btn" onclick="handleSearch()">Search Cars</button>
    `;
  }
}

function handleSearch() {
  const val = document.getElementById('searchSelect').value;
  if (!val) {
    alert('Please select an option first!');
    return;
  }

  const grid = document.getElementById('carGrid');

  // Remove any previous search header
  const oldHeader = document.getElementById('searchResultsHeader');
  if (oldHeader) oldHeader.remove();

  // Reset category tabs
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));

  if (currentSearchMode === 'brand') {
    // --- BRAND SEARCH ---
    const allCars = [...cars, ...evCars, ...usedCars];
    const brandLower = val.toLowerCase().split(' ')[0];
    const matches = allCars.filter(c => c.name.toLowerCase().includes(brandLower));

    const header = document.createElement('div');
    header.id = 'searchResultsHeader';
    header.className = 'search-results-header';
    header.innerHTML = `
      <span>Showing results for "<strong>${val}</strong>"</span>
      <button class="clear-search-btn" onclick="clearSearch()">Clear search</button>
    `;
    grid.parentNode.insertBefore(header, grid);

    if (matches.length > 0) {
      grid.innerHTML = matches.map(c =>
        c.year ? createUsedCarCard(c) : createCarCard(c)
      ).join('');
    } else {
      grid.innerHTML = `<div class="no-results">No cars found for "${val}". <a href="#" onclick="clearSearch(); return false;">Browse all cars</a></div>`;
    }

  } else {
    // --- BUDGET SEARCH ---
    const range = budgetRanges[val];
    const allCars = [...cars, ...evCars];
    const matches = allCars.filter(car => {
      const price = parsePrice(car.price);
      return !isNaN(price) && price >= range.min && price < range.max;
    });

    const header = document.createElement('div');
    header.id = 'searchResultsHeader';
    header.className = 'search-results-header';
    header.innerHTML = `
      <span>${range.label} <strong>(${matches.length} found)</strong></span>
      <button class="clear-search-btn" onclick="clearSearch()">Clear search</button>
    `;
    grid.parentNode.insertBefore(header, grid);

    if (matches.length > 0) {
      grid.innerHTML = matches.map(createCarCard).join('');
    } else {
      grid.innerHTML = `<div class="no-results">No cars found in this range. <a href="#" onclick="clearSearch(); return false;">Browse all cars</a></div>`;
    }
  }

  document.getElementById('new-cars').scrollIntoView({ behavior: 'smooth' });
}

function clearSearch() {
  const oldHeader = document.getElementById('searchResultsHeader');
  if (oldHeader) oldHeader.remove();
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.querySelector('.cat-tab').classList.add('active');
  renderCars();
  document.getElementById('new-cars').scrollIntoView({ behavior: 'smooth' });
}

function switchSearchTab(btn, type) {
  document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  currentSearchMode = type;
  renderSearchInputs(type);
}


// ============================================
// FILTER / BRAND CLICK
// ============================================

function filterCars(btn, category) {
  // Clear any active search header first
  const oldHeader = document.getElementById('searchResultsHeader');
  if (oldHeader) oldHeader.remove();
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderCars(category);
}

function filterByBrand(brandName) {
  document.getElementById('new-cars').scrollIntoView({ behavior: 'smooth' });
  const grid = document.getElementById('carGrid');
  const allCars = [...cars, ...evCars];
  const matches = allCars.filter(c =>
    c.name.toLowerCase().includes(brandName.toLowerCase().split(' ')[0])
  );

  // Remove old header, add new one
  const oldHeader = document.getElementById('searchResultsHeader');
  if (oldHeader) oldHeader.remove();
  const header = document.createElement('div');
  header.id = 'searchResultsHeader';
  header.className = 'search-results-header';
  header.innerHTML = `
    <span>Showing results for "<strong>${brandName}</strong>"</span>
    <button class="clear-search-btn" onclick="clearSearch()">Clear search</button>
  `;
  grid.parentNode.insertBefore(header, grid);

  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));

  if (matches.length > 0) {
    grid.innerHTML = matches.map(createCarCard).join('');
  } else {
    grid.innerHTML = `<div class="no-results">No cars found for "${brandName}". <a href="#" onclick="clearSearch(); return false;">Browse all cars</a></div>`;
  }
}


// ============================================
// DARK MODE
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


// ============================================
// MOBILE MENU
// ============================================

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}


// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.nav-links').classList.remove('open');
    }
  });
});


// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderCars();
  renderUsedCars();
  renderEVs();
  renderBrands();
  renderComparisons();
  renderCities();
  renderSearchInputs('budget');
  loadTheme();
});
