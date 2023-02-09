const cardRating = document.querySelector('.card-rating');
const cardThankYou = document.querySelector('.card-thank-you');
const btnSubmit = document.querySelector('.btn-submit');
const ratingPoint = document.querySelector('.rating-point');
const ratings = document.querySelectorAll('.ratings .rating');

let selectedRating = 0;

ratings.forEach((rating) => {
  rating.addEventListener('click', (e) => {
    selectedRating = e.target.innerText;
  });
});

btnSubmit.addEventListener('click', () => {
  ratingPoint.innerText = selectedRating;
  cardRating.classList.add('hidden');
  cardThankYou.classList.remove('hidden');
});
