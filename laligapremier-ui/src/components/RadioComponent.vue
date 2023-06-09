<template>
    <div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                {{ nombreLabel }}
            </label>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
    nombre: String,
});

const nombreLabel = ref(props.nombre)

</script>

<style></style>