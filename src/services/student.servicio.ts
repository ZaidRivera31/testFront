

  import { Injectable } from "@angular/core";


@Injectable()
export class EstudentService {

    constructor() {}

    createStudent(
        body:any
      ) {
        return fetch(
          `https://tester-utl.herokuapp.com/students/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(body) 
          }
        );
      }

      getCourses(){
        return fetch(
            `https://tester-utl.herokuapp.com/courses/list/all`,
            {
              method: "GET",
              headers: {
                Accept: "*/*"
              },
            }
          );
      }

      getStudents(){
        return fetch(
            `https://tester-utl.herokuapp.com/students/list/all`,
            {
              method: "GET",
              headers: {
                "Content-Type": "*/*"
              },
            }
          );
      }
    
}