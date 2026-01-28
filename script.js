const radios = document.querySelectorAll(".unit-radio");
const options = document.querySelectorAll(".options");
const totalAmount = document.getElementById("total-amount");

radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {

        // Hide all product details
        options.forEach(option => {
            option.querySelector(".product-details").style.display = "none";
            option.style.border = "2px solid #ddd";
            option.style.backgroundColor = "#fff";
        });

        // Show selected option's details
        options[index].querySelector(".product-details").style.display = "flex";
        options[index].style.border = "3px solid #FF6B82";
        options[index].style.borderRadius = "10px";
        options[index].style.backgroundColor = "#fceff1";

        // Update total price
        const price = options[index].querySelector(".price").innerHTML;
        totalAmount.innerHTML = price;
    });
});
