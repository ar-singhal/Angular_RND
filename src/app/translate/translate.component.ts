import { Component, OnInit } from '@angular/core';
import { GoogleObj, Solution } from '../models/solution';
import { GoogletranslateService } from '../services/googletranslate.service';
import { FormControl } from '@angular/forms';
import { SolutionService } from '../services/solution.service';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  lang = new FormControl('en');

  data: Solution = {
    title: '',
    description: '',
    detail: ''
  };

  private translateBtn: any;

  constructor(private solution: SolutionService, private google: GoogletranslateService) {
  }

  ngOnInit() {
    this.solution.getSolution().subscribe(res => this.data = res);
    this.translateBtn = document.getElementById('translatebtn');
  }

  send() {
    const googleObj: GoogleObj = {
      q: [this.data.title, this.data.description, this.data.detail],
      target: this.lang.value
    };

    this.translateBtn.disabled = true;

    this.google.translate(googleObj).subscribe(
      (res: any) => {
        this.translateBtn.disabled = false;
        this.data = {
          title: res.data.translations[0].translatedText,
          description: res.data.translations[1].translatedText,
          detail: res.data.translations[2].translatedText
        };
        console.log(this.data);
      },
      err => {
        console.log(err);
      }
    );
  }


}
