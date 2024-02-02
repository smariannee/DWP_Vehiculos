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
                                <b-table :items="cars" responsive="sm" class="px-3" small striped hover></b-table>                                
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
}
</script>
  
<style scoped>
.icon {
    margin-left: 10px;
}
</style>