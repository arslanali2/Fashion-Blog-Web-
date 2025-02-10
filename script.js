// Open popup function
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Close popup function
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Handle email submission
function submitEmail() {
    let email = document.getElementById("email").value;
    if (email) {
        alert("Thank you for subscribing with: " + email);
        closePopup(); // Close popup after submitting
    } else {
        alert("Please enter a valid email.");
    }
}
function submitEmail() {
    let email = document.getElementById("email1").value;
    if (email) {
        alert("Thank you for subscribing with: " + email);
        closePopup(); // Close popup after submitting
    } else {
        alert("Please enter a valid email.");
    }
}

function toggleComment1() {
    let commentBox1 = document.getElementById("commentBox1");
    if (commentBox1.style.display === "block") {
        commentBox1.style.display = "none";
    } else {
        commentBox1.style.display = "block";
    }
}
function toggleComment2() {
    let commentBox2 = document.getElementById("commentBox2");
    if (commentBox2.style.display === "block") {
        commentBox2.style.display = "none";
    } else {
        commentBox2.style.display = "block";
    }
}
function toggleComment3() {
    let commentBox3 = document.getElementById("commentBox3");
    if (commentBox3.style.display === "block") {
        commentBox3.style.display = "none";
    } else {
        commentBox3.style.display = "block";
    }
}
// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}