import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import commonCz from './locales/cz/common.json';
import commonEn from './locales/en/common.json';
import backOfficeCz from './locales/cz/backOffice.json';
import backOfficeEn from './locales/en/backOffice.json';

// the translations
const resources = {
	cz: {
		backOffice: backOfficeCz,
		common: commonCz,
	},
	en: {
		backOffice: backOfficeEn,
		common: commonEn,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en', // use en if detected lng is not available
	keySeparator: '.',
	interpolation: {
		escapeValue: false,
	},
	defaultNS: 'common',
	fallbackNS: 'common',
});

export default i18n;
