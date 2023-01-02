import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'app/pages/crud/project/model/project';
import { Task } from 'app/pages/crud/task/model/task';
import { User } from 'app/pages/crud/user/model/user';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  //USER
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiServerUrl}/users`);
  }

  public getUserById(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiServerUrl}/user/${userId}`);
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiServerUrl}/user/${user.id}`, user);
  }

  public deleteUserById(userId: number): Observable<void> {
    return this.httpClient.get<void>(`${this.apiServerUrl}/user/${userId}`);
  }


  //PROJECT
  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.apiServerUrl}/projects`);
  }

  public getProjectById(projectId: number): Observable<Project> {
    return this.httpClient.get<Project>(
      `${this.apiServerUrl}/project/${projectId}`
    );
  }

  public addProject(project: Project): Observable<Project> {
    return this.httpClient.post<Project>(
      `${this.apiServerUrl}/project/add`,
      project
    );
  }

  public updateProject(project: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      `${this.apiServerUrl}/project/${project.id}`,
      project
    );
  }

  public deleteProjectById(projectId: number): Observable<void> {
    return this.httpClient.get<void>(
      `${this.apiServerUrl}/project/${projectId}`
    );
  }

  //TASK
  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiServerUrl}/tasks`);
  }

  public getTaskById(taskId: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.apiServerUrl}/task/${taskId}`);
  }

  public addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiServerUrl}/task/add`, task);
  }

  public updateTaskById(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiServerUrl}/task`, task);
  }

  public deleteTaskById(taskId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServerUrl}/task/${taskId}`);
  }
}
