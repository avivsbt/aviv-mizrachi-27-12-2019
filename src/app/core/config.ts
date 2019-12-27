import { environment } from '../../environments/environment';

function getBaseUrl(): string {
    return environment.production ? 'http://dataservice.accuweather.com' : `${window.location.origin}` + '/assets/data/'; 
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
        search: '/locations/v1/cities/geoposition/search',     
        autocomplete: '/locations/v1/cities/autocomplete',     
        currentConditions: `/currentconditions/v1/`,     
        forecasts: '/forecasts/v1/daily/5day',     
    },
    external: { 

    },
};

