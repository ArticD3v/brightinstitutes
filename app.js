// ─── SVG Icons ───
const icons = {
  chevronDown: '<svg class="icon-sm chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
  chevronRight: '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft: '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>',
  arrowRight: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  menu: '<svg class="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  x: '<svg class="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  phone: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  mapPin: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  globe: '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/><path d="M12 2a14.5 14.5 0 0 0 0 20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>',
  checkCircle: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>',
  star: '<svg class="icon star" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  award: '<svg class="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  users: '<svg class="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  building: '<svg class="icon-xl" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
  plane: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
  bookOpen: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  briefcase: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  heart: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  shield: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  whatsapp: '<svg class="icon-lg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
  instagram: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>',
  facebook: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  youtube: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>',
  linkedin: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
};

// ─── Helper: get current page name ───
function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  return page;
}

// ─── Render Navbar ───
function renderNavbar() {
  const currentPage = getCurrentPage();
  const nav = document.getElementById('navbar');
  if (!nav) return;

  // Healthcare Program dropdown items
  const healthcareIcons = {
    'nursing': 'assets/images/icons/nurse.png',
    'radiology-assistant': 'assets/images/icons/radiology.png',
    'medical-assistant': 'assets/images/icons/medical.png',
  };
  const healthcareLinks = [
    { title: 'Job For Nurses', url: 'job-for-nurses.html', itemSlug: 'nursing' },
    { title: 'Radiology Assistant', slug: 'radiology-assistant' },
    { title: 'Medical Assistant', slug: 'medical-assistant' },
  ].map(item =>
    `<a href="${item.url || `program.html?slug=${item.slug}`}" class="nav-dropdown-item">
      <span class="dd-icon dd-flag"><img src="${healthcareIcons[item.itemSlug || item.slug]}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>
      <span class="dd-text">${item.title}</span>
    </a>`
  ).join('');

  // Ausbildung Program dropdown items
  const ausbildungIcons = {
    'nursing': 'assets/images/icons/nurse.png',
    'electrical-engineer': 'assets/images/icons/electrical-engineering.png',
    'mechanic': 'assets/images/icons/mechanic.png',
    'automotive-mechatronic': 'assets/images/icons/automotive.png',
    'mechatronics-electronics': 'assets/images/icons/mechatronics.png',
    'bakers': 'assets/images/icons/baker.png',
    'food-processing': 'assets/images/icons/food-processing.png',
    'logistics': 'assets/images/icons/logistics.png',
    'truck-drivers': 'assets/images/icons/driver.png',
    'globe': 'assets/images/icons/globe.png',
  };
  const ausbildungLinksData = [
    { title: 'Ausbildung Nurse Program', slug: 'nursing' },
    { title: 'Electrical Engineer', slug: 'electrical-engineer' },
    { title: 'Mechanic', slug: 'mechanic' },
    { title: 'Automotive Mechatronic Technician', slug: 'automotive-mechatronic' },
    { title: 'Mechatronics & Electronics', slug: 'mechatronics-electronics' },
    { title: 'Bakers', slug: 'bakers' },
    { title: 'Food Processing', slug: 'food-processing' },
    { title: 'Logistics Program', slug: 'logistics' },
    { title: 'Truck Drivers', slug: 'truck-drivers' },
    { title: 'Other Programs', url: 'index.html#other-courses', slug: 'globe' }
  ];

  const ausbildungLinks = ausbildungLinksData.map(item => {
    const href = item.url || `program.html?slug=${item.slug}`;
    const iconHtml = item.icon ? `<span class="dd-icon">${item.icon}</span>` :
      `<span class="dd-icon dd-flag"><img src="${ausbildungIcons[item.slug]}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>`;

    return `<a href="${href}" class="nav-dropdown-item">
      ${iconHtml}
      <span class="dd-text">${item.title}</span>
    </a>`;
  }).join('');

  // Language Courses dropdown items
  const langIcons = {
    german: 'assets/images/icons/germany.png',
    french: 'assets/images/icons/france.png',
    ielts: 'assets/images/icons/eng.png',
    pte: 'assets/images/icons/eng.png',
    arabic: 'assets/images/icons/arabic.png',
    duolingo: 'assets/images/icons/duolingo.webp',
  };
  const langLinks = [
    { title: 'German Language Training', slug: 'german' },
    { title: 'French Language Training', slug: 'french' },
    { title: 'IELTS', slug: 'ielts' },
    { title: 'PTE', slug: 'pte' },
    { title: 'Arabic', slug: 'arabic' },
    { title: 'Duolingo', slug: 'duolingo' },
  ].map(item =>
    `<a href="language.html?slug=${item.slug}" class="nav-dropdown-item">
      <span class="dd-icon dd-flag"><img src="${langIcons[item.slug]}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>
      <span class="dd-text">${item.title}</span>
    </a>`
  ).join('');

  // Country flag image map
  const countryFlags = {
    australia: 'assets/images/icons/australia.png',
    canada: 'assets/images/icons/canada.png',
    europe: 'assets/images/icons/european.png',
    germany: 'assets/images/icons/germany.png',
    'new-zealand': 'assets/images/icons/newzealand.png',
    russia: 'assets/images/icons/russia.png',
    uk: 'assets/images/icons/united-kingdom.png',
    usa: 'assets/images/icons/united-states-of-america.png',
  };

  // Study Abroad dropdown items
  const studyLinks = [
    { title: 'Study In Australia', slug: 'australia' },
    { title: 'Study In Canada', slug: 'canada' },
    { title: 'Study In Europe', slug: 'europe' },
    { title: 'Study In Germany', slug: 'germany' },
    { title: 'Study In New Zealand', slug: 'new-zealand' },
    { title: 'Study In Russia', slug: 'russia' },
    { title: 'Study In UK', slug: 'uk' },
    { title: 'Study In USA', slug: 'usa' },
  ].map(item =>
    `<a href="study-abroad.html?country=${item.slug}" class="nav-dropdown-item">
      <span class="dd-icon dd-flag"><img src="${countryFlags[item.slug]}" alt="${item.title} flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>
      <span class="dd-text">${item.title}</span>
    </a>`
  ).join('');

  // Services dropdown items
  const servicesIcons = {
    'air-ticket': 'assets/images/icons/airplane-ticket.png',
    'hajj-umrah': 'assets/images/icons/kaaba.png',
    'opportunity-card': 'assets/images/icons/germany.png',
  };
  const servicesLinks = [
    { title: 'Air Ticket', slug: 'air-ticket' },
    { title: 'Hajj & Umrah', slug: 'hajj-umrah' },
    { title: 'Opportunity Card', slug: 'opportunity-card' },
  ].map(item => {
    const href = item.slug === 'opportunity-card' ? 'opportunity-card.html' :
      item.slug === 'hajj-umrah' ? 'hajj-umrah.html' : 'index.html#air-ticket-section';
    return `<a href="${href}" class="nav-dropdown-item">
      <span class="dd-icon dd-flag"><img src="${servicesIcons[item.slug]}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>
      <span class="dd-text">${item.title}</span>
    </a>`;
  }).join('');

  // Gallery dropdown items
  const galleryLinks = [
    { title: 'Photo Gallery', slug: 'photo-gallery' },
    { title: 'Video Gallery', slug: 'video-gallery' },
  ].map(item =>
    `<a href="#" class="nav-dropdown-item">
      <span class="dd-icon">${icons.globe}</span>
      <span class="dd-text">${item.title}</span>
    </a>`
  ).join('');

  function isActive(page) { return currentPage === page ? 'active' : ''; }

  nav.innerHTML = `
    <div class="w-full flex items-center justify-between px-8 h-full">
      <!-- Logo (Left) -->
      <div class="flex items-center gap-3 flex-shrink-0">
        <a href="index.html" class="nav-logo flex-shrink-0">
          <img src="assets/images/logo.png" alt="Bright Institutes" class="nav-logo-img">
          <span class="nav-logo-text">Bright Institutes</span>
        </a>
      </div>
      <div class="nav-divider"></div>

      <!-- Navigation Menu (Center) -->
      <nav class="nav-links flex items-center justify-center gap-8 flex-1 text-sm font-medium text-gray-700 whitespace-nowrap">
        <a href="index.html" class="nav-link whitespace-nowrap flex-shrink-0 ${isActive('index.html')}">Home</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn whitespace-nowrap ${currentPage === 'healthcare.html' ? 'active' : ''}">Healthcare Program ${icons.chevronDown}</button>
          <div class="nav-dropdown-menu"><div class="nav-dropdown-panel">${healthcareLinks}</div></div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn whitespace-nowrap ${currentPage === 'program.html' ? 'active' : ''}">Ausbildung Program ${icons.chevronDown}</button>
          <div class="nav-dropdown-menu"><div class="nav-dropdown-panel">${ausbildungLinks}</div></div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn whitespace-nowrap ${currentPage === 'language.html' ? 'active' : ''}">Language Courses ${icons.chevronDown}</button>
          <div class="nav-dropdown-menu"><div class="nav-dropdown-panel">${langLinks}</div></div>
        </div>
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn whitespace-nowrap ${currentPage === 'study-abroad.html' ? 'active' : ''}">Study Abroad ${icons.chevronDown}</button>
          <div class="nav-dropdown-menu"><div class="nav-dropdown-panel">${studyLinks}</div></div>
        </div>
        <a href="hajj-umrah.html" class="nav-link whitespace-nowrap flex-shrink-0 ${isActive('hajj-umrah.html')}">Hajj & Umrah</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn whitespace-nowrap">Services ${icons.chevronDown}</button>
          <div class="nav-dropdown-menu"><div class="nav-dropdown-panel">${servicesLinks}</div></div>
        </div>
        <a href="visa-services.html" class="nav-link whitespace-nowrap flex-shrink-0 ${isActive('visa-services.html')}">Visa Services</a>
        <div class="nav-dropdown">
          <button class="nav-dropdown-btn whitespace-nowrap">Gallery ${icons.chevronDown}</button>
          <div class="nav-dropdown-menu"><div class="nav-dropdown-panel">${galleryLinks}</div></div>
        </div>
        <a href="about.html" class="nav-link whitespace-nowrap flex-shrink-0 ${isActive('about.html')}">About Us</a>
      </nav>

      <div class="nav-divider"></div>

      <!-- Contact Button & Mobile Toggle (Right) -->
      <div class="flex items-center gap-4 flex-shrink-0">
        <a href="contact.html" class="btn-contact btn-contact-desktop whitespace-nowrap flex-shrink-0 flex items-center">Contact Us</a>
        <button class="mobile-toggle" id="mobileToggle">${icons.menu}</button>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav">
      <div class="container py-6 space-y-2">
        <a href="index.html" class="mobile-nav-item ${isActive('index.html')}">Home</a>
        <div>
          <button class="mobile-accordion-btn" data-target="mob-healthcare">Healthcare Program ${icons.chevronDown}</button>
          <div class="mobile-subnav" id="mob-healthcare">
            <a href="job-for-nurses.html"><span class="dd-icon dd-flag"><img src="assets/images/icons/nurse.png" alt="Nurses" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Job For Nurses</a>
            <a href="program.html?slug=radiology-assistant"><span class="dd-icon dd-flag"><img src="assets/images/icons/radiology.png" alt="Radiology" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Radiology Assistant</a>
            <a href="program.html?slug=medical-assistant"><span class="dd-icon dd-flag"><img src="assets/images/icons/medical.png" alt="Medical" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Medical Assistant</a>
          </div>
        </div>
        <div>
          <button class="mobile-accordion-btn" data-target="mob-ausbildung">Ausbildung Program ${icons.chevronDown}</button>
          <div class="mobile-subnav" id="mob-ausbildung">
            <a href="program.html?slug=nursing"><span class="dd-icon dd-flag"><img src="assets/images/icons/nurse.png" alt="Nurse Program" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Ausbildung Nurse Program</a>
            <a href="program.html?slug=electrical-engineer"><span class="dd-icon dd-flag"><img src="assets/images/icons/electrical-engineering.png" alt="Electrical Engineer" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Electrical Engineer</a>
            <a href="program.html?slug=mechanic"><span class="dd-icon dd-flag"><img src="assets/images/icons/mechanic.png" alt="Mechanic" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Mechanic</a>
            <a href="program.html?slug=automotive-mechatronic"><span class="dd-icon dd-flag"><img src="assets/images/icons/automotive.png" alt="Automotive" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Automotive Mechatronic Technician</a>
            <a href="program.html?slug=mechatronics-electronics"><span class="dd-icon dd-flag"><img src="assets/images/icons/mechatronics.png" alt="Mechatronics" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Mechatronics & Electronics</a>
            <a href="program.html?slug=bakers"><span class="dd-icon dd-flag"><img src="assets/images/icons/baker.png" alt="Bakers" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Bakers</a>
            <a href="program.html?slug=food-processing"><span class="dd-icon dd-flag"><img src="assets/images/icons/food-processing.png" alt="Food Processing" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Food Processing</a>
            <a href="program.html?slug=logistics"><span class="dd-icon dd-flag"><img src="assets/images/icons/logistics.png" alt="Logistics" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Logistics Program</a>
            <a href="program.html?slug=truck-drivers"><span class="dd-icon dd-flag"><img src="assets/images/icons/driver.png" alt="Truck Drivers" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Truck Drivers</a>
            <a href="index.html#other-courses"><span class="dd-icon dd-flag"><img src="assets/images/icons/globe.png" alt="Other Programs" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Other Programs</a>
          </div>
        </div>
        <div>
          <button class="mobile-accordion-btn" data-target="mob-lang">Language Courses ${icons.chevronDown}</button>
          <div class="mobile-subnav" id="mob-lang">
            <a href="language.html?slug=german"><span class="dd-icon dd-flag"><img src="assets/images/icons/germany.png" alt="German" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>German Language Training</a>
            <a href="language.html?slug=french"><span class="dd-icon dd-flag"><img src="assets/images/icons/france.png" alt="French" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>French Language Training</a>
            <a href="language.html?slug=ielts"><span class="dd-icon dd-flag"><img src="assets/images/icons/eng.png" alt="IELTS" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>IELTS</a>
            <a href="language.html?slug=pte"><span class="dd-icon dd-flag"><img src="assets/images/icons/eng.png" alt="PTE" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>PTE</a>
            <a href="language.html?slug=arabic"><span class="dd-icon dd-flag"><img src="assets/images/icons/arabic.png" alt="Arabic" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Arabic</a>
            <a href="language.html?slug=duolingo"><span class="dd-icon dd-flag"><img src="assets/images/icons/duolingo.webp" alt="Duolingo" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Duolingo</a>
          </div>
        </div>
        <div>
          <button class="mobile-accordion-btn" data-target="mob-study">Study Abroad ${icons.chevronDown}</button>
          <div class="mobile-subnav" id="mob-study">
            <a href="study-abroad.html?country=australia"><span class="dd-icon dd-flag"><img src="${countryFlags.australia}" alt="Australia flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In Australia</a>
            <a href="study-abroad.html?country=canada"><span class="dd-icon dd-flag"><img src="${countryFlags.canada}" alt="Canada flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In Canada</a>
            <a href="study-abroad.html?country=europe"><span class="dd-icon dd-flag"><img src="${countryFlags.europe}" alt="Europe flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In Europe</a>
            <a href="study-abroad.html?country=germany"><span class="dd-icon dd-flag"><img src="${countryFlags.germany}" alt="Germany flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In Germany</a>
            <a href="study-abroad.html?country=russia"><span class="dd-icon dd-flag"><img src="${countryFlags.russia}" alt="Russia flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In Russia</a>
            <a href="study-abroad.html?country=uk"><span class="dd-icon dd-flag"><img src="${countryFlags['uk']}" alt="UK flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In UK</a>
            <a href="study-abroad.html?country=new-zealand"><span class="dd-icon dd-flag"><img src="${countryFlags['new-zealand']}" alt="New Zealand flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In New Zealand</a>
            <a href="study-abroad.html?country=usa"><span class="dd-icon dd-flag"><img src="${countryFlags.usa}" alt="USA flag" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Study In USA</a>
          </div>
        </div>
        <a href="hajj-umrah.html" class="mobile-nav-item ${isActive('hajj-umrah.html')}">Hajj & Umrah</a>
        <div>
          <button class="mobile-accordion-btn" data-target="mob-services">Services ${icons.chevronDown}</button>
          <div class="mobile-subnav" id="mob-services">
            <a href="index.html#air-ticket-section"><span class="dd-icon dd-flag"><img src="assets/images/icons/airplane-ticket.png" alt="Air Ticket" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Air Ticket</a>
            <a href="hajj-umrah.html"><span class="dd-icon dd-flag"><img src="assets/images/icons/kaaba.png" alt="Hajj & Umrah" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Hajj & Umrah</a>
            <a href="opportunity-card.html"><span class="dd-icon dd-flag"><img src="assets/images/icons/germany.png" alt="Opportunity Card" style="width:100%;height:100%;object-fit:cover;border-radius:50%;"></span>Opportunity Card</a>
          </div>
        </div>
        <a href="visa-services.html" class="mobile-nav-item ${isActive('visa-services.html')}">Visa Services</a>
        <div>
          <button class="mobile-accordion-btn" data-target="mob-gallery">Gallery ${icons.chevronDown}</button>
          <div class="mobile-subnav" id="mob-gallery">
            <a href="#"><span class="dd-icon">${icons.globe}</span>Photo Gallery</a>
            <a href="#"><span class="dd-icon">${icons.globe}</span>Video Gallery</a>
          </div>
        </div>
        <a href="about.html" class="mobile-nav-item ${isActive('about.html')}">About Us</a>
        <a href="contact.html" class="btn btn-primary btn-md w-full mt-4">Contact Us</a>
      </div>
    </div>`;

  // Desktop dropdown hover
  document.querySelectorAll('.nav-dropdown').forEach(dd => {
    dd.addEventListener('mouseenter', () => dd.classList.add('open'));
    dd.addEventListener('mouseleave', () => dd.classList.remove('open'));
  });

  // Mobile toggle
  const toggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  let isAnimating = false;

  function closeMobileNav() {
    if (isAnimating) return;
    isAnimating = true;
    mobileNav.classList.remove('open');
    toggle.innerHTML = icons.menu;
    document.body.style.overflow = '';
    setTimeout(() => { isAnimating = false; }, 400);
  }

  function openMobileNav() {
    if (isAnimating) return;
    isAnimating = true;
    mobileNav.classList.add('open');
    toggle.innerHTML = icons.x;
    document.body.style.overflow = 'hidden';
    setTimeout(() => { isAnimating = false; }, 400);
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mobileNav.classList.contains('open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  // Close on outside tap
  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !toggle.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Close on item selection (nav links)
  mobileNav.querySelectorAll('.mobile-nav-item, .mobile-subnav a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Mobile accordions
  document.querySelectorAll('.mobile-accordion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      const isOpen = btn.classList.contains('open');

      // Close all other accordions
      document.querySelectorAll('.mobile-accordion-btn').forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.classList.remove('open');
          const otherTarget = document.getElementById(otherBtn.dataset.target);
          if (otherTarget) otherTarget.classList.remove('open');
        }
      });

      // Toggle current
      btn.classList.toggle('open', !isOpen);
      if (target) target.classList.toggle('open', !isOpen);
    });
  });

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });
  if (window.scrollY > 50) nav.classList.add('scrolled');
}

