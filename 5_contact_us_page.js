// checked
function isDigits(str)
{
    // start index 3, karena 0, 1, 2 sudah divalidasi untuk "+62"
    for(let i = 3 ; i < str.length ; i++)
        // isNan akan mereturn true kalau dia bukan angka
        if(isNaN(str[i]))
            return false;
    return true;   
}
function validateForm(event) 
{
    event.preventDefault();

    let registForm = document.getElementById("registForm");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let contact = document.getElementById("contact-number");
    let preferredMode = document.getElementById("prefer-method").value;
    let comments = document.getElementById("comments");

    let mr = document.getElementById("mr")
    let mrs = document.getElementById("mrs")
    let ms = document.getElementById("ms")
    let dr = document.getElementById("dr")
    let prof = document.getElementById("prof")

    let errorName = document.getElementById("error-name");
    let errorMail = document.getElementById("error-mail");
    let errorContact1 = document.getElementById("error-contact1");
    let errorContact2 = document.getElementById("error-contact2");
    let errorComments = document.getElementById("error-comments");

    let isValid = true;

    // Validation 1/5
    if (name.value.length < 10) 
    {
        errorName.innerHTML = "Kindly enter your name consisting of at least ten characters";
        isValid = false;
    }

    // Validation 2/5
    if (!email.value.endsWith("@icloud.com")
        && !email.value.endsWith("@me.com")
        && !email.value.endsWith("@mac.com")) 
    {
        errorMail.innerHTML = "We kindly request that you use an email address associated with iCloud.com, Me.com, or Mac.com. This requirement is due to our exclusive partnership with Apple. We appreciate your understanding and cooperation.";
        isValid = false;
    }

    // Validation 3/5
    if (!contact.value.startsWith("+62")) 
    {
        errorContact1.innerHTML = "We kindly request that you provide a phone number with the country code '+62' when entering your contact details. This requirement aligns with the policies set by the Indonesian government. Thank you for your understanding and cooperation.";
        isValid = false;
    }
    // Validation 4/5
    if(!isDigits(contact.value))
    {
        errorContact2.innerHTML = "Kindly ensure that the phone number you provide contains only numerical digits. Special characters or symbols are not required";
        isValid = false;
    }
    // Validation 5/5
    if (comments.value.length < 300) 
    {
        errorComments.innerHTML = "We kindly request that you provide more detailed information in the comments field. Please enter at least 300 characters to help us better understand your needs and provide more suitable assistance. Thank you for your understanding and cooperation.";
        isValid = false;
    }

    if (isValid) 
    {
        let salutation;
        if(mr.checked)
            salutation = "Mr "
        else if(mrs.checked)
            salutation = "Mrs "
        else if(ms.checked)
            salutation = "Ms "
        else if(dr.checked)
            salutation = "Dr "
        else if(prof.checked)
            salutation = "Prof "
        let preferredContact = preferredMode === "by-email" ? "email" : "contact";
        let message = "Thank you, " + salutation + name.value + " for submitting the form. We will contact you immediately through " + preferredContact + ".";
        alert(message);
        registForm.submit();
    }
}
