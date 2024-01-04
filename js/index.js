console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (banane) => {
  banane.preventDefault();

  const formData = new FormData(banane.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const firstName = data.firstName;
  const age = Number(data.age);
  const badness = Number(data.badness);

  console.log(`The age-badness-sum of ${firstName} is ${age + badness}`);

  banane.target.reset();
  banane.target.elements.firstName.focus();
});
