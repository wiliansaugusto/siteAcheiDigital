import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pedro',
  templateUrl: './pedro.component.html',
  styleUrls: ['./pedro.component.css']
})
export class PedroComponent  {
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle("Pedro Henrique - Sites Achei Digital");
    this.meta.updateTag(
      { name: 'description', content: 'Pedro Henrique nosso mais novo desenvolvedor da Sites Achei Digital' });
    this.meta.updateTag(
      { property: 'og:site_name', content: 'Pedro Henrique Site' });
    this.meta.updateTag(
      { property:"og:url",content: 'https://novosite.achei.digital/pedrohenrique'});
    this.meta.updateTag(
      { property:"og:image" , content: 'https://instagram.fssz2-1.fna.fbcdn.net/v/t51.2885-15/50620943_288247631866767_8058065070487669146_n.jpg?stp=dst-jpg_e15&_nc_ht=instagram.fssz2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Pa7vu8TZUBAAX-RQ3F9&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MTk3MDQ1ODIwMzE2NjcyNzUzMQ%3D%3D.2-ccb7-5&oh=00_AfCTGBHSl1ifyLZJiTVoO2PAd6wm66NaDlMZajikWLTMUA&oe=64CC4384&_nc_sid=ee9879' });
      this.meta.updateTag(
        { property:"og:title" , content: 'Pedro Henrique - DEV' });
    
        console.warn(this.meta.getTag("name=description"));
        console.warn(this.meta.getTag("property=title"));
        console.warn(this.meta.getTag("site_name"));
    
    }

    

}
