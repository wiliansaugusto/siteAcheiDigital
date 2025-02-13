import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-willians',
  templateUrl: './willians.component.html',
  styleUrls: ['./willians.component.css']
})
export class WilliansComponent implements OnInit {
  idadePedro: any = this.calcularIdade();
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Willians Augusto - Achei Digital');
    meta.updateTag({ property: 'author', content: 'Willians Augusto' });
    meta.updateTag({ name: 'keywords', content: 'Desenvolvedor de Software, pós graduado em Java, Desenvolvedor Angular, Desenvolvedor, ' });
    meta.updateTag({ name: 'description', content: 'Conheça nosso colaborador Willians Augusto, Analista de Sistema pós graduado em Java' });
    meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
  ngOnInit(): void {
    window.scrollTo({
      top: 140, behavior: 'smooth'
    });
  }
  calcularIdade() {
    const data = new Date("2007-07-18 ");
    const dataAtual = new Date();
    const diferenca = Math.abs(dataAtual.getTime() - data.getTime());
    const idade = Math.floor(diferenca / (1000 * 3600 * 24) / 365.25);
    return idade;
  }

}
