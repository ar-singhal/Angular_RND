import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private translate: TranslateService) {

  }

  init() {
    this.translate.addLangs(['en', 'hi']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  translateText(key: string): string {
    return this.translate.instant(key);
  }
}
