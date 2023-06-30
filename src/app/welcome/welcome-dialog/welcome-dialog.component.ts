import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "app-welcome-dialog",
    templateUrl: "./welcome-dialog.component.html",
    styleUrls: [ "./welcome-dialog.css", "./welcome-dialog.responsivity.css" ]
})

export class WelcomeDialogComponent {

    constructor() {}
    getData() {
        return [
          {
            language: 'pt',
            phrases: ["Meu nome é Areen.", "Seja bem-vindo(a) ao meu resumo online.", "Abaixo, você me conhecerá melhor..."]
          },
          {
            language: 'en',
            phrases: ["My name is Areen.", "Welcome to my Live Resume.", "Down below, you will know me better..."]
          }
        ];
      }
}
