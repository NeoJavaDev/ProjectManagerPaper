import { Project } from "../../project/model/project";
import { ProjectEntity } from "../../project/model/projectEntity";

export class Task {
  id: number
  name: string;
  logo: string;
  management: number;
  developer: number;
  software: number;
  hardware: number;
  premises: number;
  furniture: number;
  sourcing: number;
  distribution: number;
  cost: number;
  revenue: number;
  profitability: boolean;
  project: Project;

  constructor(
    name: string = 'Enter a name',
    logo: string = 'Enter a logo',
    management: number = 0,
    developer: number = 0,
    software: number = 0,
    hardware: number = 0,
    premises: number = 0,
    furniture: number = 0,
    sourcing: number = 0,
    distribution: number = 0,
    cost: number = management + developer + software + hardware
                    + premises + furniture + sourcing + distribution,
    revenue: number = 0,
    profitability: boolean = false,

  ) {
    this.name = name;
    this.logo = logo;
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
    this.profitability = profitability;

  }
}
