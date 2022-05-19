let cart = null;

module.exports = class Cart {

    static save(listing) {

        if (cart === null) {
            cart = { listing: [], totalApplications: 0 };
        }

        const existingListingIndex = cart.listing.findIndex(p => p.id == listing.id); // to check listing is existing in cart
        if (existingListingIndex >= 0) { // exist in cart already
            const existingListing = cart.listing[existingListingIndex];
            existingListing.qty += 1;
        } else { //not exist
            listing.qty = 1;
            cart.listing.push(listing);
        }

        cart.totalApplications += listing.qty;
    }

    static getCart() {
        return cart;
    }

    static delete(listingId) {
        const isExisting = cart.listing.findIndex(p => p.id == listingId);
        if (isExisting >= 0) {
            cart.listing.splice(isExisting, 1);
        }
    }

}