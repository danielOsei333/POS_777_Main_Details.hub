document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April","May" ],
        datasets: [
          {
            label: "Purchase",
            backgroundColor: "#9ccc65",
            data: [0, 0, 0, 300000],
          },
          {
            label: "Sales",
            backgroundColor: "#42a5f5",
            data: [0, 0, 0, 350000],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  });
  









  $(function () {
    /* ChartJS
     * -------
     * Here we will create a few charts using ChartJS
     */


    //-------------
    //- BAR CHART -
    //-------------
    var barChartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
      datasets: [
        {
          label: "Purchase Amt(in ₹)",
          fillColor: "rgba(210, 214, 222, 1)",
          strokeColor: "rgba(210, 214, 222, 1)",
          pointColor: "rgba(210, 214, 222, 1)",
          pointStrokeColor: "#c1c7d1",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [0, 0, 0, 310475.00, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          label: "Sales Amt(in ₹)",
          fillColor: "rgba(60,141,188,0.9)",
          strokeColor: "rgba(60,141,188,0.8)",
          pointColor: "#3b8bba",
          pointStrokeColor: "rgba(60,141,188,1)",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(60,141,188,1)",
          data: [0, 0, 0, 351422.70, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    };
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas);
    barChartData.datasets[1].fillColor = "#00a65a";
    barChartData.datasets[1].strokeColor = "#00a65a";
    barChartData.datasets[1].pointColor = "#00a65a";
    var barChartOptions = {
      //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      //Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,
      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.05)",
      //Number - Width of the grid lines
      scaleGridLineWidth: 1,
      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,
      //Boolean - If there is a stroke on each bar
      barShowStroke: true,
      //Number - Pixel width of the bar stroke
      barStrokeWidth: 2,
      //Number - Spacing between each of the X value sets
      barValueSpacing: 5,
      //Number - Spacing between data sets within X values
      barDatasetSpacing: 1,
      //String - A legend template
      legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
      //Boolean - whether to make the chart responsive
      responsive: true,
      maintainAspectRatio: true
    };

    barChartOptions.datasetFill = false;
    barChart.Bar(barChartData, barChartOptions);
  });


  /* PIE CHART*/
  Highcharts.chart('bar_container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Top 10 Trending Items %'
    },
    tooltip: {
        /*pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'*/
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Item',
        colorByPoint: true,
        data: [
        {name:'Lee Shirts', y:8.00},{name:'Signature Jeans', y:7.00},{name:'Lee Jacket', y:3.00},{name:'Suits', y:10.00},{name:'Rd Shoes', y:4.00},{name:'VP Shoes', y:4.00},{name:'WM Shoes', y:2.00},{name:'How to Analyze People', y:1.00},{name:'I Do What I Do', y:5.00},{name:'Apple PC', y:3.00},                 ]
    }]
});
/* PIE CHART END*/


/* Theme color finder  text/javascript*/

    var default_skin = 'skin-blue';
    var theme_skin = (typeof (Storage) !== "undefined") ? localStorage.getItem('skin') : default_skin;
    theme_skin = (theme_skin=='' || theme_skin==null) ? default_skin : theme_skin;
    var sidebar_collapse = (typeof (Storage) !== "undefined") ? localStorage.getItem('collapse') : default_skin;
   

    var failed_sound = document.getElementById("failed"); 
    var success_sound = document.getElementById("success"); 

    var AdminLTEOptions = {
      /*  <!-- AdminLTE App -->
   https://adminlte.io/themes/AdminLTE/documentation/index.html*/
      sidebarExpandOnHover: true,
      navbarMenuHeight: "200px", //The height of the inner menu
      animationSpeed: 250,
    };

    $(document).ajaxStart(function() { Pace.restart(); }); 

    var AdminLTEOptions = {
      /*https://adminlte.io/themes/AdminLTE/documentation/index.html*/
      sidebarExpandOnHover: true,
      navbarMenuHeight: "200px", //The height of the inner menu
      animationSpeed: 250,
    };

    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-orange',
        /*uncheckedClass: 'bg-white',*/
        radioClass: 'iradio_square-orange',
        increaseArea: '10%' // optional
      });
    });

    $(".select2").select2();

    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();   
  });

  $(function($) { // this script needs to be loaded on every page where an ajax POST may happen
    //var csrf = $('input[name="csrf_token"]').val();  // <- get token value from hidden form input
      $.ajaxSetup({ data: {'csrf_test_name' : '63e99d091479cffe247ecfbcabf27585' }  }); });

      function show_delete_btn() {
        var group_check_count = $(".group_check").prop("checked") ? 1: 0;
        var check_count = $('#example2').find('input[type=checkbox]:checked').length-parseInt(group_check_count);
      
        //console.log($('#example2 > tbody').find('.checkbox').length);
        if(parseInt(check_count)>0){
          $(".delete_btn").removeClass('hidden').show();
        }    
        else{
          $(".delete_btn").addClass('hidden').hide();
        }
      
        if($('#example2 > tbody').find('.checkbox').length == check_count){
          $(".group_check").prop("checked",true).iCheck('update');
        }
        else{
          $(".group_check").prop("checked",false).iCheck('update');
        }
      
      }
      $('.group_check').on('ifChanged', function(event) {
          if(event.target.checked){
            $(".column_checkbox").prop("checked",true).iCheck('update');
          }
          else{
            $(".column_checkbox").prop("checked",false).iCheck('update');
          }
          show_delete_btn();
      });
      
      
      function call_code(){
        $('.column_checkbox').on('ifChanged', function(event) {
            show_delete_btn();
        });
      }

      $(document).ready(function () { setTimeout(function() {$( ".alert-dismissable" ).fadeOut( 1000, function() {});}, 10000); });
   
    
      function round_off(input=0){
              return input;
          }
   
      function tax_disabled(){
              return false;
          }

        $(".dashboard-active-li").addClass("active");
          
            $(function () {
              $('#example2,#example3').DataTable({
                "pageLength" : 5,
                "paging": true,
                "lengthChange": false,
                "searching": false,
                "ordering": true,
                "info": true,
                "autoWidth": false
              });
            });