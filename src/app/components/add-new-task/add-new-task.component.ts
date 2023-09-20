import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss'],
})
export class AddNewTaskComponent implements OnInit {

  //adicionar o componente no appModule do HOME
  //declarations: [HomePage, AddNewTaskComponent]
  //console.log(Math.floor(Math.random() * 100));

  task = {
    id: Math.floor(Math.random() * 100),
    title: '',
    subtitle: '',
    description: '',
    image: ''
  }
  constructor(private modalController: ModalController) { }

  ngOnInit(

  ) { }

  close() {
    this.modalController.dismiss(this.task);
  }

}
