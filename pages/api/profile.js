import { Amplify, withSSRContext, Auth } from "aws-amplify";
import config from "../../src/aws-exports";
// import NextStorage from 'amplify-auth-next-storage';
// Amplify SSR configuration needs to be done within each API route
// Amplify.configure({ ...config, ssr: true });

// Amplify.configure({...config, ssr: true,
    // Auth: {
    //     cookieStorage: {
    //       // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    //           domain: 'localhost',  //include the parent domain to which you want the session information to be valid
    //       // OPTIONAL - Cookie path
    //           path: '/',
    //       // OPTIONAL - Cookie expiration in days
    //           expires: 365,
    //       // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    //           sameSite: "strict",
    //       // OPTIONAL - Cookie secure flag
    //       // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
    //           secure: true
    //       },
    //   }
    // Auth: {
    // storage: new NextStorage(null, {
    //         domain: '.yourdomain.com',
    //         expires: 365,
    //         path: '/',
    //         secure: true,
    //       })
    // }

  // });

//   Auth.configure({
//     region: 'us-east-1',
//     userPoolId: 'us-east-1_xxxxx',
//     userPoolWebClientId: 'xxxxxxxxxxxxxxx',
    
//   });

export default async (req, res) => {
  console.log(req.cookies);
  const { Auth } = withSSRContext({ req });

  // let data;
  let user;
  try {
    user = await Auth.currentAuthenticatedUser();
    console.log('user is authenticated');
    // fetch some data and assign it to the data variable
  } catch (err) {
    console.log('error: no authenticated user');
  }
  
  res.statusCode = 200;
  res.setHeader('Cache-Control', 'no-cache')
  res.json({
    // data: data ? data : null,
    username: user ? user.username : null
  })
}


// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
//   }