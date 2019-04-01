<template>
    <section class="block-about">
        <app-title title="à propos" number="01"></app-title>
        <section class="block-about__content">
            <content-imgtext-horizontal 
            v-bind:image="require('@/assets/images/photo-about.jpg')" 
            v-bind:text="text"></content-imgtext-horizontal>
            <content-doubletext
            v-bind:text1="text1"
            v-bind:text2="text2"></content-doubletext>
        </section>
    </section>
</template>

<script>
import Title from '../parts/Title.vue'

export default {
    name: 'About',
    components: {
        "app-title": Title
    },
    data() {
        return {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Donec cursus congue nulla, vitae convallis massa sodales sed. Mauris tempus nec felis nec sodales. Nullam id mollis quam. Nam elementum purus sit amet neque vulputate tristique.',
            text1: 'Donec cursus congue nulla, vitae convallis massa sodales sed. Mauris tempus nec felis nec sodales. Nullam id mollis quam. Nam elementum purus sit amet neque vulputate tristique. Ut vel dapibus massa, et convallis lectus. Etiam laoreet ex id augue faucibus, id vehicula enim eleifend. Etiam vehicula ultrices turpis pharetra pharetra. In semper euismod vulputate. Nam non quam at lectus congue placerat. Nulla imperdiet efficitur lacus, nec mollis elit convallis ut. Ut hendrerit suscipit dapibus.',
            text2: 'Vivamus ac sapien sit amet tortor pulvinar bibendum nec ac purus. Proin eget leo porta, aliquam massa eget, tempor diam. Aliquam ut maximus metus. Praesent blandit ipsum libero, eu pretium est interdum eu. Cras blandit eget leo a fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Etiam mollis lectus neque, in sollicitudin massa varius ullamcorper. Aenean tristique tincidunt euismod. '
        }
    }
}
</script>

<style lang="scss" scoped>
.block-about {
    margin-top: 150px;

    .block-about__content {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }
}
</style>
