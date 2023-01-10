import { Project } from "../../project/model/project";

export interface Task {
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
  project_id_fk:number,
  project: Project;
}
