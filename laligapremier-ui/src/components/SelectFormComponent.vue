<template>
    <div class="form-group row py-2">
        <label class="col-sm-2 col-form-label">{{ labelNombre }}</label>
        <div class="col-sm-1">
            <select>
                <option v-for="(item, index) in opcionesSelect" :key="index">{{ item }}</option>
            </select>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
    nombre: String,
    opciones: []
});

const labelNombre = ref(props.nombre)
const opcionesSelect = ref(props.opciones)

</script>

<style></style>