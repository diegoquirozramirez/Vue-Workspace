<template>
    <div>Quiz Item worked!
        {{pregunta}}
    </div>
</template>

<script>
export default {
    props:{
       pregunta:{
           type: Object,
           required: true
       }
    }
}
</script>