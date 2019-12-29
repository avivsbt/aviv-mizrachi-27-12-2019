import { environment } from '../../environments/environment';

function getBaseUrl(): string {
    return 'http://dataservice.accuweather.com';
}

export const CONFIG = {
    version: 0,
    appid: 'Weather',
    siteid: 0,
    baseUrl: getBaseUrl(),
    getUrl: function(url: string) {
        return this.baseUrl + url;
    },
    endpoints: {
        geoposition: '/locations/v1/cities/geoposition/search',     
        autocomplete: '/locations/v1/cities/autocomplete',     
        currentConditions: `/currentconditions/v1/`,     
        forecasts: '/forecasts/v1/daily/5day',     
    },
    APIKey:{
        Weather: 'IEGKSVoXjPHVGB2dOOZIzghiHGGmKNzT'
    }
};

