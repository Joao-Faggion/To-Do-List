/* import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

public listComidas: Array<{comidas: string, preco: string}> = [
  { comidas: "X Salada", preco: "R$23,00" },
  { comidas: "X Bacon", preco: "R$25,00" },
  { comidas: "Coxinha", preco: "R$8,00" }
];

constructor(){

}

ngOnInit(): void {
    
}

public submitForm(form: NgForm){
   if(form.valid){
    console.log(form.value)
  }
}

}
*/