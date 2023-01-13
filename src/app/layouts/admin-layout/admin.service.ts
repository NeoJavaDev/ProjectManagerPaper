import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "app/pages/crud/project/model/project";
import { Task } from "app/pages/crud/task/model/task";
import { User } from "app/pages/crud/user/model/user";
import { environment } from "environments/environment";
import { catchError, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {}

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

  public updateUser(user: User): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.httpClient.put(`${this.apiServerUrl}/user/update`,user, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  public deleteUserById(userId: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.httpClient.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
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

  public updateProject(project: Project): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.httpClient.put(`${this.apiServerUrl}/project/update`,project, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  public deleteProjectById(projectId: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.httpClient.delete<void>(`${this.apiServerUrl}/project/delete/${projectId}`, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
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

  public updateTask(task: Task): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.httpClient.put(`${this.apiServerUrl}/task/update`,task, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  public deleteTaskById(taskId: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.httpClient.delete<void>(`${this.apiServerUrl}/task/delete/${taskId}`, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  private log(response: any) {
    console.table(response);
  }
  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
