<template>
    <div>
        <div class="center-vertically">
            <h2>
                Mike Finnegan
            </h2>
            <h4>
                Full-Stack Software Engineer
            </h4>
            <h4>
                Boulder / Denver
            </h4>
    <!--    
            <p>
                I write custom software for all your business needs. <a href="/solutions">Find out how I can help your business</a>
            </p>
            <p>
                I invite you to check out some <a href="/portfolio">examples</a> of applications I've made.
            </p>
            <p>
                Feel free to look at my <a href="/#">resume</a> or <a href="/contact">send me a message</a>
            </p>
    -->
            <div class="next">
                <!-- <h4><a href="/solutions">Explore solutions</a></h4> -->
                <button @click="goToExplore()">Explore solutions</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        goToExplore: function() {
            this.$router.push('/solutions');
        }
    }
}
</script>
<style>
</style>