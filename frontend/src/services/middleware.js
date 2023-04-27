import Cookie from 'js-cookie';

export default{
    auth(to, from, next){
        const token = Cookie.get('_myapp_token');
        console.log(token);

        if(!token){
            next('/login')
        }

        next()
    }
}