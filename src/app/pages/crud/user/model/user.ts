import { Project } from "../../project/model/project";

export interface User {
  id: number;
  surname: string;
  name: string;
  username: string;
  password: string;
  email: string;
  nationality: string;
  projects: Project[];
}
