<template>
    <div class="container" id="contentDetail">
        <p class="font-weight-light" style="margin: 10px 0">
            历史 > Lighter weight text (relative to the parent element).
        </p>
        <p>
            <span class="badge badge-primary">Primary</span> 
            <span class="badge badge-secondary">Secondary</span> 
            <span class="badge badge-success">Success</span> 
        </p>
       <h1>Example heading</h1>
       <p>By username <span>2019-09-19</span></p>

       <!-- <div class="embed-responsive embed-responsive-16by9">
            <iframe width="1182" height="665" src="https://www.youtube.com/embed/aK8iqxP7Yjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> -->
        <p class="text-justify" style="font-size:18px;margin:10px 0 0 0">
            Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
        </p>
    </div>
</template>

<script>
export default {
    name: 'contentDetail',
    data () {
        return {
            alias : "patrick"
        }
    },
    methods : {
       // 回到主页
        toHome(){
            this.$router.push({name: "home"})
        }
    }
}
</script>

<style>
</style>