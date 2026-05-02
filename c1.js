window.__C=(window.__C||[]);window.__C.push(`       <stop stop-color="#ffb612"/>
          <stop offset="1" stop-color="#c0c0c0"/>
        </linearGradient>
      </defs>
    </svg>
    <span class="nav__logo-text">
      <span class="brand">RealAI</span>
      <span class="sub">Built Real. Deployed Fast.</span>
    </span>
  </a>
  <ul class="nav__links" role="list">
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav__cta">Start Your Project <span class="arrow">&rarr;</span></a>
  <button class="nav__mobile-toggle" aria-label="Open menu" onclick="document.getElementById('mobile-menu').classList.add('open')">
    <i data-lucide="menu" style="width:24px;height:24px;"></i>
  </button>
</nav>

<!-- Mobile Menu -->
<div class="nav__mobile-menu" id="mobile-menu">
  <button class="nav__mobile-close" aria-label="Close menu" onclick="this.parentElement.classList.remove('open')">
    <i data-lucide="x" style="width:28px;height:28px;"></i>
  </button>
  <a href="#home" onclick="this.parentElement.classList.remove('open')">Home</a>
  <a href="#services" onclick="this.parentElement.classList.remove('open')">Services</a>
  <a href="#portfolio" onclick="this.parentElement.classList.remove('open')">Portfolio</a>
  <a href="#about" onclick="this.parentElement.classList.remove('open')">About</a>
  <a href="#contact" onclick="this.parentElement.classList.remove('open')" style="color:var(--color-gold)">Contact</a>
</div>
`);
