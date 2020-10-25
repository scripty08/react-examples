import { Server, IndexController } from '@scripty/server';

const init = async () => {
    let app = new Server();
    await app.addController(new IndexController({ title: '@scripty/react-examples' }));
    app.start(3000);
};

init().catch((err) => {
    console.error(err.message);
});
