<template>
    <section class="introduction-container">
        <div class="img-container">
            <img src="@/assets/images/home.jpg" alt="home-image">
        </div>
        <article class="introduction-container__title-container">
            <h1>Les plantes <br><span>connectées</span></h1>
        </article>
    </section>
</template>

<script>
export default {
    name: 'Introduction'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.introduction-container {
    position: relative;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;

    .img-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .introduction-container__title-container {
        display: flex;
        align-self: flex-end;
        position: relative;
        width: 85%;
        margin: 0 auto;
        padding-bottom: 40px;
        margin-bottom: 100px;

        &:after {
            content: '';
            background: white;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 1px;
        }

        h1 {
            font-family: $font-title;
            color: white;
            font-size: 72px;
            text-transform: uppercase;
            line-height: 1.1;

            span {
                color: transparent;
                -webkit-text-stroke: 1px white;
            }
        }
    }
}

</style>
