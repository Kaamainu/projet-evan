<template>
    <footer>
        <p>© Evan Jolif - 2019</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
    margin-top: 120px;
    width: 100%;
    background: #ebe9e7;
    position: relative;
    
    p {
        padding: 25px 0 15px 0;
        font-size: 16px;
        opacity: 0.5;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: -100vw;
        width: 100vw;
        height: 100%;
        background: #ebe9e7;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: -100vw;
        width: 100vw;
        height: 100%;
        background: #ebe9e7;
    }
}
</style>

