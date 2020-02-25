import {forIn} from 'lodash';
import i18n from './i18n';

export default {
    addI18nResources(namespace, resources){
        forIn(resources, (resource, language) => {
            i18n.addResourceBundle(language, namespace, resource, true, true);
        });
    }
}