// ============================================
// CAR SPECS DATA
// ============================================

const carSpecs = {
  "tata-sierra": {
    name: "Tata Sierra",
    price: "Rs 11.49 - 21.29 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Sierra/12271/1765181428462/front-left-side-47.jpg?tr=w-300",
    specs: {
      engine: { displacement: "1497 cc", maxPower: "116 bhp @ 4000 rpm", maxTorque: "280 Nm @ 1500-2750 rpm", cylinders: "4", valves: "4 per cylinder" },
      performance: { mileage: "-", topSpeed: "-", driveType: "FWD", fuelType: "Diesel", transmissionType: "Automatic (6-Speed)" },
      dimensions: { length: "4340 mm", width: "1841 mm", height: "1715 mm", wheelbase: "2730 mm", groundClearance: "205 mm", bootSpace: "622 Litres", kerbWeight: "-" },
      comfort: { ac: "Yes", rearAC: "Yes", ventilatedSeats: "Yes", sunroof: "Panoramic", pushStart: "Yes", cruiseControl: "Yes", steeringType: "Electric" },
      safety: { airbags: "6", abs: "Yes", ebd: "Yes", tpms: "Yes", hillAssist: "Yes", esc: "Yes", rearCamera: "Yes", parkingSensors: "Front & Rear" },
      infotainment: { touchscreen: "12.3 inch", appleCarPlay: "Yes (Wireless)", androidAuto: "Yes (Wireless)", speakers: "12", wirelessCharging: "Yes" },
      exterior: { headlamps: "LED Projector", drl: "Yes", fogLamps: "LED (Front & Rear)", alloyWheels: "19 inch", tyreSize: "225/55 R19" }
    }
  },
  "hyundai-creta": {
    name: "Hyundai Creta",
    price: "Rs 10.79 - 20.20 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1755765115423/front-left-side-47.jpg?tr=w-300",
    specs: {
      engine: { displacement: "1493 cc", maxPower: "114 bhp @ 4000 rpm", maxTorque: "250 Nm @ 1500-2750 rpm", cylinders: "4", valves: "4 per cylinder" },
      performance: { mileage: "19.1 kmpl", topSpeed: "-", driveType: "FWD", fuelType: "Diesel", transmissionType: "Automatic (6-Speed AT)" },
      dimensions: { length: "4330 mm", width: "1790 mm", height: "1635 mm", wheelbase: "2610 mm", groundClearance: "-", bootSpace: "433 Litres", kerbWeight: "-" },
      comfort: { ac: "Yes", rearAC: "Yes", ventilatedSeats: "Yes", sunroof: "Panoramic", pushStart: "Yes", cruiseControl: "Yes", steeringType: "Electric" },
      safety: { airbags: "6", abs: "Yes", ebd: "Yes", tpms: "Yes", hillAssist: "Yes", esc: "Yes", rearCamera: "Yes", parkingSensors: "Front & Rear" },
      infotainment: { touchscreen: "10.25 inch", appleCarPlay: "Yes (Wireless)", androidAuto: "Yes (Wireless)", speakers: "8", wirelessCharging: "Yes" },
      exterior: { headlamps: "LED Projector", drl: "Yes", fogLamps: "-", alloyWheels: "18 inch", tyreSize: "215/55 R18" }
    }
  },
  "maruti-suzuki-swift": {
    name: "Maruti Suzuki Swift",
    price: "Rs 5.79 - 8.80 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/9226/1755777061785/front-left-side-47.jpg?tr=w-300",
    specs: {
      engine: { displacement: "1197 cc", maxPower: "80.46 bhp @ 5700 rpm", maxTorque: "111.7 Nm @ 4300 rpm", cylinders: "3", valves: "4" },
      performance: { mileage: "25.75 kmpl", topSpeed: "-", driveType: "FWD", fuelType: "Petrol", transmissionType: "5-Speed AMT" },
      dimensions: { length: "3860 mm", width: "1735 mm", height: "1520 mm", wheelbase: "2450 mm", groundClearance: "163 mm", bootSpace: "265 Litres", kerbWeight: "925 kg" },
      comfort: { ac: "Yes", rearAC: "Yes", ventilatedSeats: "No", sunroof: "No", pushStart: "Yes", cruiseControl: "Yes", steeringType: "Electric" },
      safety: { airbags: "6", abs: "Yes", ebd: "Yes", tpms: "No", hillAssist: "Yes", esc: "Yes", rearCamera: "Yes", parkingSensors: "Yes" },
      infotainment: { touchscreen: "9 inch", appleCarPlay: "Yes", androidAuto: "Yes", speakers: "4", wirelessCharging: "Yes" },
      exterior: { headlamps: "LED", drl: "Yes", fogLamps: "Yes", alloyWheels: "Yes", tyreSize: "185/65 R15" }
    }
  },
  "mahindra-thar": {
    name: "Mahindra Thar",
    price: "Rs 9.99 - 17.62 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/12264/1776055307473/front-left-side-47.jpg?tr=w-300",
    specs: {
      engine: { displacement: "2184 cc", maxPower: "130 bhp @ 3750 rpm", maxTorque: "300 Nm @ 1600-2800 rpm", cylinders: "4", valves: "4 per cylinder" },
      performance: { mileage: "11 kmpl", topSpeed: "-", driveType: "4WD", fuelType: "Diesel", transmissionType: "Automatic (6-Speed)" },
      dimensions: { length: "3985 mm", width: "1820 mm", height: "1855 mm", wheelbase: "2450 mm", groundClearance: "226 mm", bootSpace: "-", kerbWeight: "-" },
      comfort: { ac: "Yes", rearAC: "Yes", ventilatedSeats: "No", sunroof: "No", pushStart: "No", cruiseControl: "No", steeringType: "Hydraulic" },
      safety: { airbags: "2", abs: "Yes", ebd: "Yes", tpms: "Yes", hillAssist: "Yes", esc: "Yes", rearCamera: "Yes", parkingSensors: "Rear" },
      infotainment: { touchscreen: "10.24 inch", appleCarPlay: "Yes", androidAuto: "Yes", speakers: "6", wirelessCharging: "No" },
      exterior: { headlamps: "LED", drl: "Yes", fogLamps: "Front", alloyWheels: "Yes", tyreSize: "255/65 R18" }
    }
  },
  "maruti-suzuki-dzire": {
    name: "Maruti Suzuki Dzire",
    price: "Rs 6.26 - 9.31 Lakh",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Dzire/12186/1771935643542/front-left-side-47.jpg?tr=w-300",
    specs: {
      engine: { displacement: "1197 cc", maxPower: "80 bhp @ 5700 rpm", maxTorque: "111.7 Nm @ 4300 rpm", cylinders: "3", valves: "4" },
      performance: { mileage: "25.71 kmpl", topSpeed: "-", driveType: "FWD", fuelType: "Petrol", transmissionType: "5-Speed AMT" },
      dimensions: { length: "3995 mm", width: "1735 mm", height: "1525 mm", wheelbase: "2450 mm", groundClearance: "163 mm", bootSpace: "382 Litres", kerbWeight: "920-960 kg" },
      comfort: { ac: "Yes", rearAC: "Yes", ventilatedSeats: "No", sunroof: "Yes", pushStart: "Yes", cruiseControl: "Yes", steeringType: "Electric" },
      safety: { airbags: "6", abs: "Yes", ebd: "Yes", tpms: "Yes", hillAssist: "Yes", esc: "Yes", rearCamera: "Yes", parkingSensors: "Yes" },
      infotainment: { touchscreen: "9 inch", appleCarPlay: "Yes", androidAuto: "Yes", speakers: "4", wirelessCharging: "Yes" },
      exterior: { headlamps: "LED", drl: "Yes", fogLamps: "Yes", alloyWheels: "Yes", tyreSize: "185/65 R15" }
    }
  }
};

