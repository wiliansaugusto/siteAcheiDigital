import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SafeUrl } from '@angular/platform-browser';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {

  formWhats;
  formQrcode;
  formURL;

  textWhats: Array<any> = [];
  textUrls: Array<any> = [];

  public myAngularxQrCode: any;
  public qrCodeDownloadLink: SafeUrl = "";


  public constructor(private formBuilder: FormBuilder, private servico: ServicosService) {

    this.formWhats = this.formBuilder.group({
      telNumber: ['', Validators.required],
      mensagem: ['']
    })
    this.formQrcode = this.formBuilder.group({
      conteudoQrcode: ['',Validators.required]
    })
    this.formURL = this.formBuilder.group({
      nomeDoSite: [''],
      url: ['',Validators.required]
    })

  }
  ngOnInit() {

  }
  respostaWhats() {
    // create some strings in TypeScript
    if (this.formWhats.valid) {
      const resposta = "https://api.whatsapp.com/send/?phone=55" + this.formWhats.get('telNumber')?.value;
      if (this.formWhats.get("mensagem")?.value) {
        const mensagem = this.formWhats.get("mensagem")?.value;
        let nova: any = mensagem?.trimStart()
        nova = mensagem?.replaceAll(' ', '%20')
        this.textWhats.push(resposta + "&text=" + nova)
      } else {
        this.textWhats.push(resposta)
      }


    }

  }

  gerarQrcode() {
    if(this.formQrcode.valid)
    this.myAngularxQrCode = this.formQrcode.get("conteudoQrcode")?.value

  }

  encurtarUrl() {

    let objeto = { url: this.formURL.get("url")?.value };

    if (this.formURL.valid) {
      this.servico.encurtarLink(objeto).subscribe((resp: any) => {

        var salvar = {
          nomesite: this.formURL.get("nomeDoSite")?.value,
          url: resp.urlEncurtada
        }
        this.textUrls.push(salvar)

      }, (erro: any) => {
        var salvar = {
          nomesite: this.formURL.get("nomeDoSite")?.value,
          url: "Houve um problema para encurtar o seu link, verifique o mesmo e tente novamente"
        }
        this.textUrls.push(salvar)

      });
    }



  }
}
