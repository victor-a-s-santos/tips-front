import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";

const surveyJson = {
  pages: [ {
    elements: [{
      name: "nps-score",
      title: "Avalie o nosso atendimento, em uma escala de 0 à 5:",
      type: "rating",
      rateMin: 0,
      rateMax: 5
    }, {
      name: "what-would-make-you-more-satisfied",
      title: "O que podemos fazer para tornar sua experiência mais satisfatória?",
      type: "comment",
    }, {
      name: "nps-score-recomendation",
      title: "Em uma escala de zero à dez, qual a probabilidade de você nos recomendar a um amigo?",
      type: "rating",
      rateMin: 0,
      rateMax: 10
    }],
  }, {
    elements: [{
      name: "how-can-we-improve",
      title: "In your opinion, how could we improve our product?",
      type: "comment"
    }],
  }, {
    elements: [{
      name: "disappointing-experience",
      title: "Please let us know why you had such a disappointing experience with our product",
      type: "comment"
    }],
  }]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Survey';
  surveyModel!: Model;
  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
  }
}
