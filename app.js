const books = [
  { title: "The Enchanted Forest", author: "L. Willow", category: "fiction", img: "/undefined (11).jpeg", link: "books/The-Enchanted-Forest.html" },
  { title: "Moonlight Adventures", author: "A. Starling", category: "fiction", img: "/undefined (12).jpeg", link: "books/Moonlight-Adventures.html" },
  { title: "Whispering Shadows", author: "C. Night", category: "fiction", img: "/undefined (13).jpeg", link: "books/Whispering-Shadows.html" },
  { title: "The Secret Garden Tales", author: "H. Bloom", category: "fiction", img: "/The Path to Wonder ✨🌱.jpg", link: "books/The-Secret-Garden-Tales.html" },
  { title: "Legends of the Forgotten", author: "M. Frost", category: "fiction", img: "/Helheim, the Domains of Hel!.jpg", link: "books/Legends-of-the-Forgotten.html" },
  { title: "The Clockmaker’s Apprentice", author: "J. Time", category: "fiction", img: "/download (5).jpg", link: "books/The-Clockmakers-Apprentice.html" },
  { title: "Voyage to Stardust", author: "S. Vega", category: "fiction", img: "/city of stardust book.jpg", link: "books/Voyage-to-Stardust.html" },
  { title: "Mysteries of the Deep", author: "O. Mariner", category: "fiction", img: "/Welcome to a place where time stands still, dear….jpg", link: "books/Mysteries-of-the-Deep.html" },
  { title: "The Lantern Keeper", author: "E. Bright", category: "fiction", img: "/The Last Lantern Keeper - DIY Painting By Numbers Kit.jpg", link: "books/The-Lantern-Keeper.html" },
  { title: "Dreamcatcher Chronicles", author: "N. Skye", category: "fiction", img: "/Siyeon.jpg", link: "books/Dreamcatcher-Chronicles.html" },
  { title: "Whimsical Paths", author: "P. Meadow", category: "fiction", img: "/path.jpg", link: "books/Whimsical-Paths.html" },
  { title: "The Wandering Poet", author: "L. Lyric", category: "fiction", img: "/book traveler.jpg", link: "books/The-Wandering-Poet.html" },
  { title: "Chronicles of Ember", author: "R. Ash", category: "fiction", img: "/Ember Vulture (1).jpg", link: "books/Chronicles-of-Ember.html" },
  { title: "The Hidden Realm", author: "V. Vale", category: "fiction", img: "/A cobblestone pathway lit by glowing magical runes, leading through an ancient enchanted forest.jpg", link: "books/The-Hidden-Realm.html" },
  { title: "Tales of the Silver Moon", author: "D. Luna", category: "fiction", img: "/download (6).jpg", link: "books/Tales-of-the-Silver-Moon.html" },
  { title: "Scary clown of the night", author: "T. Loko", category: "horror", img: "/WhatsApp Image 2025-11-14 at 12.13.56_99193f86.jpg", link: "books/Scary-clown-of-the-night.html" }
];

const bookGrid = document.getElementById("bookGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Display books
function displayBooks(filteredBooks) {
  bookGrid.innerHTML = "";

  filteredBooks.forEach(book => {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition";
    card.innerHTML = `
      <img src="${book.img}" alt="${book.title}" class="rounded-lg w-full h-56 object-cover mb-4">
      <h3 class="text-xl font-bold mb-1">${book.title}</h3>
      <p class="text-gray-600 mb-1">by ${book.author}</p>
      <a href="${book.link}" class="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800">Read Now</a>
    `;
    bookGrid.appendChild(card);
  });
}

// Filter books
function filterBooks() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = books.filter(book => 
    (category === "all" || book.category === category) &&
    (book.title.toLowerCase().includes(searchText) || book.author.toLowerCase().includes(searchText))
  );

  displayBooks(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterBooks);
categoryFilter.addEventListener("change", filterBooks);

// Display all books initially
displayBooks(books);
