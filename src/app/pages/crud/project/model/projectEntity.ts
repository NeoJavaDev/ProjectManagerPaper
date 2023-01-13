import { end } from "@popperjs/core";
import { Task } from "../../task/model/task";
import { User } from "../../user/model/user";
import { Project } from "./project";

export class ProjectEntity implements Project {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
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
  user: User;
  tasks: Task[];

  constructor(
    name: string = 'Enter a name',
    startDate: Date = new Date(),
    endDate: Date = new Date(),
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
    user: User = new User(),
    task: Task = undefined,
    tasks: Task[] = undefined
  ){
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
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
    this.user = user;
    tasks.push(task);
    this.tasks = tasks;
  }
}
