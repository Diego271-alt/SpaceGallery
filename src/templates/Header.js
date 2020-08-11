const Header = () => {
    const view = `
      <div class="Header-main">
        <div class="Header-logo">
          <h1>
            <a href="/">
            <h2>Space Gallery : <span class="txt-type" data-wait="3000" data-words='["Space","Missions","Stars"]'> </span>
            </a>
          </h1>
        </div>
        <div class="Header-nav">
        <ul>
          <li>
            <a href="#/marte/">
              Mars Weather
            </a>
          </li>
          <li>
            <a href="#/gallery/">
              Gallery
            </a>

          </li>
          <li>
            <a href="#/gallery/">
              Picture of your BD
          </a>

          </li>
        
        </ul>
   
        </div>
      </div>
    `;
    return view;
  };
  
  export default Header;