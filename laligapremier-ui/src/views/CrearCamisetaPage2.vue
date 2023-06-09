<template>
    <div>
        <FormComponent>
            <template v-slot:componenteSlot>
                <RadioComponent :nombre="masculinoLabelRadio"></RadioComponent>
                <RadioComponent :nombre="femeninoLabelRadio"></RadioComponent>
                <InputFormComponent :nombre="stockLabel" :input="inputNumber"></InputFormComponent>
                <div class="mt-5 btn-publicar">
                    <input type="submit" value="Agrega talla" class="btn btn-dark" />
                    <tr></tr>
                </div>
            </template>
        </FormComponent>
        <FormComponent>
            <template v-slot:componenteSlot>
                <SelectFormComponet :nombre="equipoSelectLabel" :opciones="equipoSelect"></SelectFormComponet>
                <InputFormComponent :nombre="ligaLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="equipoLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="dorsalLabel" :input="inputNumber"></InputFormComponent>
                <InputFormComponent :nombre="jugadorLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="temporadaLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="nombreCamisetaLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="precioLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="subirFotoLabel" :input="inputText"></InputFormComponent>
                <SelectFormComponet :nombre="epocaLabel" :opciones="epocaSelect"></SelectFormComponet>

                <div class="mt-5 btn-publicar">
                    <input type="submit" value="Publicar" class="btn btn-dark" />
                    <router-link to="/detalle/id">
                        <input type="submit" value="Publicar y Ver" class="btn btn-success mx-3" />
                    </router-link>
                    <tr></tr>
                </div>
            </template>
        </FormComponent>
    </div>
</template>
<script setup>
import InputFormComponent from "@/components/InputFormComponet.vue";
import FormComponent from "@/components/FormComponent.vue";
import SelectFormComponet from "@/components/SelectFormComponent.vue";
import RadioComponent from "@/components/RadioComponent.vue";
import { ref } from "vue";

const equipoLabel = ref("Equipo");
const ligaLabel = ref("Liga");
const dorsalLabel = ref("Dorsal");
const jugadorLabel = ref("Jugador");
const temporadaLabel = ref("Temporada");
const nombreCamisetaLabel = ref("Nombre camiseta");
const precioLabel = ref("Precio");
const stockLabel = ref("Stock");
const subirFotoLabel = ref("Subir Fotos");
const equipoSelectLabel = ref("Club / Seleccion");
const epocaLabel = ref("Epoca");


const masculinoLabelRadio = ref("Hombre")
const femeninoLabelRadio = ref("Mujer")


const epocaSelect = ref(["Moderno", "Clasico"]);
const equipoSelect = ref(["Club", "Seleccion"]);

const inputText = ref("text");
const inputNumber = ref("number");
</script>

<style scoped></style>
