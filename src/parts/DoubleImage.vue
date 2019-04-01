<template>
    <div class="content-container">
        <div class="content-container__img-container">
            <img :src="image1">
        </div>
        <div class="content-container__img-container">
            <img :src="image2">
        </div>
    </div>
</template>

<script>
export default {
    name: 'DoubleImage',
    props: ['image1', 'image2']
}
</script>
