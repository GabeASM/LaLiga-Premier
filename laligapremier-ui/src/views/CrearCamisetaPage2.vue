<template>
    <div>
        <!-- <InputFormComponent :nombre="equipoLabel" :input="inputText"></InputFormComponent>
        <InputFormComponent :nombre="ligaLabel" :input="inputText"></InputFormComponent>
        <InputFormComponent :nombre="equipoLabel" :input="inputText"></InputFormComponent>
        <InputFormComponent :nombre="dorsalLabel" :input="inputNumber"></InputFormComponent>
        <InputFormComponent :nombre="jugadorLabel" :input="inputText"></InputFormComponent>
        <InputFormComponent :nombre="temporadaLabel" :input="inputText"></InputFormComponent>
        <InputFormComponent :nombre="nombreCamisetaLabel" :input="inputText"></InputFormComponent>
        <InputFormComponent :nombre="precioLabel" :input="inputText"></InputFormComponent>
        <InputFormComponent :nombre="stockLabel" :input="inputNumber"></InputFormComponent>
        <InputFormComponent :nombre="subirFotoLabel" :input="inputText"></InputFormComponent> -->
        <FormComponent>
            <template v-slot:componenteSlot>
                <InputFormComponent :nombre="equipoLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="ligaLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="equipoLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="dorsalLabel" :input="inputNumber"></InputFormComponent>
                <InputFormComponent :nombre="jugadorLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="temporadaLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="nombreCamisetaLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="precioLabel" :input="inputText"></InputFormComponent>
                <InputFormComponent :nombre="stockLabel" :input="inputNumber"></InputFormComponent>
                <InputFormComponent :nombre="subirFotoLabel" :input="inputText"></InputFormComponent>
            </template>
        </FormComponent>
    </div>
</template>
<script setup>
import InputFormComponent from '@/components/InputFormComponet.vue'
import FormComponent from '@/components/FormComponent.vue'
import { ref } from 'vue'


const equipoLabel = ref("Equipo")
const ligaLabel = ref("Liga")
const dorsalLabel = ref("Dorsal")
const jugadorLabel = ref("Jugador")
const temporadaLabel = ref("Temporada")
const nombreCamisetaLabel = ref("Nombre camiseta")
const precioLabel = ref("Precio")
const stockLabel = ref("Stock")
const subirFotoLabel = ref("Subir Fotos")


const inputText = ref("text")
const inputNumber = ref("number")


</script>

<style></style>