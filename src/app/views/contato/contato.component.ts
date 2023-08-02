import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  contato;
  textWhats: Array<any> = [];
  public constructor(private formBuilder: FormBuilder) {
    this.contato = this.formBuilder.group({
      name:[''],
      mensagem:[''],
      email:['']
    })

}
}