// Human-readable labels for spec keys
const specLabels = {
  engine: {
    _title: "Engine",
    displacement: "Displacement", maxPower: "Max Power", maxTorque: "Max Torque",
    cylinders: "Cylinders", valves: "Valves Per Cylinder"
  },
  performance: {
    _title: "Performance",
    mileage: "Mileage", topSpeed: "Top Speed", driveType: "Drive Type",
    fuelType: "Fuel Type", transmissionType: "Transmission"
  },
  dimensions: {
    _title: "Dimensions",
    length: "Length", width: "Width", height: "Height", wheelbase: "Wheelbase",
    groundClearance: "Ground Clearance", bootSpace: "Boot Space", kerbWeight: "Kerb Weight"
  },
  comfort: {
    _title: "Comfort",
    ac: "Air Conditioning", rearAC: "Rear AC", ventilatedSeats: "Ventilated Seats",
    sunroof: "Sunroof", pushStart: "Push Button Start", cruiseControl: "Cruise Control",
    steeringType: "Steering Type"
  },
  safety: {
    _title: "Safety",
    airbags: "Airbags", abs: "ABS", ebd: "EBD", tpms: "TPMS",
    hillAssist: "Hill Assist", esc: "ESC", rearCamera: "Rear Camera",
    parkingSensors: "Parking Sensors"
  },
  infotainment: {
    _title: "Infotainment",
    touchscreen: "Touchscreen", appleCarPlay: "Apple CarPlay",
    androidAuto: "Android Auto", speakers: "Speakers", wirelessCharging: "Wireless Charging"
  },
  exterior: {
    _title: "Exterior",
    headlamps: "Headlamps", drl: "DRLs", fogLamps: "Fog Lamps",
    alloyWheels: "Alloy Wheels", tyreSize: "Tyre Size"
  }
};

