const DrawerInitiator = {
  init({
    button, drawer, content, navLink,
  }) {
    navLink.addEventListener('focus', (event) => {
      this._addOpenClassDrawer(event, drawer);
    });

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    button.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' || event.key === 'enter') {
        this._toggleDrawer(event, drawer);
      }
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _addOpenClassDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('open');
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
