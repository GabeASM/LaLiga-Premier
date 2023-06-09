<template>
    <div class="form-group row py-2">
        <label class="col-sm-2 col-form-label">{{ nombreLabel }}</label>
        <div class="col-sm-6">
            <input :type="inputText" class="form-control"/>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from "vue";
const props = defineProps({
    nombre: String,
    input: String
});

const nombreLabel = ref(props.nombre)
const inputText = ref(props.input)

</script>

<style></style>