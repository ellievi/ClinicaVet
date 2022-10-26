import { infos } from './fakerApi.js'

// Prevent Reload
submitInfo = (event) => event.preventDefault();

const insertInfos = () => {
    const submitInfos = infos.generateFaker(['name','email']);
    console.log(submitInfos);
}

console.log(insertInfos())