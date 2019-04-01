<template>
    <div class="content-container">
        <div class="content-container__text-container">
            <p>{{text1}}</p>
        </div>
        <div class="content-container__text-container">
            <p>{{text2}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DoubleText',
    props: ['text1', 'text2']
}
</script>