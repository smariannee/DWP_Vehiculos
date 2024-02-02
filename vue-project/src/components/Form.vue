<template>
    <b-container fluid>
        <b-row class="pb-3">
            <b-col cols="12" class="p-3">
                <b-card>
                    <b-breadcrumb :items="items" class="mb-0"></b-breadcrumb>
                </b-card>
            </b-col>
            <b-col cols="12">
                <b-card class="pb-5">
                    <template #header>
                        <h5 class="mb-0">Registra un nuevo vehículo</h5>
                    </template>
                    <b-card-body>
                        <b-form>
                            <b-row>
                                <b-col cols="12" md="6">
                                    <b-form-group>
                                        <label for="brand" class="mb-2">Marca:</label>
                                        <b-form-input id="brand" type="text"></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="6" class="mt-3 mt-md-0">
                                    <b-form-group>
                                        <label for="model" class="mb-2">Modelo:</label>
                                        <b-form-input id="model" type="text"></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" md="6" class="mt-3">
                                    <b-form-group>
                                        <label for="year" class="mb-2">Año:</label>
                                        <b-form-input id="year" type="number"></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="6" class="mt-3">
                                    <b-form-group>
                                        <label for="series" class="mb-2">Número de serie:</label>
                                        <b-form-input id="series" type="text"></b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <div class="mx-5 mt-4 position-right">
                                <b-button type="submit" variant="success" class="mx-4">Guardar</b-button>
                                <b-button type="reset" variant="danger">Limpiar</b-button>
                            </div>
                        </b-form>
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
            items: [
                {
                    text: 'Inicio',
                    to: { name: 'home' }
                },
                {
                    text: 'Lista de vehículos',
                    to: { name: 'car-list' }
                },
                {
                    text: 'Nuevo vehículo',
                    active: true
                }
            ],
        }
    }
}
</script>

<style></style>