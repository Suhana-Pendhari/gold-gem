// DOM Elements
const preloader = document.querySelector('.preloader');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.querySelector('.close-search');
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistModal = document.getElementById('wishlistModal');
const closeWishlist = document.querySelector('.close-wishlist');
const filterButtons = document.querySelectorAll('.filter-btn');
const jewelryGrids = document.querySelectorAll('.jewelry-grid');
const cartCount = document.querySelector('.cart-count');
const wishlistCount = document.querySelector('.wishlist-count');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const wishlistItemsContainer = document.querySelector('.wishlist-items');
const cartEmpty = document.querySelector('.cart-empty');
const wishlistEmpty = document.querySelector('.wishlist-empty');
const cartTotal = document.querySelector('.total-price');
const checkoutBtn = document.querySelector('.checkout-btn');
const backToTopBtn = document.getElementById('backToTop');
const successMessage = document.getElementById('successMessage');
const wishlistMessage = document.getElementById('wishlistMessage');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const suggestionTags = document.querySelectorAll('.suggestion-tags span');

// Jewelry data
const jewelryData = {
    rings: [
        { id: 1, name: "Diamond Solitaire Ring", category: "engagement", price: 2499.99, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80" },
        { id: 2, name: "Eternity Band", category: "wedding", price: 1899.99, img: "https://images.unsplash.com/photo-1605100940451-7b70e5d4c888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        { id: 3, name: "Sapphire Halo Ring", category: "gemstone", price: 2199.99, img: "https://images.unsplash.com/photo-1594576722512-582d5577dc56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 4, name: "Classic Gold Band", category: "wedding", price: 899.99, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 5, name: "Three Stone Diamond Ring", category: "diamond", price: 3299.99, img: "https://images.unsplash.com/photo-1603561596072-756b2f5d3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 6, name: "Emerald Cut Diamond Ring", category: "engagement", price: 2799.99, img: "https://images.unsplash.com/photo-1603561596072-756b2f5d3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }
    ],
    necklaces: [
        { id: 7, name: "Diamond Pendant Necklace", category: "diamond", price: 1599.99, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        { id: 8, name: "Pearl Strand Necklace", category: "pearl", price: 1299.99, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 9, name: "Gold Choker Necklace", category: "gold", price: 799.99, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 10, name: "Sapphire Drop Necklace", category: "gemstone", price: 1899.99, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        { id: 11, name: "Diamond Tennis Necklace", category: "diamond", price: 3499.99, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 12, name: "Heart Locket Necklace", category: "gold", price: 599.99, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }
    ],
    earrings: [
        { id: 13, name: "Diamond Stud Earrings", category: "diamond", price: 1299.99, img: "https://images.unsplash.com/photo-1594576722512-582d5577dc56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 14, name: "Gold Hoop Earrings", category: "gold", price: 499.99, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 15, name: "Pearl Drop Earrings", category: "pearl", price: 899.99, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 16, name: "Emerald Chandelier Earrings", category: "gemstone", price: 1699.99, img: "https://images.unsplash.com/photo-1594576722512-582d5577dc56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
        { id: 17, name: "Diamond Huggie Earrings", category: "diamond", price: 1099.99, img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
        { id: 18, name: "Gold Threader Earrings", category: "gold", price: 349.99, img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }
    ]
};

// Cart and wishlist data
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Hide preloader after page loads
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
    
    // Generate jewelry cards for each section
    renderJewelry('rings', jewelryData.rings);
    renderJewelry('necklaces', jewelryData.necklaces);
    renderJewelry('earrings', jewelryData.earrings);
    
    // Update cart and wishlist counts
    updateCartCount();
    updateWishlistCount();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup filter buttons for rings section
    setupFilterButtons();
    
    // Check if there are items in cart and wishlist and render them
    if (cart.length > 0) {
        renderCartItems();
    }
    
    if (wishlist.length > 0) {
        renderWishlistItems();
    }
});

// Render jewelry cards
function renderJewelry(section, jewelryArray) {
    const grid = document.querySelector(`#${section} .jewelry-grid`);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    jewelryArray.forEach(item => {
        const isInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);
        
        const jewelryCard = document.createElement('div');
        jewelryCard.className = 'jewelry-card';
        jewelryCard.setAttribute('data-category', item.category);
        
        jewelryCard.innerHTML = `
            <div class="jewelry-img-container">
                <img src="${item.img}" alt="${item.name}" class="jewelry-img">
                <div class="jewelry-overlay">
                    <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-id="${item.id}">
                        <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
                        ${isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}
                    </button>
                    <button class="quick-view-btn" data-id="${item.id}">
                        <i class="fas fa-eye"></i>
                        Quick View
                    </button>
                </div>
            </div>
            <div class="jewelry-info">
                <h3 class="jewelry-name">${item.name}</h3>
                <p class="jewelry-category">${item.category}</p>
                <span class="jewelry-price">$${item.price.toFixed(2)}</span>
                <button class="add-to-cart" data-id="${item.id}">
                    <i class="fas fa-shopping-bag"></i>
                    Add to Bag
                </button>
            </div>
        `;
        
        grid.appendChild(jewelryCard);
    });
    
    // Add event listeners to the new buttons
    document.querySelectorAll(`#${section} .wishlist-btn`).forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
            toggleWishlist(itemId);
        });
    });
    
    document.querySelectorAll(`#${section} .add-to-cart`).forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
            addToCart(itemId);
        });
    });
    
    document.querySelectorAll(`#${section} .quick-view-btn`).forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
            quickViewItem(itemId);
        });
    });
}

