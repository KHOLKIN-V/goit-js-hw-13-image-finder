export default class FetchApi {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
      this.key = '23540071-e77d0cd4225c02caa21321106';
    }
    get query() {
      return this.searchQuery;
    }
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
    resetPage() {
      this.page = 1;
    }
    incrementPage() {
      this.page += 1;
    }
    async fetchSearchImages() {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`,
        );
        const results = await response.json();
        this.incrementPage();
        return results;
      } catch (error) {
        error;
      }
  }
}
