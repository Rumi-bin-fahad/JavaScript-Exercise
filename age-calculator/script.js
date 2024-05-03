
function calculateAge() {
    var dob = document.getElementById('dob').value;
    var dobDate = new Date(dob);
    var today = new Date();
    
    var ageInMilliseconds = today - dobDate;
    var ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    var ageInMonths = Math.floor(ageInYears * 12 + (today.getMonth() - dobDate.getMonth()));
    var ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<strong>Your Age :</strong><br><br>";
    resultDiv.innerHTML += "Years : " + ageInYears + "<br>";
    resultDiv.innerHTML += "Months : " + ageInMonths + "<br>";
    resultDiv.innerHTML += "Days : " + ageInDays + "<br>";
}
