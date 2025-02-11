import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-willians',
  templateUrl: './willians.component.html',
  styleUrls: ['./willians.component.css']
})
export class WilliansComponent {
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Willians Augusto - Achei Digital');
    meta.updateTag({ property: 'author', content: 'Willians Augusto' });
    meta.updateTag({ name: 'keywords', content: 'Desenvolvedor de Software, pós graduado em Java, Desenvolvedor Angular, Desenvolvedor, ' });
    meta.updateTag({ name: 'description', content: 'Conheça nosso colaborador Willians Augusto, Analista de Sistema pós graduado em Java' });
    meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

}
