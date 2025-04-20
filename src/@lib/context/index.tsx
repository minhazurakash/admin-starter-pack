import { queryClient } from '@lib/config/react-query/react-query';
import { ENUM_THEME_TYPES } from '@lib/enum/theme.enum';
import useTheme from '@lib/hooks/useTheme';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, ThemeConfig, theme as themeConfig } from 'antd';

const THEME_COLORS = {
  LIGHT: {
    colorPrimary: '#2f3268',
    colorPrimaryActive: '#21244a',
    colorPrimaryBorder: '#2f3268',
    colorPrimaryHover: '#21244a',
    colorLinkActive: '#21244a',
    colorLinkHover: '#21244a',
  },
  DARK: {
    colorPrimary: '#facc15',
    colorPrimaryActive: '#eab308',
    colorPrimaryBorder: '#fbbf24',
    colorPrimaryHover: '#fde047',
    colorLinkActive: '#facc15',
    colorLinkHover: '#fde047',
  },
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const { isLight, theme: themeMode } = useTheme();

  const theme: ThemeConfig = {
    algorithm: isLight ? themeConfig.defaultAlgorithm : themeConfig.darkAlgorithm,
    token: {
      fontSize: 16,
      ...THEME_COLORS[themeMode === 'SYSTEM' ? (isLight ? ENUM_THEME_TYPES.LIGHT : ENUM_THEME_TYPES.DARK) : themeMode],
      screenXSMax: 639,
      screenSMMin: 640,
      screenSM: 640,
      screenMDMax: 1023,
      screenLGMin: 1024,
      screenLG: 1024,
      screenLGMax: 1279,
      screenXLMin: 1280,
      screenXL: 1280,
      screenXLMax: 1535,
      screenXXLMin: 1536,
      screenXXL: 1536,
    },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </QueryClientProvider>
  );
};
