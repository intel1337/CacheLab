import mapControllers from './server.mjs'
import { CachelabConfig } from './config.mjs'
import { HashMap } from './model/model.mjs'




console.clear()


export const hashmap = new HashMap()


if(!CachelabConfig.bearer){
    console.log('Erreur, mettez votre bearer dans le fichier config')
}


async function bootstrapcApplication(){
    try {
        
        console.log(`Serveur démarré sur ${CachelabConfig.port}`)
        mapControllers(true, 6379)


        
    } catch (error) {
        console.error("Erreur lors du démarrage de l'application :", error);
    }

}


const start = performance.now();

await bootstrapcApplication(true, CachelabConfig.port);

const end = performance.now();
console.log(`Temps de boot: ${(end - start).toFixed(4)} ms`);