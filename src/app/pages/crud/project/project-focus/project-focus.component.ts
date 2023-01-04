import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import Chart from 'chart.js';
import { Project } from '../model/project';


@Component({
  selector: 'app-project-focus',
  templateUrl: './project-focus.component.html',
  styles: [
  ]
})
export class ProjectFocusComponent implements OnInit {


  project: Project|any;
  projects: Project[]|any;

  public canvas : any;
  public ctx;
  public chartEmail;

  constructor(private adminService: AdminService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.projects = this.adminService.getProjects();
    const projectId: string|null = this.route.snapshot.paramMap.get('id');

    if(projectId) {
      this.adminService.getProjectById(+projectId)
      .subscribe(project => this.project = project);
    }

    this.adminService.getProjectById(+projectId)
    .subscribe(res => {
      let management = res.management;
      let developer = res.developer;

      let software = res.software;
      let hardware = res.hardware;
      let premises = res.premises;
      let furniture = res.furniture;
      let sourcing = res.sourcing;
      let distribution = res.sourcing;

      let cost = res.cost;
      let revenue = res.revenue;

      this.canvas = document.getElementById("chartEmail");
      this.ctx = this.canvas.getContext("2d");
      this.chartEmail = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Cost Breakdown",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#3e5170',
              '#4acccd',
              '#fcc468',
              '#ef2100',
              '#ef7895',
              '#ef6328',
            ],
            borderWidth: 0,
            data: [software, hardware, premises, furniture, sourcing, distribution]
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
    });


  }

}
