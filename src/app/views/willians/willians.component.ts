import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-willians',
  templateUrl: './willians.component.html',
  styleUrls: ['./willians.component.css']
})
export class WilliansComponent {
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Achei Digital - Willians Augusto');
    meta.addTags([
      { name: 'author', content: 'Willians Augusto' },
      { name: 'keywords', content: 'Desenvolvedor de Software, pós graduado em Java, Desenvolvedor Angular, Desenvolvedor, ' },
      { name: 'description', content: 'Conheça nosso colaborador Willians Augusto, Analista de Sistema pós graduado em Java' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:title', content: 'Achei Digital - Willians Augusto' },
      { name: 'og:description', content: 'Conheça nossos time de sucesso!' },
      { name: 'og:image', content: 'https://sites.achei.digital/assets/img/foto3X4Willians.jpg' },
      { name: 'og:url', content: 'https://www.sites.acheidigital.com.br/williansaugusto' }
    ]);

  }

}
