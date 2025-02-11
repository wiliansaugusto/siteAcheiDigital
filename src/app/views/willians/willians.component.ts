import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-willians',
  templateUrl: './willians.component.html',
  styleUrls: ['./willians.component.css']
})
export class WilliansComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) { }
  ngOnInit() {
    this.title.setTitle('Achei Digital - Willians Augusto');
    this.meta.updateTag({ property: 'author', content: 'Willians Augusto ' });
    this.meta.updateTag({ property: 'keywords', content: 'Desenvolvedor de Software, pós graduado em Java, Desenvolvedor Angular, Desenvolvedor, ' });
    this.meta.updateTag({ property: 'description', content: 'Conheça nosso colaborador Willians Augusto, Analista de Sistema pós graduado em Java' });
    this.meta.updateTag({ property: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:title', content: 'Willians Augusto' });
    this.meta.updateTag({ property: 'og:description', content: 'Conheça nossos time de sucesso!' });
    this.meta.updateTag({ property: 'og:image', content: 'https://sites.achei.digital/assets/img/foto3X4Willians.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.sites.acheidigital.com.br/williansaugusto' });
    this.meta.updateTag({ property: "og:site_name", content: "Willians Augusto - Achei Digital" });
  }
}