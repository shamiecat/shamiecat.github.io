var app = new Vue({
  el: "#app",
  data: {
    logoLists: [
    {
      column1: [
      { name: 'HTML', src: 'fab fa-html5' },
      { name: 'Amazon', src: 'fab fa-github' },
      { name: 'Paypal', src: 'far fa-heart' }] },


    {
      column2: [
      { name: 'Fedex', src: 'fab fa-css3' },
      { name: 'Facebook', src: 'fab fa-adobe' },
      { name: 'Instagram', src: 'far fa-heart' }] },


    {
      column3: [
      { name: 'Spotify', src: 'fab fa-js' },
      { name: 'Steam', src: 'fas fa-atom' },
      { name: 'Tiktok', src: 'far fa-heart' }] }] },




  mounted() {
    this.initLogosCarousel();
  },
  methods: {
    initLogosCarousel() {
      // This method is to iterate the active class to each row with interval, 2.5s
      const colName = ['.carousel1', '.carousel2', '.carousel3'];

      colName.forEach(col => {
        // Convert array-like object (nodelist) to new Array, carousel
        const carousel = Array.from(document.querySelectorAll(`.logosCarousel ${col}`));
        const carouselCount = carousel.length;
        let activeCarouselId = 0;

        setInterval(() => {
          // Query current active class in carousel
          const activeCarousel = document.querySelector(`${col}.active`);

          // Set active carousel id to 0 if already reach to the last index / logo
          if (carousel.indexOf(activeCarousel) === carouselCount - 1) activeCarouselId = 0;else
          activeCarouselId++;

          // Remove any active class
          activeCarousel.classList.remove('active');
          // Set new active class based on current active carousel id
          document.querySelectorAll(`.logosCarousel ${col}`)[activeCarouselId].classList.add('active');
        }, 2500);
      });
    },
    setActiveClass(colId, rowId) {
      // In every column, first row / logo need to set as active
      if (colId === 0 && rowId === 0 || colId === 1 && rowId === 0 || colId === 2 && rowId === 0) return 'active';
    } } });
