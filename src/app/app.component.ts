import { Component, Input, OnInit } from '@angular/core';
import { EstudentService } from '../services/student.servicio';
 interface Estudiante  {
    nombre: string,
    apellido: string,
    identification: string,
    enrolledCourses: []
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prueba';
  cursos: any[] = [];
  estudiantes: any[] = [];

  constructor ( private estudianteServicio: EstudentService ) {
  }

  @Input() estudiante : Estudiante = {
    nombre: '',
    apellido: '',
    identification: '',
    enrolledCourses: []
  } 

  async agregar(){
    if ( this.estudiante.nombre.trim().length === 0 ) { return; }
    //this.onNuevoPersonaje.emit( this.nuevo );

    await this.estudianteServicio.createStudent( this.estudiante );

    this.estudiante = {
      nombre: '',
      apellido: '',
      identification: '',
      enrolledCourses: []
    }

    const estudiantes = await
      this.estudianteServicio.getStudents();
      this.estudiantes = await estudiantes.json();
  }

  async ngOnInit() {
      const courses = await
      this.estudianteServicio.getCourses();
      this.cursos = await courses.json();
      const estudiantes = await
      this.estudianteServicio.getStudents();
      this.estudiantes = await estudiantes.json();
      
      console.log(this.cursos)
  }
}