// Setup filter buttons for rings section
function setupFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            const ringsGrid = document.querySelector('#rings .jewelry-grid');
            
            if (!ringsGrid) return;
            
            const ringsCards = ringsGrid.querySelectorAll('.jewelry-card');
            
            if (filter === 'all') {
                ringsCards.forEach(card => {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                });
            } else {
                ringsCards.forEach(card => {
                    if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
}

// Cart functionality
function addToCart(id) {
    // Find the item in jewelry data
    let item = null;
    let foundIn = '';
    
    for (const category in jewelryData) {
        const foundItem = jewelryData[category].find(product => product.id === id);
        if (foundItem) {
            item = foundItem;
            foundIn = category;
            break;
        }
    }
    
    if (!item) return;
    
    // Check if item is already in cart
    const existingItem = cart.find(cartItem => cartItem.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1,
            category: foundIn
        });
    }
    
    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show success message
    showSuccessMessage('cart');
    
    // If cart modal is open, update the display
    if (cartModal.classList.contains('active')) {
        renderCartItems();
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'flex';
        cartItemsContainer.style.display = 'none';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" data-id="${item.id}">+</button>
                </div>
            </div>
            <span class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></span>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Update total
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    // Add event listeners to quantity buttons and remove buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateCartQuantity(id, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            updateCartQuantity(id, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function updateCartQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity += change;
        
        // Remove item if quantity is 0 or less
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        }
        
        // Update localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count
        updateCartCount();
        
        // Re-render cart items
        renderCartItems();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Re-render cart items
    renderCartItems();
}

// Wishlist functionality
function toggleWishlist(id) {
    // Find the item in jewelry data
    let item = null;
    let foundIn = '';
    
    for (const category in jewelryData) {
        const foundItem = jewelryData[category].find(product => product.id === id);
        if (foundItem) {
            item = foundItem;
            foundIn = category;
            break;
        }
    }
    
    if (!item) return;
    
    // Check if item is already in wishlist
    const existingIndex = wishlist.findIndex(wishlistItem => wishlistItem.id === id);
    
    if (existingIndex !== -1) {
        // Remove from wishlist
        wishlist.splice(existingIndex, 1);
        
        // Update wishlist button in all sections
        document.querySelectorAll(`.wishlist-btn[data-id="${id}"]`).forEach(button => {
            button.classList.remove('active');
            button.innerHTML = `<i class="far fa-heart"></i> Add to Wishlist`;
        });
    } else {
        // Add to wishlist
        wishlist.push({
            ...item,
            category: foundIn
        });
        
        // Update wishlist button in all sections
        document.querySelectorAll(`.wishlist-btn[data-id="${id}"]`).forEach(button => {
            button.classList.add('active');
            button.innerHTML = `<i class="fas fa-heart"></i> In Wishlist`;
        });
        
        // Show success message
        showSuccessMessage('wishlist');
    }
    
    // Update wishlist in localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update wishlist count
    updateWishlistCount();
    
    // If wishlist modal is open, update the display
    if (wishlistModal.classList.contains('active')) {
        renderWishlistItems();
    }
}

