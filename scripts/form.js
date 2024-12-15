const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
  ];
  
  // Populate product select options
  const productSelect = document.getElementById('product');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Populate rating radio buttons (1 to 5 stars)
  const ratingDiv = document.getElementById('rating');
  for (let i = 1; i <= 5; i++) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'rating';
    input.value = i;
    input.required = true;
    label.textContent = `${'☆'.repeat(i)} ${i}`;
    label.appendChild(input);
    ratingDiv.appendChild(label);
  }
  

  const usefulFeaturesDiv = document.createElement('div');
  const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'];
  features.forEach(feature => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'features';
    checkbox.value = feature;
    label.textContent = feature;
    label.appendChild(checkbox);
    usefulFeaturesDiv.appendChild(label);
  });
  document.querySelector('form').appendChild(usefulFeaturesDiv);
  
  
  if (!localStorage.getItem('reviewCount')) {
    localStorage.setItem('reviewCount', 0);
  }
  
  document.querySelector('form').addEventListener('submit', function() {
    let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
    localStorage.setItem('reviewCount', reviewCount + 1);
  });
  