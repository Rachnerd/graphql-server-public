import {RESTDataSource} from 'apollo-datasource-rest';

export class CategoriesApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'Nope';
    }

    async getChildCategory(locale, rootCategoryId) {
        return Promise.resolve([
            {
                "title": "Mulchgeräte",
                "id": "web3-4055497"
            },
            {
                "title": "Bodenbearbeitung",
                "id": "web3-4055496"
            },
            {
                "title": "Suche nach Hersteller / Typ",
                "id": "web3-4055494"
            },
            {
                "title": "Handwerkzeug",
                "id": "web3-4055495"
            },
            {
                "title": "Spritzentechnik",
                "id": "web3-4055499"
            },
            {
                "title": "Beregnungs- / Bewässerungstechnik",
                "id": "web3-4055498"
            }
        ])
    }

    async getBreadcrumbs(locale, categoryId) {
        return Promise.resolve([
            {
                "id": "web1-4045064",
                "title": "Landwirtschaft",
                "image": {
                    "src": "//testmedia.kramp.com/kws/krampd_rd/_IrX5fOH5KxLbIvCny_um2o2",
                    "alt": "Landwirtschaft"
                }
            },
            {
                "id": "web2-4045761",
                "title": "Obst- & Weinbautechnik",
                "image": {
                    "src": "//testmedia.kramp.com/kws/krampd_rd/_8B3bIB3_IzLWnZxf85HJFDpJSlQJfC3bhvD_frH_FRDb2zum2o2",
                    "alt": "Obst- & Weinbautechnik"
                }
            }
        ])
    }

    async getAssets(locale, categoryId) {
        return Promise.resolve([
            {
                "usage": "assProductImage",
                "mimetype": "image/jpeg",
                "resourceLocation": "//testmedia.kramp.com/kws/krampd_rd/_8B3bIB3_IzLWnZxf85HJFDpJSlQJfC3bhvD_frH_FRDb2zum2o2",
                "description": null
            }
        ])
    }
};
