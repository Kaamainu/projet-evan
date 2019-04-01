<template>
    <div class="title-container">
        <p class="title-container__number">{{number}}</p>
        <p class="title-container__title">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        number: String,
        title: String
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.title-container {
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    margin-bottom: 80px;

    p {
        font-size: 42px;
        font-family: $font-title;
    }

    .title-container__number {
        position: relative;
        color: transparent;
        -webkit-text-stroke: 1px black;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: -100vw;
            width: 100vw;
            background: black;
            height: 1px;
            transform: translate(-50px, -50%);
        }
    }

    .title-container__title {
        position: relative;
        color: black;
        margin-left: 260px;
        text-transform: uppercase;
        
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: -170px;
            width: 180px;
            background: black;
            height: 1px;
            transform: translate(-50px, -50%);
        }
    }
}
</style>
