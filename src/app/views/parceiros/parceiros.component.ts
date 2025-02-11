import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})

export class ParceirosComponent {
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Achei Digital - Parceiros');
    meta.addTags([
      { name: 'author', content: 'Achei Digital' },
      { name: 'keywords', content: 'parceiros, achei digital, empresas parceiras' },
      { name: 'description', content: 'Conheça nossos parceiros e faça parte desse time de sucesso!' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:title', content: 'Achei Digital - Parceiros' },
      { name: 'og:description', content: 'Conheça nossos parceiros e faça parte desse time de sucesso!' },
      { name: 'og:image', content: 'https://sites.achei.digital/assets/img/logo.png' },
      { name: 'og:url', content: 'https://www.sites.acheidigital.com.br/parceiros' }
    ]);

  }

}
