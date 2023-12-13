import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { provideHttpClient } from '@angular/common/http';
import { addTokenInterceptor } from './app/add-token.interceptor';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
