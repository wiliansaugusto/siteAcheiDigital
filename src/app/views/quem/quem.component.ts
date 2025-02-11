import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-quem',
  templateUrl: './quem.component.html',
  styleUrls: ['./quem.component.css']
})
export class QuemComponent {
  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Quem Somos  - Achei Digital');
    /**
     * Precismos atualizar as meta tags do site para que o google possa indexar corretamente
     */
    meta.updateTag({ property: 'author', content: 'Willians Augusto' });
    meta.updateTag({ name: 'keywords', content: 'Desenvolvedor de Software, pós graduado em Java, Desenvolvedor Angular, Desenvolvedor, ' });
    meta.updateTag({ name: 'description', content: 'Conheça nosso colaborador Willians Augusto, Analista de Sistema pós graduado em Java' });
    meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
