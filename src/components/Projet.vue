<template>
    <section class="block-projet">
        <app-title title="Projet" number="02"></app-title>
        <content-fullimage
            v-bind:image="require('@/assets/images/photo-projet.jpg')">
        </content-fullimage>
        <content-doubletext
            v-bind:text1="text1"
            v-bind:text2="text2">
        </content-doubletext>
        <content-doubleimage
            v-bind:image1="require('@/assets/images/photo-projet2.jpg')"
            v-bind:image2="require('@/assets/images/photo-projet3.jpg')">
        </content-doubleimage>
    </section>
</template>

<script>
import Title from '../parts/Title.vue'
export default {
    name: 'Projet',
    components: {
        'app-title': Title
    },
    data() {
        return {
            text1: 'Donec cursus congue nulla, vitae convallis massa sodales sed. Mauris tempus nec felis nec sodales. Nullam id mollis quam. Nam elementum purus sit amet neque vulputate tristique. Ut vel dapibus massa, et convallis lectus. Etiam laoreet ex id augue faucibus, id vehicula enim eleifend. Etiam vehicula ultrices turpis pharetra pharetra. In semper euismod vulputate. Nam non quam at lectus congue placerat. Nulla imperdiet efficitur lacus, nec mollis elit convallis ut. Ut hendrerit suscipit dapibus.',
            text2: 'Vivamus ac sapien sit amet tortor pulvinar bibendum nec ac purus. Proin eget leo porta, aliquam massa eget, tempor diam. Aliquam ut maximus metus. Praesent blandit ipsum libero, eu pretium est interdum eu. Cras blandit eget leo a fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Etiam mollis lectus neque, in sollicitudin massa varius ullamcorper. Aenean tristique tincidunt euismod. '
        }
    }
}
</script>

<style lang="scss" scoped>
.block-projet {
    margin-top: 120px;
}
</style>

