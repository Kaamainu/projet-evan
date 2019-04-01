<template>
    <div class="content-container single-container">
        <div class="content-container__img-container single-image">
            <img :src="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'FullImage',
    props: ['image']
}
</script>
