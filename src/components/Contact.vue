<template>
    <section class="block-contact">
        <app-title title="Contact" number="03"></app-title>
        <ul>
            <p class="list-title">Social Links & Contacts</p>
            <li v-for="(item, index) in contactList" :key="index">
                <a :href="item.url">{{item.title}}</a>
            </li>
        </ul>
    </section>
</template>

<script>
import Title from '../parts/Title.vue'
export default {
    name: 'Contact',
    components: {
        "app-title": Title
    },
    data() {
        return {
            contactList: [
                {
                    title: 'Instagram',
                    url: 'Instagram.com'
                },
                {
                    title: 'Facebook',
                    url: 'Facebook.com'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.block-contact {
    margin-top: 120px;

    ul {
        .list-title {
            padding-bottom: 15px;
            margin-bottom: 25px;
            color: #e53935;
            font-size: 20px;
            position: relative;

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 20px;
                height: 1px;
                background: #e53935;
            }
        }

        li {
            list-style-type: none;
            margin: 10px 0;

            a {
                text-decoration: underline;
                color: black;
                font-size: 20px;
                opacity: 0.7;
            }
        }
    }
}
</style>
