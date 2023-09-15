// Get reference to the fixed div
const fixedDiv = document.querySelector('.left-div');

// Define the scroll trigger point (in pixels)
const scrollTriggerPoint = 200; // Adjust this value as needed

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Check if the scroll position has reached the trigger point
    if (window.scrollY >= scrollTriggerPoint) {
        // Set scrollTop to scroll up the div
        fixedDiv.scrollTop = window.scrollY - scrollTriggerPoint;
    } else {
        // Reset scrollTop if not at the trigger point
        fixedDiv.scrollTop = 0;
    }
});