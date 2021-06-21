import localesUtils from './utils';
import i18n from './i18n';
import {withTranslation, initReactI18next} from 'react-i18next';

export {
	i18n,
	localesUtils,
	withTranslation as withNamespaces,
	initReactI18next,
};

export default {
	i18n,
	localesUtils,
	withNamespaces: withTranslation,
	initReactI18next,
};
