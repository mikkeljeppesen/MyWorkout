<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { Line } from "vue-chartjs";
export default {
  name: "ExerciseProgress",
  extends: Line,
  mounted() {
    this.renderChart(this.data, this.options);
  },
  data: function() {
    let data = {
      labels: this.$route.params.date,
      datasets: [
        {
          data: this.$route.params.weight,
          backgroundColor: "transparent",
          borderColor: "#ffffff",
          pointBackgroundColor: "#ffffff",
          lineTension: 0
        }
      ]
    };
    let options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      title: {
        display: true,
        text: "DIN PROGRESSION"
      },
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "#2669B6",
        titleFontSize: 14,
        titleFontStyle: "bold",
        bodyFontSize: 14,
        xPadding: 10,
        yPadding: 10,
        displayColors: false,
        callbacks: {
          label: function(tooltipItem, data) {
            return "Weight: " + tooltipItem.value + " kg";
          },
          footer: function(tooltipItem, data) {
            return "Total: ";
          }
        }
      }
    };
    return { data, options };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
