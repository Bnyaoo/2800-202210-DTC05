//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {
    console.log($('#footerPlaceholder').load("./footer.html"));
}
loadSkeleton(); //invoke the function