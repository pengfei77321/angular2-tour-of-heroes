import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

//��Щ�����ʼ����Ӧ�����ڵ�ƽ̨,Ȼ��ʹ�ô�ƽ̨�������AppModule