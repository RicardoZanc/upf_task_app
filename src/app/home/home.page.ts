import { Component } from '@angular/core';
import { AddNewTaskComponent } from '../components/add-new-task/add-new-task.component';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks: Array<any> = [
    { id: 1, title: 'Entregar o trabalho', subtitle: 'até o dia 22/09 ', description: 'descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande descrição grande ', image: '../../assets/no_image.jpg' },
    { id: 2, title: 'Entregar o trabalho 2', subtitle: 'até o dia 22/09', description: '', image: '../../assets/no_image.jpg' },
    { id: 3, title: 'Entregar o trabalho 3', subtitle: 'até o dia 22/09', description: '', image: '../../assets/no_image.jpg' },
  ]

  constructor(
    private modalController: ModalController,
    private nav: NavController,
    private router : Router
  ) {
    
   }

  delete(id: number) {
    let index = this.tasks.findIndex(d => d.id === id); //find index in your array
    this.tasks.splice(index, 1);//remove element from array
    console.log(this.tasks);
  }

  //add AddNewTaskComponent em home.module.ts
  async addNew() {
    const modal = await this.modalController.create({
      component: AddNewTaskComponent
    });
    await modal.present();
    const newTask = await modal.onDidDismiss();
    console.log(newTask.data);
    //retorno
    if (newTask.data.description != '') {
      this.tasks.push(newTask.data);
    }
    console.log(this.tasks);

  }

  //passar o objeto por parametro
  showDetail(task: any) {
    this.router.navigate(['/detail'], { state: task });
  }
}