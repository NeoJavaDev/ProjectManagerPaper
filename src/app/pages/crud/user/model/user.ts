import { Project } from "../../project/model/project";
import { ProjectEntity } from "../../project/model/projectEntity";

export class User {
  id: number;
  surname: string;
  name: string;
  username: string;
  password: string;
  email: string;
  nationality: string;
  projects: Project[];

  constructor(
    surname: string = 'Enter a surname',
    name: string = 'Enter a name',
    username: string = 'Enter a username',
    password: string = 'Enter a password',
    email: string = 'Enter an email',
    nationality: string = 'Enter a nationality',
    project: Project = new ProjectEntity(),
    projects: Project[] = new Array(),
  ){
    this.surname = surname;
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.nationality = nationality;
    projects.push(project);
    this.projects = projects;
  }
}
