
        function validateForm(event) {
            event.preventDefault();
            let firstName = document.forms["regForm"]["first_name"].value.trim();
            let lastName = document.forms["regForm"]["last_name"].value.trim();
            let address = document.forms["regForm"]["address"].value.trim();
            let city = document.forms["regForm"]["city"].value.trim();
            let postalCode = document.forms["regForm"]["postal_code"].value.trim();
            let province = document.forms["regForm"]["province"].value.trim().toUpperCase();
            let age = document.forms["regForm"]["age"].value;
            let password = document.forms["regForm"]["password"].value;
            let confirmPassword = document.forms["regForm"]["confirm_password"].value;
            let email = document.forms["regForm"]["email"].value.trim();

            let postalRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
            let validProvinces = ["QC", "ON", "MN", "SK", "AB", "BC"];

            if (!firstName || !lastName || !address || !city || !postalCode || !province || !age || !password || !confirmPassword || !email) {
                alert("All fields are mandatory.");
                return false;
            }

            if (!postalRegex.test(postalCode)) {
                alert("Postal Code must be in A0A0A0 format.");
                return false;
            }

            if (!validProvinces.includes(province)) {
                alert("Province must be one of QC, ON, MN, SK, AB, BC.");
                return false;
            }

            if (age < 18) {
                alert("You must be at least 18 years old.");
                return false;
            }

            if (!emailRegex.test(email)) {
                alert("Enter a valid email containing @ and .");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }

            if (!passwordRegex.test(password)) {
                alert("Password must be at least 6 characters, contain one uppercase letter and one digit.");
                return false;
            }

            alert("Thanks for registering with our website, your customer record was created successfully.");
            document.forms["regForm"].submit();
        }