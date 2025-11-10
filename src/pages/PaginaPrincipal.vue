<template>
  <div>
    <header>
      <div class="header-space">
        <img src="../assets/images/LOGO.png" alt="" />
      </div>
    </header>
    <div class="container">
      <div class="search-space">
        <div class="search-icon-space">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" placeholder="PESQUISAR PELO  TÍTULO OU CÓDIGO" />
      </div>
      <div class="btn-content">
        <button>Atualizar Notícias</button>
      </div>
      <div class="table-of-news">
        <div class="container-titles">
          <div class="op code"><p>Código</p></div>
          <div class="op title"><p>Título</p></div>
          <div class="op date"><p>Data</p></div>
          <div class="op action"><p>Ação</p></div>
        </div>
        <div class="grid">
          <spam v-for="noticia in noticias" :key="noticia.id" class="bars">
            <spam class="container-code">
              <p>{{ noticia.id }}</p>
            </spam>
            <spam class="container-ttl">
              <p>{{ noticia.titulo }}</p>
            </spam>
            <spam class="container-date">
              <p>{{ noticia.data }}</p>
            </spam>
            <spam class="container-button">
              <a :href="noticia.link" target="_blank">
                <button>Ir para notícia</button>
              </a>
            </spam>
          </spam>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginaPrincipal',
  data() {
    return {
      noticias: [
        {
          id: '001',
          titulo: 'Notícia Exemplo 1',
          data: '2024-06-01',
          link: 'https://example.com/noticia1',
        },
        {
          id: '002',
          titulo: 'Notícia Exemplo 2',
          data: '2024-06-02',
          link: 'https://example.com/noticia2',
        },
        {
          id: '003',
          titulo: 'Notícia Exemplo 3',
          data: '2024-06-03',
          link: 'https://example.com/noticia3',
        },
      ],
    }
  },
}
</script>

<style scoped>
header {
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, #508bcf, #2360a7) 1;
}
.header-space {
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
}
header img {
  width: 300px;
}
.container {
  width: 90%;
  height: auto;
  margin: 30px auto;
}
.search-space {
  width: 90%;
  height: 10vh;
  border-radius: 50px;
  border: #ccc 1px solid;
  box-shadow: 5px 6px 2px #ccc;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.search-icon-space {
  width: 5%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-icon-space i {
  font-size: 25px;
  cursor: pointer;
}
.search-space input {
  width: 90%;
  height: 80%;
  border: none;
  font-size: 18px;
}
.search-space input:focus {
  outline: none;
}
.btn-content {
  width: 90%;
  height: 4vh;
  margin: 20px auto;
  display: flex;
  justify-content: start;
  align-items: center;
}
.btn-content button {
  width: 250px;
  height: 100%;
  border: none;
  border-radius: 30px;
  background: linear-gradient(180deg, #508bcf, #2360a7);
  color: white;
  font-size: 16px;
  cursor: pointer;
}
.table-of-news {
  margin: 0 auto;
  width: 90%;
  height: 60vh;
  margin-top: 20px;
  border: #ccc 1px solid;
  box-shadow: 3px 10px 20px #ccc;
  border-radius: 10px;
}
.container-titles {
  width: 100%;
  height: 10%;
  display: flex;
  border-bottom: #ccc 1px solid;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.title {
  width: 50%;
}
.date {
  text-align: center;
  width: 10%;
}
.action {
  text-align: center;
  width: 15%;
}
.grid {
  width: 90%;
  height: 85%;
  margin: 10px auto;
  overflow-y: auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
}
.grid > * {
  flex: 0 0 auto;
}
.bars {
  width: 95%;
  height: 100px;
  border: #ccc 1px solid;
  box-shadow: 2px 2px 10px #ccc;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0px;
}
.container-code {
  width: 7%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-ttl {
  width: 61%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 10px;
  overflow: hidden;
}
.container-ttl p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.container-date {
  width: 8%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-button {
  width: 23%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-button a {
  width: 80%;
  height: 50%;
  border: none;
  border-radius: 30px;
  background: linear-gradient(180deg, #508bcf, #2360a7);
  cursor: pointer;
}
.container-button a button {
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: white;
  font-size: 16px;
  cursor: pointer;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #508bcf, #2360a7);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #5da0e0, #2c6bb8);
}
</style>
