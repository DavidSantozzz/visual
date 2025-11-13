<template>
  <div>
    <Header />

    <div class="container">
      <div class="voltar">
        <router-link to="/"><i class="fa-solid fa-angle-left"></i> Voltar</router-link>
      </div>

      <div v-if="noticia">
        <div class="title">
          <h2>{{ noticia.title }}</h2>
        </div>
        <div class="row">
          <div class="image">
            <img :src="noticia.image" alt="Imagem da notícia" />
          </div>
          <div class="text">
            <p>{{ noticia.summary }}</p>
          </div>
        </div>
        <div class="button">
          <a :href="noticia.link" target="_blank" rel="noopener noreferrer">
            <button class="btn-link">Ir para notícia original</button>
          </a>
        </div>
      </div>

      <div v-else class="loading">
        <p>Carregando notícia...</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios'

export default {
  name: 'PaginaNoticia',
  components: { Header },
  props: ['id'],
  data() {
    return {
      noticia: null,
    }
  },
  async mounted() {
    await this.buscarNoticia()
  },
  methods: {
    async buscarNoticia() {
      try {
        const response = await axios.get(`http://localhost:8000/noticias/${this.id}`)
        this.noticia = response.data
      } catch (error) {
        console.error('Erro ao buscar notícia:', error)
      }
    },
  },
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.btn-link {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn-link:hover {
  background-color: #0056b3;
}

.loading {
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
}
.container {
  width: 90%;
  height: auto;
  margin: 30px auto;
}
.voltar a {
  text-decoration: none;
  color: #12345c;
}
.voltar i {
  font-size: 15px;
  text-decoration: none;
  color: #12345c;
}
.title {
  width: 100%;
  height: 100px;
}
.title p {
  width: 100%;
  height: 100%;
  text-indent: 10px;
  text-align: justify;
  font-size: 35px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: flex;
  align-items: center;
}
.row {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
.image {
  width: 60%;
  height: 550px;
  background-color: #12345c;
}
.image img {
  width: 100%;
  height: 100%;
}
.text {
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
}
.text p {
  width: 95%;
  font-size: 17px;
  text-indent: 10px;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 25;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.buttons {
  width: 100%;
  height: 50px;
  background-color: #12345c;
  margin-top: 5px;
}
</style>
