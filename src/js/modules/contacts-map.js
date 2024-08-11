
import 'yandex-map-widget/dist/yandex-map-widget.css';
import mapWidjet from 'yandex-map-widget';

function getContactsMap() {

    mapWidjet.loadApi()
        .then(() => {
            mapWidjet.createMap('contacts__map',
                [
                    {
                        name: 'Lazarchuk&Partners',
                        desc: 'Открытие компаний в Турции и ОАЭ',
                        lat: 55.776537,
                        lon: 37.676053,
                        address: 'Бауманская улица, 7с1',
                        tel: '+7 (499) 681-92-84',
                        site: ''
                    },
                ]);
        })
        .catch(error => console.error(error));

}

export default getContactsMap;