import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AdminService } from "app/layouts/admin-layout/admin.service";
import Chart from "chart.js";
import { Project } from "../crud/project/model/project";

@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  public projects: Project[] | any;
  public project: Project | any;
  public canvas: any;
  public ctx;
  public chartOverheads;
  public chartHr;
  public chartProfitability;
  public chartHours;

  public management = 0;
  public developer = 0;

  public software = 0;
  public hardware = 0;
  public premises = 0;
  public furniture = 0;
  public sourcing = 0;
  public distribution = 0;

  public cost = 0;
  public revenue = 0;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit() {
    this.projects = this.adminService.getProjects();
    this.adminService
      .getProjects()
      .subscribe((projects) => (this.projects = projects));

    this.adminService.getProjects().subscribe((res) => {
      let management = 0;
      let developer = 0;

      let software = 0;
      let hardware = 0;
      let premises = 0;
      let furniture = 0;
      let sourcing = 0;
      let distribution = 0;

      let cost = 0;
      let revenue = 0;

      this.projects.forEach((project) => {
        management += project.management;
        developer += project.developer;

        software += project.software;
        hardware += project.hardware;
        premises += project.premises;
        furniture += project.furniture;
        sourcing += project.sourcing;
        distribution += project.distribution;

        cost += project.cost;
        revenue += project.revenue;
      });

      this.management = management;
      this.developer = developer;

      this.software = software;
      this.hardware = hardware;
      this.premises = premises;
      this.furniture = furniture;
      this.sourcing = sourcing;
      this.distribution = distribution;

      this.cost = cost;
      this.revenue = revenue;

      // CHART OVERHEADS
      this.canvas = document.getElementById("chartOverheads");
      this.ctx = this.canvas.getContext("2d");
      this.chartOverheads = new Chart(this.ctx, {
        type: "pie",
        data: {
          labels: [1, 2, 3],
          datasets: [
            {
              label: "Overheads",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [
                "#49c6ff",
                "#174d8b",
                "#c0e6f5",
                "#952bc7",
                "#8a76fd",
                "#961919d0",
              ],
              borderWidth: 0,
              data: [
                software,
                hardware,
                premises,
                furniture,
                sourcing,
                distribution,
              ],
            },
          ],
        },

        options: {
          legend: {
            display: false,
          },

          pieceLabel: {
            render: "percentage",
            fontColor: ["white"],
            precision: 2,
          },

          tooltips: {
            enabled: false,
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "transparent",
                  color: "rgba(255,255,255,0.05)",
                },
              },
            ],

            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(255,255,255,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        },
      });

      //CHART HR
      this.canvas = document.getElementById("chartHr");
      this.ctx = this.canvas.getContext("2d");
      this.chartHr = new Chart(this.ctx, {
        type: "pie",
        data: {
          labels: [1, 2, 3],
          datasets: [
            {
              label: "Cost Breakdown",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["#49c6ff", "#174d8b"],
              borderWidth: 0,
              data: [management, developer],
            },
          ],
        },

        options: {
          legend: {
            display: false,
          },

          pieceLabel: {
            render: "percentage",
            fontColor: ["white"],
            precision: 2,
          },

          tooltips: {
            enabled: false,
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "transparent",
                  color: "rgba(255,255,255,0.05)",
                },
              },
            ],

            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(255,255,255,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        },
      });

      // CHART PROFITABILITY
      this.canvas = document.getElementById("chartProfitability");
      this.ctx = this.canvas.getContext("2d");
      this.chartProfitability = new Chart(this.ctx, {
        type: "pie",
        data: {
          labels: [1, 2, 3],
          datasets: [
            {
              label: "Profitability",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: ["#49c6ff", "#174d8b"],
              borderWidth: 0,
              data: [revenue, cost],
            },
          ],
        },

        options: {
          legend: {
            display: false,
          },

          pieceLabel: {
            render: "percentage",
            fontColor: ["white"],
            precision: 2,
          },

          tooltips: {
            enabled: false,
          },

          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "transparent",
                  color: "rgba(255,255,255,0.05)",
                },
              },
            ],

            xAxes: [
              {
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: "rgba(255,255,255,0.1)",
                  zeroLineColor: "transparent",
                },
                ticks: {
                  display: false,
                },
              },
            ],
          },
        },
      });

      // CHART BAR

      this.canvas = document.getElementById("chartHours");
      this.ctx = this.canvas.getContext("2d");
      this.chartProfitability = new Chart(this.ctx, {
        type: "bar",
        data: {
          labels: [
            "Software",
            "Hardware",
            "Premises",
            "Furniture",
            "Sourcing",
            "Distribution",
          ],
          datasets: [
            {
              label: "€",
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: [
                "#49c6ff",
                "#174d8b",
                "#c0e6f5",
                "#952bc7",
                "#8a76fd",
                "#961919d0",
              ],
              borderWidth: 0,
              data: [
                software,
                hardware,
                premises,
                furniture,
                sourcing,
                distribution,
              ],
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          scales: {
            yAxes: {
              beginAtZero: true,
            },
          },
        },
      });
    });
  }

  goToProject(project: Project) {
    this.router.navigate(["/project", project.id]);
  }

  public getProjects(): void {
    this.adminService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
