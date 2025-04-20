export interface IPanelConfig {
  type: 'core' | 'b2b' | 'corporate';
  origin: string;
  apiUrl: string;
  apiBaseUrl: string;
  userApiUrl: string;
}

export interface IEnvironmentConfig {
  organization: string;
  apiUrl: string;
  apiBaseUrl: string;
  userApiUrl: string;
  b2bApiUrl: string;
  b2bApiBaseUrl: string;
  b2bUserApiUrl: string;
  corporateApiUrl: string;
  corporateApiBaseUrl: string;
  corporateUserApiUrl: string;
  panels: IPanelConfig[];
}

export interface IDeployConfigs {
  development: IEnvironmentConfig[];
  staging: IEnvironmentConfig[];
  production: IEnvironmentConfig[];
}

export const deployConfigs: IDeployConfigs = {
  development: [
    {
      organization: 'bangladesh',

      apiUrl: 'https://vt-bangladesh.uniclienttechnologies.com/api/v1/internal',
      apiBaseUrl: 'https://vt-bangladesh.uniclienttechnologies.com',
      userApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      b2bApiUrl: 'https://vt-bangladesh.uniclienttechnologies.com/api/v1/b2b',
      b2bApiBaseUrl: 'https://vt-bangladesh.uniclienttechnologies.com',
      b2bUserApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      corporateApiUrl: 'https://vt-bangladesh.uniclienttechnologies.com/api/v1/corporate',
      corporateApiBaseUrl: 'https://vt-bangladesh.uniclienttechnologies.com',
      corporateUserApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      panels: [
        {
          type: 'core',
          origin: '4080',

          apiUrl: process.env.NEXT_PUBLIC_API_URL,
          apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
          userApiUrl: process.env.NEXT_PUBLIC_USER_API_URL,
        },
        {
          type: 'b2b',
          origin: '4081',

          apiUrl: process.env.NEXT_PUBLIC_API_URL,
          apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
          userApiUrl: process.env.NEXT_PUBLIC_USER_API_URL,
        },

        {
          type: 'corporate',
          origin: '4082',

          apiUrl: process.env.NEXT_PUBLIC_API_URL,
          apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
          userApiUrl: process.env.NEXT_PUBLIC_USER_API_URL,
        },
      ],
    },
  ],

  staging: [
    {
      organization: 'bangladesh',

      apiUrl: 'https://vt-bangladesh.uniclienttechnologies.com/api/v1/internal',
      apiBaseUrl: 'https://vt-bangladesh.uniclienttechnologies.com',
      userApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      b2bApiUrl: 'https://vt-bangladesh.uniclienttechnologies.com/api/v1/b2b',
      b2bApiBaseUrl: 'https://vt-bangladesh.uniclienttechnologies.com',
      b2bUserApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      corporateApiUrl: 'https://vt-bangladesh.uniclienttechnologies.com/api/v1/corporate',
      corporateApiBaseUrl: 'https://vt-bangladesh.uniclienttechnologies.com',
      corporateUserApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      panels: [
        {
          type: 'core',
          origin: 'https://stg-bd-vt-core.uniclienttechnologies.com',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
        {
          type: 'b2b',
          origin: 'https://stg-bd-vt-b2b.vercel.app',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
        {
          type: 'corporate',
          origin: 'https://stg-bd-vt-corporate.vercel.app',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
      ],
    },
    {
      organization: 'india',

      apiUrl: 'https://vt-india.uniclienttechnologies.com/api/v1/internal',
      apiBaseUrl: 'https://vt-india.uniclienttechnologies.com',
      userApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      b2bApiUrl: 'https://vt-india.uniclienttechnologies.com/api/v1/b2b',
      b2bApiBaseUrl: 'https://vt-india.uniclienttechnologies.com',
      b2bUserApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      corporateApiUrl: 'https://vt-india.uniclienttechnologies.com/api/v1/corporate',
      corporateApiBaseUrl: 'https://vt-india.uniclienttechnologies.com',
      corporateUserApiUrl: 'https://vt-accounts-prod.uniclienttechnologies.com/api/v1/internal',

      panels: [
        {
          type: 'core',
          origin: 'https://stg-in-vt-core.uniclienttechnologies.com',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
      ],
    },
  ],

  production: [
    {
      organization: 'bangladesh',

      apiUrl: 'https://vt-bangladesh.starter.com/api/v1/internal',
      apiBaseUrl: 'https://vt-bangladesh.starter.com',
      userApiUrl: 'https://vt-accounts-prod.starter.com/api/v1/internal',

      b2bApiUrl: 'https://vt-bangladesh.starter.com/api/v1/b2b',
      b2bApiBaseUrl: 'https://vt-bangladesh.starter.com',
      b2bUserApiUrl: 'https://vt-accounts-prod.starter.com/api/v1/internal',

      corporateApiUrl: 'https://vt-bangladesh.starter.com/api/v1/corporate',
      corporateApiBaseUrl: 'https://vt-bangladesh.starter.com',
      corporateUserApiUrl: 'https://vt-accounts-prod.starter.com/api/v1/internal',

      panels: [
        {
          type: 'core',
          origin: 'https://bd-core.starter.com',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
        {
          type: 'b2b',
          origin: 'https://business.starter.com',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
        {
          type: 'corporate',
          origin: 'https://corporate.starter.com',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
      ],
    },
    {
      organization: 'india',

      apiUrl: 'https://vt-india.starter.com/api/v1/internal',
      apiBaseUrl: 'https://vt-india.starter.com',
      userApiUrl: 'https://vt-accounts-prod.starter.com/api/v1/internal',

      b2bApiUrl: 'https://vt-india.starter.com/api/v1/b2b',
      b2bApiBaseUrl: 'https://vt-india.starter.com',
      b2bUserApiUrl: 'https://vt-accounts-prod.starter.com/api/v1/internal',

      corporateApiUrl: 'https://vt-india.starter.com/api/v1/corporate',
      corporateApiBaseUrl: 'https://vt-india.starter.com',
      corporateUserApiUrl: 'https://vt-accounts-prod.starter.com/api/v1/internal',

      panels: [
        {
          type: 'core',
          origin: 'https://in-core.starter.com',

          apiUrl: null,
          apiBaseUrl: null,
          userApiUrl: null,
        },
      ],
    },
  ],
};