function updateWishlistCount() {
    wishlistCount.textContent = wishlist.length;
}

function renderWishlistItems() {
    wishlistItemsContainer.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistEmpty.style.display = 'flex';
        wishlistItemsContainer.style.display = 'none';
        return;
    }
    
    wishlistEmpty.style.display = 'none';
    wishlistItemsContainer.style.display = 'block';
    
    wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="wishlist-item-img">
            <div class="wishlist-item-info">
                <h4>${item.name}</h4>
                <span class="wishlist-item-price">$${item.price.toFixed(2)}</span>
                <button class="btn btn-small add-to-cart-from-wishlist" data-id="${item.id}">Add to Bag</button>
            </div>
            <span class="remove-wishlist-item" data-id="${item.id}"><i class="fas fa-trash"></i></span>
        `;
        
        wishlistItemsContainer.appendChild(wishlistItem);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart-from-wishlist').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            addToCart(id);
        });
    });
    
    document.querySelectorAll('.remove-wishlist-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.closest('.remove-wishlist-item').getAttribute('data-id'));
            toggleWishlist(id); // This will remove from wishlist
        });
    });
}

function showSuccessMessage(type) {
    const message = type === 'cart' ? successMessage : wishlistMessage;
    
    message.classList.add('active');
    
    setTimeout(() => {
        message.classList.remove('active');
    }, 3000);
}

function quickViewItem(id) {
    // Find the item in jewelry data
    let item = null;
    
    for (const category in jewelryData) {
        const foundItem = jewelryData[category].find(product => product.id === id);
        if (foundItem) {
            item = foundItem;
            break;
        }
    }
    
    if (!item) return;
    
    // Create a quick view modal
    const quickViewModal = document.createElement('div');
    quickViewModal.className = 'quick-view-modal';
    quickViewModal.innerHTML = `
        <div class="quick-view-content">
            <span class="close-quick-view">&times;</span>
            <div class="quick-view-container">
                <div class="quick-view-image">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="quick-view-details">
                    <h2>${item.name}</h2>
                    <p class="quick-view-category">${item.category}</p>
                    <p class="quick-view-price">$${item.price.toFixed(2)}</p>
                    <p class="quick-view-description">This exquisite piece features the finest craftsmanship with premium materials. Perfect for special occasions or as an everyday luxury statement.</p>
                    <div class="quick-view-actions">
                        <button class="btn btn-primary add-to-cart-quick" data-id="${item.id}">Add to Bag</button>
                        <button class="btn btn-secondary wishlist-btn-quick ${wishlist.some(w => w.id === item.id) ? 'active' : ''}" data-id="${item.id}">
                            <i class="${wishlist.some(w => w.id === item.id) ? 'fas' : 'far'} fa-heart"></i>
                            ${wishlist.some(w => w.id === item.id) ? 'In Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(quickViewModal);
    
    // Add event listeners
    quickViewModal.querySelector('.close-quick-view').addEventListener('click', () => {
        document.body.removeChild(quickViewModal);
    });
    
    quickViewModal.querySelector('.add-to-cart-quick').addEventListener('click', () => {
        addToCart(id);
        document.body.removeChild(quickViewModal);
    });
    
    quickViewModal.querySelector('.wishlist-btn-quick').addEventListener('click', () => {
        toggleWishlist(id);
        // Update the button in the quick view
        const isInWishlist = wishlist.some(w => w.id === id);
        const btn = quickViewModal.querySelector('.wishlist-btn-quick');
        btn.classList.toggle('active', isInWishlist);
        btn.innerHTML = `<i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i> ${isInWishlist ? 'In Wishlist' : 'Add to Wishlist'}`;
    });
    
    // Close modal when clicking outside
    quickViewModal.addEventListener('click', (e) => {
        if (e.target === quickViewModal) {
            document.body.removeChild(quickViewModal);
        }
    });
    
    // Add some CSS for the quick view modal
    const style = document.createElement('style');
    style.textContent = `
        .quick-view-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
            animation: fadeIn 0.3s ease;
        }
        
        .quick-view-content {
            background-color: white;
            width: 90%;
            max-width: 900px;
            border-radius: 10px;
            padding: 30px;
            position: relative;
            animation: slideUp 0.3s ease;
        }
        
        .close-quick-view {
            position: absolute;
            top: 20px;
            right: 25px;
            font-size: 1.8rem;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #777;
        }
        
        .close-quick-view:hover {
            color: var(--primary-color);
        }
        
        .quick-view-container {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
        }
        
        .quick-view-image {
            flex: 1;
            min-width: 300px;
        }
        
        .quick-view-image img {
            width: 100%;
            border-radius: 10px;
        }
        
        .quick-view-details {
            flex: 1;
            min-width: 300px;
        }
        
        .quick-view-details h2 {
            font-family: 'Cinzel', serif;
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        .quick-view-category {
            color: var(--text-light);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
        }
        
        .quick-view-price {
            font-size: 1.8rem;
            color: var(--primary-color);
            font-weight: 700;
            margin-bottom: 25px;
        }
        
        .quick-view-description {
            line-height: 1.7;
            color: var(--text-light);
            margin-bottom: 30px;
        }
        
        .quick-view-actions {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }
        
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
}

// Setup all event listeners
function setupEventListeners() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active nav link
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Search button
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        searchOverlay.classList.add('active');
    });
    
    // Close search overlay
    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
    });
    
    // Close search overlay when clicking outside
    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
        }
    });
    
    // Wishlist button
    wishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        wishlistModal.classList.add('active');
        renderWishlistItems();
    });
    
    // Close wishlist modal
    closeWishlist.addEventListener('click', () => {
        wishlistModal.classList.remove('active');
    });
    
    // Close wishlist modal when clicking outside
    wishlistModal.addEventListener('click', (e) => {
        if (e.target === wishlistModal) {
            wishlistModal.classList.remove('active');
        }
    });
    
    // Cart icon click to open cart modal
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        cartModal.classList.add('active');
        renderCartItems();
    });
    
    // Close cart modal
    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });
    
    // Close cart modal when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
    
    // Checkout button
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your bag is empty!');
            return;
        }
        
        alert('Thank you for your order! This is a demo website, so no real transaction will occur.');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
        cartModal.classList.remove('active');
    });
    
    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Form submissions
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            alert(`Thank you for subscribing to our Golden Circle with email: ${emailInput.value}`);
            emailInput.value = '';
        });
    }
    
    // Search suggestion tags
    suggestionTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const searchInput = document.querySelector('.search-form input');
            searchInput.value = tag.textContent;
            searchInput.focus();
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip for cart and wishlist icons which have their own handlers
            if (href === '#cart' || href === '#wishlist') return;
            
            e.preventDefault();
            
            if (href !== '#') {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideUp 0.8s ease forwards`;
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    document.querySelectorAll('.collection-card, .jewelry-card, .craft-feature, .contact-item').forEach(el => {
        observer.observe(el);
    });
    
    // Add sparkle effect to jewelry cards on hover
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.jewelry-card')) {
            const card = e.target.closest('.jewelry-card');
            const sparkles = card.querySelectorAll('.sparkle');
            
            // Create sparkles if they don't exist
            if (sparkles.length === 0) {
                for (let i = 0; i < 5; i++) {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    sparkle.innerHTML = '<i class="fas fa-star"></i>';
                    sparkle.style.position = 'absolute';
                    sparkle.style.left = `${Math.random() * 100}%`;
                    sparkle.style.top = `${Math.random() * 100}%`;
                    sparkle.style.fontSize = '0.8rem';
                    sparkle.style.color = 'var(--primary-color)';
                    sparkle.style.opacity = '0';
                    sparkle.style.zIndex = '2';
                    sparkle.style.pointerEvents = 'none';
                    card.querySelector('.jewelry-img-container').appendChild(sparkle);
                    
                    // Animate sparkle
                    setTimeout(() => {
                        sparkle.style.transition = 'all 0.5s ease';
                        sparkle.style.opacity = '1';
                        sparkle.style.transform = 'scale(1.5)';
                        
                        setTimeout(() => {
                            sparkle.style.opacity = '0';
                            sparkle.style.transform = 'scale(0.5)';
                            
                            setTimeout(() => {
                                if (sparkle.parentNode) {
                                    sparkle.parentNode.removeChild(sparkle);
                                }
                            }, 500);
                        }, 300);
                    }, i * 100);
                }
            }
        }
    });
}