export type LogoPresetStyle =
  | 'official-shield'
  | 'green-dome'
  | 'golden-star'
  | 'kemenag-classic'
  | 'quran-pen';

export type LogoShape = 'shield' | 'circle' | 'octagram';

export type LogoColorTheme =
  | 'emerald-gold'
  | 'sapphire-gold'
  | 'ruby-gold'
  | 'onyx-gold';

export interface LogoConfig {
  mode: 'preset' | 'custom-image';
  presetStyle: LogoPresetStyle;
  shape: LogoShape;
  colorTheme: LogoColorTheme;
  customImageUrl?: string | null;
  customTextLatin: string;
  customTextArabic: string;
  customTextRibbon: string;
  institutionNameShort: string;
  tagline: string;
}

export const DEFAULT_LOGO_CONFIG: LogoConfig = {
  mode: 'preset',
  presetStyle: 'official-shield',
  shape: 'shield',
  colorTheme: 'emerald-gold',
  customImageUrl: null,
  customTextLatin: 'MADRASAH DINIYAH TAKMILIYAH ULA NURUL HUDA',
  customTextArabic: 'نُوْرُ الْهُدَى',
  customTextRibbon: 'CIKOPO PANAWA',
  institutionNameShort: 'MDTU NURUL HUDA',
  tagline: 'Diniyah Takmiliyah',
};
