document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('buy-button').addEventListener('click', function(e){
  if (this.getAttribute('href') === '#') {
    e.preventDefault();
    alert('Add your Stripe, PayPal or Square payment link to the Buy Now button.');
  }
});
