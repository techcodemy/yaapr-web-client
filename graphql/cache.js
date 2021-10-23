import { InMemoryCache} from '@apollo/client'

const cache = new InMemoryCache({
    typePolicies: {
      User:{
        keyFields:["username"]
      },
    },
});

export default cache;