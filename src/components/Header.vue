<template>
    <header>
        <div class="logo-container">
            <img src="@/assets/svg/logo.svg" alt="logo">
        </div>
        <nav class="menu-container">
            <ul class="menu-container__list">
                <li v-for='(item, index) in menu' :key="index"><a href="#">{{item}}</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'header',
    data() {
        return {
          menu: ["à propos", 'Projet', 'Contact']  
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    margin-top: 60px;

    .logo-container {
        height: 40px;
        width: auto;
        overflow: hidden;

        img {
            height: 100%;
        }
    }

    .menu-container {
        .menu-container__list {
            display: flex;

            li {
                list-style-type: none;
                font-family: $font-bold;
                text-transform: capitalize;
                font-size: 20px;

                a {
                    text-decoration: none;
                    color: white;
                }
                
                &:not(:last-child) {
                    margin-right: 80px;
                }
            }
        }
    }
}
</style>