const categories = Object.keys(specLabels);


// ============================================
// STATE
// ============================================

let activeCategory = 'all';


// ============================================
// RENDER
// ============================================

function populateSelectors() {
  const keys = Object.keys(carSpecs);
  const opts = keys.map(k => `<option value="${k}">${carSpecs[k].name}</option>`).join('');
  document.getElementById('carSelect1').innerHTML = '<option value="">Select Car 1</option>' + opts;
  document.getElementById('carSelect2').innerHTML = '<option value="">Select Car 2</option>' + opts;

  // Pre-select from URL params
  const params = new URLSearchParams(window.location.search);
  const c1 = params.get('car1');
  const c2 = params.get('car2');
  if (c1) document.getElementById('carSelect1').value = c1;
  if (c2) document.getElementById('carSelect2').value = c2;
  if (c1 || c2) updateComparison();
}

function updateComparison() {
  const slug1 = document.getElementById('carSelect1').value;
  const slug2 = document.getElementById('carSelect2').value;
  const car1 = carSpecs[slug1];
  const car2 = carSpecs[slug2];

  // Show previews
  renderPreview('preview1', car1);
  renderPreview('preview2', car2);

  if (!car1 || !car2) {
    document.getElementById('comparisonResult').style.display = 'none';
    document.getElementById('emptyState').style.display = 'block';
    return;
  }

  document.getElementById('comparisonResult').style.display = 'block';
  document.getElementById('emptyState').style.display = 'none';

  renderQuickSummary(car1, car2);
  renderSpecTabs();
  renderTable(car1, car2);
}

function renderPreview(id, car) {
  const el = document.getElementById(id);
  if (!car) { el.innerHTML = ''; return; }
  el.innerHTML = `
    <img src="${car.image}" alt="${car.name}">
    <h3>${car.name}</h3>
    <div class="price">${car.price}</div>
  `;
}

function renderQuickSummary(car1, car2) {
  const highlights = [
    { label: "Price", v1: car1.price, v2: car2.price },
    { label: "Engine", v1: car1.specs.engine.displacement, v2: car2.specs.engine.displacement },
    { label: "Power", v1: car1.specs.engine.maxPower, v2: car2.specs.engine.maxPower },
    { label: "Mileage", v1: car1.specs.performance.mileage, v2: car2.specs.performance.mileage },
    { label: "Boot Space", v1: car1.specs.dimensions.bootSpace, v2: car2.specs.dimensions.bootSpace },
    { label: "Airbags", v1: car1.specs.safety.airbags, v2: car2.specs.safety.airbags }
  ];

  document.getElementById('quickSummary').innerHTML = highlights.map(h => `
    <div class="summary-card">
      <div class="summary-label">${h.label}</div>
      <div class="summary-val car1">${h.v1}</div>
      <div class="summary-vs">vs</div>
      <div class="summary-val car2">${h.v2}</div>
    </div>
  `).join('');
}

function renderSpecTabs() {
  document.getElementById('specTabs').innerHTML = `
    <button class="spec-tab ${activeCategory === 'all' ? 'active' : ''}" onclick="switchCategory('all', this)">All</button>
    ${categories.map(c => `
      <button class="spec-tab ${activeCategory === c ? 'active' : ''}" onclick="switchCategory('${c}', this)">${specLabels[c]._title}</button>
    `).join('')}
  `;
}

function switchCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.spec-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  const slug1 = document.getElementById('carSelect1').value;
  const slug2 = document.getElementById('carSelect2').value;
  renderTable(carSpecs[slug1], carSpecs[slug2]);
}

function renderTable(car1, car2) {
  document.getElementById('compTableHead').innerHTML = `<tr>
    <th>Feature</th>
    <th>${car1.name}</th>
    <th>${car2.name}</th>
  </tr>`;

  const catsToShow = activeCategory === 'all' ? categories : [activeCategory];
  let rows = '';

  catsToShow.forEach(cat => {
    // Category header row
    rows += `<tr class="cat-header-row"><td colspan="3">${specLabels[cat]._title}</td></tr>`;

    const keys = Object.keys(specLabels[cat]).filter(k => k !== '_title');
    keys.forEach(key => {
      const v1 = car1.specs[cat][key] || '-';
      const v2 = car2.specs[cat][key] || '-';
      const diff = v1 !== v2;
      rows += `<tr${diff ? ' class="diff-row"' : ''}>
        <td>${specLabels[cat][key]}</td>
        <td>${v1}</td>
        <td>${v2}</td>
      </tr>`;
    });
  });

  document.getElementById('compTableBody').innerHTML = rows;
}


// ============================================
// DARK MODE / MENU (shared)
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

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}


// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    document.querySelector('.dark-toggle-icon').innerHTML = '&#9788;';
  }
  populateSelectors();
});
