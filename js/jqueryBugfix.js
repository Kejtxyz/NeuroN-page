$(document).ready(function() {
    // A mobile left toggler won't display correctly unless we call this function
    // On Chromium it shows input under the sticked navbar, some expandable item height issues tho

    // You can comment this line out to see how left toggler works on Chrome during
    // search input exposure
    $('#collapsibleNavbar').height();   // It does nothing... but it helps!
});