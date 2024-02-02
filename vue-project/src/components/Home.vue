<template>
    <b-container fluid>
      <b-row>
        <b-col cols="12" class="p-3">
          <b-card>
            <template #header>
              <h4 class="mb-0">Inicio</h4>
            </template>
            <b-card-body>
              <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nobis, accusamus veniam commodi
                voluptatibus veritatis laudantium omnis pariatur similique aspernatur? Et perspiciatis modi iste illo eius
                dolorem id, facilis eligendi!
              </b-card-text>
              <b-button variant="outline-dark" :to="{ name: 'car-list' }">
                <span>Ver todos los vehículos</span>
                <b-icon icon="arrow-right-circle" class="icon" font-scale="1"></b-icon>
              </b-button>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
    .icon {
        margin-left: 10px;
    }
  </style>