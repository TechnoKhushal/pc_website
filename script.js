window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('header');
  
    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

window.addEventListener('scroll', function() {
  const missionSection = document.querySelector('.mission');
  const teamSection = document.querySelector('.team');
    
  if (window.scrollY > missionSection.offsetTop - 300) {
    missionSection.classList.add('fade-in');
  }
  
  if (window.scrollY > teamSection.offsetTop - 300) {
    teamSection.classList.add('fade-in');
  }
});

// Update price and selected components dynamically
document.querySelectorAll('select').forEach(select => {
  select.addEventListener('change', updatePrice);
});

function updatePrice() {
  const cpu = document.getElementById('cpu-select').value;
  const gpu = document.getElementById('gpu-select').value;
  const ram = document.getElementById('ram-select').value;
  const storage = document.getElementById('storage-select').value;
  const caseSelected = document.getElementById('case-select').value;

  // Component prices (these can be dynamic if connected to a backend)
  const prices = {
    "intel-i9": 500,
    "amd-ryzen": 450,
    "intel-i7": 300,
    "amd-ryzen-7": 350,
    "nvidia-rtx-3080": 700,
    "amd-radeon-6900xt": 650,
    "nvidia-rtx-3070": 500,
    "amd-radeon-6700xt": 450,
    "16gb": 80,
    "32gb": 150,
    "64gb": 250,
    "500gb-ssd": 60,
    "1tb-ssd": 100,
    "2tb-ssd": 180,
    "mid-tower": 100,
    "full-tower": 150,
    "mini-tower": 120
  };

  // Calculate total price
  let total = prices[cpu] + prices[gpu] + prices[ram] + prices[storage] + prices[caseSelected];

  // Update displayed prices
  document.getElementById('cpu-price').textContent = `${cpu.replace(/-/g, ' ')} - $${prices[cpu]}`;
  document.getElementById('gpu-price').textContent = `${gpu.replace(/-/g, ' ')} - $${prices[gpu]}`;
  document.getElementById('ram-price').textContent = `${ram.replace(/-/g, ' ')} - $${prices[ram]}`;
  document.getElementById('storage-price').textContent = `${storage.replace(/-/g, ' ')} - $${prices[storage]}`;
  document.getElementById('case-price').textContent = `${caseSelected.replace(/-/g, ' ')} - $${prices[caseSelected]}`;
  document.getElementById('total-price').textContent = `$${total}`;
}
// Function to handle adding PCs to the cart (for now it just shows an alert)
function addToCart(pcName, price) {
  alert(`${pcName} has been added to your cart for $${price}`);
}
document.addEventListener('DOMContentLoaded', () => {
  const ctaBtn = document.querySelector('.cta-btn'); 

  ctaBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.add('animate-out');

    setTimeout(() => {
      window.location.href = 'customize.html'; 
    }, 1000); 
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Component price mapping
  const prices = {
    cpu: {
      'intel-i9': 500,
      'amd-ryzen': 450,
      'intel-i7': 350,
      'amd-ryzen-7': 300,
    },
    gpu: {
      'nvidia-rtx-3080': 700,
      'amd-radeon-6900xt': 650,
      'nvidia-rtx-3070': 500,
      'amd-radeon-6700xt': 450,
    },
    ram: {
      '16gb': 80,
      '32gb': 160,
      '64gb': 250,
    },
    storage: {
      '500gb-ssd': 60,
      '1tb-ssd': 100,
      '2tb-ssd': 180,
    },
    case: {
      'mid-tower': 100,
      'full-tower': 150,
      'mini-tower': 80,
    },
    motherboard: {
      'mid-tower': 120,
      'full-tower': 170,
      'mini-tower': 100,
    },
    powerSupply: {
      'mid-tower': 80,
      'full-tower': 100,
      'mini-tower': 60,
    },
    cooler: {
      'mid-tower': 80,
      'full-tower': 100,
      'mini-tower': 60,
    },
    monitor: {
      'mid-tower': 200,
      'full-tower': 250,
      'mini-tower': 180,
    }
  };

  // Update price summary
  function updatePriceSummary() {
    const cpu = document.getElementById('cpu-select').value;
    const gpu = document.getElementById('gpu-select').value;
    const ram = document.getElementById('ram-select').value;
    const storage = document.getElementById('storage-select').value;
    const caseOption = document.getElementById('case-select').value;
    const motherboard = document.getElementById('motherboard-select').value;
    const powerSupply = document.getElementById('power-supply-select').value;
    const cooler = document.getElementById('cooler-select').value;
    const monitor = document.getElementById('monitor-select').value;

    const totalPrice = (
      prices.cpu[cpu] +
      prices.gpu[gpu] +
      prices.ram[ram] +
      prices.storage[storage] +
      prices.case[caseOption] +
      prices.motherboard[motherboard] +
      prices.powerSupply[powerSupply] +
      prices.cooler[cooler] +
      prices.monitor[monitor]
    );

    document.getElementById('cpu-price').textContent = `${cpu.replace('-', ' ')} - $${prices.cpu[cpu]}`;
    document.getElementById('gpu-price').textContent = `${gpu.replace('-', ' ')} - $${prices.gpu[gpu]}`;
    document.getElementById('ram-price').textContent = `${ram.replace('-', ' ')} - $${prices.ram[ram]}`;
    document.getElementById('storage-price').textContent = `${storage.replace('-', ' ')} - $${prices.storage[storage]}`;
    document.getElementById('case-price').textContent = `${caseOption.replace('-', ' ')} - $${prices.case[caseOption]}`;
    document.getElementById('motherboard-price').textContent = `${motherboard.replace('-', ' ')} - $${prices.motherboard[motherboard]}`;
    document.getElementById('power-supply-price').textContent = `${powerSupply.replace('-', ' ')} - $${prices.powerSupply[powerSupply]}`;
    document.getElementById('cooler-price').textContent = `${cooler.replace('-', ' ')} - $${prices.cooler[cooler]}`;
    document.getElementById('monitor-price').textContent = `${monitor.replace('-', ' ')} - $${prices.monitor[monitor]}`;
    document.getElementById('total-price').textContent = `$${totalPrice}`;
  }

  // Add event listeners for each select
  const selects = document.querySelectorAll('select');
  selects.forEach(select => {
    select.addEventListener('change', updatePriceSummary);
  });

  // Initialize price on page load
  updatePriceSummary();
});
// JavaScript for updating the price summary dynamically
const cpuSelect = document.getElementById('cpu-select');
const gpuSelect = document.getElementById('gpu-select');
const ramSelect = document.getElementById('ram-select');
const storageSelect = document.getElementById('storage-select');
const caseSelect = document.getElementById('case-select');
const motherboardSelect = document.getElementById('motherboard-select');
const powerSupplySelect = document.getElementById('power-supply-select');
const coolerSelect = document.getElementById('cooler-select');
const monitorSelect = document.getElementById('monitor-select');

