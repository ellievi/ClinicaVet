import { infos } from './fakerApi.js'

const preventReload = (event) => event.preventDefault();

const insertInfos = () => {
    const submitInfos = infos([]);
    console.log(submitInfos);
}