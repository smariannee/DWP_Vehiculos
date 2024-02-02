<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12" class="p-3">
                <b-card>
                    <b-breadcrumb :items="items" class="mb-0"></b-breadcrumb>
                </b-card>
            </b-col>
            <b-col cols="12" class="pb-3">
                <b-card>
                    <template #header>
                        <h5 class="mb-0">Lista de vehículos</h5>
                    </template>
                    <b-card-body>
                        <b-row class="mb-3">
                            <b-col cols="12" md="8">
                                <b-input-group>
                                    <b-form-input placeholder="Buscar..." />
                                </b-input-group>
                            </b-col>
                            <b-col cols="12" md="3" class="mt-3 mt-md-0">
                                <b-button variant="outline-success" :to="{ name: 'save-car' }">
                                    <span>Registrar vehículo</span>
                                    <b-icon icon="plus-circle" font-scale="1" class="icon" />
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12">
                                <b-table id="my-table" :items="cars" :per-page="perPage" :current-page="currentPage"
                                    responsive="sm" class="px-3" small stripped hover></b-table>
                            </b-col>
                            <b-col cols="12">
                                <label for="perPage">Selecciona la cantidad de registros que deseas mostrar:</label>
                                <b-form-select :options="pageOptions" v-model="perPage"
                                    class="mx-3 my-3 p-1 select"></b-form-select>
                            </b-col>
                            <b-col cols="12" class="text-center">
                                <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"
                                    aria-controls="my-table" align="center"></b-pagination>
                                <small class="mt-3">Página actual: {{ currentPage }}</small><br />
                                <small class="mt-3">Total de vehículos: {{ rows }}</small>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
  
<script>
export default {
    data() {
        return {
            perPage: 5,
            currentPage: 1,
            pageOptions: [5, 10, 15, 20, 25, 30],
            cars: [
                {
                    brand: 'Nissan',
                    model: 'Sentra',
                    year: 2018,
                    series: '1234567890'
                },
                {
                    brand: 'Chevrolet',
                    model: 'Aveo',
                    year: 2019,
                    series: '0987654321'
                },
                {
                    brand: 'Ford',
                    model: 'Fiesta',
                    year: 2017,
                    series: '1357924680'
                },
                {
                    brand: 'Volkswagen',
                    model: 'Jetta',
                    year: 2016,
                    series: '2468135790'
                },
                {
                    brand: 'Toyota',
                    model: 'Corolla',
                    year: 2015,
                    series: '9876543210'
                },
                {
                    brand: 'Honda',
                    model: 'Civic',
                    year: 2014,
                    series: '0123456789'
                },
                {
                    brand: 'Mazda',
                    model: '3',
                    year: 2013,
                    series: '9876543210'
                },
                {
                    brand: 'Kia',
                    model: 'Rio',
                    year: 2012,
                    series: '0123456789'
                },
                {
                    brand: 'Hyundai',
                    model: 'Accent',
                    year: 2011,
                    series: '9876543210'
                },
                {
                    brand: 'Audi',
                    model: 'A3',
                    year: 2010,
                    series: '0123456789'
                }
            ],
            items: [
                {
                    text: 'Inicio',
                    to: { name: 'home' }
                },
                {
                    text: 'Lista de vehículos',
                    active: true
                }
            ],
        }
    },
    
  computed: {
    rows() {
      return this.cars.length
    }
  },
}
</script>
  
<style scoped>
.icon {
    margin-left: 10px;
}
.select {
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>