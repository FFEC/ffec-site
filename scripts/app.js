window.onload = toggleOtherDonationAmount();
window.onload = updateDonationLink();

function toggleMenu(x) {
    x.classList.toggle('collapsible--open');
    document.querySelector('.nav-bar').classList.toggle('collapsible--open');
}

function toggleOtherDonationAmount() {
    let otherDonationAmountRadioButton = document.querySelector(".other-amount-input");
    let otherDonationAmountDiv = document.querySelector(".other-amount-div");
    let otherDonationAmountInput = document.querySelector(".other-donation-amount");
    if(otherDonationAmountRadioButton.checked) {
        otherDonationAmountDiv.style.display = "none";
        otherDonationAmountInput.classList.add("other-donation-amount-open");
        document.querySelector("input[id=other_donation_amount]").focus();

    } else {
        otherDonationAmountDiv.style.display = "block";
        otherDonationAmountInput.classList.remove("other-donation-amount-open");
    }

}

document.querySelectorAll("div.donation-amount").forEach(button => button.addEventListener("click", toggleOtherDonationAmount));

function updateDonationLink() {
    let donationAmountRadioButtons = document.querySelectorAll("input[name=donation_amount]");
    let checkedDonationAmountButton;
    let donationAmount;
    donationAmountRadioButtons.forEach(button => {
        if(button.checked) {
            checkedDonationAmountButton = button;
        }
    });
    if(checkedDonationAmountButton.value != "other-amount") {
        donationAmount = checkedDonationAmountButton.value;
    } else {
        let inputBox = document.querySelector("input[name=other_donation_amount]");
        // trim off any white space
        const inputValue = inputBox.value.trim();
        console.log(inputValue);
        // if inputValue is not empty
        if(inputValue) {
            donationAmount = inputValue;
        } else {
            donationAmount = 0;
        }
    }
    let link = "https://www.paypal.com/donate?business=ffec17%40gmail.com&amount=" + donationAmount +"&no_recurring=0&item_name=Building+strong+foundations+for+self-sufficient+families.&currency_code=USD"
    document.querySelector(".donate-button-link").href = link;
    document.querySelector(".donate-button").setAttribute("onclick", "window.open('" + link + "' ,'_blank')");
}

document.querySelectorAll("input[name=donation_amount]").forEach(button => button.addEventListener("click", updateDonationLink));
document.querySelector("#other_donation_amount").addEventListener("keyup", updateDonationLink);