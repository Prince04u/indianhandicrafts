// IndianHandicraftItems.com — main interactions
document.addEventListener('DOMContentLoaded',()=>{
  // Mobile menu
  const toggle=document.querySelector('.menu-toggle');
  const menu=document.querySelector('.mobile-menu');
  const backdrop=document.querySelector('.backdrop');
  const close=document.querySelector('.mobile-close');
  const openMenu=()=>{menu?.classList.add('open');backdrop?.classList.add('show')};
  const closeMenu=()=>{menu?.classList.remove('open');backdrop?.classList.remove('show')};
  toggle?.addEventListener('click',openMenu);
  close?.addEventListener('click',closeMenu);
  backdrop?.addEventListener('click',closeMenu);

  // Reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item=>{
    item.querySelector('.faq-q')?.addEventListener('click',()=>{
      item.classList.toggle('open');
    });
  });

  // Filter chips
  document.querySelectorAll('[data-filter-group]').forEach(group=>{
    group.querySelectorAll('.chip').forEach(chip=>{
      chip.addEventListener('click',()=>{
        group.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
        chip.classList.add('active');
        const f=chip.dataset.filter;
        const target=document.querySelector(group.dataset.filterGroup);
        target?.querySelectorAll('[data-cat]').forEach(card=>{
          card.style.display=(f==='all'||card.dataset.cat===f)?'':'none';
        });
      });
    });
  });

  // Lightbox
  const lb=document.querySelector('.lightbox');
  if(lb){
    const lbImg=lb.querySelector('img');
    document.querySelectorAll('.gallery-item img').forEach(img=>{
      img.parentElement.addEventListener('click',()=>{
        lbImg.src=img.src;lb.classList.add('open');
      });
    });
    lb.addEventListener('click',()=>lb.classList.remove('open'));
  }

  // Newsletter dummy
  document.querySelectorAll('.newsletter-form, .contact-form form').forEach(f=>{
    f.addEventListener('submit',e=>{
      e.preventDefault();
      const btn=f.querySelector('button[type="submit"], button:not([type])');
      if(btn){const t=btn.textContent;btn.textContent='Thank You ✓';setTimeout(()=>btn.textContent=t,2500)}
      f.reset?.();
    });
  });

  // Active nav link
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a=>{
    if(a.getAttribute('href')===path) a.classList.add('active');
  });
});
