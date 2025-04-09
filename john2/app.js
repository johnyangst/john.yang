const { createApp } = Vue;

createApp({
  data() {
    return {
      siteTitle: '我的 Vue 響應式網站',
      currentPage: 'home',
      showMessage: false,
      submitted: false,
      loginSuccess: false,
      form: {
        name: '',
        message: ''
      },
      loginForm: {
        username: '',
        password: ''
      },
      products: [
        { id: 1, name: '產品 A', description: '高品質產品 A 描述', price: 1000 },
        { id: 2, name: '產品 B', description: '熱賣產品 B 描述', price: 1500 },
        { id: 3, name: '產品 C', description: '推薦產品 C 描述', price: 1200 }
      ],
      carouselImages: [
        'https://picsum.photos/id/1011/800/300',
        'https://picsum.photos/id/1020/800/300',
        'https://picsum.photos/id/1025/800/300'
      ],
      currentImage: 0
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
    },
    login() {
      // 假登入成功
      this.loginSuccess = true;
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.carouselImages.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.carouselImages.length) % this.carouselImages.length;
    }
  }
}).mount('#app');
