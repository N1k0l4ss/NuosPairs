import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

environment.production = true;
if (environment.production) {
  enableProdMode();
  kickBackend();
}

async function kickBackend() {
  let url = 'https://spring-pairs.herokuapp.com/pairs/info';
  while (true){
    fetch(`${url}`).then();
    await delay(300000);
  }
}
function delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