// Price mapping
const prices = {
  "intel-i9": 500,
  "amd-ryzen": 450,
  "intel-i7": 350,
  "amd-ryzen-7": 400,
  "nvidia-rtx-3080": 700,
  "amd-radeon-6900xt": 650,
  "nvidia-rtx-3070": 500,
  "amd-radeon-6700xt": 400,
  "16gb": 80,
  "32gb": 150,
  "64gb": 300,
  "500gb-ssd": 60,
  "1tb-ssd": 100,
  "2tb-ssd": 180,
  "mid-tower": 100,
  "full-tower": 120,
  "mini-tower": 80,
};

const selectedComponents = {
  cpu: "intel-i9",
  gpu: "nvidia-rtx-3080",
  ram: "16gb",
  storage: "500gb-ssd",
  case: "mid-tower",
  motherboard: "mid-tower",
  powerSupply: "mid-tower",
  cooler: "mid-tower",
  monitor: "mid-tower"
};

// Update price display
function updatePriceSummary() {
  const selectedComponentElements = document.querySelectorAll('#selected-components li span');
  const totalPriceElement = document.getElementById('total-price');

  // Update each component's price
  selectedComponentElements.forEach(item => {
    const component = item.id.split('-')[0]; // Get the component name (cpu, gpu, etc.)
    const selectedOption = document.getElementById(`${component}-select`).value;
    item.textContent = `${selectedOption} - $${prices[selectedOption]}`;
  });

  // Calculate total price
  let totalPrice = 0;
  for (const component in selectedComponents) {
    totalPrice += prices[selectedComponents[component]];
  }

  totalPriceElement.textContent = `$${totalPrice}`;
}

// Event listeners for component selection changes
cpuSelect.addEventListener('change', updatePriceSummary);
gpuSelect.addEventListener('change', updatePriceSummary);
ramSelect.addEventListener('change', updatePriceSummary);
storageSelect.addEventListener('change', updatePriceSummary);
caseSelect.addEventListener('change', updatePriceSummary);
motherboardSelect.addEventListener('change', updatePriceSummary);
powerSupplySelect.addEventListener('change', updatePriceSummary);
coolerSelect.addEventListener('change', updatePriceSummary);
monitorSelect.addEventListener('change', updatePriceSummary);

// Initial call to populate the price summary
updatePriceSummary();
