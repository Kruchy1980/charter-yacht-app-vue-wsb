<template>
    <div class="about">
        <MainMenu />
        <h2>O nas</h2>
        <MainFooter />
    </div>
</template>

<script>
import MainMenu from "@/components/MainMenu"
import MainFooter from "@/components/MainFooter"
export default {
    name: "about",
    components: { MainMenu,MainFooter }
}
</script>

<style>

</style>