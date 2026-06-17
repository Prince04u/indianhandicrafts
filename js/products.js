// 50+ sample products
const PRODUCTS=[
 ["Royal Carved Sheesham Elephant","Wooden",4899,5999,"wooden","https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80"],
 ["Antique Brass Ganesha Idol","Brass",3299,3999,"brass","https://images.unsplash.com/photo-1609205807490-89c8a8ec59f8?w=600&q=80"],
 ["White Marble Inlay Box","Marble",5499,6999,"marble","https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80"],
 ["Hand-Painted Madhubani Wall Art","Painting",2199,2799,"painting","https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"],
 ["Copper Bottle with Engravings","Metal",1799,2299,"metal","https://images.unsplash.com/photo-1584346133934-2a9357a82bf3?w=600&q=80"],
 ["Rosewood Jewelry Chest","Wooden",6499,7999,"wooden","https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80"],
 ["Brass Diya Set of 5","Brass",1299,1599,"brass","https://images.unsplash.com/photo-1604608672516-f1b9b1d1f1ca?w=600&q=80"],
 ["Marble Taj Mahal Replica","Marble",8999,10999,"marble","https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80"],
 ["Tanjore Painting — Krishna","Painting",12999,15999,"painting","https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"],
 ["Iron Wrought Wall Clock","Metal",2499,2999,"metal","https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80"],
 ["Carved Mango Wood Bowl","Wooden",899,1199,"wooden","https://images.unsplash.com/photo-1604335079441-d8f5b6c0d6f7?w=600&q=80"],
 ["Brass Peacock Lamp","Brass",4299,4999,"brass","https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&q=80"],
 ["Marble Lattice Jali Lamp","Marble",3899,4699,"marble","https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80"],
 ["Pichwai Cow Painting","Painting",5999,7299,"painting","https://images.unsplash.com/photo-1583996646911-3a8e88a8c5ea?w=600&q=80"],
 ["Hammered Copper Planter","Metal",1599,1999,"metal","https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80"],
 ["Wooden Carved Photo Frame","Wooden",749,999,"wooden","https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80"],
 ["Brass Urli Bowl","Brass",2199,2699,"brass","https://images.unsplash.com/photo-1604608672516-f1b9b1d1f1ca?w=600&q=80"],
 ["Marble Coaster Set","Marble",1299,1599,"marble","https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80"],
 ["Mughal Miniature Painting","Painting",4499,5499,"painting","https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"],
 ["Brass Wall Hanging Bells","Metal",1099,1399,"metal","https://images.unsplash.com/photo-1604608672516-f1b9b1d1f1ca?w=600&q=80"],
 ["Hand Carved Wooden Mirror","Wooden",3299,3999,"wooden","https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80"],
 ["Brass Nataraja Statue","Brass",6899,7999,"brass","https://images.unsplash.com/photo-1609205807490-89c8a8ec59f8?w=600&q=80"],
 ["Marble Vase with Floral Inlay","Marble",4499,5299,"marble","https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80"],
 ["Warli Tribal Art Print","Painting",1499,1899,"painting","https://images.unsplash.com/photo-1583996646911-3a8e88a8c5ea?w=600&q=80"],
 ["Brass Sheesh Mahal Chess","Metal",8999,10999,"metal","https://images.unsplash.com/photo-1606159068539-43f36b99d1b2?w=600&q=80"],
 ["Sheesham Wood Coffee Tray","Wooden",1799,2299,"wooden","https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80"],
 ["Antique Brass Door Knocker","Brass",1399,1799,"brass","https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&q=80"],
 ["Marble Elephant Showpiece","Marble",2999,3699,"marble","https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80"],
 ["Rajasthani Phad Painting","Painting",6499,7999,"painting","https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"],
 ["Copper Moscow Mule Mugs","Metal",1899,2299,"metal","https://images.unsplash.com/photo-1584346133934-2a9357a82bf3?w=600&q=80"],
 ["Wooden Wall Décor Panel","Wooden",4899,5999,"wooden","https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80"],
 ["Brass Hanging Lantern","Brass",2799,3499,"brass","https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&q=80"],
 ["Marble Pen Stand","Marble",899,1199,"marble","https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80"],
 ["Kalamkari Wall Tapestry","Painting",3299,3999,"painting","https://images.unsplash.com/photo-1583996646911-3a8e88a8c5ea?w=600&q=80"],
 ["Iron Horse Sculpture","Metal",3699,4499,"metal","https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80"],
 ["Mango Wood Spice Box","Wooden",1399,1799,"wooden","https://images.unsplash.com/photo-1604335079441-d8f5b6c0d6f7?w=600&q=80"],
 ["Brass Camel Showpiece","Brass",2199,2699,"brass","https://images.unsplash.com/photo-1609205807490-89c8a8ec59f8?w=600&q=80"],
 ["Marble Lord Buddha Idol","Marble",6299,7499,"marble","https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80"],
 ["Gond Tribal Art Painting","Painting",2899,3599,"painting","https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"],
 ["Copper Water Pitcher","Metal",1499,1899,"metal","https://images.unsplash.com/photo-1584346133934-2a9357a82bf3?w=600&q=80"],
 ["Carved Wooden Chess Set","Wooden",4499,5499,"wooden","https://images.unsplash.com/photo-1606159068539-43f36b99d1b2?w=600&q=80"],
 ["Brass Temple Bell","Brass",1199,1499,"brass","https://images.unsplash.com/photo-1604608672516-f1b9b1d1f1ca?w=600&q=80"],
 ["Marble Pooja Thali","Marble",1899,2299,"marble","https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80"],
 ["Mysore Gold Foil Painting","Painting",8999,10999,"painting","https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&q=80"],
 ["Brass Diya Lamp Stand","Metal",2299,2899,"metal","https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=600&q=80"],
 ["Walnut Wood Jewellery Box","Wooden",3499,4299,"wooden","https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=80"],
 ["Brass Lakshmi Idol","Brass",4799,5799,"brass","https://images.unsplash.com/photo-1609205807490-89c8a8ec59f8?w=600&q=80"],
 ["Marble Tea Coaster Set","Marble",1499,1899,"marble","https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80"],
 ["Pattachitra Krishna Art","Painting",3799,4599,"painting","https://images.unsplash.com/photo-1583996646911-3a8e88a8c5ea?w=600&q=80"],
 ["Bidri Metal Vase","Metal",4299,5299,"metal","https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&q=80"],
 ["Carved Kashmir Walnut Tray","Wooden",2999,3699,"wooden","https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80"],
 ["Brass Decorative Wall Plate","Brass",1899,2399,"brass","https://images.unsplash.com/photo-1604608672516-f1b9b1d1f1ca?w=600&q=80"]
];
function renderProducts(target,limit){
  const el=document.querySelector(target);if(!el)return;
  const list=limit?PRODUCTS.slice(0,limit):PRODUCTS;
  el.innerHTML=list.map((p,i)=>`
    <article class="product-card reveal" data-cat="${p[4]}">
      <div class="product-img">
        <img loading="lazy" src="${p[5]}" alt="${p[0]} - Indian handicraft">
        ${i%5===0?'<span class="product-badge">Bestseller</span>':i%7===0?'<span class="product-badge">New</span>':''}
        <button class="product-fav" aria-label="Favorite"><i class="far fa-heart"></i></button>
      </div>
      <div class="product-info">
        <span class="cat">${p[1]} Handicraft</span>
        <h3>${p[0]}</h3>
        <div class="product-rating">★★★★★ <span>(${50+i*3} reviews)</span></div>
        <div class="product-bottom">
          <div class="product-price">₹${p[2].toLocaleString('en-IN')} <small>₹${p[3].toLocaleString('en-IN')}</small></div>
          <a href="#" class="product-btn" aria-label="View details"><i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </article>`).join('');
  // Re-init reveal
  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.1});
  el.querySelectorAll('.reveal').forEach(n=>io.observe(n));
}
