
document.getElementById('lb-input').addEventListener('input', (e) => {
  let lbs = e.target.value;
  document.getElementById('gramRes').innerHTML = (lbs/0.0022046).toFixed(2) + 'g';
  document.getElementById('kgRes').innerHTML = (lbs/2.2046).toFixed(2) + 'kg';
  document.getElementById('ozRes').innerHTML = lbs*16 + 'oz';
});
