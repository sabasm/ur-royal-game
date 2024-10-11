import { BehaviorSubject } from 'rxjs';
import { tryCatch } from '@/utils/tryCatch';

interface AppConfig {
  apiUrl: string;
  defaultTheme: 'light' | 'dark';
  siteTitle: string;
  siteDescription: string;
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  gtmId?: string;
  sendGridApiKey?: string;
  senderEmail?: string;
}

const defaultConfig: AppConfig = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '',
  defaultTheme: 'dark',
  siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || 'UR Royal Game',
  siteDescription: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'A modern implementation of the ancient Royal Game of Ur.',
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
  facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  sendGridApiKey: process.env.SENDGRID_API_KEY,
  senderEmail: process.env.SENDER_EMAIL,
};

export class ConfigService {
  private configSubject = new BehaviorSubject<AppConfig>(defaultConfig);
  config$ = this.configSubject.asObservable();

  loadConfig(): void {
    if (process.env.NODE_ENV === 'production') {
      return;
    }

    tryCatch(
      () => fetch('/config.json').then(res => res.json()),
      (error) => {
        console.warn('Failed to load config.json, using default configuration');
        console.error('Error loading config:', error);
      }
    ).subscribe(loadedConfig => {
      if (loadedConfig) {
        this.configSubject.next({ ...defaultConfig, ...loadedConfig });
      }
    });
  }

  getCurrentConfig(): AppConfig {
    return this.configSubject.value;
  }

  getDefaultTheme(): 'light' | 'dark' {
    return this.configSubject.value.defaultTheme;
  }

  getSiteTitle(): string {
    return this.configSubject.value.siteTitle;
  }

  getSiteDescription(): string {
    return this.configSubject.value.siteDescription;
  }

  getGoogleAnalyticsId(): string | undefined {
    return this.configSubject.value.googleAnalyticsId;
  }

  getFacebookPixelId(): string | undefined {
    return this.configSubject.value.facebookPixelId;
  }

  getGtmId(): string | undefined {
    return this.configSubject.value.gtmId;
  }

  getSendGridApiKey(): string | undefined {
    return this.configSubject.value.sendGridApiKey;
  }

  getSenderEmail(): string | undefined {
    return this.configSubject.value.senderEmail;
  }
}


