<template>
    <div>
        <div class="graph">
            <canvas ref="myChart" id="myChart" width="300" height="300n"></canvas>
        </div>
        <div class="volume">
            <p>Volume of exercise</p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { Line } from 'vue-chartjs';

export default {
    name: 'ExerciseStats',
    extends: Line,
    props: ['chardata', 'options'],
    mounted() {
        this.renderChart(this.chardata, this.options)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$primary: #232429;
$btn-primary: #1B1C20;
$color: #707070;
$shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
$radius: 5px;
$padding: 2rem;


</style>
