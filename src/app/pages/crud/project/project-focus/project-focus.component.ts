import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import Chart from 'chart.js';


@Component({
  selector: 'app-project-focus',
  templateUrl: './project-focus.component.html',
  styles: [
  ]
})
export class ProjectFocusComponent implements OnInit {

  public canvas : any;
  public ctx;
  public chartEmail;

  constructor(private adminService: AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const projectId: string|null = this.route.snapshot.paramMap.get('id');
    this.adminService.getProjectById(+projectId)
      .subscribe(response => {
        let sourcing = response.sourcing;
        let premises = response.premises;
        let furniture = response.furniture;
        let distribution = response.distribution;
      

      this.canvas = document.getElementById("chartEmail");
      this.ctx = this.canvas.getContext("2d");
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Cost of Labor",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468',
              '#ef8157'
            ],
            borderWidth: 0,
            data: [sourcing, premises, furniture, distribution]
          }]
        },

        options: {

          legend: {
            display: false
          },

          pieceLabel: {
            render: 'percentage',
            fontColor: ['white'],
            precision: 2
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{

              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false,
              }
            }]
          },
        }
      });
    })

  }

}