// ─── Render Footer ───
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <a href="index.html" class="flex items-center gap-2 mb-6">
            <img src="assets/images/logo.png" alt="Bright Institutes" style="height:3.5rem;width:auto;border-radius:0.5rem;">
            <span class="font-bold text-xl">Bright Institutes</span>
          </a>
          <p class="text-sm text-white-60 leading-relaxed mb-6">${contactInfo.aboutText}</p>
          <div class="flex gap-3">
            <a href="#" class="footer-social">${icons.whatsapp}</a>
            <a href="#" class="footer-social">${icons.instagram}</a>
            <a href="#" class="footer-social">${icons.facebook}</a>
            <a href="#" class="footer-social">${icons.youtube}</a>
            <a href="#" class="footer-social">${icons.linkedin}</a>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-6">Quick Links</h3>
          <div class="space-y-3">
            <a href="index.html" class="block text-sm text-white-60">Home</a>
            <a href="about.html" class="block text-sm text-white-60">About Us</a>
            <a href="hajj-umrah.html" class="block text-sm text-white-60">Hajj & Umrah</a>
            <a href="healthcare.html" class="block text-sm text-white-60">Healthcare</a>
            <a href="visa-services.html" class="block text-sm text-white-60">Visa Services</a>
            <a href="contact.html" class="block text-sm text-white-60">Contact Us</a>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-6">Our Services</h3>
          <div class="space-y-3">
            ${visaTypes.slice(0, 6).map(v => `<span class="block text-sm text-white-60">${v}</span>`).join('')}
          </div>
        </div>
        <div>
          <h3 class="font-bold text-lg mb-6">Contact Info</h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-white-40 mt-0.5">${icons.phone}</span>
              <div class="flex flex-col gap-1">
                ${contactInfo.phones.map(p => `<a href="tel:${p}" class="text-sm text-white-60">${p}</a>`).join('')}
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-white-40 mt-0.5">${icons.mail}</span>
              <a href="mailto:${contactInfo.email}" class="text-sm text-white-60">${contactInfo.email}</a>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-white-40 mt-0.5">${icons.mapPin}</span>
              <div class="space-y-4">
                ${contactInfo.offices.map(office => `
                  <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-white-40 mb-1">${office.title}</h4>
                    <p class="text-sm text-white-60">${office.address}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-divider text-center">
        <p class="text-sm text-white-40">© ${new Date().getFullYear()} Bright Institutes & Overseas. All Rights Reserved.</p>
      </div>
    </div>`;
}

// ─── Scroll Reveal ───
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── Hero Slider ───
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');
  if (slides.length === 0) return;
  let current = 0;
  let interval;

  function goTo(i) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { interval = setInterval(next, 5000); }
  function stopAuto() { clearInterval(interval); }

  document.getElementById('heroPrev')?.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });
  document.getElementById('heroNext')?.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));

  startAuto();
}

// ─── FAQ Accordion ───
function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.closest('.faq-list')?.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

// ─── URL Params helper ───
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}


// ─── Init on every page ───
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  initScrollReveal();
  initHeroSlider();
  initFaqAccordion();
});
