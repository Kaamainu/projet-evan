<template>
    <div class="content-container">
        <div class="content-container__img-container">
            <img :src="image">
        </div>
        <div class="content-container__text-container">
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageTextHorizontal',
    props: ['image', 'text']
}
</script>

<style lang="scss">
.content-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;

    div {
        width: 47%;
    }

    .content-container__img-container {
        overflow: hidden;
        height: 360px;
        background: black;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            opacity: 0.7;
        }
    }

    .content-container__text-container {
        p {
            opacity: 0.7;
            color: black;
            font-size: 20px;
            line-height: 1.5;
        }
    }

    &.single-container {
        div {
            width: 100%;
        }
    }
}
</style>
