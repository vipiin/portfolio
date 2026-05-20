class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-container">
                    <div class="header-side header-left">
                        <!-- If the page is in a subfolder we might need a different path for img, 
                             but all files are in the root directory. -->
                        <img src="img/tux.png" alt="Tux Penguin" width="100">
                    </div>
                    <div class="header-content">
                        <h1>Vipin Goriparthi</h1>
                        <p class="subtitle">Software Engineer @ Aumovio (ex-Continental)</p>
                        <nav>
                            <a href="index.html">Home</a>
                            <a href="index.html#experience">Experience</a>
                            <a href="index.html#projects">Projects</a>
                            <a href="index.html#contact">Contact</a>
                            <a href="https://drive.google.com/file/d/1VfL96Sg9BjWJdEKGFwGJP6Ja_8SnMF72/view?usp=sharing" target="_blank" class="resume-link">Resume</a>
                        </nav>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('site-header', SiteHeader);
