<template>
    <h1>Donaciones</h1>
    <form class="container">
        <div class="form-group d-flex mb-5" style="height: 40px;">
            <label for="exampleFormControlSelect1" class="col-sm-2 mt-2">Seleccionar Escuela</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>Escuela de Fútbol 1</option>
                <option>Escuela de Fútbol 2</option>
                <option>Escuela de Fútbol 3</option>
                <option>Escuela de Fútbol 4</option>
                <option>Escuela de Fútbol 5</option>
            </select>
            <a class="btn btn-success mx-3" style="width: 20%;" href="/escuelas" >Ver Escuelas</a>
        </div>
        <hr>
        <div class="form-group d-flex mt-5">
            <label for="exampleInputPassword1" class="col-sm-1 mt-2">Monto</label>
            <input type="number" class="form-control" style="width: 20%;" min="500" id="exampleInputPassword1" placeholder="$">
        </div>
        <button type="submit" class="btn btn-primary mt-4" @click="notificar">Enviar Donación</button>
    </form>
</template>

<script>
export default {
    name: "DonacionesPage",
    methods: {
        notificar() {
            alert("¡Gracias por su donación! :D")
        }
    }
}
</script>

<style scoped>
h1 {
    margin-top: 2%;
    margin-bottom: 4%;
}
form {
    width: 60%;
}
input {
    width: 80%;
}
label {
    margin-right: 2%;
}
</style>