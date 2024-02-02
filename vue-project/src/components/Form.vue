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
                        <b-form @submit.prevent="validateForm">
                            <b-row>
                                <b-col cols="12" md="6">
                                    <b-form-group>
                                        <label for="brand" class="mb-2">Marca:</label>
                                        <b-form-input id="brand" type="text" v-model="form.brand" trim></b-form-input>
                                        <b-form-invalid-feedback :state="!errors.state.brand">
                                            {{ errors.message.brand }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="6" class="mt-3 mt-md-0">
                                    <b-form-group>
                                        <label for="model" class="mb-2">Modelo:</label>
                                        <b-form-input id="model" type="text" v-model="form.model" trim></b-form-input>
                                        <b-form-invalid-feedback :state="!errors.state.model">
                                            {{ errors.message.model }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" md="6" class="mt-3">
                                    <b-form-group>
                                        <label for="year" class="mb-2">Año:</label>
                                        <b-form-input id="year" type="number" v-model="form.year"></b-form-input>
                                        <b-form-invalid-feedback :state="!errors.state.year">
                                            {{ errors.message.year }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" md="6" class="mt-3">
                                    <b-form-group>
                                        <label for="serie" class="mb-2">Número de serie:</label>
                                        <b-form-input id="serie" type="text" v-model="form.serie" trim></b-form-input>
                                        <b-form-invalid-feedback :state="!errors.state.serie">
                                            {{ errors.message.serie }}
                                        </b-form-invalid-feedback>
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
import instance from '../config/axios';
export default {
    data() {
        return {
            form: {
                brand: "",
                model: "",
                year: "",
                serie: ""
            },
            errors: {
                message: {
                    brand: "",
                    model: "",
                    year: "",
                    serie: ""
                },
                state: {
                    brand: false,
                    model: false,
                    year: false,
                    serie: false
                }
            },
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
            regex: {
                text: /^[a-zA-Z0-9\s]+$/,
                serie: /^[a-zA-Z]{4}\d{3}-\d{2}[a-zA-Z]{2}$/
            },
        }
    },
    methods: {
        validateRequired(field) {
            if (this.form[field]) {
                this.errors.state[field] = false;
                this.errors.message[field] = null;
                return true;
            } else {
                this.errors.state[field] = true;
                this.errors.message[field] = 'El campo es requerido';
                return false;
            }
        },

        validateRegex(field, regex) {
            if (regex.test(this.form[field])) {
                return true;
            } else {
                return false;
            }
        },

        validateYear() {
            if (this.form.year > 0) {
                if (this.form.year <= new Date().getFullYear()) {
                    this.errors.state.year = false;
                    this.errors.message.year = null;
                    return true;
                } else {
                    this.errors.state.year = true;
                    this.errors.message.year = 'El año no puede ser mayor al actual';
                    return false;
                }
            } else {
                this.errors.state.year = true;
                this.errors.message.year = 'Ingrese un año válido';
                return false;
            }
        },

        validateForm() {
            let isValidBrand = false, isValidModel = false, isValidYear = false, isValidSerie = false;
            if (this.validateRequired('brand')) {
                if (this.validateRegex('brand', this.regex.text)) {
                    isValidBrand = true;
                } else {
                    this.errors.state.brand = true;
                    this.errors.message.brand = 'El campo solo acepta letras y números';
                }
            }
            if (this.validateRequired('model')) {
                if (this.validateRegex('model', this.regex.text)) {
                    isValidModel = true;
                } else {
                    this.errors.state.model = true;
                    this.errors.message.model = 'El campo solo acepta letras y números';
                }
            }
            if (this.validateRequired('year')) {
                if (this.validateYear()) {
                    isValidYear = true;
                }
            }
            if (this.validateRequired('serie')) {
                console.log("first")
                if (this.validateRegex('serie', this.regex.serie)) {
                    isValidSerie = true;
                } else {
                    this.errors.state.serie = true;
                    this.errors.message.serie = 'El campo debe tener el formato correspondiente al del número de serie de un vehículo';
                }
            }
            if (isValidBrand && isValidModel && isValidYear && isValidSerie) {
                instance.post("/vehiculos",this.form).then((response) => {
                    alert('Vehículo registrado con éxito');
                    setTimeout(() => {
                        this.$router.push({ name: 'car-list' });
                    }, 1000);
                }).catch((error) => {
                    alert('Ocurrió un error al registrar el vehículo');
                });
            }
        },
    }
}
</script>

<style></style>