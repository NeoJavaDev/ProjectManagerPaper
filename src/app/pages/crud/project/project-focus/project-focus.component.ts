import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AdminService } from "app/layouts/admin-layout/admin.service";
import Chart from "chart.js";
import { Project } from "../model/project";

@Component({
  selector: "app-project-focus",
  templateUrl: "./project-focus.component.html",
  styles: [],
})
export class ProjectFocusComponent implements OnInit {
  project: Project | any;
  projects: Project[] | any;

  public canvas: any;
  public ctx;
  public chartOverheads;
  public chartHr;
  public chartProfitability;
  public chartHours;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projects = this.adminService.getProjects();
    const projectId: string | null = this.route.snapshot.paramMap.get("id");

    if (projectId) {
      this.adminService
        .getProjectById(+projectId)
        .subscribe((project) => (this.project = project));
    }

    this.adminService.getProjectById(+projectId).subscribe((res) => {
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

      // CHART OVERHEADS
      this.canvas = document.getElementById("chartOverheads");
      this.ctx = this.canvas.getContext("2d");
      this.chartOverheads = new Chart(this.ctx, {
        type: "pie",
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
              label: "Cost Breakdown",
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
            enabled: true,
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
      this.chartOverheads = new Chart(this.ctx, {
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
    });
  }
}
