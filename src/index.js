import router from './routes';
const Url_Gallery= 'https://images-api.nasa.gov/search?page=2&q=apollo+11&media_type=image&description=landing'
import Writer from './utils/Writer'



window.addEventListener('load', router);
window.addEventListener('load', Writer);
window.addEventListener('hashchange', router);
window.addEventListener('hashchange', Writer);

